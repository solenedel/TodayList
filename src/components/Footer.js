import React from 'react';

// eslint-disable-next-line
const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <div className="credits">
        <p>
          This app was made by <a href="https://www.linkedin.com/in/solene-delumeau/">Solène</a>
        </p>
        <p>
          Wave pattern made with <a href="https://svgwave.in/">Svgwave</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
