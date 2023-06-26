import React from "react";
import image1 from "../src/images/sri-home-header.png";
import image2 from "../src/images/sri-what-we-do-overlay.png";
import image3 from "../src/images/sri-what-we-do-long-term-partner.png";
import image4 from "../src/images/sri-government-auctions.png";
import image5 from "../src/images/sri-investing-in-property.png";
import image6 from "../src/images/sri-what-we-value-overlay.png";

function LandingPage() {
  return (
    <div>
      <div
        style={{
          marginTop: "none !important",
          paddingTop: "none !important",
          width: "100%",
          height: "35rem",
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container-fluid">
          <h1 style={{ color: "white" }}>SRI</h1>
          <h1
            style={{
              color: "#F26B3F",
              width: "50rem",
              wordWrap: "break-word",
            }}
          >
            Your partners for delinquent tax recovery, property auctions, and
            foreclosure services.
          </h1>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "35rem",
          backgroundImage: `url(${image2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "35rem",
          backgroundPosition: "80% 75px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center">
            <img
              src={image3}
              alt="Logo"
              className="fluidity"
              style={{
                width: "auto",
                maxHeight: "25rem",
                maxWidth: "100%",
              }}
            />
          </div>

          <div
            style={{
              width: "50rem",
              wordWrap: "break-word",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              marginLeft: "5rem",
            }}
          >
            <p>
              Whether you’re looking for a long-term partner to help manage
              delinquent tax collections, government auctions, tax lien sales,
              or foreclosures, or you’re an investor looking to purchase
              property at auction, SRI partners with you to ensure your goals
              are met efficiently, effectively, and as simply as possible.
            </p>
            <h3 style={{ color: "#F26B3F" }}>
              Looking to stay in the loop on upcoming auctions, sales, and
              manage your favorite properties?
            </h3>
            <div
              className="what-we-do-buttons"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              <button
                className="btn rounded-pill"
                style={{
                  backgroundColor: "#f36B3f",
                  color: "white",
                  marginRight: "1rem", // Space between buttons
                  width: "15rem",
                  height: "3rem",
                }}
              >
                SEARCH LISTINGS
              </button>

              <button
                className="btn rounded-pill"
                style={{
                  backgroundColor: "#f36B3f",
                  color: "white",
                  width: "15rem",
                  height: "3rem",
                }}
              >
                SEARCH AUCTIONS
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* third section */}
      <div
        className="third-section"
        style={{
          width: "100%",
          height: "35rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          className="gauctions"
          style={{
            minHeight: "486px",
            width: "40rem",
            backgroundImage: `url(${image4})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // marginRight: "3rem",
            padding: "2rem",
            color: "white",
          }}
        >
          <h2>Government Auctions</h2>
          <p
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            As a government official, managing delinquent tax collections and
            auctions can be daunting tasks. When you partner with SRI, we take
            care of all the details, allowing you to focus on taxpayers while
            we work to ensure collections and auctions are conducted seamlessly.
          </p>
          <button
            className="btn rounded-pill"
            style={{
              backgroundColor: "white",
              width: "15rem",
              height: "3rem",
            }}
          >
            LEARN MORE
          </button>
        </div>
        <div
          className="investproperty"
          style={{
            height: "486px",
            width: "40rem",
            backgroundImage: `url(${image5})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "white",
            padding: "2rem",
          }}
        >
          <h2>Investing in Property</h2>
          <p
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            Whether you’re a seasoned or novice property investor, SRI helps
            streamline each step, from finding properties, understanding
            foreclosure sales, and assisting you through the auction and
            purchase process.
          </p>
          <button
            className="btn rounded-pill"
            style={{
              backgroundColor: "white",
              width: "15rem",
              height: "3rem",
            }}
          >
            LEARN MORE
          </button>
        </div>
      </div>
      {/* end third section */}
      {/* fourth section */}
      <div
  style={{
    width: "100%",
    minHeight: "35rem",
    backgroundImage: `url(${image6})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "5rem",
    backgroundPosition: "10% 75px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  }}
>

        <div
          style={{
            marginLeft: "20rem",
            marginRight: "20rem",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            // border: "1px solid black",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
              borderRight: "1px solid #f36B3f",
              padding: "2rem",
            }}
          >
            <h5
              style={{
                color: "grey",
                float: "left",
                marginBottom: "1rem",
              }}
            >
              WHAT WE VALUE
            </h5>
            <p>
              Relationships are the heart of our business. Our success is
              driven by our dedication to our clients’ needs, maintaining
              steady communication throughout all processes, and building
              lasting partnerships rooted in trust.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
              padding: "2rem",
            }}
          >
            <h5 style={{ color: "#f36B3f", marginBottom: "1rem" }}>
              Learn more about our history and who we are.
            </h5>
            <button
              className="btn rounded-pill"
              style={{
                backgroundColor: "black",
                color: "white",
                width: "15rem",
                height: "3rem",
              }}
            >
              MEET THE TEAM
            </button>
          </div>
        </div>
      </div>
      {/* end of fourth section */}
    </div>
  );
}

export default LandingPage;
