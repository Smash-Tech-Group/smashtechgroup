import { useEffect } from 'react';
import Header from '../../__layouts/Header';
import Banner_otherpages from '../_Banner_otherpages';
import Map from '../../__sections/_Map';
import image from '../../../../assets/images/otherpages/happy.png';
import 'swiper/css';
import argic from '../../../../assets/images/otherpages/inner/argic.png'
import gold from '../../../../assets/images/otherpages/inner/gold.png'


const InvestorRelations = (props) => {
  useEffect(() => {
    document.title = `${props.company} — Investor Relations`;
  }, []);

  return (
    <>    
    <Header />

    <Banner_otherpages title="Agric Wealth On Smash Technology" image={image} />
      <div className="zy-c1 zy-c1-sm zy-c1-xs text-center slider-p">
        <p style={{textAlign: 'left', lineHeight: '300%'}}>
          Time is the test of immutability of all things. Sustained erosion can shape rocks with the passage of time, 
          sediments formation takes new shape on the ocean bed in the process of time. The proverbial black gold has lost 
          its status as new industries become a formidable means of livelihood with the passage of time. While research 
          shows there are many lucrative jobs today that never existed 20 years ago, it submits that a good proportion of 
          the global population will be engaged in entirely new industries amidst agriculture which tops industries that 
          are in boom time.
          This is the inspiration of the Smash Group in structuring investment  -----  a secure investment platform in 
          Agriculture to enable investors get the best returns on investment while freeing their time for other 
          engagements.
          There have been a number of Agric investment schemes in Nigeria formatted with the latent design of 
          profiteering from unsuspecting investors. While many of these setups are extant, many also have crashed. 
          The difference here is that Smash Technology is built on a strong failure-proof technology that is scalable, 
          the system does not just offer the highest returns on investment (40% and 90% for a N25,000 unit of investment 
          in 6 and 12months), every unit of Investment made on Smash Technology is guaranteed.
        </p>
      </div>
        <div id='articles'>
          <h2>Related Articles</h2>
            <div>
              <div className="c2 c2-sm c1-xs val">
                <a href='/agric-blog'><img src={argic} title="" alt="" /></a>
                <a href='/gold'><img src={gold} title="" alt="" /></a>
            </div>
          </div>
      <Map />
      </div>
  </>
  );
}
export default InvestorRelations;