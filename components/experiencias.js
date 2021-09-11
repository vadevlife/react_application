 
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
  key:'1',
  nome:'Prodesp',
  cargo:'Desenvolvedor Front-End',
  desc:'Criação, prototipação e desenvolvimento de componentes responsivos, dia-a-dia com ferramentas client-side.',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript', 
  class:'bg-primary ',
  badge:'before-hidden purple rounded-pill',
  color:'warning'
},
{
  key:'2',
  nome:'Fastcommerce',
  cargo:'E-commerce Dev. Front-End ',
  desc:'Criação e desenvolvimento de componentes responsivos com ferramentas client-side',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript',
  class:'bg-light',
  badge:'before-hidden rounded-pill',
  color:'primary'
},
{
  key:'3', 
  nome:'RioSlum Studio',
  cargo:'E-commerce Dev. Front-End ',
  desc:'Criação e desenvolvimento de componentes responsivos com ferramentas client-side',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript',
  class:'bg-light',
  badge:'before-hidden purple rounded-pill',
  color:'purple primary'
},
{
  key:'4', 
  nome:'Home Brasil',
  cargo:'Desenvolvedor Front-End',
  desc:'Implementação de Sites responsivos e recursos de interação Front-End com JavaScript.',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript',
  class:'bg-light',
  badge:'before-hidden warning rounded-pill',
  color:'warning'
},
{
  key:'5', 
  nome:'HelloPay',
  cargo:'Desenvolvedor Front-End',
  desc:'Implementação de Sites responsivos e recursos de interação Front-End com JavaScript.',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript',
  class:'bg-light',
  badge:'before-hidden pink rounded-pill',
  color:'pink'
},
{
  key:'6', 
  nome:'Colonial Village ||',
  cargo:'Desenvolvedor Front-End',
  desc:'Implementação de Sites responsivos e recursos de interação Front-End com JavaScript.',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript',
  class:'bg-light',
  badge:'before-hidden success rounded-pill',
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
                  <h2 className="display-4">Experiências Profissionais e builds</h2>
                </Col>
                <Col md={3} className="d-flex flex-column justify-content-center">
                  
                </Col>
              </Row> 
              <Row className="p-4 ">
                          
                  {cardContent.map((cardContent)=>( 

                   <div className="col-md-6 col-lg-4 p-0" key={cardContent.key}>  
                      <Card className={cardContent.class}> 
                          <CardBody>
                            <Badge href="#" color={cardContent.color} className={cardContent.badge}>{cardContent.nome}</Badge> 
                            <CardTitle tag="h5">{cardContent.cargo}</CardTitle>
                            <CardText color="muted">{cardContent.desc}</CardText>
                            <p>{cardContent.periodo}</p> 
                          </CardBody> 
                      </Card>   
                    </div>
                    
                  ))}
                

              </Row>
          </Container>
        </div> 
    )
 }