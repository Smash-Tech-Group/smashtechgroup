import { useParams } from 'react-router-dom';
import biz1 from './../../../assets/images/ourbusiness/Ride.jpg';
import biz2 from './../../../assets/images/ourbusiness/Food.jpg';
import biz3 from './../../../assets/images/ourbusiness/Travels.jpg';
import Header from '../__layouts/Header';
import Banner_otherpages from './_Banner_otherpages';
import {Link} from 'react-router-dom';
    
const BusinessDetail = () => {
  const { slug } = useParams();

  // Data for each category
  const categoryDetails = {
    ridesmash: {
      title: 'Ridesmash',
      image: biz1,
      website: 'https://ridesmash.com',
      description: 'Get a safe and affordable ride anytime, anywhere with our user-friendly ride-hailing platform.',
      details: `RideSmash is not only transforming the e-hailing industry but also offering flexible hire 
      purchase options, allowing people to access high-quality vehicles through affordable installment plans. 
      Your investment helps fuel the development of this dual platform, enabling us to expand our fleet and 
      improve our service offerings. By supporting RideSmash, you contribute to making transportation more 
      accessible with affordable cost while also benefiting from the profitable returns generated through our 
      E-hailing services and hire purchase agreements. Our customers’ regular payments and the steady demand for 
      reliable rides ensure strong profitability, which directly impacts the returns for our investors. Investing 
      in RideSmash places you at the forefront of the rapidly growing ehailing and hire purchase market. Your funds are protected, 
      ensuring that you benefit from secure, consistent returns. With increasing demand for affordable, flexible transportation, 
      your investment will generate monthly returns as RideSmash expands. As we grow, your investment will continue to provide you 
      with profitable returns, supported by a loyal customer base. RideSmash offers not only security for your funds but also an exciting 
      opportunity for continued growth, offering long-term stability and returns in the booming mobility sector.`,
    },
    smashfood: {
        title: 'Smashfood',
        image: biz2,
        website: 'https://smashfood.com',
        description: 'Delicious meals, delivered fast. Order your favorites and enjoy culinary delights at your doorstep.',
        details: `SmashFood is your go-to app for fast and reliable food delivery, offering a wide variety of fresh, diverse meal 
        options delivered straight to your door. SmashFood aims to dominate the market by ensuring faster deliveries of foods and a 
        seamless customer experience. Your investment helps us build and maintain our app, enhance our platform's features, and drive 
        advertising efforts to reach more customers and vendors. This not only boosts the app's visibility and user base but also enables 
        local food vendors to sell more, increasing their revenue. With your support, we can continue to scale our operations and make SmashFood 
        a profitable investment, delivering attractive returns for all investors. SmashFood offers investors the opportunity to tap into the 
        lucrative food delivery industry with high potential for monthly returns. Your funds are securely invested, ensuring both your capital 
        and profits are protected. As the demand for food delivery grows, your investment will generate consistent returns, backed by a secure 
        and transparent business model. With growing market penetration, your returns will increase as the brand expands. SmashFood provides 
        you with peace of mind, knowing that your funds are in safe hands while benefiting from an industry poised for continued growth.`,
    },
    smashtravels: {
      title: 'Smash Travels',
      image: biz3,
      website: 'https://smashtravels.com',
      description: 'UNLOCKING INTERNATIONAL CAREERS ADVENTURE WITH SMASH TRAVELS',
      details: `Smash Travels is a travel platform specializing in processing work permit visas for clients seeking employment opportunities across Canada and several European countries. With a focus on simplifying the visa application process, Smash Travels aims to support individuals in navigating the complex requirements of securing work permits abroad.

        The platform is designed to offer a seamless experience for clients, whether they are looking to move to Canada for career growth or explore professional prospects in European nations. Smash Travels is committed to ensuring that clients have access to up-to-date information, expert guidance, and a transparent process to facilitate the approval of work permits.`,
    },
    smashbookings: {
        title: 'Smash Bookings',
        image: '',
        website: 'https://www.smashbookings.com',
        description: 'Business summary',
        details: `More Detail`
    },
    smashwise: {
        title: 'Smashwise',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `More Detail`
    },
    smashbuy247: {
        title: 'Smashbuy247',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `More Detail`
    },  
    smashapartments: {
        title: 'Smash Apartments',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `More Detail`
    },  
    smashproperties: {
        title: 'Smash Properties',
        image: '',
        website: '#',
        description: 'YOUR GATEWAY TO STREAMLINED AND SECURE PROPERTY DEALS',
        details: `Smash Properties is a comprehensive platform designed to facilitate the buying and selling of houses and land with security, efficiency, and trust. The platform allows property vendors to easily register and list their properties for sale, reaching a broad audience of potential buyers. At the same time, clients seeking to purchase properties can also register, explore listings, and make informed decisions.

        To ensure seamless and secure transactions, Smash Properties integrates an escrow system. This system acts as a trusted intermediary, safeguarding funds until all conditions of the transaction are met, protecting both buyers and sellers. By leveraging this approach, Smash Properties guarantees transparency, reduces risks, and fosters trust between parties.

        Smash Properties serves as the ideal solution for anyone looking to buy or sell properties with confidence and ease.`,
    },                 
    smashhire: {
        title: 'Smash Hire',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `Smash Hire is an innovative platform designed to bridge the gap between individuals in need of skilled services and talented artisans available nearby. 
          Smash Hire connects you to reliable professionals within your vicinity. By offering a simple, intuitive platform, we make it easier than ever to find trusted artisans for a wide range of needs, ensuring quality service at your doorstep.
          Our mission is to make skilled labor more accessible, efficient, and reliable for everyone by connecting trusted local artisans with individuals in need of services. We strive to create a platform that fosters trust, transparency, and convenience—empowering customers to find the right help when they need it and helping artisans expand their businesses with ease.`
    },                 
    smashlogistics: {
        title: 'Smash Logistics',
        image: '',
        website: '#',
        description: 'Revolutionizing Pickup Services with Location-Based Solutions',
        details: `Smash Logistics is an innovative logistics platform that streamlines the process of picking up goods by leveraging real-time location data. Designed to meet the growing demand for efficient, location-based pickup services, Smash Logistics offers a flexible and reliable solution for businesses and individuals alike.`
    },                 
    smashlaundry: {
        title: 'Smash Laundry',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `More Detail`
    },                 
    owenas: {
        title: 'Owenas',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `More Detail`
    },                 
    qiimeet: {
        title: 'Qiimeet',
        image: '',
        website: '#',
        description: 'Business summary',
        details: `More Detail`
    },
  };

  // Fetch the details for the specific slug
  const category = categoryDetails[slug];

  if (!category) {
    return <p>Category not found!</p>; // Handle invalid slugs
  }

  return (
    <>
    <Header />
    <Banner_otherpages title={category.title} image={category.image} />

    <div className="sections business-detail" id="whoweare">
      <h2>{category.title}</h2>
      <h3>{category.description}</h3>
      <p>{category.details}</p>
      <Link to={category.website} className="smashtech-button swipe-button">Visit {category.title} Website</Link>
    </div>
    </>
  );
};
export default BusinessDetail;