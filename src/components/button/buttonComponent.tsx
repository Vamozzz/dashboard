import React, { CSSProperties, FC } from "react";

interface buttonType {
  buttonText: string;
  onClick?: () => void;
  customStyle?: CSSProperties;
  buttonType?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}
const ButtonComponent: FC<buttonType> = ({
  buttonText,
  onClick,
  customStyle,
  buttonType = "button",
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      type={buttonType}
      onClick={onClick}
      style={customStyle}
      className={`w-full  p-3 m-auto text-center rounded-sm font-medium text-[16px] ${
        disabled ? "bg-[#888] cursor-not-allowed" : " bg-[#6C54FF] hover:bg-[#8875FF]"
      }  hover:shadow-lg `}
    >
      {buttonText}
    </button>
  );
};

export default ButtonComponent;
