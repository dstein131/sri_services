import React from "react";
import image1 from "../src/images/sri-how-we-work-header.png";
import image2 from "../src/images/sri-company-our-history.png";
import image3 from "../src/images/sri-company-history-since-1980.png";

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


        <div
        style={{
          width: "100%",
          height: "25rem",
          backgroundImage: `url(${image2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}>
            <h1>
                Our History
            </h1>
            </div>
                


        <div 
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            paddingLeft: "7rem",
            paddingRight: "7rem",
        }}>
            <div
            style={{
                maxWidth: "50rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                wordBreak: "break-word",
                paddingTop: "2rem",
            }}>
                <p>
In 1980, SRI Founder, Jim E. Hughes was working for treasurers to collect delinquent taxes. Back then, treasurers didn’t hold tax sales because they were held personally responsible for any errors.
                </p>
                <p>
                Jim saw an opportunity to help officials manage sales, save time, and streamline their workflow, so in 1990, he started Synergetic Resources Integration—SRI. He began assisting officials with noticing, advertising, and conducting tax sale auctions, holding himself responsible for all the details. This “cradle-to-grave” concept was welcomed by treasurers across several Indiana counties as it made the entire process of tax sales simpler.
                </p>
                <p>
                By 1992, SRI had six county clients and just four years later, the company was in 36 counties. Today, Jim’s son, James B. Hughes, runs the company and we serve 85 of the 92 counties in Indiana and have expanded our services into five additional states.
                </p>
                <p>
                Our dedication to customer service has been unwavering since day one. Transparency, honesty, and maintaining open lines of communication with our customers is our driving force, now and always.
                </p>
                </div>

                <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                   maxWidth: "50rem",
                   padding: "2rem",
                }}>
                    <img src={image3} alt="SRI Company History" style={{maxWidth: "20rem", className: "img-fluid"}}/>
                    </div>
                    


                <div 
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}>
                    <div>
                        <h2
                        style={{
                            color: "#F26B3F",
                            paddingTop: "2rem",
                            height: "7rem",
                        }}
                        >Looking for a partner who has your best interests in mind?</h2>
                    </div>
                    <div
                    style={{
                        height: "7rem"
                    }}>
                    <button
                        className="btn rounded-pill"
                        style={{
                            backgroundColor: "black",
                            color: "white",
                            marginTop: "2rem",
                            width: "15rem",
                            height: "3rem"
                        }}
                        onClick={() => window.location.href = 'tel:1-800-800-9588'}
                        >
                        GIVE US A CALL
                        </button>

                        </div>


                    </div>


        
        </div>



        </div>
    );
    }

export default Company;
