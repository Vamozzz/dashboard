import React from "react";
import CardAComponent from "../../components/cards/cardA.tsx";
import {
  settlementBalanceCardA,
  totalPayinCardC,
  totalPayoutCardC,
  totalRefundCardC,
  totalSettlementCardC,
  upiTransactionDataCardD,
  walletBalanceCardA,
} from "../../constants/homeConstants.ts";
import CardBContainer from "../../containers/cardContainer/cardBContainer.tsx";
import "./homePage.css";
import CardCComponent from "../../components/cards/cardC.tsx";
import CardDComponent from "../../components/cards/cardD.tsx";
function HomePage() {
  return (
    <div>
      <div className="homePageContainer">
        <div className="firstRow">
          <CardAComponent {...settlementBalanceCardA} />
          <CardAComponent {...walletBalanceCardA} />
          <CardBContainer />
        </div>
        <div className="secondRow">
          <CardCComponent {...totalPayinCardC} />
          <CardCComponent {...totalPayoutCardC} />
          <CardCComponent {...totalSettlementCardC} />
          <CardCComponent {...totalRefundCardC} />
        </div>
        <div className="thirdRow">
          <CardDComponent {...upiTransactionDataCardD} />
          <CardDComponent {...upiTransactionDataCardD} />
          <CardDComponent {...upiTransactionDataCardD} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
