import { useEffect } from 'react';
import Header from '../../__public/__layouts/Header';
import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';
import image from '../../../assets/images/otherpages/investmentwithroi.jpg';
import ridesmash_brand from '../../../assets/images/logo/brands/ridesmash.png';
import smashfood_brand from '../../../assets/images/logo/brands/smashfood.png';
import smashapartments_brand from '../../../assets/images/logo/brands/smashapartments.png';
// import smashtravels_brand from '../../../assets/images/logo/brands/smashtravels.png';
import smashwise_brand from '../../../assets/images/logo/brands/smashwise.png';
import { Link } from 'react-router-dom';

const InvestmentsWithROI = (props) => {
    useEffect(() => {
        document.title = `${props.company} — Investments with ROI`;
    }, []);

    return (
    <>      
    <Header />    
    <Banner_otherpages title="Investments with ROI" image={image} />

    <br />
    <div className="sections" id="ourbusiness">
        <h2>Unlock Investment Opportunities with Smash Technology</h2>
        <p>Welcome to Smash Technology, where innovation meets investment! We’re thrilled to present 
            our unique investment plans, each designed to offer exceptional returns every month. 
            Explore our diverse brands and see how you can benefit from our investment plans.
        </p>

        <h2>Investment Plans</h2><br />
        
      <div className="c3 c2-sm c1-xs" id="cover">
        <div className="business-container" style={{ paddingBottom: 0 }}>
            <img src={image} title="" alt="" />
            <h3 style={{ paddingTop: '.65rem' }}>Micro Investment</h3>
            <h3 style={{ color: '#F34B02' }}>150,000 - 450,000</h3>
            <p>2.5% R.O.I.<br />
                
            </p><br />
            <Link to="/investor-signup" style={{ 
                padding: '1rem 2rem', borderRadius: '3.125rem', fontSize: '1.1rem',
                background: '#F34B02', color: '#fff', margin: '1rem'
             }} className="smashtech-button">Invest Now! 
             </Link>
        </div>

        <div className="business-container">
            <img src={image} title="" alt="" />
            <h3 style={{ paddingTop: '.65rem' }}>Macro Investment</h3>
            <h3 style={{ color: '#F34B02' }}>500,000 - 5,000,000</h3>
            <p>3% R.O.I.<br />
                
            </p><br />
            <Link to="/investor-signup" style={{ 
                padding: '1rem 2rem', borderRadius: '3.125rem', fontSize: '1.1rem',
                background: '#F34B02', color: '#fff', margin: '1rem'
             }} className="smashtech-button">Invest Now! 
             </Link>
        </div>

        <div className="business-container">
            <img src={image} title="" alt="" />
            <h3 style={{ paddingTop: '.65rem' }}>Platinum Investment</h3>
            <h3 style={{ color: '#F34B02' }}>5,000,000 & Above</h3>
            <p>3.5% R.O.I.<br />
                
            </p><br />
            <Link to="/investor-signup" style={{ 
                padding: '1rem 2rem', borderRadius: '3.125rem', fontSize: '1.1rem',
                background: '#F34B02', color: '#fff', margin: '1rem'
             }} className="smashtech-button">Invest Now! 
             </Link>
        </div>
        
      </div>
    </div>

    <div className="sections" id="about_people">
        <h2>Our Brands</h2>
        
        <div className="text-center brands">
            <img src={ridesmash_brand} title="Ridesmash" alt="Ridesmash" />

            <p><strong>RideSmash</strong> is not only transforming the e-hailing industry but also offering flexible hire purchase options, allowing people to access 
            high-quality vehicles through affordable installment plans. Your investment helps fuel the development of this dual platform, enabling 
            us to expand our fleet and improve our service offerings. By supporting RideSmash, you contribute to making transportation more accessible 
            with affordable cost while also benefiting from the profitable returns generated through our E-hailing services and hire purchase agreements. 
            Our customers’ regular payments and the steady demand for reliable rides ensure strong profitability, which directly impacts the returns for 
            our investors. Investing in RideSmash places you at the forefront of the rapidly growing ehailing and hire purchase market. Your funds are 
            protected, ensuring that you benefit from secure, consistent returns. With increasing demand for affordable, flexible transportation, your 
            investment will generate monthly returns as RideSmash expands. As we grow, your investment will continue to provide you with profitable 
            returns, supported by a loyal customer base. RideSmash offers not only security for your funds but also an exciting opportunity for continued 
            growth, offering long-term stability and returns in the booming mobility sector.</p>
        </div>

        <div className="text-center brands">
            <img src={smashfood_brand} title="SmashFood" alt="SmashFood" />

            <p><strong>SmashFood</strong> is your go-to app for fast and reliable food delivery, offering a wide variety of fresh, diverse meal options delivered 
            straight to your door. SmashFood aims to dominate the market by ensuring faster deliveries of foods and a seamless customer experience. Your 
            investment helps us build and maintain our app, enhance our platform's features, and drive advertising efforts to reach more customers and 
            vendors. This not only boosts the app's visibility and user base but also enables local food vendors to sell more, increasing their revenue. 
            With your support, we can continue to scale our operations and make SmashFood a profitable investment, delivering attractive returns for all 
            investors. SmashFood offers investors the opportunity to tap into the lucrative food delivery industry with high potential for monthly returns. 
            Your funds are securely invested, ensuring both your capital and profits are protected. As the demand for food delivery grows, your investment 
            will generate consistent returns, backed by a secure and transparent business model. With growing market penetration, your returns will increase 
            as the brand expands. SmashFood provides you with peace of mind, knowing that your funds are in safe hands while benefiting from an industry 
            poised for continued growth. </p>
        </div>

        <div className="text-center brands">
            <img src={smashapartments_brand} title="Smash Apartments" alt="Smash Apartments" />

            <p><strong>SmashApartments</strong> presents a secure and profitable investment opportunity in the travel and accommodation sector. Your funds 
            help scale our platform, expand our listings, and improve our service offerings, ensuring you benefit from the growing demand for online bookings. 
            With the travel industry on the rise, your investment is safeguarded, and you stand to earn attractive returns as our platform gains market share. 
            Additionally, your funds will be used for strategic advertising campaigns and partnership development, increasing visibility and driving more 
            bookings. As the travel industry recovers, your investment will be poised for steady appreciation, offering high growth potential in a thriving 
            market. SmashApartments SmashApartments is a dynamic web and mobile platform that simplifies property booking, rental, and sales. It combines the 
            power of Airbnb, Booking.com, and property rental services, offering users an easy way to book short-term and long-term accommodations, including 
            apartments, suites, and properties for sale. SmashApartments enables property owners, landlords, and tenants to connect, making it easier for 
            everyone to secure a space. For investors, SmashApartments offers a high-growth opportunity in the expanding property market. Your investment 
            benefits from consistent monthly returns, a secure and scalable platform, and the growing demand for both short-term and long-term rentals. With 
            SmashApartments' wide market reach and robust user base, your funds are secured while continuously generating profitable returns.</p>
        </div>

        <div className="text-center brands">
            <img src={smashwise_brand} title="Smashwise" alt="Smashwise" />

            <p><strong>SmashWise</strong> Our E-commerce platform offers a vast selection of products at unbeatable prices by our vendors. By investing in 
            SmashWise ecommerce app, you’ll be part of a thriving individuals that earns more from our platform. Your investment helps us expand our 
            marketing plan and advertising plan in order to drive more sales and higher returns. Investing in SmashWise means gaining access to a thriving 
            e-commerce platform with consistent growth and high returns. Your investment is fully secured, and you benefit from competitive, monthly ROI and 
            the stability of a proven business model that continues to expand its market share. With low entry points and scalable opportunities, your funds 
            are protected while growing steadily. As the platform continues to scale, your investment will appreciate in value, offering long-term financial 
            growth and a secure return on investment, while positioning you in an exciting digital marketplace.</p>
        </div>
    </div>
    </>
  )
}
export default InvestmentsWithROI;