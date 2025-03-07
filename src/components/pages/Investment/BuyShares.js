import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../__public/__layouts/Header';
import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';
import image from '../../../assets/images/otherpages/investmentwithroi.jpg';

const BuyShares = (props) => {
  const [unit, setUnit] = useState(0);
  const [serviceType, setServiceType] = useState('');

  const handleUnitChange = (e) => setUnit(Number(e.target.value));
  const handleServiceTypeChange = (e) => setServiceType(e.target.value);

  const publicKey = 'pk_live_cc0fa3d91c2856306b7a146d81e8e64479427e60'; // Replace with your Paystack public key
  const amount = unit * 1000 * 100; // Convert to kobo (Naira's smallest unit)

  const paystackProps = {
    email: 'akpabot.it@gmail.com', // Replace with customer's email
    amount: amount,
    publicKey: publicKey,
    text: "Pay with Paystack",
    onSuccess: (response) => {
      console.log('Payment Success:', response);
      alert('Payment Successful!');
    },
    onClose: () => {
      alert('Payment Closed');
    },
  };

  useEffect(() => {
      document.title = `${props.company} — Buy Shares`;
  }, []);

  return (
  <>     
  <Helmet>
    <script src="/js/bootstrap.min.js"></script>
  </Helmet>

  <Header />    
  <Banner_otherpages title="Buy Shares" image={image} />

  <div className="sections" id="ourcorepurpose">
    <h2>Smash Technology Shares</h2>

    <div className="sections" id="about_people">
      <div className="text-center">
          <p>Smash Technology, a leading force in the tech industry, is on a mission to simplify life for individuals and business owners through its diverse portfolio of brands spanning 
          multiple sectors. To fuel our next phase of growth, we are offering 40% shares per brand, with a minimum purchase of 1,000 units.
          This is your chance to become part of our success story by investing in a company that is revolutionizing industries such as e-hailing, e-commerce, food delivery, and more.</p>

          <Link to="/buy-shares-form" className="smashtech-button swipe-button mt-5">Buy Shares</Link>
      </div>
    </div>

    <h2>Why Invest in Smash Technology?</h2><br />

    <div className="c1_2 c1-sm c1-xs main">
      <div className="half-circle-div">
        <div>
          {/* <img src={core_purpose} className="half-circle" title="Core Purpose" alt="Core Purpose" 
              style={{ width: '100%' }}/> */}
        </div>
      </div>

      <div class="ourcorepurpose-right-div">
        <div className="flex content">
          <h1>1</h1>
          <h3>&nbsp;Proven Market Success</h3>
        </div>

        <div className="flex num">
          <div class="line-div">
            <div class="line"></div>
          </div>
          <p>Our brands have set new benchmarks for customer satisfaction, consistently 
            delivering innovative solutions tailored to modern needs.</p>
        </div>

        <div className="flex content">
          <h1>2</h1>
          <h3>Track Record of Growth</h3>
        </div>

        <div className="flex num">
          <div class="line-div">
            <div class="line"></div>
          </div>
          <p>With years of market expansion, Smash Technology has maintained a solid record of generating 
            return on investment (ROI) for its investors</p>
        </div>

        <div className="flex content">
          <h1>3</h1>
          <h3>Accountability and Stability</h3>
        </div>

        <div className="flex num">
          <div class="line-div">
            <div class="line"></div>
          </div>
          <p>Our company operates on a well-structured framework that prioritizes transparency and financial responsibility, 
            ensuring your investment is in safe and capable hands.</p>
        </div>

        <div className="flex content">
          <h1>4</h1>
          <h3>Diverse Portfolio</h3>
        </div>

        <div className="flex num">
          <div class="line-div">
            <div class="line hidden"></div>
          </div>
          <p>Investing in Smash Technology means gaining exposure to multiple high-potential sectors, 
            reducing risk while maximizing growth opportunities.</p>
        </div>

      </div>
    </div>

    <h2>Be Part of Our Vision</h2>

    <div className="sections" id="about_people">
      <div className="text-center">
          <p>This is more than an investment—it’s an opportunity to join a forward-thinking company that values innovation, growth, and the success of its partners. 
          Take advantage of this offer to secure your share in Smash Technology’s future.</p>

          <Link to="/buy-shares-form" className="smashtech-button swipe-button mt-5">Buy Shares</Link>
      </div>
    </div>
  </div>

    </>
   );
 }
export default BuyShares;      