import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const SecondaryNavbar = () => {

  useEffect(() => {
    // Check if the script is already loaded
    if (!document.getElementById('google-translate-script')) {
      const googleTranslateScript = document.createElement('script');
      googleTranslateScript.type = 'text/javascript';
      googleTranslateScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      googleTranslateScript.id = 'google-translate-script';
      window.googleTranslateElementInit = function() {
        new window.google.translate.TranslateElement({pageLanguage: 'en', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
      };
      document.body.appendChild(googleTranslateScript);
    }
  }, []);

  return (
    <nav className="navbar secondNavbar navbar-expand navbar-light" style={{ backgroundColor: '#F26B3F', height: '1.875rem' }}>
      <div className="container-fluid justify-content-end">
        <div id="google_translate_element" style={{ marginRight: '10px' }}></div>
        <span className="navbar-text text-light" style={{ color: '#6c757d' }}>
          800.800.9588
        </span>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
