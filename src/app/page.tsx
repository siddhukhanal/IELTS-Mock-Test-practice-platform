"use client";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import Grid from "./components/Dashboard/Grid";
import TopBar from "./components/Dashboard/TopBar";
import IndividualTests from "./components/Practice/IndividualTests";
import Practice from "./components/Practice/Practice";
import Results from "./components/Results/Results";
import Pricing from "./components/Upgrade/Pricing";
import Contact from "./components/ContactUs/Contact";
export default function Home() {
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-screen bg-stone-100" />;
  }

  return (
    <BrowserRouter>

      <main className="grid gap-12 p-4 grid-cols-[64px_1fr] h-screen overflow-hidden">
        

        <Sidebar />
        <div className="flex flex-col h-full overflow-hidden">
          
          
          <header className="w-full">
            <TopBar />
            </header>


        <div className="overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/grid" element={<Grid />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/results" element={<Results/>} />
            <Route path="/upgrade" element={<Pricing/>} />
            <Route path="/contact" element={<Contact/>} />

           
          </Routes>
        </div>
        </div>
        
      </main>
    </BrowserRouter>
  );
}