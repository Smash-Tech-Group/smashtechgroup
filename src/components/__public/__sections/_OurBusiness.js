import { UilArrowRight } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import biz1 from './../../../assets/images/ourbusiness/Ride.jpg';
import biz2 from './../../../assets/images/ourbusiness/Food.jpg';
import biz3 from './../../../assets/images/ourbusiness/Travels.jpg';

const OurBusiness = () => {
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
      description: 'Effortless bookings and memorable journeys await. Let us handle the details — your adventure starts here.',
      image: biz3,
      slug: 'smashtravels',
    },
  ];

  return (
    <>
    <div className="sections" id="ourbusiness">
        <h2 className='!font-semibold !text-[32px]'>Our Business</h2>
        <p className='text-base leading-[26px]'>
          Smash Technology is a group of innovative app-based subsidiaries designed to simplify and enhance your daily life. 
          We've transformed our services from manual operations to a tech-driven experience, offering a variety of essential 
          apps for both local and international users.
        </p>
        
      <div className="c3 c2-sm c1-xs" id="cover">
      
        {categories.map((categ, index) => (
          <div key={index} className="business-container text-base">
            <img src={categ.image} title="" alt="" />
            
            <h3 className='font-semibold md:!my-[1rem] text-[18px]' style={{ textAlign: 'left' }}>{categ.title}</h3>
            <p className='text-base !leading-[26px]'>{categ.description}</p>
            
            <Link className='flex px-[1.25px] !mb-0 items-center !text-base' to={`/business/${categ.slug}`}>Learn more <UilArrowRight className='flex items-center h-5 w-5' /></Link>
          </div>
        ))}
      </div>

      <div className="py-[2rem] text-center mx-auto block w-[100%]">
        <p><b><Link  className='flex px-[1.25px] !mb-0 items-center text-base justify-center '  to="/all-businesses" style={{ color: '#333' }}>View All Our Businesses <UilArrowRight /></Link></b></p>
      </div>
    </div>
    </>
  )
}
export default OurBusiness;