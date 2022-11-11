import React from "react";
import useTitle from "../../../hooks/useTitle";
import About from "../About/About";
import Banner from "../Banner/Banner";
import CustomersReview from "../CustomersReview/CustomersReview";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Team />
      <CustomersReview />
    </div>
  );
};

export default Home;
