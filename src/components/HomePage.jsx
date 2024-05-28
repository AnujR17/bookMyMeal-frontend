import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomepageCalendar from "./Calendar";
import ViewBookBtn from "./ViewBookBtn";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container flex-grow px-4 mx-auto">
        <div className="flex flex-wrap justify-center gap-4 my-8">
          <ViewBookBtn />
        </div>
        <div className="flex flex-col items-start lg:flex-row">
          <HomepageCalendar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
