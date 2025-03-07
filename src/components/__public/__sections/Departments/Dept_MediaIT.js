import { useState, useEffect } from 'react';
import Header from '../../__layouts/Header';
import { Helmet } from 'react-helmet';
import Banner_otherpages from '../_Banner_otherpages';
import image from '../../../../assets/images/dept/smashtravels.jpg';
import gracious from '../../../../assets/images/dept/single/Gracious.jpg';
import valentine from '../../../../assets/images/dept/single/Valentine.jpg';
import victor from '../../../../assets/images/dept/single/Victor.jpg';
import chris from '../../../../assets/images/dept/single/Chris.jpg';
import uwem from '../../../../assets/images/dept/single/Uwem.jpg';
import vivian from '../../../../assets/images/dept/single/Vivian.jpg';
import segun from '../../../../assets/images/dept/single/Segun.jpg';
import { UilArrowRight, UilBookMedical, UilLinkedin } from '@iconscout/react-unicons';

import { Link } from 'react-router-dom';

const Dept_MediaIT = (props) => {
    const [activeTab, setActiveTab] = useState('Gracious');
    
    const tabContent = {
        Gracious: { content: <img src={gracious} alt="Gracious" />, description: 'Head of Media & IT', linkedin: 'https://www.linkedin.com/in/gracious-onyeahialam-3a52a918a' }, 
        Valentine: { content: <img src={valentine} alt="Valentine" />, description: 'Lead Designer', linkedin: 'https://www.linkedin.com/in/mamah-valentine-964a2a184/' },
        Victor: { content: <img src={victor} alt="Victor" />, description: 'IT Support/Frontend Dev', linkedin: 'https://www.linkedin.com/in/obike-victor-7ba93319a/' }, 
        // Peter: { content: <img src={image} alt="Peter" />, description: 'Social Media Executive' },
        Chris: { content: <img src={chris} alt="Chris" />, description: 'Graphic Designer', linkedin: 'https://www.linkedin.com/in/chris-chiboka-36b6b7203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
        Uwem: { content: <img src={uwem} alt="Uwem" />, description: 'Lead Full Stack Engineer', linkedin: 'https://www.linkedin.com/in/uwem-akpabot/' }, 
        Vivian: { content: <img src={vivian} alt="Vivian" />, description: 'Team Lead, Social Media/Content', linkedin: 'https://www.linkedin.com/in/greatness-ezeonwuka-947058233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
        Olusegun: { content: <img src={segun} alt="Olusegun" />, description: 'Software Developer', linkedin: 'https://www.linkedin.com/in/olusegun-omogbehinmi/' }
    };

    useEffect(() => {
        document.title = `${props.company} - Media & IT Department`;
    }, []);

    return (
    <>  
    <Helmet>
      <link href="/reg/css/bootstrap.min.css" rel="stylesheet" />
    </Helmet>
    
    <Header />    
    <Banner_otherpages title="Media & IT Department" image={image} />

    <div className="sections" id="about_people">
        <h2>Meet The IT Team</h2>
        
        <div className="text-center">
            <p>Our IT team is the backbone of innovation at Smash Technology. Comprising skilled developers, designers, and tech strategists, they bring our ideas to life with cutting-edge solutions and seamless user experiences. From creating intuitive apps to maintaining secure and reliable systems.
            Get to know the brilliant minds behind our digital excellence.</p>

            <div className="text-center">
                <br />
                <p><Link to="/smash-people" className="back">Back To All Departments <UilArrowRight /></Link></p>
            </div>
        </div>
    </div>

    <div className="c1_2 c1-sm c1-xs" id="dept">
        {/* Active Tab Content */}
        <div className="tab-content">
            {/* The Image on the left */}
            {tabContent[activeTab]?.content} 
        </div>

        <div className="dept_right">
            {Object.keys(tabContent).map((tab) => (
            <div key={tab} style={{ display: 'flex' }}>
                {/* Tab Button */}
                <h3
                    className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </h3>

                {/* Description with Link */}
                {tabContent[tab]?.description && (
                    <>
                    {tabContent[tab].description}
                    <a href={tabContent[tab].linkedin} title="Full profile"><UilLinkedin /></a>
                    </>
                )}
            </div>
            ))}
        </div>
    </div>
    </>
  )
}
export default Dept_MediaIT