import {
  Navbar,
  Nav, 
  Carousel,
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
                    Boas ideias aqui, <strong> Transformam-se em Experiências.</strong>
                </h2>
                <p className="mt-4 mb-4">
                Designer e Desenvolvedor Front-End de Lojas Virtuais e aplicações responsivas.
                </p>
                <div className="buttons d-flex">
                    <Button className="rounded-pill mr-2" variant="danger">Portfólio</Button>{' '}
                    <Button className="rounded-pill" variant="transparent border border-primary-main text-primary-main">Habilidades</Button>{' '}
                </div>
            </Col>

            <Col  className="col-md-6 col-lg-4 justify-content-center  align-items-start d-none d-lg-flex"> 
            
                <Image className="img-fluid"
                    src="/mockup_mobile.png"
                    alt="Picture of the author"
                    width={248}
                    height={430}
                    />
            </Col>

            <Col  className="col-12 col-md-7 col-lg-4 pt-5 p-md-2 pl-md-5 p-lg-0">
            
                <Card className="border-0 shadow-none p-0 " >
                <Card.Body className="pb-0">
                    <Card.Title className="text-primary-main fw-bold">
                    <h6>
                    <i class="far fa-chart-bar mr-2 "></i> 
                        <strong> 
                        Auto Desempenho  
                        </strong> 
                    </h6>
                    </Card.Title>
                    <Card.Text><p>Aplicações rápidas e avançadas para aplicativos de Internet que otimizam o envolvimento.</p> </Card.Text>
                </Card.Body>
                </Card>

                <Card className="border-0 shadow-none p-0" >
                <Card.Body className="pb-0">
                    <Card.Title className="text-primary-main fw-bolde border-top-m pt-4">
                    <h6> 
                    <i class="fas fa-chess mr-2"></i>
                    <strong> 
                    Experiências do Usuário
                    </strong>
                    </h6>
                    </Card.Title>
                    <Card.Text><p>Veja como UX pode ajudar a aumentar as conversões do seus site.</p> </Card.Text>
                    
                </Card.Body>
                </Card>
                <Card className="border-0 shadow-none p-0 d-md-none d-lg-block" >
                <Card.Body>
                    <Card.Title className="text-primary-main fw-bold border-top-m pt-4 ">
                    <h6> 
                    <i class="far fa-bookmark mr-2"></i>
                    <strong>
                        Search Engine Optimization   
                    </strong>

                    </h6>
                    </Card.Title> 
                    <Card.Text><p>Otimização de Sites é o conjunto de estratégias com o objetivo de potencializar e melhorar o posicionamento de um site.</p> </Card.Text>

                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  

    </section>


            </div>
  }

export default Benefits
 