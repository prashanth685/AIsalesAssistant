import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Dashboard = () => {
  return (
    <>
      <div className="font-body-md text-on-surface overflow-x-hidden">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Dashboard;
