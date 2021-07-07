 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/swiper.min.css';
import {
    
    Row,
    Container,
    Col,   
    

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
                                   Desenvolvimento Front-end<br></br><strong>Integrações, Design e Prototipação.</strong>
                                </h2>
                                <p class="text-white mt-3 mb-5">
                                    Criação de aplicações Web de auto desempenho.
                                </p>
                                <div className="buttons d-flex">
                                  <a href="https://wa.me/+5512983171532?text=" target="_blank" className="btn btn-danger text-white rounded-pill p-2 shadow-sm mr-2" >Fale comigo &nbsp; <i className="fab text-sucess fa-whatsapp"></i></a>
                                  <a href="#experiences" className="rounded-pill btn btn-transparent border border-light text-white ">Experiências</a>
                                </div>
                            </Col>

                            
                          </Row>
                        </Container> 

                        <Col md={12} className="slide-portfolio mt-5 mb-5 pt-md-3 pl-0 pr-0 ">
                                            
                                <Swiper
                                spaceBetween={13} 
                                slidesPerView= {3} 
                            
                            
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                breakpoints={{
                                    
                                  320: { 
                                    slidesPerView: 1, 
                                  }, 
                               
                                  768: { 
                                    slidesPerView:2,
                                  }
                                }}
                              >
                                 <SwiperSlide>
                                    <img
                                        className="img-fluid"  
                                        src="/case_charlie_kirk.png"
                                        alt="First slide"
                                    /> 
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid"  
                                        src="/job_detran_3.png"
                                        alt="First slide"
                                    /> 
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid"  
                                        src="/job_poupa_3.png"
                                        alt="First slide"
                                    /> 
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid"  
                                        src="/job_olfati_3.png"
                                        alt="First slide"
                                    /> 
                                </SwiperSlide>
                               
                                <SwiperSlide>
                                    <img
                                        className="img-fluid"  
                                        src="/job_colonial_1.png"
                                        alt="First slide"
                                    /> 
                                </SwiperSlide>
                                 
                                
                              </Swiper>
                           
                            </Col>
          </section>



        </div>
  }

export default Portfolio
 