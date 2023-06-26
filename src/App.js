import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import SecondaryNavbar from "./secondaryNavbar";
import LandingPage from "./LandingPage";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <SecondaryNavbar />
      <Navbar />
      
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
     
    </Router>
  );
}

export default App;
