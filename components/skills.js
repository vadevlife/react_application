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
                            <Col className="col-12 col-md-5 col-lg-4">
                                
                                <h2  className="h1 text-primary-main mb-3"> 
                                Desenvolvedor de <strong> Aplicações Digitais responsivas.</strong>
                                </h2>
                                <p className="mt-4 mb-4">
                                Fazer coisas com amor, nos leva a bons resultados e produtos a pessoas .

                                </p>
                                <div className="buttons d-flex">
                                    <Button className="rounded-pill mr-2" variant="danger">Portfólio</Button>{' '}
                                    <Button className="rounded-pill" variant="transparent border border-primary-main text-primary-main">Habilidades</Button>{' '}
                                </div>
                            </Col>
                
                            <Col  className="col-md-6 col-lg-4 justify-content-center  align-items-start d-none d-lg-flex"> 
                            
                                <Image className="d-none img-fluid"
                                    src="/mockup_mobile.png"
                                    alt="Picture of the author"
                                    width={248}
                                    height={430}
                                    />
                            </Col>
                
                            <Col  className="col-12 col-md-7 col-lg-4 pt-5 p-md-2 pl-md-5 p-lg-0">
                                
                                <Row>
                                    <Col>
                                    <h6 className="text-muted mt-4 mb-4 mt-5 mt-sm-0">
                                        Habilidades e Tecnologias <strong>Que mais utilizo no dia-a-dia.</strong>
                                    </h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <h6 className="text-muted pt-4 mb-4 mt-5 mt-sm-0">
                                        Softwares Skills <strong>Development.</strong>
                                    </h6>
                                    </Col>
                                </Row>
                
                
                                <Row> 
                                    <Col md={6}> 
                
                                        <Card className="border-0 shadow-none p-0 pt-3" >
                                            <Card.Body className="p-0">
                                                <Card.Title className="text-primary-main fw-bold">
                                                <h6>
                                                <i class="far fa-chart-bar mr-2 "></i> 
                                                    <strong> 
                                                    Html 5  
                                                    </strong> 
                                                </h6>
                                                </Card.Title>
                                                <Card.Text>
                                                <ProgressBar now={60} /></Card.Text> 
                                            </Card.Body>
                                        </Card>
                
                                        <Card className="border-0 shadow-none p-0 pt-3" >
                                            <Card.Body className="p-0">
                                                <Card.Title className="text-primary-main fw-bold">
                                                <h6>
                                                <i class="far fa-chart-bar mr-2 "></i> 
                                                    <strong> 
                                                    Css 3  
                                                    </strong> 
                                                </h6>
                                                </Card.Title>
                                                <Card.Text>
                                                <ProgressBar now={60} /></Card.Text> 
                                            </Card.Body>
                                        </Card>
                                        <Card className="border-0 shadow-none p-0 pt-3" >
                                            <Card.Body className="p-0">
                                                <Card.Title className="text-primary-main fw-bold">
                                                <h6>
                                                <i class="far fa-chart-bar mr-2 "></i> 
                                                    <strong> 
                                                     Sass  
                                                    </strong> 
                                                </h6>
                                                </Card.Title>
                                                <Card.Text>
                                                <ProgressBar now={60} /></Card.Text> 
                                            </Card.Body>
                                        </Card>
                                
                
                
                                    </Col> 
                
                                    <Col md={6}> 
                
                                        <Card className="border-0 shadow-none p-0 pt-3" >
                                            <Card.Body className="p-0">
                                                <Card.Title className="text-primary-main fw-bold">
                                                <h6>
                                                <i class="far fa-chart-bar mr-2 "></i> 
                                                    <strong> 
                                                    JavaScript ES6  
                                                    </strong> 
                                                </h6>
                                                </Card.Title>
                                                <Card.Text>
                                                <ProgressBar now={60} /></Card.Text> 
                                            </Card.Body>
                                        </Card>
                
                                        <Card className="border-0 shadow-none p-0 pt-3" >
                                            <Card.Body className="p-0">
                                                <Card.Title className="text-primary-main fw-bold">
                                                <h6>
                                                <i class="far fa-chart-bar mr-2 "></i> 
                                                    <strong> 
                                                    React JS
                                                    </strong> 
                                                </h6>
                                                </Card.Title>
                                                <Card.Text>
                                                <ProgressBar now={60} /></Card.Text> 
                                            </Card.Body>
                                        </Card>
                
                
                                    </Col> 
                                </Row>

                                <Row>
                                    <Col>
                                    <h6 className="text-muted pt-4 mb-4 mt-5 mt-sm-0">
                                        Softwares Skills <strong>Graphic design.</strong>
                                    </h6>
                                    </Col>
                                </Row>
                                <Row> 
                                    <Col md={6}> 
                
                                        <Card className="border-0 shadow-none p-0 pt-3" >
                                            <Card.Body className="p-0">
                                                <Card.Title className="text-primary-main fw-bold">
                                                <h6>
                                                <i class="far fa-chart-bar mr-2 "></i> 
                                                    <strong> 
                                                    Photoshop  
                                                    </strong> 
                                                </h6>
                                                </Card.Title>
                                                <Card.Text>
                                                <ProgressBar now={60} /></Card.Text> 
                                            </Card.Body>
                                        </Card>
                
                                        <Card className="border-0 shadow-none p-0 pt-3" >
                                            <Card.Body className="p-0">
                                                <Card.Title className="text-primary-main fw-bold">
                                                <h6>
                                                <i class="far fa-chart-bar mr-2 "></i> 
                                                    <strong> 
                                                    Prototipação  
                                                    </strong> 
                                                </h6>
                                                </Card.Title>
                                                <Card.Text>
                                                <ProgressBar now={60} /></Card.Text> 
                                            </Card.Body>
                                        </Card>
                
                                    </Col> 
                
                                    <Col md={6}> 
                
                                        <Card className="border-0 shadow-none p-0 pt-3" >
                                            <Card.Body className="p-0">
                                                <Card.Title className="text-primary-main fw-bold">
                                                <h6>
                                                <i class="far fa-chart-bar mr-2 "></i> 
                                                    <strong> 
                                                    Design Pathers  
                                                    </strong> 
                                                </h6>
                                                </Card.Title>
                                                <Card.Text>
                                                <ProgressBar now={60} /></Card.Text> 
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
   