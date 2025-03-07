import { useEffect } from 'react';
import smashtech_cert from '../../../../src/assets/images/_about/smash_technology_cac.jpg';
import smashlogistics_cert from '../../../../src/assets/images/_about/smash_logistics_cac.jpeg';
import smashbooking_cert from '../../../../src/assets/images/_about/smash_booking_cac.jpeg';
import smashconnect_cert from '../../../../src/assets/images/_about/smash_connect_cac.jpeg';
import smashride_cert from '../../../../src/assets/images/_about/smash_ride_cac.jpeg';
import Map from '../../__public/__sections/_Map';
import image from '../../../assets/images/corepurpose/core_purpose.jpeg';
import Header from '../../__public/__layouts/Header';
import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Corporate_Docs = (props) => {
  useEffect(() => {
    document.title = `${props.company} — Corporate Documents`;
  }, []);

  return (
    <>    
    <Header />
    <Banner_otherpages title="Our Corporate Documents" image={image} />

    <div className="sections partner corporate_docs" id="missionvision">
      <h2>Our Certificates of Incorporation Registered by CAC, Nigeria</h2>

      <Swiper 
        spaceBetween={1} 
        breakpoints={{
          1206: {
              slidesPerView: 2, /* 5. NORMAL LAPTOPS (E.G MY OWN) TO LARGE @media screen and (min-width: 1207px)*/
          },
          1024: {
            slidesPerView: 2, /* 4. SMALL LAPTOP SCREENS @media screen and (min-width: 1025px) and (max-width: 1206px) */
          },
          767: {
              slidesPerView: 2, /* 3. MEDIUM SCREENS @media screen and (min-width: 768px) and (max-width: 1024px) */
          },
          576: {
          slidesPerView: 2, /* 2. TABLETS @media screen and (min-width: 577px) and (max-width: 767px) */
          },
          350: {
              slidesPerView: 1, /* 1. SMALL/MOBILE @media screen and (min-width: 351px) and (max-width: 576px) */
          },
          // when window width is >= 0px (default for all sizes)
          0: {
            slidesPerView: 1,
          },
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
          speed={3500} 
          loop={true} 
          modules={[Autoplay]}
        >

        <div id="mission-desktop">
          <SwiperSlide> 
            <h3 className="partner mb-0 p-0">Smash Technology</h3>

            <img src={smashtech_cert} title="Smash Technology Certificate of Incorporation by CAC Nigeria" 
              alt="Smash Technology Certificate of Incorporation by CAC Nigeria" style={{ width: '100%' }} />              
          </SwiperSlide>

          <SwiperSlide>   
            <h3 className="partner mb-0 p-0">Smash Logistics</h3>

            <img src={smashlogistics_cert} title="Smash Logistics Certificate of Incorporation by CAC Nigeria" 
              alt="Smash Logistics Certificate of Incorporation by CAC Nigeria" style={{ width: '100%' }} />
          </SwiperSlide>

          <SwiperSlide>
            <h3 className="partner mb-0 p-0">Smash Booking</h3>

            <img src={smashbooking_cert} title="Smash Booking Certificate of Incorporation by CAC Nigeria" 
              alt="Smash Booking Certificate of Incorporation by CAC Nigeria" style={{ width: '100%' }} />
          </SwiperSlide>

          <SwiperSlide style={{ width: '100%', border: 0 }}>    
            <h3 className="partner mb-0 p-0">Smash Connect</h3>

            <img src={smashconnect_cert} title="Smash Connect Certificate of Incorporation by CAC Nigeria" 
              alt="Smash Connect Certificate of Incorporation by CAC Nigeria" style={{ width: '100%' }} />
          </SwiperSlide>

          <SwiperSlide style={{ width: '100%', border: 0 }}>             
            <h3 className="partner mb-0 p-0">Smash Ride</h3>    

            <img src={smashride_cert} title="Smash Ride Certificate of Incorporation by CAC Nigeria" 
              alt="Smash Ride Certificate of Incorporation by CAC Nigeria" style={{ width: '100%' }} />           
          </SwiperSlide>

        </div>
      </Swiper>
    </div>

    <Map />
    </>
  );
}
export default Corporate_Docs;