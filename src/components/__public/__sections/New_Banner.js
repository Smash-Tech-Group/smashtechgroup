import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { UilArrowRight } from '@iconscout/react-unicons';
import category_image from '../../../assets/img/course-categories/1. pexels-technobulka-10816120_category_programming_languages.jpg';
import softwareengr from '../../../assets/videos/softwareengr.mp4';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const New_Banner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch((error) => {
        console.log('Error trying to play video:', error);
      });
    }
  }, []);

  return (
    <div className="zy-c5_2 zy-c1-md zy-c1-sm zy-c1-xs" id="banner">
      <div className="zyzics__banner">
        <Swiper 
          spaceBetween={1}
          breakpoints={{
            1206: {
                slidesPerView: 1, /* 5. NORMAL LAPTOPS (E.G MY OWN) TO LARGE @media screen and (min-width: 1207px)*/
            },
            1024: {
              slidesPerView: 1, /* 4. SMALL LAPTOP SCREENS @media screen and (min-width: 1025px) and (max-width: 1206px) */
            },
            767: {
                slidesPerView: 1, /* 3. MEDIUM SCREENS @media screen and (min-width: 768px) and (max-width: 1024px) */
            },
            576: {
            slidesPerView: 1, /* 2. TABLETS @media screen and (min-width: 577px) and (max-width: 767px) */
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
            delay: 6500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          >
          {/* Slide 1 */}
          <SwiperSlide>

            <h1>Learn your dream IT courses</h1>
            <p>Our lessons are easy to understand, even for novices. We explain and clarify complex topics, 
              and break them into simple, practical steps.</p>
            {/* <p>Even if you're a novice, we make Programming and IT courses very easy to understand. 
              We explain and clarify complex topics, and break them into simple, practical steps. </p> */}
            {/* Our lessons are illustrative, easy to understand, and practical in the industry.</p> */}

            <p><Link to="/" className="zyzics-btn button__header">Browse courses 
            <UilArrowRight /></Link></p>

          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>

            <h1>Get your website designed</h1>
            <p>A website is a powerful marketing tool. Let's create a good-looking website 
              that can attract clients, drive sales, and grow your business.</p>

            <p><Link to="/" className="zyzics-btn button__header">Get a website 
            <UilArrowRight /></Link></p>

          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>

            <h1>Turn your ideas into software</h1>
            <p>Your idea is not a waste. If you can imagine it, we can create it as software. 
              We can transform ideas into powerful, next level apps.</p>

            <p><Link to="/" className="zyzics-btn button__header">Get a custom app 
            <UilArrowRight /></Link></p>

          </SwiperSlide>
          
          {/* Slide 4 */}
          <SwiperSlide>

            <h1>Simplified business solution</h1>
            <p>Our apps simplify the workflow of teams in organizations. Users can
              accomplish their tasks seamlessly and more efficiently.
            </p>
              {/* We create robust software that helps teams and organizations to collaborate, 
              work seamlessly, and complete their tasks more efficiently.</p> */}

            <p><Link to="/" className="zyzics-btn button__header">See our apps 
            <UilArrowRight /></Link></p>

          </SwiperSlide>
          
        </Swiper>
      </div>

      <div className="zyzics_ittraining-black">
        <div className="video-container">
          <video ref={videoRef} width="100%" loop>
            <source src={softwareengr} type="video/mp4" />
            Your browser doesn't support the video.
          </video>
        </div>

        <Swiper 
          spaceBetween={11}
          breakpoints={{
            1206: {
                slidesPerView: 1, /* 5. NORMAL LAPTOPS (E.G MY OWN) TO LARGE @media screen and (min-width: 1207px)*/
            },
            1024: {
              slidesPerView: 1, /* 4. SMALL LAPTOP SCREENS @media screen and (min-width: 1025px) and (max-width: 1206px) */
            },
            767: {
                slidesPerView: 1, /* 3. MEDIUM SCREENS @media screen and (min-width: 768px) and (max-width: 1024px) */
            },
            576: {
            slidesPerView: 1, /* 2. TABLETS @media screen and (min-width: 577px) and (max-width: 767px) */
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
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          >
            
          <SwiperSlide>
            <div className="zyzics__subbanner">
              <Link to="/">
                <h3>Programming Languages</h3>
              </Link>
              
              <p>Java, Python, PHP, JavaScript, C++, etc.</p>
              <code>Over 250 courses</code>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="zyzics__subbanner">
              <h3>Programming Languages</h3>
              <p>Java, Python, PHP, JavaScript, C++, etc.</p>
              <code>Over 250 courses</code>
            </div>
          </SwiperSlide>
          
        </Swiper>
          
        {/* <div className="zyzics_ittraining-subbanner">
          <h4>Programming Languages</h4>
          <p>Java, Python, PHP, JavaScript, C++, etc.</p>
          <code>Over 250 courses</code>
        </div> */}
      </div>
    </div> 
  )
}
export default New_Banner;