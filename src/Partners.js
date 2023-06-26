import React from "react";
import image1 from "../src/images/sri-government-partners.png";
import image2 from "../src/images/sri-partners-request-a-partner-account.png";
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
                <h2
                style={{
                    marginRight: "2rem"
                }}
                
                >We’ll Take the Weight Off Your Shoulders</h2>
            </div>
            <div 
            style={{
                width: "60%",
                marginLeft: "2rem"
            }}>
            <h4>Delinquent tax collection and auctions can be a lot of work. Let us do the heavy lifting.</h4>
            <p>
            As a government official, you have enough to do—and that’s before property auctions are introduced. SRI partners with you to take care of everything from processing to conducting the event so you can focus on taxpayers.
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
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        
        }}>
            <h1
            style={{
                color: "White",
               
               
            }}
            >Request a Partner Account</h1>
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
                        OPEN REQUEST
                        </button>
         
        </div>






        </div>
    );
    }

export default Partners;
