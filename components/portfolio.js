import React from 'react'
import {
   Container,
   Row,
   Col,
   Card,
   CardBody,
   CardText,
   CardTitle,
   Badge,
   List,
   ListInlineItem    
  } from 'reactstrap'; 


const portfolio=[{
    key:'1',
    nome:'Poupatempo',
    logo:'/detranlogo.png',
    color:'light',
    bg:'url("/detran.png',
    text:'Desenvolvedor Web de serviços do Portal Detran.', 
    url:'http://www.detran.sp.gov.br/wps/portal/portaldetran/cidadao/servicos/servicosOnline'
},{
    key:'2',
    nome:'PersonalHouse',
    logo:'/personalhouselogo.png', 
    bg:'url("/personalhouse.png',  
    color:'light',
    text:'Desenvolvedor WordPress PersonalHouse / Colonial Village ||' ,
    url:'https://colonialvillage.com.br/'

    
}]

export default function Portfolio(){
    return(
        <React.Fragment> 
        <div id="portfolio" className='section mt-5 mb-5'>
         
            <Container > 
                <Row className=""> 
                    <Col md={9}>
                        <span className="title_pathers d-none d-lg-flex">Portfólio</span>
                        <Badge href="#" color="primary rounded-pill">Designer e Desenvolvedor</Badge>
                        <h2 className="display-4 mb-5">Projetos que tive o prazer contribuir e fazer parte!</h2>
                    </Col>      
                </Row>
                <Row>
                    
                    <Col md={3} className="p-0 ">
                        
                        <Card style={{backgroundImage:'url("/poupatempo.png'}}> 
                            <CardBody>
                                <Badge className="before-hidden rounded-pill" target="_blank" href="https://www.poupatempo.sp.gov.br/" color="light"><img src="/poupatempologo.png"/></Badge> 
                                <CardTitle tag="h5"></CardTitle>
                                <CardText color="muted"></CardText>
    
                                <p className="text-light lead">Designer e desenvolvedor web de serviços digitais do Portal PoupaTempo.</p> 
                                
                            </CardBody> 
                            <div className="p-3">  
                            <span className="text-black text-muted">Tecnologias</span> 
                                <List type="unstyled">
                                    <ListInlineItem><i className="text-light h3 fab fa-html5"></i></ListInlineItem>
                                    <ListInlineItem><i className="text-light h3 fab fa-css3-alt"></i></ListInlineItem>
                                    <ListInlineItem><i className="text-light h3 fab fa-js"></i></ListInlineItem>
                                    <ListInlineItem><i className="text-light h3 fab fa-wordpress"></i></ListInlineItem>
                                </List>
                            </div>
                        </Card>     
                        
                    </Col>

                    <Col>
                        <Row>
                            {portfolio.map((portfolio)=>( 
            
                                    <div className="col-md-6 col-lg-12 p-0" key={portfolio.key}>  
                                   
                                        <Card className="card-centr" style={{backgroundImage:portfolio.bg}}> 
                                            <CardBody>
                                                <Badge className="before-hidden rounded-pill" href={portfolio.url} color={portfolio.color}><img src={portfolio.logo}/></Badge> 
                                                <CardTitle tag="h5"></CardTitle>
                                                <CardText color="muted"></CardText>
                                                <p className="text-white lead">{portfolio.text}</p> 
                                            </CardBody>
                                            <div className="d-flex justify-content-end sof-skills p-4">   
                                                <List type="unstyled">
                                                    <ListInlineItem><i className="text-light h3 fab fa-html5"></i></ListInlineItem>
                                                    <ListInlineItem><i className="text-light h3 fab fa-css3-alt"></i></ListInlineItem>
                                                    <ListInlineItem><i className="text-light h3 fab fa-js"></i></ListInlineItem>
                                                </List>
                                            </div>
                                        </Card> 
                                     
                                    </div>
                                    
                                ))}
                        </Row>
                    </Col>

                   

                    <Col md={4} className="p-0">
                        <Card style={{backgroundImage:'url("/charliekirk.png'}}> 
                            <CardBody>
                                <Badge className="before-hidden rounded-pill" href="https://charliekirk.com" color="light"><img  src="/charliekirklogo.png"/></Badge> 
                                <CardTitle tag="h5"></CardTitle>
                                <CardText color="muted"></CardText>
                                <p className="text-white lead">Desenvolvedor WordPress do site CharlieKirk.</p> 
                            </CardBody> 
                            <div className="p-3">  
                            <span className="text-black text-muted">Tecnologias</span> 
                                <List type="unstyled">
                                    <ListInlineItem><i className="text-light h3 fab fa-html5"></i></ListInlineItem>
                                    <ListInlineItem><i className="text-light h3 fab fa-css3-alt"></i></ListInlineItem>
                                    <ListInlineItem><i className="text-light h3 fab fa-js"></i></ListInlineItem>
                                    <ListInlineItem><i className="text-light h3 fab fa-wordpress"></i></ListInlineItem>
                                </List>
                            </div>
                        </Card>     
                    </Col>
                    
                   
                </Row>
                 
            </Container>
        </div>
        </React.Fragment> 

    )
}