import {
  Navbar,
  Nav, 
  Carousel,
  Row,
  Container,
  Col,
  Card,
  Button,
  ListGroup
  }from 'react-bootstrap';
  import '@fortawesome/fontawesome-free/css/all.css'; 
  import 'bootstrap/dist/css/bootstrap.css'; 
  // import from 'react-bootstrap';
  import Image from 'next/image';


  
  export default () =>   (
  <div>
     <Container className="container-fluid">
      <Row>
        <Col>
            <Navbar bg="transparent" expand="lg" className="position-absolute w-100">
            
                <Navbar.Brand href="#home">
                    <Image
                    src="/logo.png"
                    alt="Picture of the author"
                    width={80}
                    height={13}
                    />  
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link className="text-primary" href="#home">Biografia </Nav.Link>
                    <Nav.Link className="text-primary" href="#link">Portfólio</Nav.Link>
                    <Nav.Link className="text-primary" href="#link">Lembrete</Nav.Link>
                    <Nav.Link className="btn btn-primary text-white rounded-pill p-2 shadow-sm " href="#link">Contrate</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
          </Col>
        </Row>
      </Container>
    
    
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/banner-top.png" 
            alt="First slide"
            />
            <Carousel.Caption className="text-primary text-left border border-start border-danger border-top-0 border-bottom-0 border-right-0">
            <h1>Soluções Digitais  - <strong> Que resolvem  problemas reais.</strong> <br/>
               
            </h1>
            {/* 
            <p>Que que resolvem problemas reais do seu empreendimento para seu consumidor.</p>
            */}
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/banner-top.png" 
            alt="First slide"
            />
            <Carousel.Caption className="text-primary text-left border border-start border-danger border-top-0 border-bottom-0 border-right-0">
            <h1 className="display-5">Soluções Digitais  - Que resolvem <strong>  problemas reais </strong> <br/>
                do seu empreendimento.
            </h1>
            {/* 
            <p>Que que resolvem problemas reais do seu empreendimento para seu consumidor.</p>
            */}
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/banner-top.png" 
            alt="First slide"
            />
            <Carousel.Caption className="text-primary text-left border border-start border-danger border-top-0 border-bottom-0 border-right-0">
            <h1 className="display-5">Soluções Digitais  - Que resolvem <strong>  problemas reais </strong> <br/>
                do seu empreendimento.
            </h1>
            {/* 
            <p>Que que resolvem problemas reais do seu empreendimento para seu consumidor.</p>
            */}
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>

    {/* CARDS */}
    <section className="highligts mt-4 mb-4">
    <Container>
      <Row>
        <Col>
          <Card className="border-0 shadow-lg p-3" >
          <Card.Body >
            <Card.Title className="text-primary-main fw-bolde">
              <h2>
                Designer <br/>Gráfico  
              </h2>
            </Card.Title>
            <Card.Text>the quick fox jumps over the lazy dog</Card.Text>
          </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="border-0 shadow-lg p-3" >
          <Card.Body>
            <Card.Title className="text-primary-main fw-bolde">
              <h2>
                 Desenvolvimento<br/> FrontEnd.  
              </h2>
            </Card.Title>
            <Card.Text>the quick fox jumps over the lazy dog</Card.Text>
          </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="border-0 shadow-lg p-3 bg-danger-m" >
          <Card.Body>
            <Card.Title className="text-white-main fw-bolde">
              <h2 className="text-white"> 
                  Integrador <br/>de E-commerce
              </h2>
            </Card.Title>
            <Card.Text><p className="text-white">the quick fox jumps over the lazy dog</p></Card.Text>
          </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </section> 
   
   <section className="pt-5 mt-5 mb-5">
   <Container>
      <Row>
        <Col className="col-md-4">
        <h2  className="h1 text-primary-main mb-3">
          Boas ideias aqui <strong> Transformam-se em Experiências</strong>
        </h2>
        <p className="mt-4 mb-5">
          Fazer coisas com amor, nos leva a bons resultados, e produtos importantes a pessoas .
        </p>
        <div className="buttons d-flex mt-4 mb-3">
          <Button className="rounded-pill mr-2" variant="danger">Portfólio</Button>{' '}
          <Button className="rounded-pill" variant="transparent border border-primary-main text-primary-main">Habilidades</Button>{' '}
        </div>
        </Col>
        <Col  className="col-md-4 justify-content-center d-flex align-items-start"> 
          
        <Image className="img-fluid"
          src="/mockup_mobile.png"
          alt="Picture of the author"
          width={248}
          height={430}
          />
        </Col>
        <Col  className="col-md-4">
          
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
            <Card.Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </Card.Text>
          </Card.Body>
          </Card>
          <Card className="border-0 shadow-none p-0" >
          <Card.Body className="pb-0">
            <Card.Title className="text-primary-main fw-bolde border-top pt-4">
              <h6> 
              <i class="fas fa-chess mr-2"></i>
              <strong> 
              Experiências do Usuário
              </strong>
              </h6>
            </Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </Card.Text>
          </Card.Body>
          </Card>
          <Card className="border-0 shadow-none p-0 " >
          <Card.Body>
            <Card.Title className="text-primary-main fw-bold border-top pt-4">
              <h6> 
              <i class="far fa-bookmark mr-2"></i>
              <strong>
                Search Engine Optimization   
              </strong>

              </h6>
            </Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </Card.Text>
          </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  

    </section>
   
    {/* PORTFÓLIO / HABILIDADES / SKILLS */}
      <section className="skills bg-danger position-relative p-0">
        {/* BANNER */}
          <Container className="container-fluid">
            <Row className="mt-5">
              <h2  className="text-white pt-2 mb-3 position-absolute col-md-6">
                Portfólio e Habilidades com tecnologias que<strong> uso em meu dia-á-dia.</strong>
              </h2>
            </Row>
            
          </Container>
          <img
              className="img-fluid d-block w-100"
              src="/bnn_habilidades.png" 
              alt="First slide"
            />  
        {/* SKILLS */}
        <Container className="pt-5 pb-5">
          <Row>
            <Col className="d-flex justify-content-between align-items-center w-100">

              <i class="fab fa-html5 h1 text-white"></i>
              <i class="fab fa-css3-alt h1 text-white"></i>
              <i class="fab fa-js-square h1 text-white"></i>
              <i class="fab fa-react h1 text-white"></i>
              <i class="fab fa-magento h1 text-white"></i>

            </Col>
          </Row>
        </Container>
      </section>

    {/* EXPERIENCIAS */}
      <section className="pt-5 pb-5 mt-5 mb-5">
      <Container>
        <Row>
          <Col>
          <div className="p-2">
            <span class="badge badge-pill badge-danger align-items-center">o</span>
            <h6 className="text-primary-main pt-2">Experiências</h6>
          </div>
          <h2 className="h1 text-primary-main pt-2 mb-3">
            Empresas e Projetos que <strong>Tive o prazer de contribuir.</strong>
          </h2>
          <p>
            Fazer as coisas com amor, nos leva a bons resultados, e produtos importantes a pessoas .
          </p>
          <div className="buttons d-flex mt-4 pt-5">
            <Button className="rounded-pill mr-2" variant="danger">Portfólio</Button>{' '}
            <Button className="rounded-pill" variant="transparent border border-primary-main text-primary-main">Habilidades</Button>{' '}
          </div>
          </Col>
        
          <Col>
            <div className="d-flex align-items-center">
              <Card className="border-0 shadow-none p-0 d-flex" >
                <Card.Body>
                  <Card.Title className="text-primary-main fw-bold">
                    <h6> 
                    <i class="far fa-bookmark mr-2"></i>
                      <strong> 
                      Prodesp - Governo do Estado de SP 
                      </strong> 
                    </h6>
                  </Card.Title>
                  <Card.Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </Card.Text>
                </Card.Body>
              </Card>
              <i class="fas fa-angle-right text-primary-main d-flex"></i>
            </div>
            
            <div className="d-flex align-items-center">
              <Card className="border-0 shadow-none p-0 " >
                <Card.Body>
                  <Card.Title className="text-primary-main fw-bolde">
                    <h6>  
                    <i class="far fa-bookmark mr-2"></i>

                    <strong> 
                    Home Brasil
                    </strong>
                    </h6>
                  </Card.Title>
                  <Card.Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </Card.Text>
                </Card.Body>
              </Card>
              <i class="fas fa-angle-right text-primary-main d-flex"></i>
            </div>

            <div className="d-flex align-items-center">
              <Card className="border-0 shadow-none p-0 " >
                <Card.Body>
                  <Card.Title className="text-primary-main fw-bolde">
                    <h6> 
                      <i class="far fa-bookmark mr-2"></i>
                      <strong>E-commerce Express</strong> 
                    </h6>
                  </Card.Title>
                  <Card.Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </Card.Text>
                </Card.Body>
              </Card>
              <i class="fas fa-angle-right text-primary-main d-flex"></i>
            </div>

          </Col>
        </Row>
      </Container> 
    
      </section>  

      <section className="bg-primary-m pt-5 pb-5 mt-5 mb-5">
      <Container>
        <Row>
          <Col md={7} className="p-0">
            <div className="p-2">
              <span class="badge badge-pill badge-danger align-items-center">o</span>
              <h6 className="text-white pt-2">Experiências</h6>
            </div>
            <h2 className="h3 text-white pt-2 mb-3">
              Empresas e Projetos que <strong>Tive o prazer de contribuir.</strong>
            </h2>
            <p className="text-white">
              Fazer as coisas com amor, nos leva a bons resultados, e produtos importantes a pessoas .
            </p>
            <div className="buttons d-flex mt-4 pt-5">
              <Button className="rounded-pill mr-2" variant="danger">Portfólio</Button>{' '}
              <Button className="rounded-pill" variant="transparent border border-lignt text-white">Habilidades</Button>{' '}
            </div>
          </Col>

          <Col md={5} className="p-0">

            <Carousel id="portfolio" className="p-0">

              <Carousel.Item>
                  <img
                      className="d-block img-fluid"
                      src="/bnn_2.png"
                      alt="First slide"
                  />
                   
              </Carousel.Item>

              <Carousel.Item>
                  <img
                      className="d-block img-fluid"
                      src="/bnn_2.png"
                      alt="Second slide"
                  />
                 
              </Carousel.Item>

              <Carousel.Item>
                  <img
                      className="d-block img-fluid"
                      src="/bnn_2.png"
                      alt="Second slide"
                     
                  />
                 
              </Carousel.Item>
               
            </Carousel>

          </Col>
        </Row>
      </Container> 
    </section>


      <section >
        <Container>
          <Row>
            <Col>
            <Card className="border-0 shadow-lg rounded-pull p-2">
              <Card.Body className="pb-4">
                <Row className="justify-content-center align-items-center">
                  <Col md={9} className="text-primary-main fw-bolde">
                    <h2  className="text-primary-main pt-5 mb-3">
                      <strong>Fale comigo, e se precisar de um Profissional, pode me contratar também</strong>
                    </h2>
                    <p>
                    Fale comigo, e se precisar de um Profissional, pode me contratar também
                    </p>
                  </Col>

                  <Col md={2} className="text-center">
                    <Button className="rounded-pill mr-2" variant="danger">Portfólio</Button>{' '}
                  </Col>
                </Row>
                 
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="container-fluid mt-5">
        <Container>
        <Row className="align-items-center pt-5 pb-4">

          <Col className="col-6">

            <p className="fw-bolde">
              <strong>Lorem ipsum dolor</strong> sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            </p>

            {/* icones */}
            <ListGroup className="social-media" horizontal>
              <ListGroup.Item className="text-secundary-main border border-0 pl-0"><i class="fab fa-facebook-f"></i></ListGroup.Item>
              <ListGroup.Item className="text-secundary-main border border-0 pl-0"><i class="fab fa-behance"></i></ListGroup.Item>
              <ListGroup.Item className="text-secundary-main border border-0 pl-0"><i class="fab fa-github"></i></ListGroup.Item>
              <ListGroup.Item className="text-secundary-main border border-0 pl-0"><i class="fab fa-linkedin-in"></i></ListGroup.Item>
            </ListGroup>

          </Col>

          <Col className="col-3">
          <ListGroup className="border border-0">
            <h6><strong>Navegue</strong></h6>
            <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 ">Portfólio 2021</ListGroup.Item>
            <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 ">Download do CV</ListGroup.Item>
            <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 ">Habilidades</ListGroup.Item>
            <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 ">Experiências</ListGroup.Item>
            <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 ">Contato</ListGroup.Item>
          </ListGroup>  
          </Col>

          <Col className="col-3">
          <ListGroup className="border border-0  m-0">
            <h6><strong>Produtos</strong></h6>
            <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 ">Identidade Visual</ListGroup.Item>
            <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 ">SPA's - Single Page App </ListGroup.Item>
            <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 ">Habilidades</ListGroup.Item>
            <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 ">Experiências</ListGroup.Item>
            <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 ">Contato</ListGroup.Item>
          </ListGroup>  
          </Col>

        </Row>
        
        </Container>
        
      </footer>

  </div>
  );