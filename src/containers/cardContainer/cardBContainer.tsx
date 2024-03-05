import React from "react";
import CardB from "../../components/cards/cardB.tsx";
import "./cardContainer.css";
import { sendMoneyCardB } from "../../constants/homeConstants.ts";

const CardBContainer = () => {
  return (
    <div className="cardBContainer p-4 border border-[#C6C7FF] flex flex-col gap-3">
      <div className="font-bold text-[20px]">
        <p>Quick Send Links</p>
      </div>
      <div className="flex justify-start gap-4 items-center">
        <CardB {...sendMoneyCardB} />
        <CardB {...sendMoneyCardB} />
        <CardB {...sendMoneyCardB} />
      </div>
    </div>
  );
};

export default CardBContainer;
