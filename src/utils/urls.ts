/** Directory routes on GitHub Pages use a trailing slash. Preserve files and fragments. */
export function pagePath(path: string): string {
  const match = path.match(/^([^?#]*)([?#].*)?$/)!;
  const [, pathname, suffix = ''] = match;
  if (!pathname || /\.[^/]+$/.test(pathname)) return path;
  return `${pathname.replace(/\/+$/, '')}/${suffix}`;
}
