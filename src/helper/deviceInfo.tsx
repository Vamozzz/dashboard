import { osName, mobileModel, deviceType } from "react-device-detect";
import { getIpAddress } from "../services/getIpAddress.ts";
import { askForLocationAccess } from "./getLocation.tsx";

export const getDeviceInfo = async () => {
  const device_ip = (await getIpAddress()) || "unknown";
  const { latitude, longitude } = askForLocationAccess();
  return {
    device_ip: device_ip,
    device_os: osName || "unknown",
    registration_by: "web",
    device_type: deviceType || " unknown",
    device_model: mobileModel || "unknown",
    device_id: "ertyuiojbhg1234567",
    latitude: latitude,
    longitude: longitude,
  };
};
