 
import React, { useState } from 'react';        
import {
   
  Badge,   
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle

} from 'reactstrap'; 

const cardContent=[{
  nome:'Prodesp',
  cargo:'Desenvolvedor Front-End',
  desc:'Criação, prototipação e desenvolvimento de componentes responsivos, dia-a-dia com ferramentas client-side.',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript', 
  class:'col-xs-12 col-sm-6 col-md-4 col-lg-3 bg-primary',
  badge:'purple rounded-pill',
  color:'warning'
},
{
  nome:'Fastcommerce',
  cargo:'E-commerce Dev. Front-End ',
  desc:'Criação e desenvolvimento de componentes responsivos com ferramentas client-side',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript',
  class:'col-xs-12 col-sm-6 col-md-4 col-lg-3',
  badge:'rounded-pill',
  color:'primary'
},
{
  nome:'RioSlum Studio',
  cargo:'E-commerce Dev. Front-End ',
  desc:'Criação e desenvolvimento de componentes responsivos com ferramentas client-side',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript',
  class:'col-xs-12 col-sm-6 col-md-4 col-lg-3',
  badge:'purple rounded-pill',
  color:'purple primary'
},
{
  nome:'Home Brasil',
  cargo:'Desenvolvedor Front-End',
  desc:'Implementação de Sites responsivos e recursos de interação Front-End com JavaScript.',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript',
  class:'col-xs-12 col-sm-6 col-md-4 col-lg-3',
  badge:'warning rounded-pill',
  color:'warning'
},
{
  nome:'HelloPay',
  cargo:'Desenvolvedor Front-End',
  desc:'Implementação de Sites responsivos e recursos de interação Front-End com JavaScript.',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript',
  class:'col-xs-12 col-sm-6 col-md-4 col-lg-3',
  badge:'pink rounded-pill',
  color:'pink'
},
{
  nome:'Colonial Village ||',
  cargo:'Desenvolvedor Front-End',
  desc:'Implementação de Sites responsivos e recursos de interação Front-End com JavaScript.',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript',
  class:'col-xs-12 col-sm-6 col-md-4 col-lg-3',
  badge:'success rounded-pill',
  color:'success'
}


]


 export default function Experiencias(){
    return(
        <div id="experiencias" className='section mt-5 mb-5'>
          <Container >
              <Row>
                <Col md={9}>
                  <span className="title_pathers d-none d-lg-flex">Experiências</span>
                  <Badge href="#" color="primary rounded-pill">Agências e Startups</Badge>
                  <h2 className="display-4">Experiências Profissionais e builds Legais</h2>
                </Col>
                <Col md={3} className="d-flex flex-column justify-content-center">
                  
                </Col>
              </Row> 
              <Row className="p-4 ">
                          
                  {cardContent.map((cardContent)=>( 
                
                    <Card className={cardContent.class}  > 
                        <CardBody>
                          <Badge href="#" color={cardContent.color} className={cardContent.badge}>{cardContent.nome}</Badge> 
                          <CardTitle tag="h5">{cardContent.cargo}</CardTitle>
                          <CardText color="muted">{cardContent.desc}</CardText>
                          <p>{cardContent.periodo}</p> 
                        </CardBody> 
                    </Card>   
                    
                  ))}
                

              </Row>
          </Container>
        </div> 
    )
 }