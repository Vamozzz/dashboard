import React from "react";
import "../cards/cards.css";
import { CardAIcons } from "../../constants/imageConstans.tsx";

function CardC() {
  const cardData = {
    id: "2",
    title: "Total Payin",
    amount: "₹80,650",
    average: "avg monthly",
    averageStats: "11.9%",
    thisMonth: "This month",
    thisMonthStats: "11.9%",

    image1: CardAIcons?.AddWallet,
    // image1: "",

    desc: "Add Balance",
    // desc: "",

    image2: CardAIcons?.Wallet,
    image3: CardAIcons?.Wallet,
  };

  return (
    <div className="cardCContainer text-textColor-textBlack p-6">
      <div className="flex justify-start items-center">
        {cardData?.image1 && <cardData.image1 />}
        <p>{cardData?.desc && cardData?.desc}</p>
      </div>
    </div>
  );
}

export default CardC;
