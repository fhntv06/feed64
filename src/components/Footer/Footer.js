import React from 'react';
import Link from '../Screens/Link/Link';

const Footer = ({ up }) => (
  <footer className="footer grid-container">
    <Link href="#about" data-anchor="#about" className={`footer__scroll ${up ? 'footer__scroll--up' : ''}`}>
      <span className="pre-text pre-text--gray">SCROLL</span>
      <div className="edge">
        <svg id="edge" xmlns="http://www.w3.org/2000/svg" width="35" height="43" viewBox="0 0 35 43" fill="none"><path d="M0.500006 19.3801C0.500007 9.25023 8.14383 1.09961 17.5 1.09962C26.8562 1.09962 34.5 9.25023 34.5 19.3801C34.5 24.4532 32.5791 30.1591 29.4652 34.592C26.3452 39.0337 22.1024 42.0996 17.5 42.0996C12.8976 42.0996 8.65481 39.0337 5.53478 34.592C2.42093 30.1591 0.500005 24.4532 0.500006 19.3801Z" stroke="white"/><path d="M1 20H4.5C5.05228 20 5.5 20.4477 5.5 21V21.5C5.5 22.0523 5.94772 22.5 6.5 22.5H9.5C10.0523 22.5 10.5 22.0523 10.5 21.5V21C10.5 20.4477 10.9477 20 11.5 20H19.5C20.0523 20 20.5017 20.4479 20.4915 21C20.4657 22.3987 20.3761 23.6384 20.1556 25.3568C20.0782 25.9604 20.5445 26.5 21.153 26.5C23.5218 26.5 25.8799 26.5 27.2803 26.5C27.7108 26.5 28.094 26.2257 28.2094 25.811C28.5652 24.5326 28.8839 22.8013 28.9744 20.9996C29.0021 20.4481 29.4478 20 30.0001 20C32.2809 20 33.9156 20 34.5 20" stroke="white"/></svg>
        <div className="arrow">
          <svg id="arrow" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.96875 1.27344L8.24219 8.54687L15.5156 1.27344" stroke="white"/></svg>
        </div>
      </div>
    </Link>
  </footer>
);

export default Footer;
