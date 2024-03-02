import React from "react";
import "../cards/cards.css";
import { CardBIcons, CommonIcons } from "../../constants/imageConstans.tsx";

function CardB() {
  const cardData = {
    id: "2",
    title: "Send Money",
    image1: CardBIcons?.SendMoneyCard,
    image2: CardBIcons?.SendMoneyCard,
  };

  return (
    <div className="cardBContainer relative flex justify-center items-center p-6 ">
      <div className="flex flex-col w-full justify-center items-center font-semibold text-white text-[14px]">
        <cardData.image2 style={{ height: 50, width: 50 }} />
        <p>{cardData?.title}</p>
      </div>
      <div className="absolute top-4 right-4 cardBContainerImageBorder rounded-full ">
        <CommonIcons.ArrowIcon style={{ height: 30, width: 30 }} />
      </div>
    </div>
  );
}

export default CardB;
