import { useState, useEffect } from 'react';
import Header from '../../__layouts/Header';
import { Helmet } from 'react-helmet';
import Banner_otherpages from '../_Banner_otherpages';
import image from './../../../../assets/images/dept/salesandinvestment.jpg';
import mariam from '../../../../assets/images/dept/single/Mariam.jpg';
import yakubu from '../../../../assets/images/dept/single/Yakubu.jpg';
import david from '../../../../assets/images/dept/single/David.jpg';
import { UilInfoCircle, UilArrowRight, UilBookMedical } from '@iconscout/react-unicons';

import { Link } from 'react-router-dom';

const Dept_SalesMarketing = (props) => {
    const [activeTab, setActiveTab] = useState('Mariam');
    
    const tabContent = {
        Mariam: { content: <img src={mariam} alt="Mariam" />, description: 'Sales & Marketing' },
        Yakubu: { content: <img src={yakubu} alt="Yakubu" />, description: 'Investments' }, 
        David: { content: <img src={david} alt="David" />, description: 'Investments' }
    };

    useEffect(() => {
        document.title = `${props.company} - Sales & Marketing Department`;
    }, []);

    return (
    <>  
    <Helmet>
      <link href="/reg/css/bootstrap.min.css" rel="stylesheet" />
    </Helmet>
    
    <Header />
    <Banner_otherpages title="Sales & Marketing Department" image={image} />

    <div className="sections" id="about_people">
        <h2>Meet The Sales & Marketing Team</h2>
        
        <div className="text-center">
            <p>At Smash Travels, our customer support team specializes in assisting clients with work visa processing. We are dedicated to simplifying the process, 
                providing expert guidance, and ensuring every step is handled with precision and care. Count on us to make your work visa journey smooth and hassle-free.</p>

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
                    <Link to="/about" title="Full profile"><UilBookMedical /></Link>
                    </>
                )}
            </div>
            ))}
        </div>
    </div>
    </>
  )
}
export default Dept_SalesMarketing;