import React from "react";
import Boxes from "../components/Boxes";
import FirstInformationSection from "../components/FirstInformationSection";
import Menu from "../components/Menu";
import Moresell from "../components/Moresell";
import Offers from "../components/Offers";
import Slideimage from "../components/Slideimage";

const Homepage = () => {
  return (
    <>
      <Menu />
      <Slideimage />
      <Boxes />
      <Offers />
      <Moresell />
      <div style={{ paddingTop: "30px" }}></div>
      <div className="separator"></div>
      <div style={{ paddingTop: "30px" }}></div>
      <FirstInformationSection />
      <div style={{ paddingTop: "45px" }}></div>
      <div className="separator"></div>
      <div style={{ paddingTop: "30px" }}></div>
      <FirstInformationSection />
    </>
  );
};

export default Homepage;
