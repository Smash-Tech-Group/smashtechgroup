import { useState } from 'react';
import { UilArrowRight }  from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import ceo from './../../../../assets/images/_about/CEO.png';
import vivian from './../../../../assets/images/_about/Vivian.png';

const MissionCEO = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('Integrity');

  // Tab content data
  const tabContent = {
    Integrity: "At the heart of Smash Technology Limited is a relentless drive to innovate and push the boundaries of what's possible. We constantly seek new and creative ways to solve problems and deliver cutting-edge solutions that set us apart from the competition.",
    Innovation: "Innovation drives progress. We challenge norms and explore uncharted territories to bring value to our clients and industry.",
    Excellence: "We strive for excellence in everything we do, ensuring quality, precision, and impact in every deliverable.",
    Collaboration: "Collaboration is key to our success. We work closely with our clients, partners, and team to achieve shared goals.",
  };
  
  return (
    <>
    <div className="sections" id="about_missionceo">
        <h2>Our Mission &amp; Vision</h2>
        
        <div className="zy-c1 zy-c1-sm zy-c1-xs text-center">
          <p>Smash Technology's aims at revolutionizing the tech industry by delivering innovative, user-centric solutions that transform everyday experiences 
            across e-commerce, transport, real estate, food delivery, and investment, with a vision to be a global leader in technology, driving progress 
            and redefining industries through sustainable innovations that inspire connectivity, growth, and a tech-savvy future.</p>
        </div>
    </div>

    <div className="c2 c1-sm c1-xs ceo-div">
        <img src={ceo} title="" alt="" />
        
        <div>
            <h2>Paul Eigbefoh</h2>
            <h4>Chief Executive Officer (CEO), Smash Technology</h4>
            <hr />
            
            <p>Paul Eigbefoh is the visionary CEO of Smash Technology, a trailblazing company at the forefront of innovation in e-commerce, transport, 
            travels, real estate, food delivery, and investment solutions. With a passion for technology and a keen eye for transformative opportunities, 
            Paul has spearheaded the development of user-centric platforms that redefine convenience and connectivity. </p>
            
            <p>Under his leadership, 
            Smash Technology has grown into a dynamic force in the tech industry, driven by a commitment to sustainability, innovation, and empowering 
            individuals and businesses worldwide.</p>

            <p><Link to="/about" className="smashtech-button swipe-button">Read more <UilArrowRight /></Link></p>
        </div>
    </div>

    <div className="sections" id="about_missionceo">
        {/* Our Core Values */}
        <h2 id="core_values">Our Core Values</h2>
        
        <div className="tab-container">
            {/* Tabs */}
            <div className="tabs">
                {Object.keys(tabContent).map((tab) => (
                <button
                    key={tab}
                    className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
                ))}
            </div>
        </div>

        <div className="tab-content zy-c1 zy-c1-sm zy-c1-xs text-center">
            <p>{tabContent[activeTab]}</p>
        </div>
    </div>

    <div class="grey" id="commitment_to_sustainability">
        <div className="sections" id="about_missionceo">
            <h2>Commitment to Sustainability</h2>
            
            <div className="zy-c1 zy-c1-sm zy-c1-xs text-center">
            <p>Smash Technology is committed to sustainability by integrating eco-friendly practices and innovative solutions across our platforms. We strive 
                to minimize environmental impact, optimize resource use, and drive progress that benefits both people and the planet, shaping a future where 
                technology and sustainability work hand in hand.</p>
            </div>
        </div>

        <div className="sections commitment-quality" id="about_missionceo">
            {/* Commitment to Quality */}
            <h2 id="commitment_to_quality">Commitment to Quality</h2>
        </div>

        <div className="c3 c1-sm c1-xs text-center commitment-quality">
            <div>
                <h4>Rigorous Testing</h4>
                <p>At Smash Technology Limited, we are dedicated to delivering products and services of the highest quality. Our development process includes 
                extensive testing to identify and address any issues before release, ensuring our solutions meet the most stringent quality standards.</p>
            </div>

            <div>
                <h4>Continuous Improvement</h4>
                <p>We are constantly seeking ways to enhance our offerings and refine our processes. Our teams actively monitor customer feedback and industry trends, 
                using that insight to drive continuous improvements that keep our solutions ahead of the curve.</p>
            </div>

            <div>
                <h4>Quality Certifications</h4>
                <p>To demonstrate our commitment to quality, we have aligned our practices and policies with frameworks such as ISO 9001, CMMI, NIST, and 
                ISO 27001, which is an indication of our dedication to consistent, secure and reliable service delivery.</p>
            </div>
        </div>

        {/* Exceptional Customer Service */}
        <div className="sections exceptional-customer" id="about_missionceo">
            <h2>Exceptional Customer Service</h2>
        </div>

        <div className="c2 c1-sm c1-xs exceptional-customer" id="exceptional_cs">
            <img src={vivian} title="" alt="" />
        
            <div>
                <p>Our dedicated customer service team is always available to promptly address any inquiries or issues you may have. We pride ourselves on our 
                quick response times and our ability to provide personalized solutions to meet your unique needs. </p><br />
                
                <p>We understand that every business is 
                different, which is why we take the time to understand your specific challenges and requirements. Our team will work closely with you to 
                develop custom-tailored solutions that deliver maximum value and efficiency.</p>
            </div>
        </div>
    </div>
    </>
  )
}
export default MissionCEO;