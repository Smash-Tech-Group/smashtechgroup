import { UilArrowRight } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import biz1 from './../../../assets/images/ourbusiness/Ride.jpg';
import biz2 from './../../../assets/images/ourbusiness/Food.jpg';
import biz3 from './../../../assets/images/ourbusiness/Travels.jpg';
import placeholder from './../../../assets/images/otherpages/investor.jpg';
import Header from '../__layouts/Header';
import Banner_otherpages from '../__sections/_Banner_otherpages';
import image from './../../../assets/images/corepurpose/core_purpose__.jpg';

const AllBusinesses = () => {
  const categories = [
    {
      title: 'Ridesmash',
      description: 'Get a safe and affordable ride anytime, anywhere with our user-friendly ride-hailing platform.',
      image: biz1,
      slug: 'ridesmash',
    },
    {
      title: 'Smashfood',
      description: 'Delicious meals, delivered fast. Order your favorites and enjoy culinary delights at your doorstep.',
      image: biz2,
      slug: 'smashfood',
    },
    {
      title: 'Smash Travels',
      description: 'UNLOCKING INTERNATIONAL CAREERS ADVENTURE WITH SMASH TRAVELS ',
      image: biz3,
      slug: 'smashtravels',
    },
    {
      title: 'Smash Bookings',
      description: '',
      image: placeholder,
      slug: 'smashbookings',
    },
    {
      title: 'Smashwise',
      description: '',
      image: placeholder,
      slug: 'smashwise',
    },
    {
      title: 'Smashbuy247',
      description: '',
      image: placeholder,
      slug: 'smashbuy247',
    },           
    {
      title: 'Smash Apartments',
      description: '',
      image: placeholder,
      slug: 'smashapartments',
    }, 
    {
      title: 'Smashproperties',
      description: 'YOUR GATEWAY TO STREAMLINED AND SECURE PROPERTY DEALS',
      image: placeholder,
      slug: 'smashproperties',
    },                 
    {
      title: 'Smash Hire',
      description: '',
      image: placeholder,
      slug: 'smashhire',
    },                 
    {
      title: 'Smash Logistics',
      description: '',
      image: placeholder,
      slug: 'smashlogistics',
    },                 
    {
      title: 'Smash Laundry',
      description: '',
      image: placeholder,
      slug: 'smashlaundry',
    },                 
    {
      title: 'Owenas',
      description: '',
      image: placeholder,
      slug: 'owenas',
    },                 
    {
      title: 'Qiimeet',
      description: '',
      image: placeholder,
      slug: 'qiimeet',
    },
  ];

  return (
    <>    
    <Header />
    <Banner_otherpages title="Our Businesses" image={image} />

    <div className="sections" id="ourbusiness">
        <h2>All Our Businesses</h2>
        <p>Smash Technology is a group of innovative app-based subsidiaries designed to simplify and enhance your daily life. 
            We've transformed our services from manual operations to a tech-driven experience, offering a variety of essential 
            apps for both local and international users.
        </p>
        
      <div className="c3 c2-sm c1-xs" id="cover">
      
        {categories.map((categ, index) => (
          <div key={index} className="business-container">
            <img src={categ.image} title="" alt="" />
            <h3 style={{ textAlign: 'left' }}>{categ.title}</h3>
            <p>{categ.description}</p>
            <Link to={`/business/${categ.slug}`}>Learn more <UilArrowRight /></Link>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p><b><Link to="/" style={{ color: '#333' }}>Back to Homepage <UilArrowRight /></Link></b></p>
      </div>
    </div>
    </>
  )
}
export default AllBusinesses;