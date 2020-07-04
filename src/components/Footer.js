import React from 'react';
import "./styles/footer.css";

//Footer
function Footer() {
    return (
      <footer className="footer">
        <span>Employee Directory { new Date().getFullYear() }</span>
      </footer>
    );
  }
  
  export default Footer;
  