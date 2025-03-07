import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../__public/__layouts/Header';
import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';
import image from '../../../assets/images/otherpages/investmentwithroi.jpg';

const PrivacyPolicy = (props) => {
  useEffect(() => {
      document.title = `${props.company} — Privacy Policy`;
  }, []);

  return (
  <>     
  <Helmet>
    <script src="/js/bootstrap.min.js"></script>
  </Helmet>

  <Header />    
  <Banner_otherpages title="Privacy Policy" image={image} />

  <div className="sections" id="ourcorepurpose">
    <h2>Introduction</h2>

    <div className="sections" id="about_people">
      <div className="text-center">
          <p>
            Smash Technology Limited ("Smash Technology," "we," "our," "us") values and 
            respects the privacy of each of our users (“you”, “your”) who interact with 
            any/some/all of our services and subsidiaries under Our Businesses section. 
          </p>
          <br></br>
          <p>
            We are committed to safeguarding the Personally Identifiable Information (PII) 
            and/or Sensitive Personally Identifiable Information (SPII) of all our users and 
            ensuring your data is aligned with the highest standards of security, transparency, 
            and proper handling in compliance with global data regulations, including the 
            National Institute of Standards and Technology (NIST), General Data Protection 
            Regulation (GDPR), and the Nigeria Data Protection Act (NDPA).
          </p>
          <br></br>
          <p>
            This Privacy Policy is created for the purpose of assuring all our users of the legal 
            protection and information security in place when we collect, process, use, and 
            store your personal data when you engage with our platforms, services, and 
            subsidiaries. By using any of our service, you confirm that you have fully read, 
            understood, and accepted our policy regarding your data in accordance with this 
            policy. 
          </p>


          <h2>Scope of Policy</h2>
          <br></br>
          <p>
            This policy applies to any users of and customers, employees, and vendors 
            engaging with the subsidiaries under the umbrella of Smash Technology Limited. 
            In this context, the company will continue operating in the domains of transport 
            investment, e-hailing, e-commerce, food delivery, bookings, virtual office 
            solutions, travel & hospitality, real-estate, and social networking. 
            The policy pertains to all digital and physical data in our company ads, 
            applications, and online/in-person services that we present through our own and 
            third parties' partnerships.
          </p>


          <h2>The types and nature of Information we collect:</h2>
          <br></br>
          <p>
            To provide seamless services, we collect various types of personal and usage data, 
            including:
          </p>

          <h3>Personal Information</h3>
            <p>Full name, date of birth, gender, usernames.</p>
            <p>Contact details (email, phone number, home address, postal address).</p> 
            <p>National ID, passport, or other government-approved verification documents (where applicable).</p><br></br>

          <h3>Financial and Transaction Data</h3>
            <p>Payment details (credit/debit card, bank account details). </p>
            <p>Billing and purchase history.</p> 
            <p>Transaction records.</p><br></br>

          <h3>Account and Authentication Data</h3>
            <p>Usernames, passwords, biometric identifiers, OTP, 2-Factor Authentication, 
            and other authentication preferences. </p>
            <p>Security questions and recovery details.</p><br></br>

          <h3>Device and Usage Data</h3>
            <p>
              The data collected entails the device on which you access our services, the type of 
              data collected, and the context in which you are using it such as:
              <ul>
                <i>IP addresses, device identifiers, browser type.</i><br></br>
                <i>Location data (GPS, city, country, zip code).</i><br></br>
                <i>Browsing and interaction history within our platforms.</i>
              </ul>
            </p><br></br>

          <h3>Communication and Social Media Data</h3>
            <p>Messages, reviews, and feedback you send via any of our platforms.</p>
            <p>Interaction with any of our official social media accounts (TikTok, IG, etc).</p>
            <p>
              Data you share when you go through any of our third-party services (e.g., 
              Facebook, Google, LinkedIn, etc.).
            </p>


          <h2>Purpose of Data Processing</h2>
          <br></br>
          <h3>We use the data we collect to:</h3>
            <p>Develop, enhance, and keep our services operable.</p> 
            <p>Identify and validate individuals as well as preserve personal identification information.</p> 
            <p>Handle payments securely and prevent fraudulent schemes.</p> 
            <p>Keep in touch with the users, answer their requests, and deliver alerts and notifications.</p> 
            <p>Generate custom user experiences through data-driven system recommendations.</p> 
            <p>Carry out studies, develop analytics, and business intelligence operations.</p> 
            <p>
              Enhance marketing and advertising initiatives by providing insights from 
              users' data, which in turn assist in making the promotional campaign more 
              efficient. 
            </p>
            <p>Stay in compliance with different legal, regulatory, and cybersecurity standards.</p> 
            <p>Research, create and implement new tools for our products. </p>


          <h2>Legal Basis for Data Processing</h2>
          <br></br>
          <h3>We process personal data under lawful basis such as:</h3>
            <p>When you provide explicit permission and give your full consent.</p> 
            <p>To fulfill service agreements, contractual obligations and deliver the service requested by you.</p> 
            <p>Anti-fraud, service improvements, marketing analytics.</p> 
            <p>Adhering to cybersecurity frameworks and being compliant to legal, governmental and regulatory laws.</p>


          <h2>Sharing of Data & Privacy Issue from Third Parties </h2>
          <br></br>
          <h3>We may share personal data with third-parties that provide key services for your requests and include:</h3>
            <p>Affiliates & Subsidiaries: A platform for providing you with a versatile cross-device experience.</p> 
            <p>Service Providers: Payment processors, hosting services, SEO tools, and customer support platforms</p> 
            <p>Regulatory Authorities: Usually by law, for fraud detections, or to maintain public interest.</p>  
            <p>
              Business Partners & Advertisers: A user's consent is required here which we use for  marketing or 
              promotional engagement purposes only.
            </p> 
            <b>
              We strictly ensure that all our third-party partners comply with data protection 
              laws, confidentiality agreements, and information security protocols. 
            </b>

          
          <h2>Data Protection & Security Measures</h2>
          <br></br>
          <h3>
            In reference to NIST cybersecurity guidelines, our incident response plan aims to secure personal data by 
            mitigating against unauthorized access, breaches, or mismanagement using: 
          </h3>
            <p>Encryption Protocols: AES-256 encryption for stored data and TLS 1.3 encryption for data in transit.</p> 
            <p>Access Control Mechanisms: Role-Based Access Control (RBAC) and Multi-Factor Authentication (MFA).</p> 
            <p>
              Incident Response and Breach Notification: Proactive monitoring and responses that are fast and 
              focused track.
            </p> 
            <p>
              Regular Security Assessment: These will include penetration tests, vulnerability scans, and compliance 
              audits.
            </p>


          <h2>Data Retention & Deletion Policy </h2>
          <br></br>
          <h3>Your personal data is stored only as long as you want to, with regard to the following:</h3>
           <p>
            Transaction & Account Data: In accordance with law, such as financial and administrative procedures, 
            information is preserved.
          </p> 
          <p>Marketing Data: Retention of data will be based on user preferences (users can opt-out any time).</p>
          <p>
            User-Requested Deletion: Individuals may wish to delete their data by contacting us via 
            privacy@smashtechgroup.com  
          </p>
          

          <h2>Your Rights Under GDPR & NDPA</h2>
          <br></br>
          <h3>As a user, you have the following rights regarding your personal data: </h3>
          <p>Right to access and obtain a copy of your data.</p> 
          <p>Right to request the correction of your inaccurate or incomplete data.</p>
          <p>Right to request the deletion of your personal data.</p>
          <p>Right to restrict the processing and usage of your data in specific circumstances.</p>
          <p>Right to receive and transfer your data in a structured format.</p>
          <p>Right to unsubscribe and opt-out of marketing and automated decision-making. </p>
          <p>Right to withdraw your consent and revoke your data at any time.</p>


          <h2>International Data Transfers</h2>
          <br></br>
          <p>
            If your personal information is forwarded to third parties outside the country where 
            we operate, adequate safe and legal guidelines like encryption, data transfer 
            agreements such as the GDPR Standard Contractual Clauses (SCCs) are in place. 
          </p>


          <h2>Children's Privacy Policy </h2>
          <br></br>
          <p>
            Some of our services are for individuals younger than 13; yet, there are a few that 
            do not apply to kids. The information of minors cannot be collected, processed, or 
            stored by us without verifiable parental authorization. If we find out such data 
            collection, we will immediately erase it.  
          </p>


          <h2>Cookies, Tracking & Automated Technologies</h2>
          <br></br>
          <h3>We use cookies, tracking pixels, and analytics tools to:</h3>
          <p>Improve and change the performance and experience of our platforms.</p> 
          <p>See where users are at our site, find out what does good and what needs improvements.</p>
          <p>Provide personalized ads and marketing that meet our users’ needs.</p>
          <p>Cookie preferences are managed via browser settings by users.</p>
          <b>
            Users can manage cookies preferences by either accepting the pop-up or rejecting 
            the prompt via browser settings. 
          </b>


          <h2>Policy Updates & Notification</h2>
          <br></br>
          <p>
            Our privacy policy undergoes periodic updates, based on the legislative, 
            technological, and business trends. We will immediately notify you of such updates 
            via emails, when you interact with our web pages and in-app notifications. We 
            kindly encourage our users to revisit this policy on a periodic basis. This Privacy 
            Policy provides full compliance with NIST, GDPR, and NDPA standards 
            reinforcing our pledge in ensuring a comprehensive data security and transparency 
            of your data across all the services and platforms in Smash Technology.   
          </p>


          <h2>Contact Information </h2>
          <br></br>
          <h3>
            For privacy inquiries, complaints, or requests, kindly reach out to: 
            privacy@smashtechgroup.com or visit our: 
          </h3>
          <p>
            <b>Head Office -</b> <i>2 King Jaja Street, Hillside Estate, Works & Housing Gwarinpa Abuja NIGERIA.</i>    
          </p>
          <p>
            <b>Branch Office -</b> <i>Suite 103/104, Workcentral, 5 Alhaji Tokan Street, Alaka Estate, 
              Surulere Lagos, NIGERIA. </i>    
          </p>
          <hr></hr>
          <p>
            This Privacy Policy ensures full compliance with NIST, GDPR, and NDPA, 
            bringing all our users attention to the necessity of legal protection, information 
            safety, user trust, data security, and transparency across all platforms and services 
            of Smash Technology.    
          </p>
      </div>
    </div>
  </div>
    </>
   );
 }
export default PrivacyPolicy;      
