import { osName, mobileModel, deviceType } from "react-device-detect";
import { getIpAddress } from "../services/getIpAddress.ts";
import { askForLocationAccess } from "./getLocation.tsx";

interface LocationData {
  latitude: string;
  longitude: string;
}
export const getDeviceInfo = async () => {
  try {
    const device_ip = await getIpAddress();
    const { latitude, longitude } =
      (await askForLocationAccess()) as LocationData;
    return {
      device_ip: device_ip,
      device_os: osName,
      registration_by: "web",
      device_type: deviceType,
      device_model: mobileModel,
      device_id: "ertyuiojbhg1234567",
      latitude: latitude,
      longitudue: longitude,
    };
  } catch (error) {
    console.error("Error fetching device info:", error);
    throw error;
  }
};
