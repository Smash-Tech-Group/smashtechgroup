import { useEffect } from 'react';
import Header from '../../__layouts/Header';
import Banner_otherpages from '../_Banner_otherpages';
import Map from '../../__sections/_Map';
import image from '../../../../assets/images/otherpages/investor.jpg';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import frame1 from '../../../../assets/images/otherpages/inner/frames/Frame Ridesmash.png'
import frame2 from '../../../../assets/images/otherpages/inner/frames/Frame smashapartment.png'
import frame3 from '../../../../assets/images/otherpages/inner/frames/Frame smashbookings.png'
import frame4 from '../../../../assets/images/otherpages/inner/frames/Frame smashfood.png'
import frame5 from '../../../../assets/images/otherpages/inner/frames/Frame smashtech.png'
import frame6 from '../../../../assets/images/otherpages/inner/frames/Frame smashtravals.png'
import frame7 from '../../../../assets/images/otherpages/inner/frames/Frame smashwise.png'
import framebig1 from '../../../../assets/images/otherpages/inner/frames/Frame 305.png'
import framebig2 from '../../../../assets/images/otherpages/inner/frames/Frame 308.png'
import framebig3 from '../../../../assets/images/otherpages/inner/frames/Frame 309.png'
import framebig4 from '../../../../assets/images/otherpages/inner/frames/Frame 310.png'
import framebig5 from '../../../../assets/images/otherpages/inner/frames/Frame 301.png'
import framebig6 from '../../../../assets/images/otherpages/inner/frames/Frame 297.png'

const InvestorRelations = (props) => {
  useEffect(() => {
    document.title = `${props.company} — Investor Relations`;
  }, []);

  return (
    <>    
    <Header />
    <Banner_otherpages title="Investor Relations" image={image} />

    <div className="sections" id="about_investorrelations">

      <Swiper 
        spaceBetween={1}
        breakpoints={{
          1206: {
              slidesPerView: 5, /* 5. NORMAL LAPTOPS (E.G MY OWN) TO LARGE @media screen and (min-width: 1207px)*/
          },
          1024: {
            slidesPerView: 4, /* 4. SMALL LAPTOP SCREENS @media screen and (min-width: 1025px) and (max-width: 1206px) */
          },
          767: {
              slidesPerView: 3, /* 3. MEDIUM SCREENS @media screen and (min-width: 768px) and (max-width: 1024px) */
          },
          576: {
          slidesPerView: 2.5, /* 2. TABLETS @media screen and (min-width: 577px) and (max-width: 767px) */
          },
          350: {
              slidesPerView: 1.5, /* 1. SMALL/MOBILE @media screen and (min-width: 351px) and (max-width: 576px) */
          },
          // when window width is >= 0px (default for all sizes)
          0: {
            slidesPerView: 1.3,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        >

        <div>
          <SwiperSlide>          
            <div className="swipe">
              <img src={frame1} className="small" title="" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>          
            <div className="swipe">
              <img src={frame2} className="small" title="" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>          
            <div className="swipe">
              <img src={frame3} className="small" title="" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>          
            <div className="swipe">
              <img src={frame4} className="small" title="" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>          
            <div className="swipe">
              <img src={frame5} className="small" title="" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>          
            <div className="swipe">
              <img src={frame6} className="small" title="" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>          
            <div className="swipe">
              <img src={frame7} className="small" title="" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>          
            <div className="swipe">
              <img src={frame1} className="small" title="" alt="" />
            </div>
          </SwiperSlide>

        </div>
      </Swiper>

    </div>
      
    <div className="slider-div" id="investor">
      <h2>Our Public Listed Companies</h2>
      
      <div className="zy-c1 zy-c1-sm zy-c1-xs text-center slider-p">
        <p>At Smash Technology, we take pride in fostering innovation and delivering unparalleled solutions across diverse industries. Our portfolio 
          includes a range of publicly listed companies that lead in their respective sectors, from e-commerce to investment services, travels, ride 
          hailing and many more. These companies exemplify our commitment to excellence, driving economic growth and creating opportunities for individuals 
          and businesses. </p>
      </div>
      
      <Swiper 
        spaceBetween={11}
        breakpoints={{
          1206: {
              slidesPerView: 3.5, /* 5. NORMAL LAPTOPS (E.G MY OWN) TO LARGE @media screen and (min-width: 1207px)*/
          },
          1024: {
            slidesPerView: 3.5, /* 4. SMALL LAPTOP SCREENS @media screen and (min-width: 1025px) and (max-width: 1206px) */
          },
          767: {
              slidesPerView: 3, /* 3. MEDIUM SCREENS @media screen and (min-width: 768px) and (max-width: 1024px) */
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
        }}
        modules={[Autoplay]}
        >

        <div>
          <SwiperSlide>          
            <div className="swipe">
              <img src={framebig1} className="big" title="" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>          
            <div className="swipe">
              <img src={framebig2} className="big" title="" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>          
            <div className="swipe">
              <img src={framebig3} className="big" title="" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>          
            <div className="swipe">
              <img src={framebig4} className="big" title="" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>          
            <div className="swipe">
              <img src={framebig5} className="big" title="" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>          
            <div className="swipe">
              <img src={framebig6} className="big" title="" alt="" />
            </div>
          </SwiperSlide>

        </div>
      </Swiper>
      </div>

    <Map />
  </>
  );
}
export default InvestorRelations;