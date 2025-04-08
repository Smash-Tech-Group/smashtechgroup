import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../__public/__layouts/Header';
import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';
import image from '../../../assets/images/otherpages/investmentwithroi.jpg';

const PasswordPolicy = (props) => {
  useEffect(() => {
      document.title = `${props.company} — Password Policy`;
  }, []);

  return (
  <>     
  <Helmet>
    <script src="/js/bootstrap.min.js"></script>
  </Helmet>

  <Header />    
  <Banner_otherpages title="Password Policy" image={image} />

  <div className="sections" id="ourcorepurpose">
    <h2>Password Policy</h2>

    <div className="sections" id="about_people">
      <div className="text-center">
          <p>
            This password policy is designed to enhance the security of sensitive information of all users of 
            www.smashtechgroup.com and comply with the latest National Institute of Standards and Technology (NIST) SP 
            800-63-4 guidelines. The policy applies to all employees, contractors, and any individuals who access 
            www.smashtechgroup.com platform.
          </p>


          <h2>Password Requirements</h2>
            <p>Minimum Length: Passwords must be a minimum of 8 characters in length.</p>
            <p>Recommended Length: It is recommended that passwords be 15 characters or more for strong security.</p>
            <p>Passphrase Support: Passphrases up to 64 characters are supported and encouraged for enhanced security.</p>
          
          <h2>Password Composition: Passwords should include a combination of</h2>
            <p>Uppercase letters (A-Z)</p>
            <p>Lowercase letters (a-z)</p>
            <p>Numbers (0-9)</p>
            <p>Special characters (e.g., !, @, #, $, etc.)</p>
      </div>
    </div>
  </div>
    </>
   );
 }
export default PasswordPolicy;      
