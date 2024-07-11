import React from "react";
import { assets } from "../../assets/assets";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h2 className="logo">Food<span className="text-warning">Ferry</span></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quia
            dolore natus laboriosam iure! Iste, adipisci? Quaerat vel ex nemo
            sit architecto, facilis minima, iusto incidunt a totam, laboriosam
            ipsum!
          </p>
          <div className="footer-social-icons">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div className="footer-content-center">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <ul>
            <li>+1-22-456-7890</li>
            <li>content@foodferry.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; FoodFerry.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
