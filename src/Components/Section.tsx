// import React from 'react'
import snappy from "/assets/icon-snappy-process.svg";
import affordable from "/assets/icon-affordable-prices.svg";
import man from "/assets/icon-people-first.svg";
import { motion } from "framer-motion"



const Section = () => {

    const blogSection = {
        visible: { x:  0, opacity: 1, transition: { duration: .5 } },
        hidden: { x: 200, opacity: 0 },
      };


  return (
    <section className="section">
        <div className="inner-section">
            <div className="contaniner">
               <div className="section-heading">
                <h1>We're different</h1>
               </div>
               <div className="feature">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={blogSection} 
                
                className="inner-feature">
                    <img src={snappy} alt="icon-snappy-process" title="icon-snappy-process"/>
                    <h5>Snappy Process</h5>
                    <p>Our application process can be completed in minutes. Don't get stuck filling in tedious forms.</p>


                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={blogSection}
                
                className="inner-feature">
                    <img src={affordable} alt="icon-affordable-prices" title="icon-affordable-prices"/>
                    <h5>Affordable Prices</h5>
                    <p>We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>


                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={blogSection} 
                
                className="inner-feature">
                    <img src={man} alt="icon-people-firsts" title="icon-people-first"/>
                    <h5>People First</h5>
                    <p>Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.</p>


                </motion.div>


               </div>
            </div>

        </div>



    </section>

  )
}

export default Section