"""Refresh names and source links from JNTO's English destination directory.
Names only: no article copy, images, prices, or operating information.
Run from the repository root with Python 3 (no third-party dependencies).
"""
import concurrent.futures, datetime, hashlib, json, re, time, urllib.request
from html.parser import HTMLParser
from pathlib import Path

BASE = 'https://www.japan.travel/en/'
CACHE = Path('/tmp/japan-destination-cache')
CACHE.mkdir(exist_ok=True)
class Links(HTMLParser):
    def __init__(self, text):
        super().__init__(); self.links=[]; self.current=None; self.feed(text)
    def handle_starttag(self, tag, attrs):
        attrs=dict(attrs)
        if tag=='a': self.current=[attrs.get('href',''), [], attrs.get('class','')]
        if tag=='img' and self.current and attrs.get('alt'): self.current[1].append(attrs['alt'])
    def handle_data(self, data):
        if self.current: self.current[1].append(data)
    def handle_endtag(self, tag):
        if tag=='a' and self.current:
            h,t,c=self.current; self.links.append((h,' '.join(' '.join(t).split()),c)); self.current=None

def fetch(url):
    p=CACHE/(hashlib.sha256(url.encode()).hexdigest()+'.html')
    if p.exists(): return p.read_text()
    for attempt in range(3):
        try:
            req=urllib.request.Request(url,headers={'User-Agent':'JapanDestinationDirectory/1.0'})
            text=urllib.request.urlopen(req,timeout=35).read().decode(); p.write_text(text); return text
        except Exception:
            if attempt==2: raise
            time.sleep(1)

def normalize(h):
    if h.startswith(BASE): return h
    if h.startswith(('http:','https:','#','mailto:')): return ''
    h=h.lstrip('/')
    if h.startswith('en/'): h=h[3:]
    return BASE+h

def spots(text, prefecture):
    from html import unescape
    result={}
    # JNTO's nearby-place cards include prefecture labels. Ignore prose links
    # (which can mention Tokyo as a comparison) and cross-prefecture suggestions.
    cards=re.split(r'data-link="',text)[1:]
    for card in cards:
        h=card.split('"',1)[0]; u=normalize(h)
        category=re.search(r'class="mod-map-slider__category"[^>]*>(.*?)</span>',card,re.S)
        name=re.search(r'class="mod-map-slider__name"[^>]*>(.*?)</span>',card,re.S)
        if not category or not name or not re.search(r'/spot/\d+/?$',u): continue
        label=unescape(re.sub('<[^>]+>','',category[1])).strip()
        n=unescape(re.sub('<[^>]+>','',name[1])).strip()
        if label.casefold()==prefecture.casefold() and n:
            result[u]={'name':n,'source':u}
    return list(result.values())

index=Links(fetch(BASE+'destinations/')).links
pref={}
for h,n,c in index:
    u=normalize(h)
    m=re.fullmatch(BASE+r'destinations/([^/]+)/([^/]+)/?',u)
    if m and n and len(n)<30 and u not in pref:
        region,slug=m.groups(); pref[u]={'slug':slug,'name':n,'region':region,'source':u,'areas':[]}
assert len(pref)==47, len(pref)
def load_pref(item):
    u,p=item; text=fetch(u); areas={}
    for h,n,c in Links(text).links:
        link=normalize(h)
        if link.rstrip('/').startswith(u.rstrip('/')+'/') and 'mod-figure-column2__item-inner' in c and n:
            areas[link]={'name':n,'source':link,'spots':[],'prefecture':p['name']}
    if not areas: areas[u]={'name':p['name']+' & Around','source':u,'spots':spots(text,p['name']),'prefecture':p['name']}
    p['areas']=list(areas.values()); return p
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
    prefs=list(pool.map(load_pref,pref.items()))
print('Prefectures:',len(prefs),flush=True)
tasks=[a for p in prefs for a in p['areas'] if not a['spots']]
def load_area(a):
    try: a['spots']=spots(fetch(a['source']),a['prefecture'])
    except Exception as e: print('Area unavailable:',a['source'],type(e).__name__,flush=True)
    return a
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
    for i,a in enumerate(pool.map(load_area,tasks)):
        if i%25==0: print('Areas loaded:',i+1,'/',len(tasks),flush=True)
for p in prefs:
    for a in p['areas']:
        a.pop('prefecture',None)
        a['spots']=[s for s in a['spots'] if s['name'].casefold()!=a['name'].casefold()]
result={'updated':datetime.date.today().isoformat(),'sourceName':'Japan National Tourism Organization (JNTO)','prefectures':prefs}
Path('src/data/destinations.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
print('Saved:',len(prefs),'prefectures,',sum(len(p['areas']) for p in prefs),'areas,',sum(len(a['spots']) for p in prefs for a in p['areas']),'place entries',flush=True)
