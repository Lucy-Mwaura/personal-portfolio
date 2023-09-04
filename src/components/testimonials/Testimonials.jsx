import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/Brian.jpg';
import AVTR2 from '../../assets/Benjie.jpeg';
import AVTR3 from '../../assets/Ivy.jpeg';
import AVTR4 from '../../assets/Lave.jpeg';

// import Swiper core and required modules
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
  avatar: AVTR1,
  name: 'Brian Nyamumbe',
  review: "I'm an experienced IT Specialist and I needed a personal Portfolio website to showcase my expertise. I finally can say that I'm really impressed that my expectations were met."
  },
  {
    avatar: AVTR2,
    name: 'Benjamin Macharia',
    review: 'I recently opened a bakery and highly needed a poster to market my business. Lucy assured me that she got me covered. She created me a beautiful poster that I posted in my socials. Thankfully, my bakery business is now booming!'
    },
    {
      avatar: AVTR3,
      name: 'Ivy Wayela',
      review: "My brother needed to create an awareness about forest conservation. He was in need of a Brochure to share to his socials. I contacted Lucy, and she assured me that she's the right person for the job. I shared the details of how it ought to be made. I'm happy to share that my brother was satisfied with the services delivered. And btw, you can check out Lucy's portfolio to see how beautiful the Brochure is."
      },
      {
        avatar: AVTR4,
        name: 'Lavenda Gwetha',
        review: "I'm a German teacher. I have my private teaching institute. I saw it fit to have a flyer to market my brand, and source as many people to learn German as possible. Thanks to the flyer designed by Lucy, I posted it to my social handles and it made work easier for me. I don't need to do any more typing since all the details are embedded on the flyer. You can check out her portfolio to see the flyer and if interested to learn German, you can hit me up!"
        }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5> Review from clients </h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
           
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name"> {name} </h5>
              <small className="client__review"> {review} </small>
            </SwiperSlide>
            );
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials