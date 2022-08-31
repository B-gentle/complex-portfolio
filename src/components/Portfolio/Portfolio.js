import React from 'react';
import './portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import portfolioImages from '../../Data/data';

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* Slider */}

        <Swiper
        slidesPerView={3}
        grabCursor={true}
        spaceBetween={30}
        className='portfolio-slider'
        >
{portfolioImages && portfolioImages.map((image, id)=>{
return <SwiperSlide key={id}>
<img src={image} alt=''/>
</SwiperSlide>
})}
        </Swiper>
    </div>
  )
}

export default Portfolio