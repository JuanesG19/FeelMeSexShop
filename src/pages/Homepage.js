import React from "react";
import Boxes from "../components/Boxes";
import Menu from "../components/Menu";
import Slideimage from "../components/Slideimage";

const Homepage =()=> {
  return (
    <>
      <Menu/>
      <Slideimage/>
      <Boxes/>
      <h1>Homepage</h1>
    </>
  );
}

export default Homepage;

