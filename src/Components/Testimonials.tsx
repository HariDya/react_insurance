

import testi from "/assets/avatar-02.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";







const Testimonials = () => {
    
const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  return (

    <Slider {...settings}>
    <div className="outer-testi">
        <div className="inner-backgroundimg">
            <div className="contaniner">
            <div className="testimonial-content">
            <h5>TESTIMONIAL</h5>
                    <h2>What our clients say</h2>
                    <p>" Your company is truly upstanding and is behind its product 100%. We've used insurance for the last five years. It fits our needs perfectly.
                         Nice work on your insurance. It's incredible ".</p>

                         <div className="authour">
                         <div className="inner-authour">
                         <div className="authour-img">
                         <img src={testi} alt="logo" title="testi"/>
                                </div>
                                <div className="authour-content">
                                    <h5>Georgia Holden</h5>
                                    <h6>- Business Advisor</h6>
                                    
                                     </div>

                            </div>


                         </div>


            </div>

            

            </div>

        </div>
    
    
    </div>

    <div className="outer-testi">
        <div className="inner-backgroundimg">
            <div className="contaniner">
            <div className="testimonial-content">
            <h5>TESTIMONIAL</h5>
                    <h2>What our clients say</h2>
                    <p>" Your company is truly upstanding and is behind its product 100%. We've used insurance for the last five years. It fits our needs perfectly.
                         Nice work on your insurance. It's incredible ".</p>

                         <div className="authour">
                         <div className="inner-authour">
                         <div className="authour-img">
                         <img src={testi} alt="logo" title="testi"/>
                                </div>
                                <div className="authour-content">
                                    <h5>Georgia Holden</h5>
                                    <h6>- Business Advisor</h6>
                                    
                                     </div>

                            </div>


                         </div>


            </div>

            

            </div>

        </div>
    
    
    </div>

    <div className="outer-testi">
        <div className="inner-backgroundimg">
            <div className="contaniner">
            <div className="testimonial-content">
            <h5>TESTIMONIAL</h5>
                    <h2>What our clients say</h2>
                    <p>" Your company is truly upstanding and is behind its product 100%. We've used insurance for the last five years. It fits our needs perfectly.
                         Nice work on your insurance. It's incredible ".</p>

                         <div className="authour">
                         <div className="inner-authour">
                         <div className="authour-img">
                         <img src={testi} alt="logo" title="testi"/>
                                </div>
                                <div className="authour-content">
                                    <h5>Georgia Holden</h5>
                                    <h6>- Business Advisor</h6>
                                    
                                     </div>

                            </div>


                         </div>


            </div>

            

            </div>

        </div>
    
    
    </div>
    </Slider>
  );
};

export default Testimonials