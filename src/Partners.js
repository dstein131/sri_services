import React from "react";
import image1 from "../src/images/sri-government-partners.png";

function Partners() {
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
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
        
        }}>
            <h1
            style={{
                color: "White",
                marginLeft: "10rem",
               
            }}
            >Government Partners</h1>
         
        </div>
        </div>
    );
    }

export default Partners;
