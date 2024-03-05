import React, { FC } from "react";
import "../cards/cards.css";
import { CardInfoCardC } from "../../types/homeTypes";

const CardCComponent: FC<CardInfoCardC> = ({
  type,
  title,
  amount,
  average,
  averageStats,
  thisMonth,
  thisMonthStats,
  Image1,
  Image2,
  Image3,
  cardStyle,
}) => {
  return (
    <div
      className={`cardC text-textColor-textBlack p-4 flex flex-col gap-2 border ${
        type === "totalpayin"
          ? "cardCPayin"
          : type === "totalpayout"
          ? " cardCPayout"
          : type === "totalssettlement"
          ? "cardCSettleMent"
          : "cardCPayinRefund"
      }`}
      style={cardStyle}
    >
      <div className="flex justify-start items-center gap-5">
        <div className="p-4 rounded-full bg-[#AC9CCB]">
          {Image1 && <Image1 style={{ height: 30, width: 30 }} />}
        </div>
        <div className="flex flex-col">
          <p>{title && title}</p>
          <p>{amount && amount}</p>
        </div>
      </div>
      <div className="flex justify-start items-center gap-4">
        <div className="flex flex-col gap-2 ">
          <p>{average}</p>
          <div className="flex gap-2 items-center rounded-3xl p-2 bg-white">
            <div className="border-greyBorder border-2 rounded-full bg-black p-1">
              <Image2 style={{ height: 20, width: 20 }} />
            </div>
            <p>{averageStats}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>{thisMonth}</p>
          <div className="flex gap-2 items-center rounded-3xl p-2 bg-white">
            <div className="border-greyBorder border-2 rounded-full bg-black p-1">
              <Image3 style={{ height: 20, width: 20 }} />
            </div>

            <p>{thisMonthStats}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCComponent;
