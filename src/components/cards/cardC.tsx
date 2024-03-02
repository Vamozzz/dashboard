import React from "react";
import "../cards/cards.css";
import { CardAIcons, CommonIcons } from "../../constants/imageConstans.tsx";

function CardC() {
  const cardData = {
    id: "2",
    title: "Total Payin",
    amount: "₹80,650",
    average: "Avg monthly",
    averageStats: "11.9%",
    thisMonth: "This month",
    thisMonthStats: "11.9%",
    image1: CommonIcons?.ArrowIcon,
    image2: CommonIcons?.GreenUpArrow,
    image3: CommonIcons?.RedDownArrow,
  };

  return (
    <div className="cardCContainer text-textColor-textBlack p-6 flex flex-col gap-2">
      <div className="flex justify-start items-center gap-5">
        <div className="p-4 rounded-full bg-[#AC9CCB]">
          {cardData?.image1 && (
            <cardData.image1 style={{ height: 30, width: 30 }} />
          )}
        </div>
        <div className="flex flex-col">
          <p>{cardData?.title && cardData?.title}</p>
          <p>{cardData?.amount && cardData?.amount}</p>
        </div>
      </div>
      <div className="flex justify-start items-center gap-4">
        <div className="flex flex-col gap-2 ">
          <p>{cardData?.average}</p>
          <div className="flex gap-2 items-center rounded-3xl p-2 bg-white">
            <div className="border-greyBorder border-2 rounded-full bg-black p-1">
              <cardData.image2 style={{ height: 20, width: 20 }} />
            </div>
            <p>{cardData?.averageStats}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>{cardData?.thisMonth}</p>
          <div className="flex gap-2 items-center rounded-3xl p-2 bg-white">
            <div className="border-greyBorder border-2 rounded-full bg-black p-1">
              <cardData.image3 style={{ height: 20, width: 20 }} />
            </div>

            <p>{cardData?.thisMonthStats}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardC;
