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

        <div
        style={{
            width: "100%",
            minHeight: "25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "7rem",
            paddingRight: "7rem",
        }}>
            <div
            style={{
                width: "40%",
                color: "#F26B3F",
                wordBreak: "break-word",
            }}>
                <h3>Serving governments and investors for more than 30 years.</h3>
            </div>
            <div 
            style={{
                width: "60%"
            }}>
            <p>
            At SRI, we are driven to create simple solutions for elected officials and investors. We work to relieve the tension that can come from tax sales or mortgage foreclosures. Using customizable technology, we are able to serve every corner of the country, and today, work with more than 300 local government offices
            </p>
            </div>
        </div>

                



        </div>
    );
    }

export default Company;
