// App.js
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import SecondaryNavbar from "./secondaryNavbar";
import LandingPage from "./LandingPage";

function App() {
  return (
    <Router>
      <SecondaryNavbar />
      <Navbar />
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p></p>
        </header>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
