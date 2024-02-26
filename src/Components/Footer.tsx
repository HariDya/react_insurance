// import React from 'react'
import logo from "/assets/logo6.webp"
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { motion } from "framer-motion"





const Footer = () => {

    const footeranime = {
        visible: { y:  0, opacity: 1, transition: { duration: 1 } },
        hidden: { y: 100, opacity:1},
      };

  return (
    <footer className="footer">
        <div className="contaniner">
            <div className="inner-footer">
                <div className="footer-logo">
                    <img src={logo} alt="logo" title="logo"/>
                </div>
                <div className="icons">
                    <div className="social-icon">
                        <a href="#"><FaFacebookSquare color={"#2d2640"} fontSize={"25px"} /></a>
                    </div>
                    <div className="social-icon">
                        <a href="#"><FaSquareXTwitter color={"#2d2640"} fontSize={"25px"} /></a>
                    </div>
                    <div className="social-icon">
                        <a href="#"><FaYoutube  color={"#2d2640"} fontSize={"25px"} /></a>
                    </div>
                    <div className="social-icon">
                        <a href="#"><FaInstagramSquare  color={"#2d2640"} fontSize={"25px"} /></a>
                    </div>
                </div>
                


            </div>

            <div className="footer-details">
                <hr></hr>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={footeranime} 
                
                className="details">
                    <div className="company-details">
                        <h5>OUR COMPANY</h5>
                        <ul className="comapy-items">
                            <li><a href="#">HOW WE WORK</a></li>
                            <li><a href="#">WHY INSURE?</a></li>
                            <li><a href="#">CHECK PRICE</a></li>
                            <li><a href="#">REVIEWS</a></li>


                        </ul>
                    </div>

                    <div className="company-details">
                        <h5>HELP ME</h5>
                        <ul className="comapy-items">
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">TERMS OF USE</a></li>
                            <li><a href="#">PRIVACY POLICY</a></li>
                            <li><a href="#">CCOKIES</a></li>
                            



                        </ul>
                    </div>


                    <div className="company-details">
                        <h5> CONTACT</h5>
                        <ul className="comapy-items">
                            <li><a href="#">SALES</a></li>
                            <li><a href="#">SUPPORT</a></li>
                            <li><a href="#">LIVE CHAT</a></li>
                            


                        </ul>
                    </div>
                



                    <div className="company-details">
                        <h5>OTHERS</h5>
                        <ul className="comapy-items">
                            <li><a href="#">CAREERS</a></li>
                            <li><a href="#">PRESS</a></li>
                            <li><a href="#">CHECK PRICE</a></li>
                            <li><a href="#">LICENSES</a></li>


                        </ul>
                    </div>



                </motion.div>
                
                <div className="copy-rights">
                        <hr></hr>
                        <p>&copy;2024 Insurance by <a href="#"> Hariharan 2</a></p>
                    </div>

            </div>
        </div>




    </footer>
  );
};

export default Footer