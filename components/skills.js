import {
    ProgressBar, 
    Row,
    Container,
    Col,
    Card,
    Button, 
    }from 'react-bootstrap';
    import Image from 'next/image'; 
  
   
    function Benefits(){
      return   <div>
                 <section className="mt-5">
                 <Container>
        <Row>
            <Col className="col-12 col-md-5 ">
                <div className="p-0 d-flex align-items-center">
                <span class="badge badge-pill badge-danger text-danger align-items-center">.</span>
                <h6 className="text-primary-m pt-2 ml-2">Experiências </h6>
                </div>
                
                <h2  className="h1 text-primary-main mb-3">
                    Empresas e Projetos, <strong> que contribui nos últimos anos.</strong>
                </h2>
                <p className="mt-4 mb-4">
                Designer e Desenvolvedor Front-End de Lojas Virtuais e aplicações responsivas.
                </p>
                <div className="buttons d-flex pt-md-4">
                    <Button className="rounded-pill mr-2" variant="danger">Portfólio</Button>{' '}
                    <Button className="rounded-pill" variant="transparent border border-primary-main text-primary-main">Habilidades</Button>{' '}
                </div>
            </Col>

           

            <Col  className="col-12 col-md-8 col-lg-7  pt-5 p-md-2 pl-md-5 ">
            
                <Row>
                    <Col md={6}>
                        
                    <Card className="mt-0 mb-4 border-0 shadow-lg-m p-2" >
                            <Card.Body >
                                <Card.Title className="text-primary-main fw-bold">
                                <h6>
                                <i class="far fa-bookmark mr-2"></i> 
                                    <strong> 
                                        Prodesp  
                                    </strong> 
                                </h6>
                                </Card.Title>
                                {/* <Card.Text><p>Aplicações rápidas e avançadas para aplicativos de Internet que otimizam o envolvimento.</p> </Card.Text> */}
                            </Card.Body>
                        </Card>


                        <Card className="mt-0 mb-4 border-0 shadow-lg-m p-2" >
                            <Card.Body >
                                <Card.Title className="text-primary-main fw-bold">
                                <h6>
                                <i class="far fa-bookmark mr-2"></i> 
                                    <strong> 
                                        FastCommerce  
                                    </strong> 
                                </h6>
                                </Card.Title>
                                {/* <Card.Text><p>Aplicações rápidas e avançadas para aplicativos de Internet que otimizam o envolvimento.</p> </Card.Text> */}
                            </Card.Body>
                        </Card>

                        <Card className="mt-0 mb-4 border-0 shadow-lg-m p-2" >
                            <Card.Body >
                                <Card.Title className="text-primary-main fw-bold">
                                <h6>
                                <i class="far fa-bookmark mr-2"></i> 
                                    <strong> 
                                        Agência RioSlum Studio  
                                    </strong> 
                                </h6>
                                </Card.Title>
                                {/* <Card.Text><p>Aplicações rápidas e avançadas para aplicativos de Internet que otimizam o envolvimento.</p> </Card.Text> */}
                            </Card.Body>
                        </Card>
                
               
                    </Col>

                    <Col md={6}>

                        <Card className="mt-0 mb-4 border-0 shadow-lg-m p-2" >
                            <Card.Body >
                                <Card.Title className="text-primary-main fw-bold">
                                <h6>
                                <i class="far fa-bookmark mr-2"></i> 
                                    <strong> 
                                        Agência E-commerce Express  
                                    </strong> 
                                </h6>
                                </Card.Title>
                                {/* <Card.Text><p>Aplicações rápidas e avançadas para aplicativos de Internet que otimizam o envolvimento.</p> </Card.Text> */}
                            </Card.Body>
                        </Card>

                        <Card className="mt-0 mb-4 border-0 shadow-lg-m p-2" >
                            <Card.Body >
                                <Card.Title className="text-primary-main fw-bold">
                                <h6>
                                <i class="far fa-bookmark mr-2"></i> 
                                    <strong> 
                                        Agência Home Brasil  
                                    </strong> 
                                </h6>
                                </Card.Title>
                                {/* <Card.Text><p>Aplicações rápidas e avançadas para aplicativos de Internet que otimizam o envolvimento.</p> </Card.Text> */}
                            </Card.Body>
                        </Card>



                     </Col>


                </Row>
            </Col>
        </Row>
    </Container>
  

                 </section>
  
              </div>
    }
  
  export default Benefits
   