import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { headerIcons, loginIcons } from "../../constants/imageConstans.tsx";
import ButtonComponent from "../../components/button/buttonComponent.tsx";
import CustomInput from "../../components/customInput/customInput.tsx";
import { getDeviceInfo } from "../../helper/deviceInfo.tsx";
import OtpPopup from "../../components/popup/otpPopup.tsx";

interface registrationState {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  password: string;
}
interface registrationError {
  first_name?: string;
  last_name?: string;
  email?: string;
  mobile?: string;
  password?: string;
  checked?: string;
}

interface loginState {
  userid: string;
  password: string;
}
interface loginError {
  userid?: string;
  password?: string;
}
interface deviceData {
  registration_by: string;
  device_type: string;
  device_model: string;
  device_id: string;
  device_os: string;
  device_ip: string;
  longitudue: string;
  latitude: string;
}
interface errorMessage {
  loginError: string;
  registrationError: string;
}

function LoginPage() {
  const [hasAccount, setHasAccount] = useState<boolean>(true);
  const [isAgree, setAgree] = useState<boolean>(false);
  const [credentialError, setCredentialError] = useState<errorMessage>({
    loginError: "",
    registrationError: "",
  });
  const [deviceData, setDeviceData] = useState<deviceData>({
    registration_by: "web",
    device_type: "",
    device_model: "",
    device_id: "",
    device_os: "",
    device_ip: "",
    longitudue: "",
    latitude: "",
  });
  const [loginData, setLoginData] = useState<loginState>({
    userid: "",
    password: "",
  });
  const [loginError, setLoginError] = useState<loginError>({
    userid: "",
    password: "",
  });
  const [registrationData, setRegistrationData] = useState<registrationState>({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [registrationError, setRegistrationError] = useState<registrationError>(
    {
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      password: "",
      checked: "",
    }
  );

  useEffect(() => {
    const fetchUserDevice = async () => {
      const deviceInfo = await getDeviceInfo();
      setDeviceData(deviceInfo);
    };
    fetchUserDevice();
  }, []);

  const handleRegistrationChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event?.target;
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
    setRegistrationError({
      ...registrationError,
      [name]: "",
    });
  };

  const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event?.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
    setLoginError({
      ...loginError,
      [name]: "",
    });
  };

  const validationRegistrationForm = (): boolean => {
    let isValid = true;
    const newErrors: registrationError = {};
    if (!isAgree) {
      newErrors.checked = "Kindly accept the terms and conditions";
      isValid = false;
    }

    if (!registrationData.first_name.trim()) {
      newErrors.first_name = "First Name is required";
      isValid = false;
    }

    if (!registrationData.last_name.trim()) {
      newErrors.last_name = "Last Name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !registrationData.email.trim() ||
      !emailRegex.test(registrationData.email)
    ) {
      newErrors.email = "Valid Email is Required ";
      isValid = false;
    }

    const contactRegex = /^\d{10}$/;
    if (
      !registrationData.mobile.trim() ||
      !contactRegex.test(registrationData.mobile)
    ) {
      newErrors.mobile = "Enter valid contact";
      isValid = false;
    }

    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (
      !registrationData?.password?.trim() ||
      !passwordRegex.test(registrationData.password)
    ) {
      console.log(passwordRegex.test(registrationData.password), "hjkl");
      newErrors.password =
        "Password must be at least 8 characters long and contain at least one capital alphabet, one small alphabet, one digit, and one special character from @$!%*?&.";
      isValid = false;
    }

    setRegistrationError(newErrors);
    return isValid;
  };

  const validationLoginForm = (): boolean => {
    let isValid = true;
    const newErrors: loginError = {};

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!loginData.email.trim() || !emailRegex.test(loginData.email)) {
    //   newErrors.email = "Valid Email is Required ";
    //   isValid = false;
    // }

    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (
      !loginData?.password?.trim() ||
      !passwordRegex.test(loginData.password)
    ) {
      newErrors.password = "Password is invalid";
      isValid = false;
    }

    setLoginError(newErrors);
    return isValid;
  };

  const handleSubmitRegistration = async (e: FormEvent) => {
    e.preventDefault();

    if (validationRegistrationForm()) {
      const body = { ...registrationData, ...deviceData };
      try {
        const response = await fetch(
          "https://vaamoz.com/vampayUserApp/App/Registration",
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
              Origin: "https://vaamoz.com",
            },
          }
        );
        const data = await response.json();
        console.log(data, "response data");
        if (data.status === true) {
          setCredentialError({
            ...credentialError,
            registrationError: data.message,
          });
          setRegistrationData({
            first_name: "",
            last_name: "",
            email: "",
            mobile: "",
            password: "",
          });
        }
        if (data.status === false) {
          setCredentialError({
            ...credentialError,
            registrationError: data.message,
          });
        }
      } catch (error) {
        setCredentialError({
          ...credentialError,
          registrationError: error,
        });
        console.log(error);
      }
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  const handleSubmitLogin = async (e: FormEvent) => {
    e.preventDefault();

    if (validationLoginForm()) {
      try {
        const response = await fetch(
          "https://vaamoz.com/vampayUserApp/App/Login",
          {
            method: "POST",
            body: JSON.stringify(loginData),
            headers: {
              "Content-Type": "application/json",
              Origin: "https://vaamoz.com",
            },
          }
        );
        const data = await response.json();
        // console.log(data, "response data");
        if (data.status === true) {
          setCredentialError(data.message);
          setLoginData({
            userid: "",
            password: "",
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row">
        <img
          src={loginIcons?.loginImage}
          alt={"loginBackground"}
          className="object-cover w-full lg:w-1/2"
        />
        <div className="flex  items-center justify-center w-full lg:w-1/2 py-10 lg:py-0 bg-[#F1F2F5]">
          <div className="w-2/3 p-6 m-auto bg-white rounded-lg">
            <div className="flex items-center justify-center p-4">
              {headerIcons?.WebLogoHeaderIcon && (
                <headerIcons.WebLogoHeaderIcon />
              )}
            </div>
            <form
              onSubmit={
                hasAccount ? handleSubmitLogin : handleSubmitRegistration
              }
            >
              {hasAccount ? (
                <div>
                  <p className="text-[#EE4B2B]">
                    {credentialError?.loginError}
                  </p>
                  <div className="flex flex-col gap-2">
                    <CustomInput
                      label={"User ID"}
                      htmlFor="userid"
                      placeholder="Enter Your user id"
                      value={loginData?.userid}
                      onChange={handleLoginChange}
                      error={loginError?.userid}
                    />

                    <CustomInput
                      label={"Password"}
                      htmlFor="password"
                      placeholder="Enter Your Password"
                      value={loginData?.password}
                      onChange={handleLoginChange}
                      error={loginError?.password}
                      inputType="password"
                    />
                    <button
                      type="button"
                      className="text-[#6C54FF] text-right text-[12px] font-normal  "
                    >
                      Forgot Password?
                    </button>

                    <ButtonComponent
                      buttonText="Login"
                      customStyle={{ marginTop: "10px", color: "white" }}
                      buttonType="submit"
                    />
                  </div>
                  <div className="text-[12px] font-normal text-center p-4 ">
                    <p>Don’t have an account</p>
                    <button
                      type="button"
                      onClick={() => setHasAccount(false)}
                      className="text-[#6C54FF]"
                    >
                      Sign In Here
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-[#EE4B2B] p-6">
                    {credentialError.registrationError}
                  </p>
                  <div className="flex flex-col gap-2">
                    <CustomInput
                      label={"First Name"}
                      htmlFor="first_name"
                      placeholder="Enter First Name"
                      value={registrationData?.first_name}
                      onChange={handleRegistrationChange}
                      error={registrationError?.first_name}
                    />
                    <CustomInput
                      label={"Last Name"}
                      htmlFor="last_name"
                      placeholder="Enter Last Name"
                      value={registrationData?.last_name}
                      onChange={handleRegistrationChange}
                      error={registrationError?.last_name}
                    />
                    <CustomInput
                      label={"Email"}
                      htmlFor="email"
                      placeholder="Enter Your Email"
                      value={registrationData?.email}
                      onChange={handleRegistrationChange}
                      error={registrationError?.email}
                      inputType="email"
                    />
                    <CustomInput
                      label={"Contact"}
                      htmlFor="mobile"
                      placeholder="Phone Number"
                      value={registrationData?.mobile}
                      onChange={handleRegistrationChange}
                      error={registrationError?.mobile}
                      inputType="tel"
                    />

                    <CustomInput
                      label={"Password"}
                      htmlFor="password"
                      placeholder="Create Password"
                      value={registrationData?.password}
                      onChange={handleRegistrationChange}
                      error={registrationError?.password}
                      // innerHtml={registrationError?.password}
                      inputType="password"
                    />
                    <label htmlFor={"check"}>
                      <input
                        type="checkbox"
                        id={"check"}
                        name="check"
                        checked={isAgree}
                        onChange={(e) => {
                          setAgree(e.target.checked);
                        }}
                      />
                      <span className="ml-2">Agree the terms and policy</span>
                    </label>
                    {registrationError?.checked && (
                      <label htmlFor={"check"} className="text-[#EE4B2B]">
                        {registrationError?.checked}
                      </label>
                    )}
                    <ButtonComponent
                      disabled={!isAgree}
                      buttonText="Create New Account"
                      customStyle={{ marginTop: 2, color: "white" }}
                      buttonType="submit"
                    />
                  </div>
                  <div className="text-[12px] font-normal text-center p-4 ">
                    <p>You already have an account?</p>
                    <button
                      onClick={() => setHasAccount(true)}
                      type="button"
                      className="text-[#6C54FF]"
                    >
                      Login Here
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      {/* <OtpPopup /> */}
    </div>
  );
}

export default LoginPage;
