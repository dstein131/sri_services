import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../src/images/sri-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" style={{ marginRight: '10px', height: '3rem', width: 'auto' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/company">Company</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/work">How We Work</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/partners">Partners</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/investing">Investing</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="resourcesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Resources
              </Link>
              <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                <li><Link className="dropdown-item" to="/resources/page1">Page 1</Link></li>
                <li><Link className="dropdown-item" to="/resources/page2">Page 2</Link></li>
                <li><Link className="dropdown-item" to="/resources/page3">Page 3</Link></li>
              </ul>
            </li>
          
                
            <li className="nav-item">
  <Link className="nav-link" to="https://sriservices.com/support/">Support</Link>

            </li>
            <li className="nav-item">
              <Link className="nav-link" to="https://help.sriservices.com/knowledge?__hstc=199601388.05e43f98018768f20d1dd3fb860ba766.1685564802941.1687804007782.1687812803844.5&__hssc=199601388.15.1687812803844&__hsfp=771306454">Help</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
