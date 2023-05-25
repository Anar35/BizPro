import React from "react";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Team from "../../components/Team";
import Blog from "../../components/Blog";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <Services />
      <Team />
      <Blog />
    </>
  );
};

export default Home;
