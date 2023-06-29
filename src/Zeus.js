import React from "react";
import image1 from "../src/images/zeus.png";
import { Link } from 'react-router-dom';

function Zeus() {
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
        }}
      >
        <h1
          style={{
            color: "White",
            marginLeft: "10rem",
          }}
        >
          Zeus Auction Service
        </h1>
      </div>

      <div
        style={{
          width: "100%",
          minHeight: "25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "1rem",
          paddingRight: "7rem",
        }}
      >
        <div
          style={{
            width: "50%",
            color: "#F26B3F",
            paddingRight: "2rem"
          }}
        >
          <center>
            <h2
              style={{
                marginRight: "1rem"
              }}
            >
              Meet Zeus.
            </h2>
            <h5>Your government auction solution.</h5>
          </center>

          <div className="mt-4 d-flex justify-content-center align-items-center">
            {/* <ul>
                    <li><b>Sewer Liens</b></li>
                    <li><b>Mowing Liens</b></li>
                    <li><b>Demolition Liens</b></li>
                    <li><b>Nuisance Liens</b></li>

                </ul> */}
          </div>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p>
            The Zeus Auction Program incorporates the latest technology and
            over 20 years of experience to make bidding in auctions easy.
            Manage your account, view live statistics, and place single or
            multiple bids from one place.
          </p>

          <Link to="/support">
            <button id="lapBtn" className="btn btn-primary">
              Inquire about Zeus
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Zeus;
