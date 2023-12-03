import React from "react";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import Intro from "./components/intro/Intro";

// import "./App.css";
// import Portfolio from "./components/portfolio/Portfolio";
// import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";

const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
