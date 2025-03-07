import { UilArrowRight } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import leadway from './../../../assets/images/partners/leadway.png';
import tajbank from './../../../assets/images/partners/tajbank.png';
import globus from './../../../assets/images/partners/globusbank.JPG';
import moniepoint from './../../../assets/images/partners/moniepoint.png';

const OurPartners = () => {
  return (
    <>
    <div className="sections partner" id="missionvision">
      <h2>Our Partners</h2>
      <p className="partner">A list of our Insurance and Financial Partners</p>
      
      <Swiper 
        spaceBetween={1}
        breakpoints={{
          1206: {
              slidesPerView: 3, /* 5. NORMAL LAPTOPS (E.G MY OWN) TO LARGE @media screen and (min-width: 1207px)*/
          },
          1024: {
            slidesPerView: 3 /* 4. SMALL LAPTOP SCREENS @media screen and (min-width: 1025px) and (max-width: 1206px) */
          },
          767: {
              slidesPerView: 2, /* 3. MEDIUM SCREENS @media screen and (min-width: 768px) and (max-width: 1024px) */
          },
          576: {
          slidesPerView: 2, /* 2. TABLETS @media screen and (min-width: 577px) and (max-width: 767px) */
          },
          350: {
              slidesPerView: 1.5, /* 1. SMALL/MOBILE @media screen and (min-width: 351px) and (max-width: 576px) */
          },
          // when window width is >= 0px (default for all sizes)
          0: {
            slidesPerView: 1.5,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={3000} 
        loop={true} 
        modules={[Autoplay]}
        >

        {/* <div id="mission-desktop"> */}
        <div className="c4 c2-sm c2-xs partner partner-flex">
          <SwiperSlide> 
            <img src={leadway} className="partners" />
          </SwiperSlide>

          <SwiperSlide>       
            <img src={tajbank} className="partners" />
          </SwiperSlide>

          <SwiperSlide> 
            <img src={globus} className="partners" />
          </SwiperSlide>

          <SwiperSlide>       
            <img src={moniepoint} className="partners" />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
    </>
  )
}
export default OurPartners;