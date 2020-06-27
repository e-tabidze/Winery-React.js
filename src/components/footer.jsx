import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import "../CSS/footer.css";
import WinePage from "./winePage";
import grapes1 from "../photos/grapes1.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footerimage">
        <img src={grapes1} className="grapes1" alt="grapes1" />
      </div>
      <div className="menu">
        <div className="wines">
          <ul>
            <li>
              <Link to="/wines">Wines</Link>
            </li>
            <li>Brands</li>
            <li>
              <Link to="/aboutgeorgia">About Georgia</Link>
            </li>
          </ul>
        </div>
        <div className="partners">
          <ul>
            <li>Stores</li>
            <li>Distributors</li>
            <li>Brands</li>
          </ul>
        </div>
        <div className="contactUs">
          <ul>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
