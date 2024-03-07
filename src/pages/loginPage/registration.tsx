function parseUserAgent(userAgent) {
    var mobileDevicePatterns = {
        "iPhone": /iPhone/i,
        "iPad": /iPad/i,
        "iPod": /iPod/i,
        "Android": /Android/i,
        "Windows Phone": /Windows Phone/i,
        "BlackBerry": /BlackBerry/i,
        "Mobile": /Mobile/i
    };

    var webDevicePatterns = {
        "Windows": /Windows/i,
        "Macintosh": /Macintosh/i,
        "Linux": /Linux/i,
        "Chrome OS": /CrOS/i,
        "PlayStation": /PlayStation/i
    };

    var osPatterns = {
        "iOS": /iPhone|iPad|iPod/i,
        "Android": /Android/i,
        "Windows": /Windows/i,
        "Macintosh": /Macintosh/i,
        "Linux": /Linux/i,
        "Chrome OS": /CrOS/i
    };

    var browserPatterns = {
        "Chrome": /Chrome/i,
        "Safari": /Safari/i,
        "Firefox": /Firefox/i,
        "Edge": /Edg/i,
        "MSIE": /MSIE/i,
        "Trident": /Trident\//i,
        "Opera": /Opera|OPR/i
    };

    function matchPattern(patterns, userAgent) {
        for (var key in patterns) {
            if (patterns[key].test(userAgent)) {
                return key;
            }
        }
        return "Unknown";
    }

    var deviceType = matchPattern(mobileDevicePatterns, userAgent) !== "Unknown" ? "Mobile" : "Web";
    var device = deviceType === "Mobile" ? matchPattern(mobileDevicePatterns, userAgent) : matchPattern(webDevicePatterns, userAgent);
    var os = matchPattern(osPatterns, userAgent);
    var browser = matchPattern(browserPatterns, userAgent);

    return {
        device_type: deviceType,
        device_model: device,
        device_id: "ertyuiojbhg1234567", // Example device ID
        device_os: os,
        browser: browser
    };
}

var userAgent = "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36";
var parsedInfo = parseUserAgent(userAgent);

console.log("Device Type:", parsedInfo.device_type);
console.log("Device Model:", parsedInfo.device_model);
console.log("Device ID:", parsedInfo.device_id);
console.log("Device OS:", parsedInfo.device_os);
console.log("Browser:", parsedInfo.browser);
