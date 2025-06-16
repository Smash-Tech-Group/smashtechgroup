import { UilFacebook, UilInstagram, UilWhatsapp, UilEnvelope, UilPhone, UilTwitter } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo/footer-logo.png';

const Footer = () => {
  const categories = [
    {
      title: 'Ridesmash',
      slug: 'ridesmash',
    },
    {
      title: 'Smashfood',
      slug: 'smashfood',
    },
    {
      title: 'Smash Travels',
      slug: 'smashtravels',
    },
    {
      title: 'Smash Bookings',
      slug: 'smashbookings',
    },
    {
      title: 'Smashwise',
      slug: 'smashwise',
    },
    {
      title: 'Smashbuy247',
      slug: 'smashbuy247',
    },                  ,
    {
      title: 'Smash Apartments',
      slug: 'smashapartments',
    },                 ,
    {
      title: 'Smashproperties',
      slug: 'smashproperties',
    },                 
    {
      title: 'Smash Hire',
      slug: 'smashhire',
    },                 
    {
      title: 'Smash Logistics',
      slug: 'smashlogistics',
    },                 
    {
      title: 'Smash Laundry',
      slug: 'smashlaundry',
    },                 
    {
      title: 'Owenas',
      slug: 'owenas',
    },                 
    {
      title: 'Qiimeet',
      slug: 'qiimeet',
    },
  ];

  return (
    <>
    <div className="sections !text-base footer" id="footer">
      <div className="row">
          <div className="col-md-6 col-lg-3">
              <div className="footer-about text-base">
                <h2 className="p-0">Location</h2>
                <h5 className='text-xl' style={{ color: '#f34b02' }}>Corporate Headquarters, <br />Abuja</h5>
                <p className="mt-2">2 King Jaja Street, Works &amp; Housing, <br />3rd Avenue, Gwarinpa, <br />Abuja, Nigeria.</p>
              
                <h5 className='text-xl mt-3' style={{ color: '#f34b02' }}>Lagos Office</h5>
                <p className="mt-2 mb-2">No. 1, Alh. Kofoworola Crescent, Off Awolowo Way, by Balogun Bus Stop, Behind Lagoon Hospital, Ikeja, Lagos State.<br />Lagos, Nigeria. </p>
              </div>
          </div>
          <div className="col-md-6 col-lg-9">
              <div className="row">                                
                  <div className="col-sm-6 col-md-6 col-lg-4">
                      <div className="flex flex-col mb-[7px] footer-link">
                          <h2>Company</h2>
                          <Link to="/">Home</Link>
                          <Link to="/about">About Us</Link>
                          <a href="/all-businesses">Our Businesses</a>
                          <Link to="/buy-shares">Buy Shares</Link>
                          <Link to="/investment-with-roi">Investment Opportunities</Link>
                          <Link to="/press-release">Latest News</Link>
                          <Link to="/blog">Blog</Link>
                          <Link to="/careers">Careers</Link>
                          
                          <div className="footer-link mt-[1rem]">
                            <span className='text-[#f34b02]'>OUR HOTLINE</span>
                            <p style={{ lineHeight: '40px'}}><a href="tel:+23409169740288" title="Call our Hotline" className="flex items-center _070smash mb-0"><br />
                            <UilPhone /> 0916-974-0288</a></p>
                          </div>
                          {/* </div> */}
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4">
                      <div className="footer-link">
                          <h2>Our Businesses</h2>

                          {categories.map((categ, index) => (
                            <div key={index} className='flex flex-col mb-[7px]'>
                              <Link to={`/business/${categ.slug}`}>{categ.title}</Link> 
                            </div>
                          ))}
                          
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4">
                      <div className="footer-link">
                          <h2>Contact Us</h2>                         
                          
                          <a href="tel:+234916-974-0288" title="Click to call" className="_070smash mb-0">070<span>SMASHTECH</span></a>

                          <p className="branch-labels">Corporate Head Office</p>

                          {/* <a href="tel:+2349097403297" title="Call"><UilPhone />  */}
                          <a className='flex items-center mb-[7px]' href="tel:+2342013303315" title="Call Us"><UilPhone /> +234 2013303315</a>

                          <a className='flex items-center mb-[7px]' href="https://wa.me/2349169740288" title="Chat Smash Travels on WhatsApp"><UilWhatsapp /> +234 9097403297 (Smash Travels)</a>
                          
                          <a className='flex items-center mb-[7px]' href="https://wa.me/+2348100693634" title="Chat Ridesmash on WhatsApp"><UilWhatsapp /> +234 8100693634 (Ridesmash)</a>

                          <a className='flex items-center mb-[7px]' href="https://wa.me/+2347054881783" title="Chat Smashwise on WhatsApp"><UilWhatsapp /> +234 7054881783 (Smashwise)</a>
                          
                          <p className="branch-labels">Lagos Business Office</p>
                          <a className='flex items-center mb-[7px]' href="tel:+2348144824339" title="Call Lagos Office"> <UilPhone /> +234 8144824339</a><br />

                          <a className='flex items-center mb-[7px]' href="mailto:info@smashtechgroup.com" title="Email us - Info"><UilEnvelope /> info@smashtechgroup.com</a>
                          <a className='flex items-center mb-[7px]' href="mailto:support@smashtechgroup.com" title="Email us - Support"><UilEnvelope /> support@smashtechgroup.com</a>
                          
                          <div style={{ display: 'flex', gap: '1rem' }}>
                            <a className='flex items-center mb-[7px]' href="https://x.com/smashtechnology"><UilTwitter /></a>
                            <a className='flex items-center mb-[7px]' href="https://web.facebook.com/smashtechnology"><UilFacebook /></a>
                            <a className='flex items-center mb-[7px]' href="https://www.instagram.com/smashtechnology"><UilInstagram /></a>
                            <a className='flex items-center mb-[7px]' href="https://wa.me/+2349097403297" title="Click to chat on WhatsApp"><UilWhatsapp /></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <hr />

      <div className="footer-menu">
        <div className="row">
          <div className="col-md-6">
            <Link to="/" id="logo">
              <img src={logo} style={{width: '50px', height: '50px' }} title="Logo" alt="Logo" />
            </Link>
            Copyright &copy; Smash Technology Ltd. All Rights Reserved. 
          </div>
          <div className="col-md-6 footer-menu">
            <div className="f-menu">
              <Link to="/privacypolicy" style={{ color: '#eee' }}>Privacy Policy</Link>
              <Link to="/termsandconditions" style={{ color: '#eee' }}>Terms of Use</Link>
              <Link to="/passwordpolicy" style={{ color: '#eee' }}>Password Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
export default Footer;