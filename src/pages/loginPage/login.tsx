import React, { ChangeEvent, FormEvent, useState } from "react";
import { headerIcons, loginIcons } from "../../constants/imageConstans.tsx";
import ButtonComponent from "../../components/button/buttonComponent.tsx";
import CustomInput from "../../components/customInput/customInput.tsx";

interface registrationState {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  password: string;
  checked: boolean;
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
  email: string;
  password: string;
}
interface loginError {
  email?: string;
  password?: string;
}

function LoginPage() {
  const [hasAccount, setHasAccount] = useState<boolean>(true);
  const [credentialError, setCredentialError] = useState<string | null>(null);
  const [loginData, setLoginData] = useState<loginState>({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState<loginError>({
    email: "",
    password: "",
  });
  const [registrationData, setRegistrationData] = useState<registrationState>({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    password: "",
    checked: false,
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

    if (!registrationData.checked) {
      newErrors.checked = "Kindly agree for further action";
      isValid = false;
    }

    setRegistrationError(newErrors);
    return isValid;
  };

  const validationLoginForm = (): boolean => {
    let isValid = true;
    const newErrors: loginError = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!loginData.email.trim() || !emailRegex.test(loginData.email)) {
      newErrors.email = "Valid Email is Required ";
      isValid = false;
    }

    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (
      !loginData?.password?.trim() ||
      passwordRegex.test(loginData.password)
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
      try {
        const response = await fetch("https://api.vampay.in/Webapp/Contactus", {
          method: "POST",
          body: JSON.stringify(registrationData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        // console.log(data, "response data");
        if (data.status === true) {
          setCredentialError(data.message);
          setRegistrationData({
            first_name: "",
            last_name: "",
            email: "",
            mobile: "",
            password: "",
            checked: false,
          });
        }
      } catch (error) {
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
        const response = await fetch("https://api.vampay.in/Webapp/Contactus", {
          method: "POST",
          body: JSON.stringify(registrationData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        // console.log(data, "response data");
        if (data.status === true) {
          setCredentialError(data.message);
          setLoginData({
            email: "",
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
    <div className="">
      <div className="flex ] ">
        <img
          src={loginIcons?.loginImage}
          alt={"dfghj"}
          className="object-cover w-1/2"
        />
        <div className="flex items-center justify-center w-1/2 bg-[#F1F2F5]">
          <div className="w-2/3 p-6 m-auto bg-white rounded-lg">
            <div className="flex items-center justify-center p-4">
              {headerIcons?.WebLogoHeaderIcon && (
                <headerIcons.WebLogoHeaderIcon />
              )}
            </div>
            <form
              onSubmit={() => {
                alert("dfghjk");
              }}
            >
              {hasAccount ? (
                <div>
                  <label className="text-[#EE4B2B]">
                    {credentialError && credentialError}
                  </label>
                  <div className="flex flex-col gap-2">
                    <CustomInput
                      label={"Email"}
                      htmlFor="email"
                      placeholder="Enter Your Email"
                      value={loginData?.email}
                      onChange={handleLoginChange}
                      error={loginError?.email}
                    />

                    <CustomInput
                      label={"Password"}
                      htmlFor="password"
                      placeholder="Enter Your Password"
                      value={loginData?.password}
                      onChange={handleLoginChange}
                      error={loginError?.password}
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
                    />
                    <CustomInput
                      label={"Contact"}
                      htmlFor="contact"
                      placeholder="Phone Number"
                      value={registrationData?.mobile}
                      onChange={handleRegistrationChange}
                      error={registrationError?.mobile}
                    />

                    <CustomInput
                      label={"Password"}
                      htmlFor="password"
                      placeholder="Create Password"
                      value={registrationData?.password}
                      onChange={handleRegistrationChange}
                      error={registrationError?.password}
                    />
                    <label htmlFor={"check"}>
                      <input
                        type="checkbox"
                        id={"check"}
                        name="check"
                        checked={registrationData?.checked}
                        onChange={handleRegistrationChange}
                      />{" "}
                      Agree the terms and policy
                    </label>
                    <label htmlFor={"check"} className="text-[#EE4B2B]">
                      {registrationError?.checked}
                    </label>
                    <ButtonComponent
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
    </div>
  );
}

export default LoginPage;
