
import React from 'React'
import {
    
    Card,
    CardBody,
    
     
   } from 'reactstrap'; 

import { Swiper, SwiperSlide } from 'swiper/react';
 
 

export default function mobile() {
  return(
        
        <React.Fragment>
           <Swiper className="mt-4">
                <SwiperSlide>
                <Card style={{backgroundImage:'url("/e-nike-mob.png'}}> 
                            <CardBody>
                                <h4 className="text-white">Nike Tema E-commerce</h4>
                                <p className="text-light lead">Atuei no Design UI e Prototipação.</p> 
                            </CardBody> 
                        </Card> 
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{backgroundImage:'url("/poupatempo.png'}}> 
                        <CardBody>
                            <h4 className="text-white">Portal PoupaTempo SP</h4>
                            <p className="text-light lead">Atuei no Design UI e Prototipação.</p> 
                        </CardBody>   
                    </Card> 
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{backgroundImage:'url("/detran.png'}}> 
                        <CardBody>
                            <h4 className="text-white">Portal Detran SP</h4>
                            <p className="text-light lead">Atuei no Design UI e Prototipação.</p> 
                        </CardBody>   
                    </Card> 
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{backgroundImage:'url("/charliekirk.png'}}> 
                        <CardBody>
                            <h4 className="text-white">Charlie Kirk</h4>
                            <p className="text-light lead">Atuei no Design UI e Prototipação.</p> 
                        </CardBody>   
                    </Card> 
                </SwiperSlide>
                    
               
                 
            </Swiper>
       </React.Fragment>
        
  )
    
}