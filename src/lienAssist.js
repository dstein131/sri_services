import React from "react";
import image1 from "../src/images/lap.png";

function LienAssist() {
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
            >Lien Assist Program</h1>
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
        }}>
            <div
            style={{
                width: "50%",
                color: "#F26B3F",
                paddingRight: "2rem"
              
            }}>
                <h4
                style={{
                    marginRight: "1rem"
                }}
                
                >Our brand-new service - <b>Lien Assist</b> - makes the entire lien process quicker and easier, with less back and forth</h4>
                <div className="mt-4 d-flex justify-content-center align-items-center">
                <ul>
                    <li><b>Sewer Liens</b></li>
                    <li><b>Mowing Liens</b></li>
                    <li><b>Demolition Liens</b></li>
                    <li><b>Nuisance Liens</b></li>

                </ul>
                </div>
            </div>
            <div 
            style={{
                width: "50%"
            }}>
            <ul className="mt-2"><b>Clean, Uniform Documents</b>
                <li>SRI eliminates uncertainty regardng lien amounts and associated fees.</li>
                <li>SRI makes all documents uniform in style and content for clarity.</li>

            </ul>
            <ul><b>Noticing & Recordings</b>
                <li>SRI creates and mails all legally required notices.</li>
                <li>SRI records and releases all lien documents.</li>
            </ul>
            <ul><b>Experts On Hand</b>
            <li>SRI has former Auditors and Treasurers on staff to answer any questions.</li>
            <li>SRi provides in-depth user manuals, training videos, and knowledge base articles. 
            </li>
            </ul>
            <ul><b>One Online hub</b>
                <li>SRI archives all documents online for quick, 24/7 access.</li>
                <li>SRI shares information seamlessly between municipalities and the county.</li>
            </ul>
            <ul><b>Much, Much More!</b>
                <li>Generate reports to track the status of your outstanding liens.</li>
                <li>View projected settlement distributions for easier balancing of funds</li>
            </ul>
            </div>
        </div>










        </div>
    );
    }

export default LienAssist;
