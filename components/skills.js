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
    color:'primary',
    icon:'fab fa-html5 h2 text-primary'
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

            <Row className="d-lg-flex">
              <Col md={9}>
                <span className="d-none d-lg-flex title_pathers">Sobre</span>
                <Badge href="#" color="primary rounded-pill">Vinicius Araujo</Badge>
                <h2 className="display-4">Amor pela Criação e vontade de desenvolvimento.</h2>
              </Col> 
            </Row> 

            <Row className='p-2 p-lg-5'>

              <Col sm={4} md={4} lg={3} className="p-0 d-none d-sm-block">
                <Card id="cover" className={cardContent.class}  > 
                      <CardBody className="bg-cover">
                          <div>
                            <CardTitle tag="h5" className="text-light">Faça download do<br/> meu curriculum, e se precisar fale comigo!</CardTitle> 
                            <p>{cardContent.desc}</p> 
                            <i className={cardContent.icon}></i>
                            <Badge href="/curriculum-va.pdf" color="light" className="before-hidden text-body rounded-pill">Curriculum 2021 <i className="fas fa-file-download text-body h6 ml-1 pt-1"></i></Badge> 
                          </div>
                      </CardBody> 
                  </Card>   
              </Col>

              <Col md={8} className="d-flex flex-wrap p-0"> 
                <Row>     
                  <Card className='p-4'>  
                    <CardBody>
                    <CardTitle tag="h3">Sobre mim</CardTitle>  
                    <p className='lead'>Designer Desenvolvedor de aplicações digitais, iniciei minha carreira em agências de Publicidade e criação, foi uma experiência incrivel fazer parte de projetos da Home Brasil e RioSlum.<br/> <br/>Me aprofundei no desenvolvimento web responsivo, ganhei experiência durante alguns anos na agência de desenvolvimento de e-commerce Zfast. Criei interfaces para lojas e contribuí para o desenvolvimento da Dashboard da Plataforma Fastcommerce. <br/> <br/> Há cerca de 4 anos, desenvolvo aplicações responsivas, e há pelo menos 3, trabalho no mercado de desenvolvimento de lojas virtuais utilizando diferentes plataformas.</p>
                    </CardBody>
                  </Card>     
                </Row> 
              </Col>
            
            </Row>     
          </Container>   
      </div>
    );
  } 