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
import Footer from "./Footer";

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
        </Routes>
        <Footer />
     
    </Router>
  );
}

export default App;
