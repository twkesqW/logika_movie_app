import "./footer.css";
import React from "react";
import {FaGithub, FaTelegram, FaInstagram} from "react-icons/fa";
import {Link} from "react-router-dom";
const Footer = () => {
  return <div className="footer">
    <div className="footer-container">
      
        <div className="left">
              <div className="name">
                  <div><h4>Розроблено Куземченком Олександром</h4></div>
              </div>
              <div className="from">
                  <h4>Спеціально для Logika School</h4>
              </div>       
        </div>

        <div className="right">
              <div className="social">
                    <span>Social</span>
                    <Link to="https://www.instagram.com/twkesq_olek/"><FaInstagram style={{color:"#fff" , marginRight:"1rem"}} size={20} className="social-link"/></Link>
                    <Link to="https://t.me/twkesq"><FaTelegram style={{color:"#fff" , marginRight:"1rem"}} size={20} className="social-link"/></Link>
                    <Link to="https://github.com/Twkesq"><FaGithub style={{color:"#fff" , marginRight:"1rem"}} size={20} className="social-link"/></Link>
              </div>
        </div>

    </div>
  </div>;
};

export default Footer;