
import React from 'react'
import {
    Card,
    CardBody 
   } from 'reactstrap'; 

import { Swiper, SwiperSlide } from 'swiper/react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
 

export default function small(){
   return(
    <Tabs> 
    <TabList>
      <Tab>Web</Tab>
      <Tab>Design</Tab>
      <Tab>Outros</Tab>
    </TabList>
    <TabPanel>
            <Swiper className="mt-4">
                <SwiperSlide>
                <Card style={{backgroundImage:'url("/e-nike-mob.png'}}> 
                            <CardBody>
                                <h4 className="text-white">Loja Nike Shoes</h4>
                                <p className="text-light lead">Aplicação E-commerce</p> 
                            </CardBody> 
                        </Card> 
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{backgroundImage:'url("/poupatempo.png'}}> 
                        <CardBody>
                            <h4 className="text-white">Portal PoupaTempo SP</h4>
                            <p className="text-light lead">Web Site Responsivo</p>
                        </CardBody>   
                    </Card> 
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{backgroundImage:'url("/detran.png'}}> 
                        <CardBody>
                            <h4 className="text-white">Portal Detran SP</h4>
                            <p className="text-light lead">Web Site Responsivo</p>  
                        </CardBody>   
                    </Card> 
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{backgroundImage:'url("/charliekirk.png'}}> 
                        <CardBody>
                            <h4 className="text-white">Charlie Kirk</h4>
                            <p className="text-light lead">Web Site responsivo Wordpress</p>  
                        </CardBody>   
                    </Card> 
                </SwiperSlide>
                    
               
                 
            </Swiper>
    </TabPanel>
    <TabPanel>
    <Swiper className="mt-4">
                <SwiperSlide>
                <Card style={{backgroundImage:'url("/waydesign.png'}}> 
                            <CardBody>
                                <h4 className="text-white">Whey Go!</h4>
                                <p className="text-light lead">Banner E-commerce.</p> 
                            </CardBody> 
                        </Card> 
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{backgroundImage:'url("/party.png'}}> 
                        <CardBody>
                            <h4 className="text-white">House Party</h4>
                            <p className="text-light lead">Design Social Media</p> 
                        </CardBody>   
                    </Card> 
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{backgroundImage:'url("/dpoupa.png'}}> 
                        <CardBody>
                            <h4 className="text-white">Design nova UI PoupaTempo</h4>
                            <p className="text-light lead">Design UI</p>  
                        </CardBody>   
                    </Card> 
                </SwiperSlide>
               
                    
               
                 
            </Swiper>
    </TabPanel>
    <TabPanel>
    <Swiper className="mt-4">
                <SwiperSlide>
                <Card style={{backgroundImage:'url("/modosaude.png'}}> 
                        <CardBody>
                            <h4 className="text-white">Loja Modo Saúde</h4>
                            <p className="text-light lead">E-commerce Aplicação.</p> 
                        </CardBody>  
                        </Card> 
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{backgroundImage:'url("/farma.png'}}> 
                        <CardBody>
                        <h4 className="text-white">Drogaria Cristal</h4>
                                        <p className="text-light lead">Design UI para <br/> aplicação E-commerce.</p> 
                        </CardBody>   
                    </Card> 
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{backgroundImage:'url("/belacasa.png'}}> 
                        <CardBody>
                        <h4 className="text-white">Bela Casa - Home Store</h4>
                                            <p className="text-light lead">Design UI e desenvolvimento <br/> aplicação E-commerce.</p> 
                        </CardBody>   
                    </Card> 
                </SwiperSlide>
                
                    
               
                 
            </Swiper>
    </TabPanel>
    </Tabs>

   )
}
