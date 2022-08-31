import React from 'react';
import './testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import aisha from './../../images/aisha.jpg';
import charles from './../../images/charles.jpg';
import emori from './../../images/emori.png';
import toheeb from './../../images/toheeb.jpg';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';


const Testimonial = () => {

    const testifiers = [
        {
            src: aisha,
            person: "Aisha Ajisekola",
            testimony: "Eyo Bright is a passionate developer, who's already to work. I will recommend him anytime! anyday!",
        },
        {
            src: charles,
            person: "Charbens Benedict",
            testimony: "Eyo Bright is a renouned programmer who pays attention to details and is very time conscious"
        },
        {
            src: emori,
            person: "Bright Emori",
            testimony: "Bright Eyo was the Lead Developer of the Team that designed my company's web app 'koloz'. His skills are superb and his delivery time is next to none"
        },
        {
            src: toheeb,
            person: "Olododo Toheeb",
            testimony: "Bright Eyo is the definition of a true developer, as a developer myself, Bright has been the source of my inspiration, motivation and a great tutor. He is a team manager and a great leader. He always have solution to every coding problem. If i have to work on any project i will definitely love to collaborate with Bright."
        }
    ]
    return (
        <div className='testimonial-wrapper'>
            <div className='testimonial-heading'>
                <span>Testimonial & Recommendation</span>
                <div className='blur testimonial-blur1' style={{ backgrundColor: 'var(--first-layer-color)' }}></div>
                <div className='blur testimonial-blur2' style={{ backgroundColor: 'var(--second-layer-color)' }}></div>
            </div>

            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    testifiers && testifiers.map((testifier, id) =>
                        <SwiperSlide key={id}>
                            <div className='testifiers'>
                                <img src={testifier.src} alt='' />
                                <span>{testifier.person}</span>
                                <span>{testifier.testimony}</span>
                            </div>

                        </SwiperSlide>)
                }
            </Swiper>

        </div>
    )
}

export default Testimonial