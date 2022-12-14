import React from "react";
import Announcement from "../components/Announcement";
import Categerious from "../components/Categerious";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newslatter from "../components/Newslatter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      <Categerious />
      <Products />
      <Newslatter />
      <Footer />
    </div>
  );
};

export default Home;
