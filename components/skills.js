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
                
                <h2  className="h1 text-primary-main mb-3">
                    Boas ideias aqui, <strong> Transformam-se em Experiências.</strong>
                </h2>
                <p className="mt-4 mb-4">
                Designer e Desenvolvedor Front-End de Lojas Virtuais e aplicações responsivas.
                </p>
                <div className="buttons d-flex pt-md-4">
                    <Button className="rounded-pill mr-2" variant="danger">Portfólio</Button>{' '}
                    <Button className="rounded-pill" variant="transparent border border-primary-main text-primary-main">Habilidades</Button>{' '}
                </div>
            </Col>

           

            <Col  className="col-12 col-md-7 col-lg-6 offset-lg-1 pt-5 p-md-2 pl-md-5 p-lg-0">
            
                <Row>
                    <Col>
                    <Card className="mt-0 mb-4 border-0 shadow-lg p-3 bg-primary-m" >
                <Card.Body>
                    <Card.Title className="text-white fw-bold ">
                    <h6>
                    <i class="far fa-chart-bar mr-2 "></i> 
                        <strong>
                            Prodesp | Governo do Estado de São Paulo  
                        </strong>
                    </h6>
                    </Card.Title>
                    <Card.Text><p className="text-white">Portal PoupaTempo, Portal Detran e Defensoria Pública do Estado de SP</p> </Card.Text>
                </Card.Body>
                </Card>

                
               
                    </Col>

                    <Col>

                        <Card className="mt-0 mb-4 border-0 shadow-lg p-3 " >
                            <Card.Body>
                                <Card.Title className="text-primary-main fw-bold">
                                <h6> 
                                <i class="fas fa-chess mr-2"></i> 
                                <strong>
                                RioSlum Studio | Agência de Propaganda
                                </strong>
                                </h6>
                                </Card.Title>
                                <Card.Text><p>Aplicações rápidas e avançadas para aplicativos de Internet que otimizam o envolvimento.</p> </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mt-0 mb-4 border-0 shadow-lg p-3" >
                <Card.Body>
                    <Card.Title className="text-primary-main">
                    <h6> 
                    <i class="fas fa-chess mr-2"></i>
                    <strong>
                    Fastcommerce  | Plataforma de Loja Virtual
                    </strong>
                    </h6>
                    </Card.Title>
                    <Card.Text><p>Veja como UX pode ajudar a aumentar as conversões do seus site.</p> </Card.Text>
                    
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
   