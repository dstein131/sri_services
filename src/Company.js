import React from "react";
import image1 from "../src/images/sri-how-we-work-header.png";

function Company() {
    return (
        <div>
           
      <div
        style={{
          width: "100%",
          height: "25rem",
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top",
          display: "flex",
          alignItems: "center",
        }}>
            <h1
            style={{
                color: "White",
                marginLeft: "10rem",
            }}
            >We Are SRI</h1>
        </div>
        </div>
    );
    }

export default Company;
