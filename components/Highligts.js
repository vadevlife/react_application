 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/swiper.min.css';
import {
  
  Container, 
  Card,
  
  }from 'react-bootstrap';
  function Highligts(){
    return   <div> 

      <section className="highligts mt-4 mb-4">
              
              
             
               
              <Container>
               
                    <Swiper
                    spaceBetween={30} 
                
                 
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        
                      320: { 
                        slidesPerView: 1, 
                      }, 
                      768: { 
                        slidesPerView: 3,
                      }
                    }}
                  >
                    <SwiperSlide>
                      <Card className="border-0 p-3" >
                        <Card.Body >
                          <Card.Title className="text-primary-main fw-bolde">
                            <h2>
                              Designer<br/>  Gráfico  
                            </h2>
                          </Card.Title>
                          <Card.Text className="pt-2 pr-lg-5 d-lg-block">Direção de arte, criação de peças<br/> publicitárias e interfaces digitais.</Card.Text>
                        </Card.Body>
                      </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Card className="border-0 p-3" >
                        <Card.Body>
                          <Card.Title className="text-primary-main fw-bolde">
                            <h2>
                              Desenvolvimento<br/> FrontEnd 
                            </h2>
                          </Card.Title>
                          <Card.Text className="pt-2">Aplicações Dinamicas e responsivas em diferentes linguagens</Card.Text>
                        </Card.Body>
                      </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Card className="border-0 p-3 bg-danger-m" >
                        <Card.Body>
                          <Card.Title className="text-white-main fw-bolde">
                            <h2 className="text-white"> 
                                Integrador <br/>de E-commerce
                            </h2>
                          </Card.Title>
                          <Card.Text className="pt-2"><p className="text-white">Desenvolvedor de lojas online, em diferentes plataformas.</p></Card.Text>
                        </Card.Body>
                      </Card>
                    </SwiperSlide>
                    
                  </Swiper>
                
              </Container>
                    
              </section>   
            </div>
  }

export default Highligts
 