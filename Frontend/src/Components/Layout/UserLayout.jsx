import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Hero from "../../Pages/Hero";
import Title from "../../Pages/Title";
import InboxNew from "../../Pages/InboxNew";
import LatestProduct from "../Common/LatestProduct";
import TrendingLook from "../Common/TrendingLook";
import PicksSection from "../Common/PicksSection";
import SareeEdit from "../Common/SareeEdit";

function UserLayout() {
  return (
    <div className="overflow-x-hidden">
      {/* Header */}
      <Header />
      {/* Sidebar */}

      <div className="hero w-full flex flex-col gap-15 ">
        <div className="slider">
          <Hero />
        </div>
        <div className=" w-[80%]  m-auto flex justify-around items-center gap-5">
          <InboxNew icon=" fa-truck" text="24-hour dispatch" />
          <InboxNew icon="fa-rotate-left" text="Easy Returns" />
          <InboxNew
            icon="fa-mobile-screen"
            text="Instant In-Store Experience"
          />
          <InboxNew icon="fa-scissors" text="Custom Fitting" />
        </div>
        {/* latest product */}
        <LatestProduct />

        {/* TrendingLook */}
        <div className="w-[90%] m-auto flex flex-col gap-5 mt-5">

        {/* <TrendingLook tilte="Curated Collections"/> */}
        <TrendingLook title="Curated Collections"/>
        <PicksSection/>
        <TrendingLook title="Must-Have Co-Ords"/>
        <SareeEdit/>
        </div>
      </div>

      {/* Main content */}
      {/* Footer */}
      <div className=" mt-3.5">
        <Footer />
      </div>
    </div>
  );
}

export default UserLayout;
