 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/swiper.min.css';
import {
    
    Row,
    Container,
    Col,   
    Button,
    Card

    }from 'react-bootstrap';
  import Image from 'next/image'; 

 
  function Portfolio(){
    return   <div>
                <section id="portfolio" className="portfolio-section bg-primary-m mt-5 pt-5 position-relative">
                    <Container>
                        <Row>
                            <Col md={8}   className="text-white mt-md-5">
                                <div className="p-0 d-flex align-items-center">
                                    <span class="badge badge-pill badge-danger text-danger align-items-center">.</span>
                                    <h6 className="text-muted pt-2 ml-2">Portfólio </h6>
                                </div>
                                <h2 className="h1 text-white pt-2 mb-3 mb-sm-0">
                                   Desenvolvimento Front-end<br></br><strong>Integração, Design e Prototipação.</strong>
                                </h2>
                                <p class="text-white mt-3 mb-5">
                                    pela criação de aplicações de auto desempenho.
                                </p>
                                <div className="buttons d-none d-lg-flex">
                                    <Button className="rounded-pill mr-2" variant="danger">Contato</Button>{' '}
                                    <Button className="rounded-pill" variant="transparent border border-light text-white">Habilidades</Button>{' '}
                                </div>
                            </Col>

                            
                          </Row>
                        </Container> 

                        <Col md={12} className="slide-portfolio mt-5 mb-5 pt-md-3 pl-0 pr-0 ">
                                            
                                <Swiper
                                spaceBetween={13} 
                            
                            
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                breakpoints={{
                                    
                                  320: { 
                                    slidesPerView: 1, 
                                  }, 
                                  768: { 
                                    slidesPerView: 2,
                                  },
                                  1200: { 
                                    slidesPerView: 3,
                                  }
                                }}
                              >
                                <SwiperSlide>
                                    <img
                                        className="img-fluid"  
                                        src="/job_detran_2.png"
                                        alt="First slide"
                                    /> 
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid"  
                                        src="/job_poupa_2.png"
                                        alt="First slide"
                                    /> 
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid"  
                                        src="/job_olfati_2.png"
                                        alt="First slide"
                                    /> 
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid"  
                                        src="/job_poupa_2.png"
                                        alt="First slide"
                                    /> 
                                </SwiperSlide>
                                 
                                
                              </Swiper>
                           
                            </Col>
          </section>



        </div>
  }

export default Portfolio
 