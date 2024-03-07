function parseUserAgent(userAgent) {
  var osPattern = /\(([^;)]+);/;
  var devicePattern = /; ([^)]+)\)/;
  var browserPattern = /(?:Chrome|Safari|Firefox|Edge|Opera|IE)\/([\d.]+)/;

  var osMatch = userAgent.match(osPattern);
  var deviceMatch = userAgent.match(devicePattern);
  var browserMatch = userAgent.match(browserPattern);

  var os = osMatch ? osMatch[1] : "Unknown OS";
  var device = deviceMatch ? deviceMatch[1] : "Unknown Device";
  var browser = browserMatch
    ? userAgent.split(" ")[5].split("/")[0]
    : "Unknown Browser";

  return {
    os: os,
    device: device,
    browser: browser,
  };
}

const getDeviceInfo = () => {
  let registration_by = "web";
  let device_type = window.navigator?.platform;
  let device_model = window.navigator?.userAgent;
  let device_id = window.navigator?.userAgent;
  let device_os = window.navigator?.userAgent;
  let userdevice = parseUserAgent(device_model);
  console.log(userdevice, "userdeviceuserdeviceuserdevice");

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // If permission is granted, position contains the user's current location
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        return { latitude, longitude };
      },
      (error) => {
        // If permission is denied or any error occurs
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.error("Geolocation permission denied by user.");
            break;
          case error.POSITION_UNAVAILABLE:
            console.error("Geolocation information is unavailable.");
            break;
          case error.TIMEOUT:
            console.error("The request to get user location timed out.");
            break;
          default:
            console.error(
              "An unknown error occurred while getting user location."
            );
            break;
        }
        // Show a message or UI element prompting the user to enable location access
      }
    );
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};

export default getDeviceInfo;
