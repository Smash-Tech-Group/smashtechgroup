import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';
import image from '../../../assets/images/otherpages/faq.jpg';
import Header from '../../__public/__layouts/Header';
import Map from '../../__public/__sections/_Map';

const Faq = (props) => {
    useEffect(() => {
        document.title = `${props.company} — FAQ`;
    }, []);

    return (
    <>  
    <Helmet>
      <script src="/js/bootstrap.min.js"></script>
    </Helmet>
    
    <Header />
    <Banner_otherpages title="FAQs" image={image} />
    
    <div className="sections c2_1 c1-sm c1-xs faq" id="careers">
        <div>
            <h2 style={{ lineHeight: '120%' }}>Frequently Asked Questions</h2>
            <p>Everything you need to know about Smash Technology</p>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Is Smash Technology Registered?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Yes, Smash Technology Limited is a fully registered company in Nigeria. All of our subsidiaries and brands are also registered with CAC of the Federal Republic of Nigeria
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            How do I book a ride with Smash Technology?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Booking a ride is easy! Simply open the Ride Smash app, enter your pickup location, choose your destination, and select the type of ride you prefer. 
                            You’ll be matched with a nearby driver in minutes.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            How does the Hire Purchase option work?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Our Hire Purchase service allows you to purchase items through affordable 
                            installment plans. You can select the product you'd like to buy, agree on 
                            payment terms, and make monthly payments until the item is fully paid off. 
                            Learn more through our Hire Purchase section on the app or website.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                        How much does it cost to start investing with Smash Technology?
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        It costs as low as a minimum of N150,000 to start investing with smash Technology. 
                        We have the <b>Micro Investment</b> which spans from <b>N150,000 - N450,000</b>, 
                        <b>Macro Investment</b> which spans from <b>N500,000 - N5,000,000</b> and finally the <b>Platinum Investment</b> which spans 
                        from <b>N5,000,000 and above</b>.
                    </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                        How can I use Smash Technology’s services?
                    </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            To use any of our services, simply download our app or visit our website. Each service is designed with simplicity in mind:
                            <p><strong>For E-hailing & Ride Sharing: </strong>Sign up, choose your ride, and track your driver.</p>

                            <p><strong>For E-commerce & Food Delivery: </strong>Browse through a wide range of products or restaurants, place your order, and enjoy hassle-free delivery.</p>
                            <p><strong>For Hire Purchase & Rentals: </strong>Choose your product, apply for financing or book a rental, and enjoy the flexibility we offer.</p>
                        </div>
                    </div>
                </div>


                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                        How can I stay updated on new services or offers from Smash Technology?
                    </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        You can stay updated by subscribing to our newsletter, following us on social media, or checking our blog for the latest news, service updates, and special promotions.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                        What happens if I have a problem with my order or service?
                    </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            If you experience any issues with your order or service, please contact our support team immediately. We are committed to 
                            resolving your concerns and ensuring your satisfaction with our products and services.
                        </div>
                    </div>
                </div>






{/* ==== */}
                
                
                {/* <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Does Smashwise charge vendors for item upload?
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        The answer here
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        What is the process for the Ridesmash hire purchase?
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Answer 3 here
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        What countries does Smash Travels process work visas to?
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Answer 4 here
                        </div>
                    </div>
                </div> */}

            </div>        
        </div>

        <div className="pie-div">
            <div className="pie"></div>
            <div className="pie"></div>
            <div className="pie"></div>
            <div className="pie"></div>
            <div className="pie"></div>
            <div className="pie"></div>
        </div>
    </div>

    <Map />
    </>
  )
}
export default Faq;