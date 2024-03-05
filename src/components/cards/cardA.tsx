import React, { FC } from "react";
import "../cards/cards.css";
import { CardInfoCardA } from "../../types/homeTypes";

const CardAComponent: FC<CardInfoCardA> = ({
  type,
  title,
  amount,
  Image1,
  desc,
  Image2,
  Image1Fill,
  Image2Fill,
  bgColor,
  strokeColor,
  bgImage,
}) => {
  return (
    // <div
    //   className={`cardA text-textColor-textBlack p-3 bg border-2 ${`border - [${strokeColor}] bg-[${bgColor}] bg-[${bgImage}]`}`}
    // >
    <div
      className={`cardA text-textColor-textBlack p-3 bg border ${
        type === "settlement" ? "cardASettlement" : "cardAWallet"
      }`}
    >
      <p className="text-[20px] font-bold ">{title}</p>
      <p className="text-[32px] font-bold ">{amount}</p>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          {Image1 && <Image1 style={{ height: 50, width: 50 }} />}
          <p>{desc}</p>
        </div>
        {Image2 && (
          <Image2
            color={Image2Fill && Image2Fill}
            style={{ height: 30, width: 30 }}
          />
        )}
      </div>
    </div>
  );
};

export default CardAComponent;
