import { useState, useEffect } from 'react';
import Header from '../../__layouts/Header';
import { Helmet } from 'react-helmet';
import Banner_otherpages from '../_Banner_otherpages';
import image from './../../../../assets/images/dept/smashtravels.jpg';
import charity from '../../../../assets/images/dept/single/Charity.jpg';
import evelyn from '../../../../assets/images/dept/single/Evelyn.jpg';
import thelma from '../../../../assets/images/dept/single/Thelma.jpg';
import { UilInfoCircle, UilArrowRight } from '@iconscout/react-unicons';

import { Link } from 'react-router-dom';

const Dept_SmashTravels = (props) => {
    const [activeTab, setActiveTab] = useState('Charity');
    
    const tabContent = {
        Charity: { content: <img src={charity} alt="Charity" />, description: 'Customer Support' }, 
        Evelyn: { content: <img src={evelyn} alt="Evelyn" />, description: 'Customer Support' },
        Thelma: { content: <img src={thelma} alt="Thelma" />, description: 'Customer Support' }
    };

    useEffect(() => {
        document.title = `${props.company} - Smash Travels Team`;
    }, []);

    return (
    <>  
    <Helmet>
      <link href="/reg/css/bootstrap.min.css" rel="stylesheet" />
    </Helmet>
    
    <Header />
    <Banner_otherpages title="CS Department Smash Travels" image={image} />

    <div className="sections" id="about_people">
        <h2>Meet The Smash Travels Team</h2>
        
        <div className="text-center">
            <p>At Smash Travels, we’re dedicated to assisting you with all your travel needs, including processing work visas and securing 
            proof of funds for your travel. Our dedicated customer support team ensures a seamless experience, guiding you through every step of your journey. 
            Whether it’s securing a visa, adjusting travel plans, or answering your queries, we’re committed to making your travel stress-free and efficient.</p>

            <div className="text-center">
                <br />
                <p><Link to="/smash-people" className="back">Back To All Departments <UilArrowRight /></Link></p>
            </div>
        </div>
    </div>

    <div className="c1_2 c1-sm c1-xs" id="dept">
        {/* Active Tab Content */}
        <div className="tab-content">{tabContent[activeTab]?.content}</div>

        <div className="dept_right">
            {Object.keys(tabContent).map((tab) => (
            <div key={tab} className="c3">
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
                    <Link to="/about" title="Full profile"><UilInfoCircle /></Link>
                    </>
                )}
            </div>
            ))}
        </div>
    </div>
    </>
  )
}
export default Dept_SmashTravels