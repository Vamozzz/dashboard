import React, { FC } from "react";
import "../cards/cards.css";
import { CardInfoCardB } from "../../types/homeTypes";

const CardBComponent: FC<CardInfoCardB> = ({ title, Image1, Image2 }) => {
  return (
    <div className="cardB relative flex justify-center items-center p-2">
      <div className="flex flex-col w-full justify-center items-center font-semibold text-white text-[14px]">
        {Image1 && <Image1 style={{ height: 50, width: 50 }} />}
        <p>{title}</p>
      </div>
      <div className="absolute top-4 right-4 cardBContainerImageBorder rounded-full ">
        {Image2 && <Image2 style={{ height: 30, width: 30 }} />}
      </div>
    </div>
  );
};

export default CardBComponent;
