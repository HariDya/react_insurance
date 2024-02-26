import card from "/assets/service-1.jpg"
import health from "/assets/service-3.jpg"
import business from "/assets/service-6.jpg"

import { FaArrowRightLong } from "react-icons/fa6";


const Service = () => {
  return (
    <div className="outer-service">
        <div className="contaniner">
            <div className="inner-service">
                <div className="service-heading">
                    <h4>OUR SERVICES</h4>
                    <h2>Our Awesome Services</h2>
                </div>
                <div className="service-card">
                    <div className="inner-service-card">
            
                        <div className="service-content">
                            <div className="service-img">
                            <img src={card} alt="life-insurance"  title="life-insurance" />
            
                            </div>
                            <div className="service-details">
                                <h4>Life Insurance</h4>
                                <p>We help you discover any protection inclusions that are ideal for you.</p>
                                <div className="read-btn"><a href="#">Read more <FaArrowRightLong  />  </a></div>
                            </div>
                        </div>
                        <div className="service-content">
                            <div className="service-img">
                            <img src={health} alt="health-insurance"  title="health-insurance" />
            
                            </div>
                            <div className="service-details">
                                <h4>Health Insurance</h4>
                                <p>We help you discover any protection inclusions that are ideal for you.</p>
                                <div className="read-btn"><a href="#">Read more <FaArrowRightLong  />  </a></div>
                            </div>
                        </div>
                        <div className="service-content">
                            <div className="service-img">
                            <img src={business} alt="business-insurance"  title="business-insurance" />
            
                            </div>
                            <div className="service-details">
                                <h4>Businessife Insurance</h4>
                                <p>We help you discover any protection inclusions that are ideal for you.</p>
                                <div className="read-btn"><a href="#">Read more <FaArrowRightLong  />  </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Service