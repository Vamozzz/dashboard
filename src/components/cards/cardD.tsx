import React, { FC } from "react";
import "../cards/cards.css";
import { CardInfoCardD } from "../../types/homeTypes";

const CardDComponent: FC<CardInfoCardD> = ({
  Image1,
  Image2,
  title,
  totalTransaction,
  transactionCount,
  totalTransactionStats,
  transactionCountStats,
  cardStyle,
}) => {
  return (
    <div
      className="cardD p-4 flex flex-col gap-4 border border-[#CFCFCF] bg-[#F2F2F2] overflow-auto"
      style={cardStyle}
    >
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-white rounded-full">
            {Image1 && <Image1 />}
          </div>
          <p className="font-bold text-[20px]">{title}</p>
        </div>
        <div className="flex items-center gap-2 text-[#3D3E40] font-medium text-[12px]">
          <div className="bg-white border rounded-xl flex justify-center items-center px-1">
            <p>Credit</p>
          </div>
          <div className="bg-white border rounded-xl flex justify-center items-center px-1">
            <p>Monthly</p>
          </div>
          <button className="p-2 bg-white rounded-full">
            {Image2 && <Image2 style={{ height: 10, width: 10 }} />}
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="font-bold text-[16px]">{totalTransaction}</p>
          <p className="font-bold text-[24px]">{totalTransactionStats}</p>
        </div>
        <div>
          <p className="font-bold text-[16px]">{transactionCount}</p>
          <p className="font-bold text-[24px]">{transactionCountStats}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDComponent;
