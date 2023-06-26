import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Hero from "./components/Hero";
import { useState, useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="relative w-full h-auto min-h-screen bg-[#0B2447] text-white">
        <Navbar />
        <div className="flex p-5">
          <SideBar />
          <Hero HandleSearch="" search="" SetSearch="" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
