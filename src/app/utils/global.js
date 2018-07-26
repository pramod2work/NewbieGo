// set window.location.search string to a var on page load as it will be replaced by browser route
let locationSearch = window.location.search
export const getQeryStringByName = (name) => {
  if (!locationSearch) {
    locationSearch = window.location.search
  }
  const match = RegExp(`[?&]${name}=([^&]*)`).exec(locationSearch)
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
}
