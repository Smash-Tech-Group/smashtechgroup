import { useState, useEffect } from 'react';
import Header from '../../__layouts/Header';
import { Helmet } from 'react-helmet';
import Banner_otherpages from '../_Banner_otherpages';
import image from './../../../../assets/images/dept/ridesmash.jpg';
import favour from '../../../../assets/images/dept/single/Favour.jpg';
import precious from '../../../../assets/images/dept/single/Precious1.jpg';
import innocent from '../../../../assets/images/dept/single/Innocent.jpg';
import { UilInfoCircle, UilArrowRight } from '@iconscout/react-unicons';

import { Link } from 'react-router-dom';

const Dept_Ridesmash = (props) => {
    const [activeTab, setActiveTab] = useState('Favour');
    
    const tabContent = {
        Favour: { content: <img src={favour} alt="Favour" />, description: 'Customer Support' }, 
        Precious: { content: <img src={precious} alt="Precious" />, description: 'Customer Support' },
        Innocent: { content: <img src={innocent} alt="Innocent" />, description: 'Customer Support' }
    };

    useEffect(() => {
        document.title = `${props.company} - Ridesmash Team`;
    }, []);

    return (
    <>  
    <Helmet>
      <link href="/reg/css/bootstrap.min.css" rel="stylesheet" />
    </Helmet>
    
    <Header />
    <Banner_otherpages title="CS Department Ridesmash" image={image} />

    <div className="sections" id="about_people">
        <h2>Meet The Ridesmash Team</h2>
        
        <div className="text-center">
            <p>At Ridesmash, our dedicated Customer Support Team is at the heart of ensuring seamless and satisfying experiences for our users. Whether you’re booking 
                a ride, exploring vehicle hire purchase, fleet management, or car rental services, our team works around the clock to address inquiries, resolve issues, 
                and provide exceptional support. Combining professionalism, empathy, and a deep understanding of our services, the Ridesmash Customer Support Team is 
                committed to making every interaction smooth, efficient, and customer-focused.</p>

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
export default Dept_Ridesmash;