import React, { useEffect } from 'react';

import image1 from "../src/images/sri-contact-header.png";

function Support() {
  useEffect(() => {
    const scriptId = 'hubspot-forms-script';

    // Check if the script is already in the document
    let script = document.getElementById(scriptId);
    if (!script) {
      // If not, create the script and add it to the document
      script = document.createElement('script');
      script.id = scriptId;
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.async = true;
      script.charset = 'utf-8';

      document.body.appendChild(script);
    }

    const initializeForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          target: '#hubspot-form-container',
          region: 'na1',
          portalId: '20754427',
          formId: '3628cd4e-f7c6-4d79-b44d-c4fea2f2ff57',
        });
      }
    };

    // If the script is already loaded, initialize the form
    if (window.hbspt) {
      initializeForm();
    } else {
      // Otherwise, wait for the script to load before initializing the form
      script.addEventListener('load', initializeForm);
    }

    // Cleanup
    return () => {
      if (script) {
        script.removeEventListener('load', initializeForm);
      }
    };
  }, []);

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
            >Support</h1>
        </div>
      <div
        style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column'}}
        >

            <h3
            style={{ color: '#F26B3F'}}
            >Need to contact SRI?</h3>
            <h5
            style={{ color: 'grey', paddingBottom: '1rem'}}
            >Please fill out the below form with your request.</h5>
            <p>Use our <a 
            style={{ textDecoration: 'none', color: '#F26B3F'}}
            href='https://help.sriservices.com/_hcms/mem/login?__hstc=199601388.05e43f98018768f20d1dd3fb860ba766.1685564802941.1687830851881.1687867233484.8&__hssc=199601388.3.1687867233484&__hsfp=771306454&redirect_url=https%3A%2F%2Fhelp.sriservices.com%2Ftickets-view%3F__hstc%3D199601388.05e43f98018768f20d1dd3fb860ba766.1685564802941.1687830851881.1687867233484.8%26__hssc%3D199601388.3.1687867233484%26__hsfp%3D771306454'
            
            >customer portal </a>
            to check on the status of an existing ticket.
You may also try searching our knowledge base for helpful articles which may answer your question.</p>
    <p>You may also try searching our <a 
    href='https://help.sriservices.com/knowledge?__hstc=199601388.05e43f98018768f20d1dd3fb860ba766.1685564802941.1687830851881.1687867233484.8&__hssc=199601388.3.1687867233484&__hsfp=771306454'
    style={{ textDecoration: 'none', color: '#F26B3F'}}
     >

    knowledge base </a> for helpful articles which may answer your question.</p>




            </div>
      <div
      style={{ padding: '2rem', margin: '2rem', border: '1px solid #F26B3F', borderRadius: '5px' }}
      
      id="hubspot-form-container"></div>
    </div>
  );
}

export default Support;
