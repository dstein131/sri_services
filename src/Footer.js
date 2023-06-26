import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#363636",
        color: "white",
        padding: "10px",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        fontSize: ".75rem",
      }}
    >

      <div className="footer-section">
        <h5>Contact Information</h5>
        <p>Toll Free 800.800.9588</p>
        <p>Main Phone 317.842.5818</p>
        <p>Fax 317.842.5948</p>
        <p>Hours:</p>
        <p>Monday – Friday</p>
        <p>8am – 5pm EST</p>
      </div>
    </footer>
  );
}

export default Footer;
