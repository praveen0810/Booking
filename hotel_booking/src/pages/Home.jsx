import React, { useState, useEffect, useContext } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Featured from "../components/Featured";
import Browese from "../components/Browese";
import HighRated from "../components/HighRated";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data, loading, error } = useFetch("/hotels");
  return (
    <>
      <NavBar />
      <Header />
      <Featured />
      <Browese />

      <HighRated hotels={data} />
    </>
  );
};

export default Home;
