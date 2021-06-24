import {
    
    Row,
    Container,
    Col,  
    Carousel,
    Button

    }from 'react-bootstrap';
  import Image from 'next/image'; 

 
  function Portfolio(){
    return   <div>
                <section className="portfolio-section bg-primary-m mt-5 pt-5 position-relative">
                    <Container>
                        <Row>
                        
                            <Col md={5} lg={5} className="text-white mt-md-5">
                                <div className="p-0 d-flex align-items-center">
                                    <span class="badge badge-pill badge-danger text-danger align-items-center">.</span>
                                    <h6 className="text-white pt-2 ml-2">Portfólio </h6>
                                </div>
                                <h2 className="h1 text-white pt-2 mb-3 mb-sm-0">
                                   Desenvolvedor <strong>Focado em Design e Prototipação.</strong>
                                </h2>
                                <p class="text-white mt-4 ">
                                Tem habil de desenvolvimento 2 semanas, com recursos re interação com o usuário.
                                </p>
                                <div className="buttons d-none d-lg-flex">
                                    <Button className="rounded-pill mr-2" variant="danger">Contato</Button>{' '}
                                    <Button className="rounded-pill" variant="transparent border border-light text-white">Habilidades</Button>{' '}
                                </div>
                            </Col>


                            <Col md={7} className="slide-portfolio mt-5 mb-5">

                                <Carousel id="portfolio" className="p-0  ">

                                <Carousel.Item>
                                    <img
                                        className="d-sm-none img-fluid" //img mob
                                        src="/job_detran_mob.png"
                                        alt="First slide"
                                    /> 
                                    <img
                                        className="d-none d-sm-block img-fluid" //img desktop
                                        src="/job_detran.png"
                                        alt="First slide"
                                    /> 
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-sm-none img-fluid" //img mob
                                        src="/job_poupa_mob.png"
                                        alt="First slide"
                                    /> 
                                    <img
                                        className="d-none d-sm-block img-fluid" //img desktop
                                        src="/job_poupa.png"
                                        alt="First slide"
                                    /> 
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-sm-none img-fluid" //img mob
                                        src="/job_oufati_mob.png"
                                        alt="First slide"
                                    /> 
                                    <img
                                        className="d-none d-sm-block img-fluid" //img desktop
                                        src="/job_oufati.png"
                                        alt="First slide"
                                    /> 
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-sm-none img-fluid" //img mob
                                        src="/site_defensoria_publica_gov_sp_mob.png"
                                        alt="First slide"
                                    /> 
                                    <img
                                        className="d-none d-sm-block img-fluid" //img desktop
                                        src="/site_defensoria_publica_gov_sp.png"
                                        alt="First slide"
                                    /> 
                                </Carousel.Item>

                                  
                                    
                                </Carousel>

                            </Col>
</Row>
</Container> 
</section>



            </div>
  }

export default Portfolio
 