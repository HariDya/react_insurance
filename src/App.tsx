// import React from 'react'
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
// import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Service from "./Components/Service";
import Testimonials from "./Components/Testimonials";


const App = () => {
  return (
    <>
      <Header />
      <Blog />
      <Section />
      <Testimonials />
      <Service />
      <Footer />
       {/* <Navbar /> */}
      
    </>
  );
};

export default App;
