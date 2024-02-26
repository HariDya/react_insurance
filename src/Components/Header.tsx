import logo from "../assets/logo6.webp";
import { useState } from "react";




const Header = () => {


  const [active, setActive] = useState("nav__menu");
   const [icon, setIcon] = useState("nav__toggler");
   const navToggle = () => {
     if (active === "nav__menu") {
       setActive("nav__menu nav__active");
     } else setActive("nav__menu");
 
     // Icon Toggler
     if (icon === "nav__toggler") {
       setIcon("nav__toggler toggle");
     } else setIcon("nav__toggler");
   }


  return (
    <>
      <header className="header">
        <div className="contaniner">
          <div className="header-content">
          <div className="logo">
            <img src={logo} alt="logo" title="logo" />
          </div>

          
          <div className="nav-bar">
            <ul className="menu">
             <li><a href="#"> How we work</a></li>
              <li><a href="#"> Blog</a></li>
              <li><a href="#"> Account</a></li>
              <li><a href="#"> About</a></li>
              
              
            </ul>
            
          </div>




          <nav className="nav-hamburger">
       
       <ul className={active}>
         <li className="nav__item">
           <a href="#" className="nav__link">
           How we work
           </a>
         </li>
         <li className="nav__item">
           <a href="#" className="nav__link">
           Blog
           </a>
         </li>
         <li className="nav__item">
           <a href="#" className="nav__link">
           Account
           </a>
         </li>
         <li className="nav__item">
           <a href="#" className="nav__link">
           About
           </a>
         </li>
         <li className="nav__item">
           <a href="#" className="nav__link">
           Contact
           </a>
         </li>

         <div className="nav-btn1"><a href="#">View plans</a></div>


       </ul>
       <div onClick={navToggle} className={icon}>
         <div className="line1"></div>
         <div className="line2"></div>
         <div className="line3"></div>
       </div>
       
      
       
     </nav>




          <div className="btn1"><a href="#">View plans</a></div>
        </div>
        </div>
      </header>
    </>
  );
};

export default Header;
