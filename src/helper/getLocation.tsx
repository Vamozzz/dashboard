export function askForLocationAccess() {
  let latitude = "00.000";
  let longitude = "00.000";
  let gotError: string | null = null;
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        latitude = position.coords.latitude?.toString();
        longitude = position.coords.longitude?.toString();
        console.log(
          "Latitude: " +
            position.coords.latitude +
            ", Longitude: " +
            position.coords.longitude
        );
        return {
          latitude: latitude,
          longitude: longitude,
          error: gotError,
        };
      },
      function (error) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            gotError = "User denied the request for Geolocation.";
            break;
          case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            gotError = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            gotError = "The request to get user location timed out.";
            break;
          default:
            console.log("An unknown error occurred while accessing location.");
            gotError = "An unknown error occurred  while accessing location.";
            break;
        }
        return {
          latitude: latitude,
          longitude: longitude,
          error: gotError,
        };
      }
    );
  } else {
    console.log("Geolocation is not supported by this browser.");
    return {
      latitude: latitude,
      longitude: longitude,
      error: "Geolocation is not supported by this browser.",
    };
  }
  return {
    latitude: latitude,
    longitude: longitude,
    error: null,
  };
}
