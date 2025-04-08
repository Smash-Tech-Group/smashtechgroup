import { useEffect } from 'react';
import Header from '../../__layouts/Header';
import Banner_otherpages from '../_Banner_otherpages';
import Map from '../../__sections/_Map';
import image from '../../../../assets/images/otherpages/gold.png';
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
    <Banner_otherpages title="Smash Profit Tunnel To Nigerian Real Estate Gold Mine" image={image} />
      <div className="zy-c1 zy-c1-sm zy-c1-xs text-center slider-p">
      <p style={{textAlign: 'left', lineHeight: '300%'}}>
            Authentic figures don't lie, statistics serves for a proof. The hidden details of any program or project are 
            better appreciated when facts are paired with figures.
            Yawning figures from impeccable sources on the Nigerian real estate development situation are both 
            intimidating and inciting, they produce an atmosphere of frenzy in which economic opportunities are wrapped 
            with mud that defies the sight and depresses the heart. But the underlying truth from empirical results is 
            that the Nigerian real estate market is ONE OF THE BIGGEST GOLDMINE globally.
            This cannot be an hypothesis for those who understand the following:
            (1). In January 2015, the Nigerian real estate market was valued at #6.4 trillion (USD39bn) at a CAGR of 
            10% ---- CBO Capital.
            (2.). In 2020, property listing enquires surged by over 72% before the pandemic. ---- CBO Capital
            (3). Nigeria has a housing deficit of over 17m at the rate of 4.7% urbanization yearly ----- NIESV Lagos
            (4). There are 24.4million people in Nigeria without a house to live ----- the Borgen Project
            These eloquent statistics is justified by the present heightened level of property development witnessed 
            especially in urban areas and cities across the nation. But while Nigerians are struggling to make sense of 
            these figures, Smash Group has developed a platform tool to help everyone extract wealth from this goldmine.
            Smash Technology is a subset of a 6-core investment setup envisioned to make everyone wealthy in 6 and 12 
            months of investment pay - out within a specified investment life spand. Starting from a #40,000 value of 
            investment, investors would get 30% to 80% scalable returns on investment, guaranteed.
            On the Smash Technology platform, your investment capital is yours at all times, secure and guaranteed. 
            Wit this system, you help in giving Nigerians affordable housing without spending your time on it, 
            you amaze wealth for yourself as a reward. 
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