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
  
 
  function Parallax(){
    return   <div>
            <section className="mt-5">
                <div className="parallax w-100">
                <Container className="mt-3 mb-0 pt-5 pb-5">
                    <Row className="justify-content-start">
                        <Col className="col-md-8 pt-3 pb-3 text-white">
                    
                            <h2  className="h1 mb-3">
                                E-commerce: o setor que<strong> cresceu 75% em meio à pandemia</strong>
                            </h2>
                            <p className="mt-4 mb-4 text-white">
                                Posso desenvolver sua loja e contribuir para seu e-commerce, fale comigo!
                            </p>

                            <div className="buttons d-flex">
                                <Button className="rounded-pill mr-2" variant="danger">Portfólio</Button>{' '}
                                <Button className="rounded-pill" variant="transparent border border-white text-white">Contato</Button>{' '}
                            </div>
                            
                        </Col>

                    </Row>
                </Container>         
                </div>
                <div className="icons_skills bg-primary-m">
                    <Container className="pt-md-5 pb-md-5">
                        <Row>
                            <Col className="pt-4 pb-4 d-flex flex-wrap justify-content-between">
                                <i class="fab fa-html5"></i>
                                <i class="fab fa-css3-alt"></i>
                                <i class="fab fa-js"></i>
                                <i class="fab fa-react"></i>
                                <i class="fab fa-git-alt"></i>
                                <i class="fab fa-npm"></i>
                                <i class="fab fa-wordpress"></i>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
  }

export default Parallax
 