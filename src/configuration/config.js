//const environment = "local"; //local,staging,production

//reCaptcha site key
export const site_key = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
var baseUrl = "https://joinapi-prod.scoutandcellar.com";
/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', or 'unknown'.
 */
export function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  //Android
  if (/android/i.test(userAgent)) {
    return "Android";
  }
  // iOS
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }
  return "unknown";
}

// algolia website to get "working with" drop down data for confirm details edit page
export const algoliaURL =
  "https://565g60m4tz-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(3.35.1)%3B%20Browser%20(lite)%3B%20react%20(16.9.0)%3B%20react-instantsearch%20(5.7.0)%3B%20JS%20Helper%20(2.28.1)&x-algolia-application-id=565G60M4TZ&x-algolia-api-key=90b94f7411220a5d6b88644b81a474c9";

//algoliya get user data
export const getWorkingWithURL = baseUrl + "/api/v1/users/consultantReferral";

const constant = {
  baseUrl: baseUrl,
  username: "appuser@injin.com",
  password: "Test@123",
};

export default constant;
