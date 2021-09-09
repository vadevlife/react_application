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
    logo:'/poupatempologo.png',
    color:'light',
    bg:'url("/poupatempo.png',
    text:'Designer e Desenvolvedor de Builds importante do novo Portal PoupaTempo' 
},{
    key:'2',
    nome:'Poupatempo',
    logo:'/detranlogo.png', 
    bg:'url("/poupatempo.png',  
    color:'light',
    text:'Designer e Desenvolvedor de Builds importante do novo Portal PoupaTempo' 
}]

export default function Portfolio(){
    return(
        <React.Fragment> 
        <div id="portfolio" className='section mt-5 mb-5'>
         
            <Container > 
                <Row className="p-4 ">

                    <Col md={12}>
                        <span className="title_pathers d-none d-lg-flex">Portfólio</span>
                        <Badge href="#" color="primary rounded-pill">Designer e Desenvolvedor</Badge>
                        <h2 className="display-4">Projetos que tive o prazer de fazer parte!</h2>
                    </Col>      
                    
                    <Col md={3}>
                    <Card style={{backgroundImage:portfolio.bg}}> 
                            <CardBody>
                                <Badge className="before-hidden rounded-pill" href="#" color={portfolio.color}><img src={portfolio.logo}/></Badge> 
                                <CardTitle tag="h5"></CardTitle>
                                <CardText color="muted"></CardText>
                                <p className="text-white">{portfolio.text}</p> 
                            </CardBody> 
                        </Card>     
                    </Col>
                    
                    {portfolio.map((portfolio)=>( 
        
                        <div className="col-md-6 col-lg-4 p-0" key={portfolio.key}>  
                        <Card style={{backgroundImage:portfolio.bg}}> 
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
            </Container>
        </div>
        </React.Fragment> 

    )
}