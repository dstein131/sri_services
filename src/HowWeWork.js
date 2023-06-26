import React from "react";
import image1 from "../src/images/sri-how-we-work-header.png";
import image2 from "../src/images/sri-government-partners.png";

function HowWeWork() {
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
            >How We Work</h1>
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
                <h3>Looking to stay in the loop on upcoming auctions, sales, and manage your favorite properties?</h3>
            </div>
            <div 
            style={{
                width: "60%"
            }}>
            <p>
            Delinquent tax collections, tax lien sales, foreclosures, and auctions all have specific details that must be given adequate attention—otherwise, you can end up with a financial mess on your hands. Whether you’re a government official, investor, or buyer, our method of managing these complex processes is designed to ensure you are comfortable—and set up for success—from start to finish.            </p>
            </div>
        </div>


        <div
        style={{
          width: "100%",
          height: "25rem",
          backgroundImage: `url(${image2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
            <h1
            style={{
                color: "White",
               
            }}
            >Govertnment Partners</h1>
            <h5
             style={{
                color: "White",
                marginTop: "2rem",
               
            }}>LET US TAKE CARE OF THE LOGISTICS</h5>
        </div>









        </div>
    );
    }

export default HowWeWork;
