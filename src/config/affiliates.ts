export const AFFILIATE_IDS = {
  booking: import.meta.env.PUBLIC_BOOKING_AID || "TODO_BOOKING_AID",
  skyscanner: import.meta.env.PUBLIC_SKYSCANNER_AID || "TODO_SKYSCANNER_AID",
};

export function hotelSearchUrl(destination = "Japan") {
  const aid = AFFILIATE_IDS.booking;
  const params = new URLSearchParams({
    ss: destination,
    group_adults: "2",
    no_rooms: "1",
    lang: "en-us",
    aid,
  });
  return `https://www.booking.com/searchresults.html?${params.toString()}`;
}

export function flightSearchUrl(destination = "Tokyo") {
  // Skyscanner deprecated the old single-segment "/transport/flights/{destination}/"
  // deep-link format (it now 404s). Deep-linking to a prefilled search requires a
  // valid origin+destination place-code pair, which this site doesn't collect, so
  // we send users to Skyscanner's homepage instead of a broken link.
  return "https://www.skyscanner.com/";
}
