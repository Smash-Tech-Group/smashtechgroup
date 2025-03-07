import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../__public/__layouts/Header';
import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';
import image from '../../../assets/images/otherpages/investmentwithroi.jpg';

const TermsAndConditions = (props) => {
  useEffect(() => {
      document.title = `${props.company} — TermsAndConditions`;
  }, []);

  return (
  <>     
  <Helmet>
    <script src="/js/bootstrap.min.js"></script>
  </Helmet>

  <Header />    
  <Banner_otherpages title="Terms and Conditions" image={image} />

  <div className="sections" id="ourcorepurpose">
    <h2>Terms and Conditions</h2>

    <div className="sections" id="about_people">
      <div className="text-center">
          <p>TermsAndConditions here</p>
      </div>
    </div>
  </div>

    </>
   );
 }
export default TermsAndConditions;      