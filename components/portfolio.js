import React from 'react'
import {
   Container,
   Row,
   Col,
   Card,
   CardBody,
   CardText,
   CardTitle,
   Badge 
  } from 'reactstrap'; 


const portfolio=[{
    key:'1',
    nome:'Poupatempo',
    logo:'/detranlogo.png',
    color:'light',
    bg:'url("/detran.png',
    text:'Designer e Prototipação de serviços do Portal PoupaTempo' 
},{
    key:'2',
    nome:'Poupatempo',
    logo:'/personalhouselogo.png', 
    bg:'url("/personalhouse.png',  
    color:'light',
    text:'Designer e Prototipação de serviços do Portal PoupaTempo' 
    
}]

export default function Portfolio(){
    return(
        <React.Fragment> 
        <div id="portfolio" className='section mt-5 mb-5'>
         
            <Container > 
                <Row className="p-4 "> 
                    <Col md={9}>
                        <span className="title_pathers d-none d-lg-flex">Portfólio</span>
                        <Badge href="#" color="primary rounded-pill">Designer e Desenvolvedor</Badge>
                        <h2 className="display-4 mb-5">Projetos que tive o prazer de fazer parte!</h2>
                    </Col>      
                </Row>
                <Row>
                    
                    <Col md={3} className="p-0 ">
                        <Card style={{backgroundImage:'url("/poupatempo.png'}}> 
                            <CardBody>
                                <Badge className="before-hidden rounded-pill" href="#" color="light"><img src="/poupatempologo.png"/></Badge> 
                                <CardTitle tag="h5"></CardTitle>
                                <CardText color="muted"></CardText>
    
                                <p className="text-white">Designer e Prototipação de serviços do Portal PoupaTempo</p> 
                            </CardBody> 
                        </Card>     
                    </Col>

                    <Col>
                        <Row>
                            {portfolio.map((portfolio)=>( 
            
                                    <div className="col-md-6 col-lg-12 p-0" key={portfolio.key}>  
                                    
                                        <Card className="card-centr" style={{backgroundImage:portfolio.bg}}> 
                                            <CardBody>
                                                <Badge className="before-hidden rounded-pill" href="#" color={portfolio.color}><img src={portfolio.logo}/></Badge> 
                                                <CardTitle tag="h5"></CardTitle>
                                                <CardText color="muted"></CardText>
                                                <p className="text-white">{portfolio.text}</p> 
                                            </CardBody> 
                                        </Card> 
                                        
                                    </div>
                                    
                                ))}
                        </Row>
                    </Col>

                   

                    <Col md={4} className="p-0">
                        <Card style={{backgroundImage:'url("/charliekirk.png'}}> 
                            <CardBody>
                                <Badge className="before-hidden rounded-pill" href="#" color="light"><img  src="/poupatempologo.png"/></Badge> 
                                <CardTitle tag="h5"></CardTitle>
                                <CardText color="muted"></CardText>
                                <p className="text-white">Designer e Desenvolvedor de Builds importante do novo Portal PoupaTempo</p> 
                            </CardBody> 
                        </Card>     
                    </Col>
                    
                   
                </Row>
                 
            </Container>
        </div>
        </React.Fragment> 

    )
}