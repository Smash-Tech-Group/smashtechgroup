import { UilCheck } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import missionvision from './../../../assets/images/logo/missionvision.png';

const MissionVision = () => {
  return (
    <>
    <div className="sections mission-desktop" id="missionvision">
      <h2>Mission Statement</h2>

      <Swiper 
        spaceBetween={1} 
        breakpoints={{
          1206: {
              slidesPerView: 3, /* 5. NORMAL LAPTOPS (E.G MY OWN) TO LARGE @media screen and (min-width: 1207px)*/
          },
          1024: {
            slidesPerView: 3, /* 4. SMALL LAPTOP SCREENS @media screen and (min-width: 1025px) and (max-width: 1206px) */
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
            <Link to="">              
              <div className="swipe">
                <p>To provide essential products and services to meet the needs of our clients and deliver superior returns.</p>
                <img src={missionvision} title="" alt="" />
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="">            
              <div className="swipe">
                <p>To change and improve the lives of our customers by simplifying their daily activities.</p>
                <img src={missionvision} title="" alt="" />
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="">               
              <div className="swipe">
                <p>To create a hassle-free home and office environment for our customers through our easy-to-use and easy-to-access services.</p>
                <img src={missionvision} title="" alt="" />
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="">               
              <div className="swipe">
                <p>To ensure that optimum results are achieved for our brand and its stakeholders.</p>
                <img src={missionvision} title="" alt="" />
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="">               
              <div className="swipe">
                <p>To ensure that the goals and aspirations of our employees are realized.</p>
                <img src={missionvision} title="" alt="" />
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="">               
              <div className="swipe">
                <p>To provide first-rate services and on-time delivery to our customers.</p>
                <img src={missionvision} title="" alt="" />
              </div>
            </Link>
          </SwiperSlide>
          
          <SwiperSlide>
            <Link to="">               
              <div className="swipe">
                <p>To give our clients the best customer experience.</p>
                <img src={missionvision} title="" alt="" />
              </div>
            </Link>
          </SwiperSlide>
        </div>
      </Swiper>
      </div>


      {/* mission - mobile */}
      <h2 className="missionvision" id="mission-mobile">Mission Statement</h2>

      <div id="mission-mobile">
        <div>
          <UilCheck className="icon" /> 
          <p>To provide essential products and services to meet the needs of our clients and deliver superior returns.</p>
        </div>

        <div>
          <UilCheck className="icon" /> 
          <p>To change and improve the lives of our customers by simplifying their daily activities.</p>
        </div>
        <div>
          <UilCheck className="icon" /> 
          <p>To create a hassle-free home and office environment for our customers through our easy-to-use and easy-to-access services.</p>
        </div>
        <div>
          <UilCheck className="icon" /> 
          <p>To ensure that optimum results are achieved for our brand and its stakeholders.</p>
        </div>
        <div>
          <UilCheck className="icon" /> 
          <p>To ensure that the goals and aspirations of our employees are realized.</p>
        </div>
        <div>
          <UilCheck className="icon" /> 
          <p>To provide first-rate services and on-time delivery to our customers.</p>
        </div>
        <div>
          <UilCheck className="icon" /> 
          <p>To give our clients the best customer experience.</p>
        </div>
      </div>

      {/* Vision */}

      <div className="sections mission-desktop" id="missionvision">
      <h2>Vision Statement</h2>

      <Swiper 
        spaceBetween={1}
        breakpoints={{
          1206: {
              slidesPerView: 3, /* 5. NORMAL LAPTOPS (E.G MY OWN) TO LARGE @media screen and (min-width: 1207px)*/
          },
          1024: {
            slidesPerView: 3, /* 4. SMALL LAPTOP SCREENS @media screen and (min-width: 1025px) and (max-width: 1206px) */
          },
          767: {
              slidesPerView: 2, /* 3. MEDIUM SCREENS @media screen and (min-width: 768px) and (max-width: 1024px) */
          },
          576: {
          slidesPerView: 2, /* 2. TABLETS @media screen and (min-width: 577px) and (max-width: 767px) */
          },
          350: {
              slidesPerView: 1.3, /* 1. SMALL/MOBILE @media screen and (min-width: 351px) and (max-width: 576px) */
          },
          // when window width is >= 0px (default for all sizes)
          0: {
            slidesPerView: 1.3,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          reverseDirection: true, 
        }}
          speed={2500} 
          loop={true} 
          modules={[Autoplay]}
        >

        <div>
          <SwiperSlide>
            <Link to="">              
              <div className="swipe">
                <p>To remain a company with a motivated, creative, dedicated, and professional human resource.</p>
                <img src={missionvision} title="" alt="" />
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="">            
              <div className="swipe">
                <p>To become a top-rated innovative company using modern technological infrastructures and tools to better our community.</p>
                <img src={missionvision} title="" alt="" />
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="">               
              <div className="swipe">
                <p>To be a globally recognized and impactful brand</p>
                <img src={missionvision} title="" alt="" />
              </div>
            </Link>
          </SwiperSlide>


          <SwiperSlide>
            <Link to="">               
              <div className="swipe">
                <p>To be our client's best partner through our unrivaled customer service</p>
                <img src={missionvision} title="" alt="" />
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="">               
              <div className="swipe">
                <p>To be our clients’ most preferred service provider</p>
                <img src={missionvision} title="" alt="" />
              </div>
            </Link>
          </SwiperSlide>
        </div>
      </Swiper>

      </div>

      {/* vision - mobile */}
      <h2 className="missionvision" id="mission-mobile">Vision Statement</h2>
      <div id="vision-mobile">
        <div>
          <UilCheck className="icon" /> 
          <p>To remain a company with a motivated, creative, dedicated, and professional human resource.</p>
        </div>

        <div>
          <UilCheck className="icon" /> 
          <p>To become a top-rated innovative company using modern technological infrastructures and tools to better our community.</p>
        </div>
        <div>
          <UilCheck className="icon" /> 
          <p>To be a globally recognized and impactful brand</p>
        </div>
        <div>
          <UilCheck className="icon" /> 
          <p>To be our client's best partner through our unrivaled customer service</p>
        </div>
        <div>
          <UilCheck className="icon" />
          <p>To be our clients’ most preferred service provider</p> 
        </div>
      </div>
    </>
  )
}
export default MissionVision;