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
          <p>This password policy is designed to enhance the security of sensitive information of all users of 
        www.smashtechgroup.com and comply with the latest National Institute of Standards and Technology (NIST) SP 
        800-63-4 guidelines. The policy applies to all employees, contractors, and any individuals who access 
        www.smashtechgroup.com platform.</p>

        <ol>
          <li>Password Requirements</li>
          <ul>
            <li>Minimum Length: Passwords must be a minimum of 8 characters in length.</li>
            <li>Recommended Length: It is recommended that passwords be 15 characters or more for strong security.</li>
            <li>Passphrase Support: Passphrases up to 64 characters are supported and encouraged for enhanced security.</li>
          </ul>
        </ol>
        
        
        2. Password Composition: Passwords should include a combination of
        o Uppercase letters (A-Z)
        o Lowercase letters (a-z)
        o Numbers (0-9)
        o Special characters (e.g., !, @, #, $, etc.)
        • Avoid using easily guessed patterns, such as:
        o Sequential numbers (e.g., “1234”)
        o Repeated characters (e.g., “aaaa”)
        o Common words (e.g., “password”)
        3. Account Lockout and Recovery
        • After 5 unsuccessful login attempts, the account will be temporarily locked for 15 minutes.
        • The IT team will provide assistance with account recovery if a user forgets their password or experiences 
        lockouts.
        4. Password Storage and Management
        • All passwords are stored securely using hashed and salted encryption techniques for encryption sake.
        • Do NOT write down passwords or share them over unsecured channels (e.g., email, text message).
        • Users are encouraged to use password managers (e.g Google password manager, etc.) to store and manage 
        complex passwords.
        5. Passphrase Usage Guidelines
        • Passphrases, up to 64 characters, may be used instead of traditional passwords.
        • Passphrases should consist of multiple random words or a unique phrase that is easy to remember but hard 
        to guess (e.g., "GiraffeRunsInSunshine@42!").
        • Avoid common phrases, quotes, or easily guessable strings.
        6. Multi-Factor Authentication (MFA)
        • MFA is mandatory for accessing sensitive systems and all external cloud-based services.
        • Users will receive a one-time passcode (OTP) via an approved method (e.g., SMS, email, or authenticator 
        app).
        7. Monitoring and Compliance
        • All password and login activities are logged and regularly monitored to detect any unusual or unauthorized 
        access attempts.
        • The IT team will conduct periodic reviews to ensure compliance with the password policy and update this 
        policy as necessary.
        8. Enforcement
        • All users are expected to adhere to these guidelines and report any suspected or known breaches to the IT 
        Security team immediately via support@smashtechgroup.com.
        This policy is subject to review and may be updated as technology and security continues to evolve. Compliance is 
        mandatory, and all users must acknowledge this policy as part of terms and conditions for using
        www.smashtechgroup.com and all her subsidiaries.

      </div>
    </div>
  </div>
    </>
   );
 }
export default PasswordPolicy;      
