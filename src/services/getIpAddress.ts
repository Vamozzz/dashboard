export const getIpAddress = async () => {
  try {
    const data = await fetch("https://api.ipify.org?format=json");
    const address = await data.json();
    return address;
  } catch (error) {
    return "Error! Could not retrieve IP Address.";
  }
};
