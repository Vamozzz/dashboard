import React from "react";
import Layout from "../../layout/layout.tsx";
import CardA from "../../components/cards/cardA.tsx";
import CardB from "../../components/cards/cardB.tsx";
import CardC from "../../components/cards/cardC.tsx";

function MainContent() {
  return (
    <Layout>
      <div className="border-2 rounded-lg border-greyBorder">
        {/* <CardA />
         */}
        {/* <CardB /> */}
        <CardC />
      </div>
    </Layout>
  );
}

export default MainContent;
