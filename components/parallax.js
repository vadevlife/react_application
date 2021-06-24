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
                <Container className="mt-3 mb-3">
                    <Row>
                        <Col className="col-12 col-md-6 pt-5">
                        
                        <h2  className="h1 text-white mt-4 mb-3">
                            Sua empresa de Portas abertas para o Mundo, <strong> construa sua Loja Online.</strong>
                        </h2>
                        <p className="text-white mt-4 mb-4">
                            Contrate a confecção de sua loja online, e comece a vender online o quanto antes:
                        </p>
                        <div className="buttons d-flex d-sm-none    pb-5">
                                <Button className="rounded-pill mr-2" variant="danger">Portfólio</Button>{' '}
                                <Button className="rounded-pill" variant="transparent border border-white-main text-white">Habilidades</Button>{' '}
                            </div>
                        </Col>

                    </Row>
                </Container>         
                </div>
            </section>
        </div>
  }

export default Parallax
 