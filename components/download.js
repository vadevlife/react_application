 
import { 
     
    Row,
    Container,
    Col,
    Card,
    Button, 
    }from 'react-bootstrap';
 
  function Download(){
    return   <div>  
                <section className="download d-sm-block">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={12} lg={10} className="p-0">
                                <Card className="border-0 shadow-lg rounded-pull p-4 radius-m">
                                    <Card.Body>
                                        <Row className="justify-content-center align-items-center">
                                        <Col md={7} className="text-primary-main fw-bolde">
                                            <h3  className="text-primary-main">
                                            Fale comigo, e se precisar... 
                                            <strong>Pode me contratar também!</strong>
                                            
                                            </h3>
                                            <p className="d-none">
                                            </p>
                                        </Col>

                                        <Col md={5} className="text-center ">
                                            <div className="buttons d-flex">

                                            <a  target="_blank" href="/curriculum-va.pdf" className="rounded-pill btn btn-transparent border border-primary-main text-primary-main mr-2">Download <i class="fas fa-cloud-download-alt ml-2"></i></a>

                                                {/* <a className="rounded-pill m-auto btn btn-danger ml-2" target="_blank" href="/curriculum-va.pdf">Download </a> */}
                                                <a href="https://wa.me/+5512983171532?text=" target="_blank" className="btn btn-danger text-white rounded-pill p-2 shadow-sm " >Fale comigo &nbsp; <i className="fab text-sucess fa-whatsapp"></i></a>

                                            </div>
                                        </Col>
                                        </Row>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>  
            </div>
  }

export default Download
 