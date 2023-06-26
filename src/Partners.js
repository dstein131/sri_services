import React from "react";
import image1 from "../src/images/sri-government-partners.png";
import image2 from "../src/images/sri-partners-request-a-partner-account.png";
import image3 from "../src/images/sri-partners-why-sri.png";
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
        <div
        style={{
          width: "100%",
          minHeight: "25rem",
          display: "flex",
          marginTop: "2rem",
          marginBottom: "2rem",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        
        }}>
            <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center"
            }}>
          <h2 style={{ marginLeft: "2rem" }}>
                Why SRI?
            </h2>
            <ul><b>Delinquent Taxes</b>
            <li>Delinquent Lists</li>
            <li>Redemption</li>
            <li>Issuance</li>
            </ul>
            <ul><b>Sheriff Sales</b>
            </ul>
            <ul><b>Tax Sale Processing</b></ul>
            <ul><b>Tax Sale Processing Auctions</b></ul>
            <ul><b>Mortgage Foreclosure Processing</b>
            <li>Working with Lawyers</li>
            </ul>
            <ul><b>Mortgage Foreclosure Auctions</b>
            <li>Guiding Buyers</li>
            </ul>
            </div>

            <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                
            }}>
                <img src={image3} alt="image3" style={{ width: "20rem",
                marginLeft: "2rem",
                marginRight: "2rem"
            
            }} />
                </div>
            </div>

            <center><div
        style={{
            borderTop: "1px solid #F26B3F",
            width: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "25rem",
            color: "#F26B3F",
        }}>
            <h2>Interested in finding a partner to simplify your workload?</h2>
            <button
                        className="btn rounded-pill"
                        style={{
                            backgroundColor: "black",
                            color: "white",
                            margin: "2rem",
                            width: "15rem",
                            height: "3rem"
                        }}
                      
                        >
                        CONTACT US
                        </button>
            </div></center>





        </div>
    );
    }

export default Partners;
