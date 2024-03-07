import axios from "axios";

const baseURl = "https://staging.vaamoz.com/";
const token = "1234567890";

const axiosWithToken = axios.create({
  baseURL: baseURl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

const axiosWithOutToken = axios.create({
  baseURL: baseURl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});


export async function apiCall(
    method,
    url,
    data,
    header = {'Content-Type': 'application/json'},
  ) {
    try {
      console.log('header', header, method);
      const res = await axiosWithToken({
        method,
        url,
        data: data,
        headers: header,
        withCredentials: false,
      });
      //    console.log("res==", res.headers)
      return res;
    } catch (error) {
      // console.log("error", error);
      if (error.response) {
        // console.log(data,' error.response: ', error.response);
        return error.response;
      } else if (error.request) {
        console.log('Error request : ', error.request);
      } else {
        console.log('Error message : ', error.message);
      }
  
      return error;
    }
  }