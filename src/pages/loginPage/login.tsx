import React from "react";
import { loginIcons } from "../../constants/imageConstans.tsx";
import loginImage from "../../assets/images/LOGIN&SIGNUP.svg";

function LoginPage() {
  return (
    <div className=" bg-redColor-redPrime h-[100vh] ">
      <div className="flex h-[100vh] ">
        <img src={loginImage} alt={"dfghj"} className="object-cover w-1/2" />
        <div className="bg-black w-1/2 p-20">
          <div className="bg-white ">
            <form
              onSubmit={() => {
                alert("dfghjk");
              }}
            >
              <input  type="email" placeholder="Email Address" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
