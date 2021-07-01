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
                                E-commerce: o setor que<strong> cresceu 75% em meio à pandemia!</strong>
                            </h2>
                            <p className="mt-4 mb-4 text-white">
                               Posso fazer a integração de lojas online e ajuda-lo a aumentar a conversão.
                            </p>

                            <div className="buttons d-flex">
                                <a href="https://wa.me/+5512983171532?text=" target="_blank" className="btn btn-danger text-white rounded-pill p-2 shadow-sm mr-2" >Fale comigo &nbsp; <i className="fab text-sucess fa-whatsapp"></i></a>
                                <a href="#portfolio" className="rounded-pill btn btn-transparent border border-light text-white ">Portfólio</a>
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
 