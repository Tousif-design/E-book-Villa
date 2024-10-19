import React from "react";
import Navbar from "../components/Navbar";  // Ensure correct path and case-sensitivity
import Banner from "../components/Banner";   // Corrected the spelling here
import Footer from "../components/Footer";   // Corrected case
import FreeBooks from "../components/freeBooks"; // Corrected case

const Home = () => { // Component name should start with a capital letter
  return (
    <>
      <Navbar />
      <Banner />
      <FreeBooks />
      <Footer />
    </>
  );
}

export default Home; // Ensure the export matches the component name
