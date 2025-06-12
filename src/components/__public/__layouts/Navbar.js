import { useState, useEffect } from 'react';
import { UilApps, UilAngleDown } from '@iconscout/react-unicons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/images/logo/smash-logo.png';
import { UilPhone } from '@iconscout/react-unicons';

const Navbar = () => {
  const location = useLocation();

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

  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
    // If there's a hash in the location, scroll to the associated element
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-item')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <nav className="navbar">
      <Link to="/" id="logo">
        <img src={logo} className="logo" title="Smash Technology Logo" alt="Smash Technology Logo" />

        <div title="Welcome to Smash Technology">
          Smash <span>Technology</span>
        </div>
      </Link>

      <li className="dvs-header__trigger" onClick={toggleMenu}><UilApps /></li>

      <ul className={`menu ${isOpen ? 'is-open' : ''}`}>
        <li className="menu-item" title="Click to browse company">
          <button
            onClick={() => toggleDropdown('company')}
            className={`menu-button ${openDropdown === 'company' ? 'active' : ''}`}
          >
            Company<span className={`caret ${openDropdown === 'company' ? 'rotate' : ''}`}><UilAngleDown /></span>
          </button>
          {openDropdown === 'company' && (
            <div className="dropdown">
              <div className="dropdown-content">
                <ul>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/corporate-documents">Corporate Documents</Link></li>
                  <li><Link to="/about#core_values">Our Core Values</Link></li>
                  <li><Link to="/about#commitment_to_sustainability">Commitment to Sustainability</Link></li>
                  <li><Link to="/about#commitment_to_quality">Commitment To Quality</Link></li>
                  <li><Link to="/about#exceptional_cs">Exceptional Customer Service</Link></li>
                  <li><Link to="/investor-relations">Investor Relations</Link></li>
                  <li><Link to="/smash-people">People</Link></li>
                  {/* <li><Link to="/onboarding">Onboarding</Link></li> */}
                </ul>
              </div>
            </div>
          )}
        </li>
        <li className="menu-item" title="Browse our businesses">
          <button onClick={() => toggleDropdown('ourBusiness')} className="menu-button">
            Our Business<span className={`caret ${openDropdown === 'ourBusiness' ? 'rotate' : ''}`}><UilAngleDown /></span>
          </button>
          {openDropdown === 'ourBusiness' && (
            <div className="dropdown">
              <div className="dropdown-content">
                
                <ul>
                {categories.map((categ, index) => (
                  <li key={index}>
                    <Link to={`/business/${categ.slug}`}>{categ.title}</Link>
                  </li>
                ))}
                </ul>
                  
              </div>
            </div>
          )}
        </li>
        <li className="menu-item" title="Browse investment opportunities">
          <button onClick={() => toggleDropdown('investment')} className="menu-button">
            Investment<span className={`caret ${openDropdown === 'investment' ? 'rotate' : ''}`}><UilAngleDown /></span>
          </button>
          {openDropdown === 'investment' && (
            <div className="dropdown">
              <div className="dropdown-content">
                <ul>
                  <li><Link to="/buy-shares">Buy Shares</Link></li>
                  <li><Link to="/invest-with-us">Investment (with ROI)</Link></li>
                  {/* <li><Link to="/investor-signup">Investor Signup</Link></li> */}
                </ul>
              </div>
            </div>
          )}
        </li>
        
        <li className="menu-item" title="Media">
          <button onClick={() => toggleDropdown('media')} className="menu-button">
            Media<span className={`caret ${openDropdown === 'media' ? 'rotate' : ''}`}><UilAngleDown /></span>
          </button>
          {openDropdown === 'media' && (
            <div className="dropdown">
              <div className="dropdown-content">
                <ul>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/faq">FAQ</Link></li>
                  <li><Link to="">Gallery</Link></li>
                  <li><Link to="/press-release">Press Release</Link></li>
                  <li><Link to="">Smash CSR</Link></li>
                </ul>
              </div>
            </div>
          )}
        </li>

        <li className="menu-item" title="Browse our careers">
          <Link to="/careers" className="menu-button" id="careers">Careers</Link>
        </li>

        <li className="menu-item" title="Browse our Onboarding">
          <Link to="/onboarding" className="menu-button" id="careers">Onboarding</Link>
        </li>
      </ul>

      <div className="contacts">
        {/* <div className="footer-link">
          <p style={{ lineHeight: '40px'}}><a href="tel:+23409169740288" title="Call our Hotline" className="_070smash mb-0"><span><UilPhone /> 0916-974-0288</span></a></p>
        </div> */}
        <div style={{ fontSize: '16px' }}>
          <a href="#footer" title="Contact us" className="smashtech-button swipe-button">Get In Touch</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
