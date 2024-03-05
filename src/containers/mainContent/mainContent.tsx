import React from "react";
import Layout from "../../layout/layout.tsx";
import HomePage from "../../pages/homePage/homePage.tsx";

function MainContent() {
  return (
    <Layout>
      <div className="rounded-lg ">
        <HomePage />
      </div>
    </Layout>
  );
}

export default MainContent;
