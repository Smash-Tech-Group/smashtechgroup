import { useState, useEffect } from 'react';
import { UilBars, UilAngleDown } from '@iconscout/react-unicons';
import {Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/images/logo/smash-logo.png';

const Navbar = (props) => {
  const location = useLocation();

  // Detect if it's a same-page anchor and scroll smoothly
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  // state for navbar click event
  const [isOpen, setIsOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-item')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Mobile Nav
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <>
    <nav className="navbar">
      <Link to="/" id="logo">
        <img src={logo} className="logo" style={{width: '65.21px', height: '65.21px' }} title="Logo" alt="Logo" /> 
        <div>
          <span>Smash </span>Technology
        </div>
      </Link>
      
      <li className="dvs-header__trigger" onClick={toggleMenu}><UilBars /></li>
      
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
                <ul className="">
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/about#core_values">Our Core Values</Link></li>
                  <li><Link to="/about#commitment_to_sustainability">Commitment to Sustainability</Link></li>
                  <li><Link to="/about#commitment_to_quality">Commitment To Quality</Link></li>
                  <li><Link to="/about#exceptional_cs">Exceptional Customer Service</Link></li>
                  <li><Link to="/investor-relations">Investor Relations</Link></li>
                  <li><Link to="/smash-people">People</Link></li>
                </ul>
              </div>
            </div>
          )}
        </li>
        <li className="menu-item" title="Browse our businesses">
          <button onClick={() => toggleDropdown('ourBusiness')} className="menu-button">
            Our Business <span className={`caret ${openDropdown === 'ourBusiness' ? 'rotate' : ''}`}><UilAngleDown /></span>
          </button>
          {openDropdown === 'ourBusiness' && (
            <div className="dropdown">
                <div className="dropdown-content">
                  <ul className="">
                    <li><a href="https://ridesmash.com/">Ridesmash</a></li>
                    <li><a href="https://smashtravels.com/">Smash Travels</a></li>
                    <li><a href="https://www.smashbookings.com/">Smash Bookings</a></li>
                    <li><Link to="/">Smashwise</Link></li>
                    <li><Link to="/">Smashbuy247</Link></li>
                    <li><Link to="/">Smash Apartments</Link></li>
                    <li><Link to="/">Smashfood</Link></li>
                    <li><Link to="/">Smashproperties</Link></li>
                    <li><Link to="/">Smash Hire</Link></li>
                    <li><Link to="/">Smash Logistics</Link></li>
                    <li><Link to="/">Smash Laundry</Link></li>
                    <li><Link to="/">Owenas</Link></li>
                    <li><Link to="/">Qiimeet</Link></li>
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
                  <ul className="">
                    <li><Link to="/buy-shares">Buy Shares</Link></li>
                    <li><Link to="/investments-with-roi">Investment with ROI</Link></li>
                    <li><Link to="/investor-signup">Investor Signup</Link></li>  
                  </ul>
              </div>
            </div>
          )}
        </li>

        <li className="menu-item" title="Browse our careers">
          <Link to="/careers" className="menu-button" id="careers">Careers</Link>
        </li>

        <li className="menu-item" title="Our media">
          <button onClick={() => toggleDropdown('media')} className="menu-button">
            Media <span className={`caret ${openDropdown === 'media' ? 'rotate' : ''}`}><UilAngleDown /></span>
          </button>
          {openDropdown === 'media' && (
            <div className="dropdown">
              <div className="dropdown-content">
                <ul className="">
                  <li><Link to="/">Smash CSR</Link></li>
                  <li><Link to="/">Gallery</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/faq">FAQ</Link></li>
                </ul>
              </div>
            </div>
          )}
        </li> 
               
      </ul>
      
      <div className="contacts" >
          <div>
            <a href="#footer" className="smashtech-button swipe-button">Get In Touch</a>
          </div>    
        </div>  
    </nav>
    </>
  );
};
export default Navbar;