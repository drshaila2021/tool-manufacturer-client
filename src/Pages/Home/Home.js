import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Reviews from "./Reviews";
import Summary from "./Summary";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <Summary></Summary>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
