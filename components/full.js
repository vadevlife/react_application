import React from 'react'
import { 
    Row,
    Col,
    Card,
    CardBody 
   } from 'reactstrap'; 
 
 

export default function full() {
  return(
        <>
         <Row className='p-5'>
                    
                    <Col sm={6} lg={4} className="p-0"> 
                        <Card style={{backgroundImage:'url("/enike.png'}}> 
                            <CardBody>
                                <h4 className="text-white">Nike Tema E-commerce</h4>
                                <p className="text-light lead">Atuei no Design UI e Prototipação.</p> 
                            </CardBody>  
                        </Card>      
                    </Col>

                    <Col md={6} lg={4}>
                        <Row>
                            <div className="col-md-12 col-lg-12 p-0" key={portfolio.key}>  
                                    <Card className="card-centr" style={{backgroundImage:'url("/poupatempo.png'}}> 
                                        <CardBody>
                                            <h4 className="text-white">Portal PoupaTempo SP</h4>
                                            <p className="text-light lead">Atuei no Design UI e Prototipação.</p> 
                                        </CardBody> 
                                    </Card> 
                                </div>
                                <div className="col-md-12 col-lg-12 p-0" key={portfolio.key}>  
                                    <Card className="card-centr" style={{backgroundImage:'url("/detran.png'}}> 
                                        <CardBody>
                                            <h4 className="text-white">Portal Detran SP</h4>
                                            <p className="text-light lead">Atuei no Design UI e Prototipação.</p> 
                                        </CardBody> 
                                    </Card> 
                                </div>
                        </Row> 
                    </Col>  

                    <Col md={4} className="p-0 d-sm-none d-lg-block">
                        <Card style={{backgroundImage:'url("/charliekirk.png'}}> 
                            <CardBody>
                                <h4 className="text-white">Charlie Kirk</h4>
                                <p className="text-light lead">Atuei no Design UI e Prototipação.</p> 
                            </CardBody>   
                        </Card>     
                    </Col> 
                   
                </Row>
        </>
  )
    
}