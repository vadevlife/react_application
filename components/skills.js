import React, { useState } from 'react';     
import {
   
  Badge,   
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
  ListGroup
} from 'reactstrap'; 


const cardContent=[{
    key: '1', 
    nome:'Html5',
    cargo:'Posso desenvolver sites responsivos, Aplicações de E-commerce.', 
    desc:' - 4 anos de Experiência',
    periodo:'2019  / 2020  - Full-Time',
    skills:'Javascript', 
    class:'col-md-6 col-lg-6 ',
    badge:'  rounded-pill before-hidden',
    color:'warning',
    icon:'fab fa-html5 h3 text-warning'
  },{
    key: '2',
    nome:'Css3',
    cargo:'Camadas em variaveis ajudam a otimizar seu app.', 
    desc:' - 4 anos de Experiência',
    periodo:'2019  / 2020  - Full-Time',
    skills:'Javascript', 
    class:'col-md-6 col-lg-6 ',
    badge:'redmain rounded-pill before-hidden',
    color:' ',
    icon:'fab fa-css3-alt h3 text-danger' 
  },{
    key: '3',
    nome:'Javascript',
    cargo:'Posso desenvolver Site responsivos, Aplicações de E-commerce.', 
    desc:' - 4 anos de Experiência',
    periodo:'2019  / 2020  - Full-Time',
    skills:'Javascript', 
    class:'col-md-6 col-lg-6 ',
    badge:'purple rounded-pill before-hidden',
    color:'warning',
    icon:'fab fa-js h3 text-warning' 
  },{
    key: '4',
    nome:'Magento',
    cargo:'Front-end de Lojas Magento.', 
    desc:' - 2 anos de Experiência',
    periodo:'2019  / 2020  - Full-Time',
    skills:'Javascript', 
    class:'col-md-6 col-lg-6 ',
    badge:'orange rounded-pill before-hidden',
    color:' ',
    icon:'fab fa-magento  h3 text-orange' 
  },
 
 
  
  ]
  
 
export default function skills() {  
 
    
    return (
      <div id="skills" className='section mt-5 mb-5'> 
          <Container >
              <Row>
                <Col md={9}>
                  <span className="title_pathers d-none d-lg-flex">Habilidades</span>
                  <Badge href="#" color="primary rounded-pill">Agências e Startups</Badge>
                  <h2 className="display-4">Skills que podem contribuir para seu projeto</h2>
                </Col> 
              </Row> 
            <Row className="p-4">
              <Col sm={4} md={4} lg={3} className="p-0">
                <Card id="cover" className={cardContent.class}  > 
                      <CardBody className="bg-cover">
                          {/* <Badge href="#" color="" className="before-hidden">DOwnload</Badge> 
                          <CardTitle tag="h5">Title</CardTitle>
                          <CardText color="muted">Descrição</CardText>
                          <p>paragrafo</p>  */}
                      </CardBody> 
                  </Card>   
              </Col>
              <Col md={8} className="d-flex flex-wrap p-0">

                <Row>  
                  {cardContent.map((cardContent)=>(   
                    
                        <div className="col-md-6 col-lg-6 p-0" key={cardContent.key}> 
                        <Card>  
                            <CardBody>
                                <Badge href="#" color={cardContent.color} className={cardContent.badge}>{cardContent.nome}</Badge> 
                                <CardTitle tag="h5">{cardContent.cargo}</CardTitle> 
                                <p>{cardContent.desc}</p> 
                                <i className={cardContent.icon}></i>
                            </CardBody> 
                        </Card>    
                          
                      </div> 
                  ))}

                </Row>
            </Col>
            
            </Row> 
           

           
          </Container>



 
   
      </div>
    );
  } 