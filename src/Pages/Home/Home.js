import React from "react";
import Footer from "../Shared/Footer";
import Awards from "./Awards";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Reviews from "./Reviews";
import Summary from "./Summary";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <Summary></Summary>
      <Awards></Awards>
      <Reviews></Reviews>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
