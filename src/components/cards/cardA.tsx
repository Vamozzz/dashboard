import React from "react";
import "../cards/cards.css";
import { CardAIcons } from "../../constants/imageConstans.tsx";

function CardA() {
  const cardData = {
    id: "2",
    title: "Wallet Balance",
    amount: "₹80,650",
    image1: CardAIcons?.AddWallet,
    // image1: "",

    desc: "Add Balance",
    // desc: "",

    image2: CardAIcons?.Wallet,
  };

  return (
    <div className="cardAContainer text-textColor-textBlack p-6">
      <p className="text-[20px] font-bold ">{cardData?.title}</p>
      <p className="text-[32px] font-bold ">{cardData?.amount}</p>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          {cardData?.image1 && <cardData.image1 />}
          <p>{cardData?.desc && cardData?.desc}</p>
        </div>

        <cardData.image2 />
      </div>
    </div>
  );
}

export default CardA;
