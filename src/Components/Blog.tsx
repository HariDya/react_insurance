
// import React from 'react'
import humanpic from "/assets/intro-desktop.jpg"
import mobilehuman from "/assets/image-intro-mobile.jpg"
import { motion } from "framer-motion"


const Blog = () => {
  const bannerImage = {
    visible: { x:  0, opacity: 1, transition: { duration: .5 } },
    hidden: { x: 100, opacity: 0 },
  };



  return (
    <main className="banner">
         <div className="contaniner">
            <div className="inner-banner">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={bannerImage}
                className="human-content">
                    <h1>Humanizing your insurance.</h1>
                    <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you.
                         Ensure you and your loved ones are protected.</p>
                         <div className="btn1"><a href="#">View plans</a></div>    


                </motion.div>
                <div className="humanpic">
                  <img src={humanpic} className="humandesktop" alt="human-pic" />
                  <img src={mobilehuman} className="mobilehuman" alt="mobile" />
                    
                </div>



            </div>

        </div>

    </main>
  )
}

export default Blog