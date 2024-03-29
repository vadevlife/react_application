import React, { useState } from 'react';     
import {
   
  Badge,   
  Container,
  Row,
  Col,
  Card,
  CardBody, 
  CardTitle, 
} from 'reactstrap'; 


const cardContent=[{
    key: '1', 
    nome:'Html5',
    cargo:'Posso desenvolver Sites Responsivos, integrações de APis e integração de E-commerce.', 
    desc:'4 anos de Experiência',
    periodo:'2019  / 2020  - Full-Time',
    skills:'Javascript', 
    class:'col-md-6 col-lg-4 ',
    badge:'rounded-pill before-hidden',
    color:'warning',
    icon:'fab fa-html5 h2 text-warning'
  },{
    key: '2',
    nome:'Css3',
    cargo:'Camadas, variaveis economizam tempo, encurta o código e diminui a chance de erros.', 
    desc:'4 anos de Experiência',
    periodo:'2019  / 2020  - Full-Time',
    skills:'Javascript', 
    class:'col-md-6 col-lg-4',
    badge:'redmain rounded-pill before-hidden',
    color:' ',
    icon:'fab fa-css3-alt h2 text-danger' 
  },{
    key: '3',
    nome:'Javascript',
    cargo:'Recursos UX que otimizam a experiência do usuário.', 
    desc:'2 anos de Experiência',
    periodo:'2019  / 2020  - Full-Time',
    skills:'Javascript', 
    class:'col-md-6 col-lg-6 ',
    badge:'purple rounded-pill before-hidden',
    color:'warning',
    icon:'fab fa-js h2 text-warning' 
  },{
    key: '4',
    nome:'Magento',
    cargo:'Front-end de Lojas Magento.', 
    desc:'2 anos de Experiência',
    periodo:'2019  / 2020  - Full-Time',
    skills:'Javascript', 
    class:'col-md-6 col-lg-6 ',
    badge:'orange rounded-pill before-hidden',
    color:' ',
    icon:'fab fa-magento  h2 text-orange' 
  },
 
 
  
  ]
  
 
export default function skills() {  
 
    
    return (
      <div id="skills" className='section mt-5 mb-5'> 
          <Container >
              <Row className="d-none d-lg-flex">
                <Col md={9}>
                  <span className="title_pathers">Habilidades</span>
                  <Badge href="#" color="primary rounded-pill">Agências e Startups</Badge>
                  <h2 className="display-4">Skills que podem contribuir para seu projeto</h2>
                </Col> 
              </Row> 
            <Row className='p-4 p-lg-5'>
              <Col sm={4} md={4} lg={3} className="p-0 d-none d-sm-block">
                <Card id="cover" className={cardContent.class}  > 
                      <CardBody className="bg-cover">
                          <div>
                            <CardTitle tag="h5" className="text-light">Faça download do curriculum se precisar fale comigo!</CardTitle> 
                            <p>{cardContent.desc}</p> 
                            <i className={cardContent.icon}></i>
                            <Badge href="/curriculum-va.pdf" color="light" className="before-hidden text-body rounded-pill">Curriculum 2021 <i className="fas fa-file-download text-body h6 ml-1 pt-1"></i></Badge> 
                          </div>
                      </CardBody> 
                  </Card>   
              </Col>
              <Col md={8} className="d-flex flex-wrap p-0">

                <Row >  
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


            <Row>
            <Col md={9}> 
                  <h6 className="p-2"><strong>Design e Criação</strong></h6> 
              </Col> 
            </Row>
            <Row className="p-4">
              
            

              <Col  sm={4} md={4} lg={3}  className="p-0">  
                <Card>  
                    <CardBody>
                        <Badge href="#" className="before-hidden blue2 rounded-pill">Photoshop</Badge> 
                        <CardTitle tag="h5">Posso criar, materiais publicitários e design de interfaces web.</CardTitle> 
                        <p>4 anos de Expêriencia</p>  
                        <img widht="25" src="/ps.png" />

                    </CardBody> 
                </Card> 
              </Col> 
               
              
             <Col  sm={4} md={4} lg={3}  className="p-0">   
              <Card>  
                    <CardBody>
                        <Badge href="#" className="before-hidden rounded-pill black">Figma</Badge> 
                        <CardTitle tag="h5">Prototipação e Design de intefaces web e mobile.</CardTitle> 
                        <p>1 ano de Expêriencia</p>  
                        <img src="/figma.png" />
                        
                    </CardBody> 
                </Card> 
              </Col> 
                
            </Row>
           

           
          </Container>



 
   
      </div>
    );
  } 