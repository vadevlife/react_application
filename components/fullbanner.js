 
 import {
  Carousel,
  }from 'react-bootstrap';
  
  function Fullbanner(){
    return   <div>
                 {/* Full Slide */}

                 <Carousel class="full-banner position-relative">
                  <Carousel.Item>
                    <img
                      className="d-block d-sm-none w-100 " 
                      src="banner-mob.png" 
                      alt="First slide"
                      />

                      <img
                      className="d-none d-sm-block w-100"
                      src="/banner-top.png" 
                      alt="First slide"
                      />
                    <Carousel.Caption className="text-primary text-left border bord er-start border-danger border-top-0 border-bottom-0 border-right-0">
                      <h1 className="d-none d-sm-block">Soluções Digitais  - <strong> Que resolvem  problemas reais </strong>
                        do seu empreendimento.
                      </h1>

                      <h1 className="d-block  d-sm-none">Soluções Digitais <strong> Que resolvem. </strong>
                      
                      </h1>
                      {/* 
                      <p>Que que resolvem problemas reais do seu empreendimento para seu consumidor.</p>
                      */}
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>

                    <img
                      className="d-block d-sm-none w-100"   //image mobile
                      src="/bnn_mob_3.png" 
                      alt="First slide"
                      />

                      <img
                      className="d-none d-sm-block w-100"   //image desktop
                      src="/bnn_top.png" 
                      alt="First slide"
                      />
                    <Carousel.Caption className="text-primary text-left border bord er-start border-danger border-top-0 border-bottom-0 border-right-0">
                      <h1 className="d-none d-sm-block">Sua empresa de <strong>portas abertas para o mundo de posibilidades </strong>
                      com a tecnologia.
                      </h1>

                      <h1 className="d-block  d-sm-none">Sua Empresa de Portas <strong> abertas para o Mundo. </strong></h1>
                      
                    </Carousel.Caption>
                  </Carousel.Item>
       
                </Carousel>



            </div>
  }

export default Fullbanner
 