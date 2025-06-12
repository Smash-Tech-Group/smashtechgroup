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
            <h2 id="bigText">Launch Your <span>Career</span> With Us</h2>
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

        <h5>Vacant Positions: 0</h5>
        
        <div className="c2_1 c1-sm c1-xs">
            <div className="c1">
                <div className="careers-cards">
                    <div className="flex">
                        <h3>Auditor - Accountant</h3>
                        On-Site
                    </div>
                    <div>
                        <span><UilBriefcase /> Full Time</span> &nbsp; 
                        <span><UilLocationPoint /> Abuja (300k Salary)</span>
                    </div>
                    <div>
                        <p>
                            Minimum of 5 years' experience as an external audit and risk advisor.<br></br>
                            Professional certifications in either ACA, ACCA, CIA or CISA.<br></br>
                            BSc or its equivalent in Accountant/Statistis.<br></br>
                            Proficiency in accounting software (eg. Sage, SAP, Oracle, IFRS and GAAP),
                            data-analysis tools (Excel, Power BI), and audit-management systems.<br></br>
                            Execellent communication, Analitical thinking and interpersonal skils.<br></br>
                            Tech Savvy and highly confidental.
                            {/* <Link to="/" className="">Read more </Link>  */}
                        </p>
                        <h5>Send your CV to <i>hr@smashtechgroup.com</i></h5>
                        {/* <Link to="/job-application" className="smashtech-button swipe-button">Apply</Link> */}
                    </div>
                </div>

                <div className="careers-cards">
                    <div className="flex">
                        <h3>Customer Service</h3>
                        On-Site
                    </div>
                    <div>
                        <span><UilBriefcase /> Full Time</span> &nbsp; 
                        <span><UilLocationPoint /> Abuja, Lagos and Benin (150k Salary)</span>
                    </div>
                    <div>
                        <p>
                            BSc or its equivalent.<br></br>
                            Minimum of 3 years experience.<br></br>
                            Abiliy to work under pressure.<br></br>
                            Excellent communication, problem-solving and interpersonal skills.<br></br>
                            Tech Savvy and sound knowledge of CRM tools.<br></br>
                            Expertise in negotiation and closing deals.
                            {/* <Link to="/" className="">Read more </Link>  */}
                        </p>
                        <h5>Send your CV to <i>hr@smashtechgroup.com</i></h5>
                        {/* <Link to="/job-application" className="smashtech-button swipe-button">Apply</Link> */}
                    </div>
                </div>

                <div className="careers-cards">
                    <div className="flex">
                        <h3>Sales Executive</h3>
                        On-Site
                    </div>
                    <div>
                        <span><UilBriefcase /> Full Time</span> &nbsp; 
                        <span><UilLocationPoint /> Abuja. Lagos and Benin (120k Salary)</span>
                    </div>
                    <div>
                        <p>
                            BSc or its equivalent.<br></br>
                            Minimum of 3 years experience with solid marketing strategies.<br></br>
                            Execellent interpersonal, negotiation, and communication skills.<br></br>
                            Solid revenue-generation ability.<br></br>
                            Tech Savvy and sound knowledge of CRM tools.<br></br>
                            Sales expertise in relationship bulding and dea-closing.<br></br>
                            Demonstrated ability to exceed aggressive sales targets and KPIs
                            {/* <Link to="/" className="">Read more </Link>  */}
                        </p>
                        <h5>Send your CV to <i>hr@smashtechgroup.com</i></h5>
                        {/* <Link to="/job-application" className="smashtech-button swipe-button">Apply</Link> */}
                    </div>
                </div>

                <div className="careers-cards">
                    <div className="flex">
                        <h3>Female P.A</h3>
                        On-Site
                    </div>
                    <div>
                        <span><UilBriefcase /> Full Time</span> &nbsp; 
                        <span><UilLocationPoint /> Abuja (250k Salary)</span>
                    </div>
                    <div>
                        <p>
                            BSc or its equivalent.<br></br>
                            Minimum of 3 years experience.<br></br>
                            Flexible work shift and highly confidential persona.<br></br>
                            Execellent attentive, communication and organizatinal interpersonal skills.<br></br>
                            Tech Savvy and sound knowledge in virtual assitance.<br></br>
                            Expertise in meeting coordination and report writting.<br></br>
                            Ability to maintain confidentiality and handle sensitive information with discretion.<br></br>
                            Attention to detail and creative problem solving abilities.
                            {/* <Link to="/" className="">Read more </Link>  */}
                        </p>
                        <h5>Send your CV to <i>hr@smashtechgroup.com</i></h5>
                        {/* <Link to="/job-application" className="smashtech-button swipe-button">Apply</Link> */}
                    </div>
                </div>

                <div className="careers-cards">
                    <div className="flex">
                        <h3>Customer Support</h3>
                        On-Site
                    </div>
                    <div>
                        <span><UilBriefcase /> Full Time</span> &nbsp; 
                        <span><UilLocationPoint /> Abuja, Lagos and Benin (150k Salary)</span>
                    </div>
                    <div>
                        <p>
                            BSc or its equivalent.<br></br>
                            Minimum of 3 years experience.<br></br>
                            Abiliy to work under pressure.<br></br>
                            Excellent communication, problem-solving and interpersonal skills.<br></br>
                            Tech Savvy and sound knowledge of CRM tools.<br></br>
                            Expertise in negotiation and closing deals.
                            {/* <Link to="/" className="">Read more </Link>  */}
                        </p>
                        <h5>Send your CV to <i>hr@smashtechgroup.com</i></h5>
                        {/* <Link to="/job-application" className="smashtech-button swipe-button">Apply</Link> */}
                    </div>
                </div>

                <div className="careers-cards">
                    <div className="flex">
                        <h3>Illustrtor/Motion Designer</h3>
                        On-Site
                    </div>
                    <div>
                        <span><UilBriefcase /> Full Time</span> &nbsp; 
                        <span><UilLocationPoint /> Abuja, Lagos and Benin (150k Salary)</span>
                    </div>
                    <div>
                        <p>
                            BSc or its equivalent.<br></br>
                            Minimum of 3 years experience. Animation skill is anadded advantage.<br></br>
                            Expertise in Adobe After-effects, Adobe illustrator, Photoshop and Figma.<br></br>
                            Excellent creativity, storytelling, communication and interpersonal skills.<br></br>
                            Strong Portfolio link showcasing Adobe After-affect, illustrations and motion design.<br></br>
                            Familiarity with 3D animation tools (Blender, Cinema 4D) is a plus.
                            {/* <Link to="/" className="">Read more </Link>  */}
                        </p>
                        <h5>Send your CV to <i>hr@smashtechgroup.com</i></h5>
                        {/* <Link to="/job-application" className="smashtech-button swipe-button">Apply</Link> */}
                    </div>
                </div>

                <div className="careers-cards">
                    <div className="flex">
                        <h3>Driver</h3>
                        On-Site
                    </div>
                    <div>
                        <span><UilBriefcase /> Full Time</span> &nbsp; 
                        <span><UilLocationPoint /> Abuja (80k Salary)</span>
                    </div>
                    <div>
                        <p>
                            A Minimum of SSCE or its equivalent.<br></br>
                            Strong knowledge of road traffic laws, vehicle maintenance and road networks.<br></br>
                            Minimum of 5 years driving experience.<br></br>
                            Excellent creativity, storytelling, communication and interpersonal skills.<br></br>
                            Valid drivers' license with clean driving record.<br></br>
                            Ability to work Flexible hours, including weekends & pulbic holidays.<br></br>
                            Excellent communication and interpersonal skills.
                            {/* <Link to="/" className="">Read more </Link>  */}
                        </p>
                        <h5>Send your CV to <i>hr@smashtechgroup.com</i></h5>
                        {/* <Link to="/job-application" className="smashtech-button swipe-button">Apply</Link> */}
                    </div>
                </div>

                <div className="careers-cards">
                    <div className="flex">
                        <h3>Business Manager</h3>
                        On-Site
                    </div>
                    <div>
                        <span><UilBriefcase /> Full Time</span> &nbsp; 
                        <span><UilLocationPoint /> Abuja/Lagos (250k Salary)</span>
                    </div>
                    <div>
                        <p>
                            BSc or it equivalent in Admininstration/Management.<br></br>
                            Minimum of 5 years experience as a Closer.<br></br>
                            Excellent communication, interpersonal and leadership skills.<br></br>
                            Tech Savvy and sound knowledge of Business Analysis.<br></br>
                            Expertise in negotiationand closing deals.
                            {/* <Link to="/" className="">Read more </Link>  */}
                        </p>
                        <h5>Send your CV to <i>hr@smashtechgroup.com</i></h5>
                        {/* <Link to="/job-application" className="smashtech-button swipe-button">Apply</Link> */}
                    </div>
                </div>

                <div className="careers-cards">
                    <div className="flex">
                        <h3>Admin and Facility</h3>
                        On-Site
                    </div>
                    <div>
                        <span><UilBriefcase /> Full Time</span> &nbsp; 
                        <span><UilLocationPoint /> Abuja (200k Salary)</span>
                    </div>
                    <div>
                        <p>
                            BSc or it equivalent in Admininstration/Management.<br></br>
                            Minimum of 5 years experience.<br></br>
                            Excellent communication, interpersonal and facility management skills.<br></br>
                            Strong vendor management, negotiation and budgeting abilities.<br></br>
                            Tech Savvy and open to travel.
                            {/* <Link to="/" className="">Read more </Link>  */}
                        </p>
                        <h5>Send your CV to <i>hr@smashtechgroup.com</i></h5>
                        {/* <Link to="/job-application" className="smashtech-button swipe-button">Apply</Link> */}
                    </div>
                </div>
            </div>

            <div id="recommend">
                <img src={recommend} title="" alt="" />
                <img src={recommend} title="" alt="" />
            </div>
                
        </div>
        
    </div>

    {/* <div className="sections" id="about_people">
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
    </div> */}

    <Map />
    </>
  )
}
export default Careers;