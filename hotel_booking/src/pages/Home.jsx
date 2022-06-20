import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Featured from "../components/Featured";
import Browese from "../components/Browese";
import HighRated from "../components/HighRated";
const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Featured />
      <Browese />
      <HighRated />
    </>
  );
};

export default Home;
