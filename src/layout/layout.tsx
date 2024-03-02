import React from "react";
import HeaderBar from "../containers/headerBar/headerBar.tsx";
import SideBar from "../containers/sideBar/sideBar.tsx";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#FFFFFF] layoutModel lg:p-4 h-[100vh]">
      <div className="">
        <HeaderBar />
      </div>
      <div className="mainSection">
        <div className=" sideBarSection">
          <SideBar />
        </div>
        <div className="contentSection">{children}</div>
      </div>
    </div>
  );
};
export default Layout;
