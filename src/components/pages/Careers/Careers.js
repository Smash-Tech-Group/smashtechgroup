import { useEffect } from 'react';
import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';
import image from '../../../assets/images/_about/about_banner.jpg';
import icon from '../../../assets/images/icons/rocket.png';
import frame from '../../../assets/images/icons/Frame269.png';
import frame2 from '../../../assets/images/icons/Frame270.png';
import recommend from '../../../assets/images/careers_and_blog/recommend.JPG';
import { Link } from 'react-router-dom';
import Header from '../../__public/__layouts/Header';
import { UilBriefcase, UilLocationPoint } from '@iconscout/react-unicons';
import Map from '../../__public/__sections/_Map';

const Careers = (props) => {
    useEffect(() => {
        document.title = `${props.company} — Careers`;
    }, []);

    return (
    <>      
    <Header />    
    <Banner_otherpages title="Careers" image={image} />

    <div className="sections" id="about_people">
        <div className="flex careers-flex">
            <img src={icon} className="careers-icon" /> 
            <h2>Launch Your <span>Career</span> With Us</h2>
        </div>

        <div className="flex careers-flex">
            <span className="nbsp">&nbsp; </span>
            <p>Are you passionate about technology and innovation? Do you thrive in a fast-paced environment? &nbsp;
            <b>Smash Technology</b> is a dynamic and growing company looking for talented individuals to join our team. 
            We offer a unique opportunity to work on cutting-edge technologies and shape the future of app-based services.</p>
        </div>
    </div>
    
    <div className="sections" id="careers">
        <h2>Current Openings</h2>
        <p className="text-center">We are currently seeking qualified candidates for these positions</p>

        <h5>Vacant Positions: 3</h5>
        
        <div className="c2_1 c1-sm c1-xs">
            <div className="c1">
                <div className="careers-cards">
                    <div className="flex">
                        <h3>Product Designer</h3>
                        19 days ago
                    </div>
                    <div>
                        <span><UilBriefcase /> Full Time</span> &nbsp; 
                        <span><UilLocationPoint /> Abuja</span>
                    </div>
                    <div>
                        <p>As a dynamic and growing company looking for talented individuals to join our team,
                            we offer a unique opportunity to work on cutting-edge technologies and shape the future of 
                            app-based services we offer a unique opportunity to work on cutting-edge technologies and shape the future of 
                            app-based services. <Link to="/" className="">Read more </Link> 
                        </p>
                        <Link to="/job-application" className="smashtech-button swipe-button">Apply</Link>
                    </div>
                </div>

                <div className="careers-cards">
                    <div className="flex">
                        <h3>Customer Service Representative</h3>
                        19 days ago
                    </div>
                    <div>
                        <span><UilBriefcase /> Full Time</span> &nbsp; 
                        <span><UilLocationPoint /> Abuja</span>
                    </div>
                    <div>
                        <p>As a dynamic and growing company looking for talented individuals to join our team,
                            we offer a unique opportunity to work on cutting-edge technologies and shape the future of 
                            app-based services we offer a unique opportunity to work on cutting-edge technologies and shape the future of 
                            app-based services. <Link to="/" className="">Read more </Link> 
                        </p>
                        <Link to="/job-application" className="smashtech-button swipe-button">Apply</Link>
                    </div>
                </div>

                <div className="careers-cards">
                    <div className="flex">
                        <h3>Customer Service Representative</h3>
                        19 days ago
                    </div>
                    <div>
                        <span><UilBriefcase /> Full Time</span> &nbsp; 
                        <span><UilLocationPoint /> Abuja</span>
                    </div>
                    <div>
                        <p>As a dynamic and growing company looking for talented individuals to join our team,
                            we offer a unique opportunity to work on cutting-edge technologies and shape the future of 
                            app-based services we offer a unique opportunity to work on cutting-edge technologies and shape the future of 
                            app-based services. <Link to="/" className="">Read more </Link> 
                        </p>
                        <Link to="/job-application" className="smashtech-button swipe-button">Apply</Link>
                    </div>
                </div>
            </div>

            <div id="recommend">
                <img src={recommend} title="" alt="" />
                <img src={recommend} title="" alt="" />
            </div>
                
        </div>
        
    </div>

    <div className="sections" id="about_people">
        <h2>Why Choose Smash Technology?</h2>
        
        <div className="flex careers">
            <img src={frame} title="" alt="" />

            <div className="careers-cards">
                <div>
                    <h3 className="text-center">Work on industry-leading products</h3>
                </div>

                <p>Be part of a team developing and maintaining innovative apps used by millions globally.</p>
            </div>

            <img src={frame2} title="" alt="" />
        </div>
    </div>

    <Map />
    </>
  )
}
export default Careers;