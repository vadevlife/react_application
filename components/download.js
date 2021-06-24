 
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
                                        <Col md={9} className="text-primary-main fw-bolde">
                                            <h3  className="text-primary-main">
                                            <strong>Fale comigo, e se precisar, pode me contratar também!</strong>
                                            </h3>
                                            <p>
                                            Fale comigo, e se precisar de um Profissional, pode me contratar também
                                            </p>
                                        </Col>

                                        <Col md={3} className="text-center">
                                            <Button className="rounded-pill m-auto" variant="danger">Download <i class="fas fa-cloud-download-alt ml-2"></i></Button>{' '}
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
 