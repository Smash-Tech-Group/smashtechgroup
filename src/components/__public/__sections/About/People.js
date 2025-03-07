import { useEffect } from 'react';
import Header from '../../__layouts/Header';
import Banner_otherpages from '../_Banner_otherpages';
import image from './../../../../assets/images/dept/smashtravels.jpg';
import deptSales from './../../../../assets/images/dept/salesandinvestment.jpg';
import deptSmashtravel from './../../../../assets/images/dept/smashtravels.jpg';
import deptRidesmash from './../../../../assets/images/dept/ridesmash.jpg';
import deptSmashwise from './../../../../assets/images/dept/smashwise.jpg';
import deptOfficeAssistant from './../../../../assets/images/dept/officeassistants.jpg';
import media from './../../../../assets/images/dept/media_it.jpg';
import admin_dept from './../../../../assets/images/dept/admin_dept.jpeg';
import { UilArrowRight } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

const People = (props) => {
  useEffect(() => {
    document.title = `${props.company} — People`;
  }, []);

  return (
    <>    
    <Header />
    <Banner_otherpages title="People" image={image} />

    <div className="sections" id="about_people">
      <h2>Smash Technology Departments</h2>
      
      <div className="text-center">
        <p>Smash Technology operates through a diverse range of specialized departments, each dedicated to delivering excellence in its field. From innovative 
          product development and design to robust customer support and strategic marketing, our departments work seamlessly to power our tech-driven solutions. 
          With a unified vision and expertise across e-commerce, transport, real estate, food delivery, and investment schemes, we’re redefining industries and 
          exceeding expectations. Dive into the core of our operations and discover how each department contributes to the success of our ecosystem.</p>
      </div>

      <div className="people">
        <img src={media} title="" alt="" />
        <div>
          <p className="people-h2"><button className="bot"></button> Media & IT Department</p>
          <Link to="/media-it-department" className="smashtech-button swipe-button">View Department <UilArrowRight /></Link>
        </div>
      </div>

      <div className="people">
        <img src={admin_dept} title="" alt="" />
        <div>
          <p className="people-h2"><button className="bot"></button> HR & Admin Department</p>
          <Link to="/" className="smashtech-button swipe-button">View Department <UilArrowRight /></Link>
        </div>
      </div>

      {/* <div className="people">
        <img src={deptSales} title="" alt="" />
        <div>
          <p className="people-h2"><button className="bot"></button> Sales & Marketing Department</p>
          <Link to="/sales-marketing-department" className="smashtech-button swipe-button">View Department <UilArrowRight /></Link>
        </div>
      </div> */}

      <div className="people">
        <img src={deptSmashtravel} title="" alt="" />
        <div>
          <p className="people-h2"><button className="bot"></button> CS Department-Smash Travels</p>
          <Link to="/smash-travels-department" className="smashtech-button swipe-button">View Department <UilArrowRight /></Link>
        </div>
      </div>

      <div className="people">
        <img src={deptRidesmash} title="" alt="" />
        <div>
          <p className="people-h2"><button className="bot"></button> CS Department-Ridesmash</p>
          <Link to="/ridesmash-department" className="smashtech-button swipe-button">View Department <UilArrowRight /></Link>
        </div>
      </div>

      <div className="people">
        <img src={deptSmashwise} title="" alt="" />
        <div>
          <p className="people-h2"><button className="bot"></button> CS Department-Smashwise</p>
          <Link to="/smashwise-department" className="smashtech-button swipe-button">View Department <UilArrowRight /></Link>
        </div>
      </div>

      <div className="people">
        <img src={deptOfficeAssistant} title="" alt="" />
        <div>
          <p className="people-h2"><button className="bot"></button> Office Assistants</p>
          <Link to="/" className="smashtech-button swipe-button">View Department <UilArrowRight /></Link>
        </div>
      </div>

    </div>
  </>
  );
}
export default People;