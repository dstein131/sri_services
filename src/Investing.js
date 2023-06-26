import React from "react";
import image1 from "../src/images/sri-investors-header.png";
import image2 from "../src/images/sri-history-header.png";

function Investing() {
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
            >Investing</h1>
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
              
            }}>
                <h4
                style={{
                    marginRight: "1rem"
                }}
                
                >Looking for Property?</h4>
                <h4 
                style={{
                    color: "black"
                }}
                >You’ve come to the right place.</h4>
            </div>
            <div 
            style={{
                width: "60%"
            }}>
            <p>
            Whether you’re an avid investor or a first-time buyer, we’ll help you navigate the process of purchasing tax liens, foreclosed properties, or government-owned properties with answers to your questions, website support, and assistance with Zeus, our auction platform.
            </p>
            <p>
            With our easy-to-use search system, you can find properties in your area available for purchase. If you run into any issues or have questions or concerns, reach out to us—we’re here to help.
            </p>

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
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          color: "white"
        }}>
            <h2>
                Find A Property
            </h2>
            <button
                        className="btn rounded-pill"
                        style={{
                            backgroundColor: "white",
                            color: "black",
                           margin: "2rem",
                            width: "15rem",
                            height: "3rem"
                        }}
                    
                        >
                        SEARCH LISTINGS
                        </button>



            </div>







        </div>
    );
    }

export default Investing;
