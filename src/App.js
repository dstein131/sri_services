import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import SecondaryNavbar from "./secondaryNavbar";
import LandingPage from "./LandingPage";
import Company from "./Company";
import HowWeWork from "./HowWeWork";
import Partners from "./Partners";
import Investing from "./Investing";
import Support from "./Support";
import Services from "./Services";
import LienAssist from "./lienAssist";
import TMS from "./TMS";
import Zeus from "./Zeus";
import Sheriff from "./Sheriff";
import Footer from "./Footer";
import Links from "./Links";

function App() {
  return (
    <Router>
      <SecondaryNavbar />
      <Navbar />
      
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/company" element={<Company />} />
          <Route path="/work" element={<HowWeWork />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/investing" element={<Investing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/services" element={<Services />} />
          <Route path="/lienAssist" element={<LienAssist />} />
          <Route path="/tms" element={<TMS />} />
          <Route path="/zeus" element={<Zeus />} />
          <Route path="/sheriff" element={<Sheriff />} />
          <Route path="/links" element={<Links />} />
        </Routes>
        <Footer />
     
    </Router>
  );
}

export default App;
