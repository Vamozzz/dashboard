import React, { useState } from "react";
import { navConstants } from "../../constants/homeConstants.ts";
import { navBarIcons } from "../../constants/imageConstans.tsx";
import "./sideBar.css";

const SideBar = () => {
  const [isOpen, setOpen] = useState(true);
  const { Avatar, Sidebarshrink } = navBarIcons;
  return (
    <nav
      className={`relative hidden lg:block  ${
        isOpen ? "w-[240px]" : "w-[70px]"
      } rounded-lg border-2 border-greyBorder animateSideBar `}
    >
      <div className="h-[164px] w-full flex flex-col items-center p-4">
        <Avatar style={{ height: 60, width: 60 }} />
        <div className={`animateSideBar ${isOpen ? " " : "opacity-0"} `}>
          <div className="font-semibold text-[18px] text-center text-textColor-textBlack text-nowrap">
            <p>Vaamoz Online</p>
          </div>
          <div className="text-textColor-textGrey2 text-center text-[14px] font-medium">
            <p>OCC903948</p>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col  gap-4  py-4 items-start
        } `}
      >
        {navConstants.map((item) => (
          <div
            key={item.id}
            className={`w-full ${
              isOpen ? "rounded-3xl px-5" : "rounded-full"
            }  ${item.isLink ? "hover:bg-[#EBEBFF] cursor-pointer" : ""} `}
          >
            <div
              className={`flex gap-3 items-center ${
                isOpen ? "" : "justify-center"
              } `}
            >
              {item?.navIcon && (
                <div>
                  <item.navIcon color="#6C54FF" />
                </div>
              )}
              <p
                className={` ${
                  item.isLink
                    ? `text-[16px] font-medium  `
                    : `text-[18px] font-semibold  `
                } text-textColor-textBlack text-nowrap 
                ${isOpen ? "block" : "hidden"}
              `}
              >
                {item?.navText}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute p-2 bg-white border rounded-full -right-4 top-32 border-greyBorder"
        onClick={(val) => {
          setOpen(!isOpen);
        }}
      >
        <Sidebarshrink />
      </button>
    </nav>
  );
};
export default SideBar;
