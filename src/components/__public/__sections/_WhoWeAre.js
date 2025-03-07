// import { UilTrophy } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import vivian from './../../../assets/images/whoweare/Vivian.png';
import amos_diana from './../../../assets/images/whoweare/Amos_Diana.jpg';


const WhoWeAre = () => {
  return (
    <>
    <div className="sections" id="whoweare">
      <h2 className="mobile">Who we are</h2>

      <div className="c2 c2-md c1-sm c1-xs tester">
      
        <div className="c2 c2-md c2-sm c2-xs inner">
          <div className="left-left">
            <img src={amos_diana} />
            <div className="small"></div>
          </div>
          <div className="left-right">
            <div className="small"></div>
            <img src={vivian} />
          </div>
        </div>

        <div>
          <h2 className="desktop"><span>Who </span>we are</h2>

          <p><b>Smash Technology</b> is a tech group of companies focused on employing technology to service its clients locally and globally. Initially, the brand focused on Transport Investment 
          across the country and beyond before pivoting into other viable sectors such as E-hailing, E-commerce, Food delivery, Booking platform, Virtual Office platforms, Travels, Real Estate, Social Networking among others.</p>

          <p><b>Smash Technology</b> is a combination of almost a decade of visionary leadership, hard work, and dedication from many experienced and committed men and women 
            who are aligned with the core purpose and goal of the brand.</p>

            <Link to="/about" className="smashtech-button swipe-button">Learn More</Link>
        </div>
      </div>

    </div>
    </>
  )
}
export default WhoWeAre;