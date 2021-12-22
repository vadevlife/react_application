
import React from 'react'
import { 
  Media,
} from 'reactstrap'; 

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

 

export default function small(){
   return(
       <React.Fragment>
           <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
   
    >
                <SwiperSlide> 
                   <Media object className="img-fluid" src="/websites.png" alt="Vini - Development" />
                </SwiperSlide>
                <SwiperSlide> 
                    <Media object className="img-fluid" src="/design.png" alt="Vini - Development" />
                </SwiperSlide> 
            </Swiper>
       </React.Fragment>
   )
}
