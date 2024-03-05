import React from "react";
import "./headerBar.css";
import { BrowserView, MobileView } from "react-device-detect";
import { headerIcons, navBarIcons } from "../../constants/imageConstans.tsx";

const HeaderBar = () => {
  const {
    WebLogoHeaderIcon,
    MobileLogoHeaderIcon,
    RupeeHeaderIcon,
    NotificationHeaderIcon,
    UserDropdownHeaderIcon,
  } = headerIcons;
  const { AvatarCommonIcon } = navBarIcons;
  return (
    <header className="h-[8vh] lg:h-[10vh] px-4 w-full bg-[#FFFFFF] shadow-lg lg:shadow-none lg:rounded-lg lg:border-2 lg:border-greyBorder  flex justify-between items-center ">
      <div className="flex justify-start flex-1 p-2">
        <BrowserView>
          <WebLogoHeaderIcon />
        </BrowserView>
        <MobileView>
          <MobileLogoHeaderIcon />
        </MobileView>
      </div>
      <div className="flex items-center justify-end flex-1 gap-2 p-2 lg:gap-4">
        <div className="roundedIcons">
          <RupeeHeaderIcon />
        </div>
        <div className="roundedIcons">
          <NotificationHeaderIcon />
        </div>
        <div className="flex items-center justify-around gap-2 roundedIcons">
          <AvatarCommonIcon />
          <UserDropdownHeaderIcon />
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
