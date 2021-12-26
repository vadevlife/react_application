 
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
  cargo:'Dev. Front-End',
  desc:'Desenvolvedor de aplicações responsivas na Prodesp. Companhia de Processamento de Dados do Estado de São Paulo/Brasil.',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript', 
  class:'bg-primary p-md-4',
  badge:'before-hidden purple rounded-pill',
  color:'warning',
  list: [{
    icon:'nome',
  }] 
},

{
  key:'2',
  nome:'Fastcommerce',
  cargo:'Desingner UI',
  desc:'Fastcommerce, plataforma de comércio eletrônico. Após ter criado boas lojas, com os recursos do Fastcommerce, fui convidado a contribuir para o design e desenvolvimento UI para Dashboard da plataforma.',
  periodo:'2016  / 2019  - Full-Time',
  skills:'Javascript',
  class:'bg-light p-md-4',
  badge:'before-hidden rounded-pill',
  color:'primary'
},
{
  key:'3', 
  nome:'RioSlum Studio',
  cargo:'Desenvolvedor Front-end',
  desc:'RioSlumSlum agência Norte Americana, design e desenvolvimento de aplicações. Participei de projetos bem importantes como Charlie Kirk e power-to-grow.',
  periodo:'2018  / 2019  - Freelancer',
  skills:'Javascript',
  class:'bg-light p-md-4',
  badge:'before-hidden purple rounded-pill',
  color:'purple primary'
},

{
  key:'5', 
  nome:'E-commerce Express',
  cargo:'Desenvolvedor Front-End',
  desc:'Express agência de desenvolvimento e-commerce, focada em projetos rápidos, com Magento, JetNeo e Loja integrada. Lush é um dos preferidos.',
  periodo:'2018  / 2019  - Full-Time',
  skills:'Javascript',
  class:'bg-light p-md-4',
  badge:'before-hidden pink rounded-pill',
  color:'pink'
},
{
  key:'4', 
  nome:'Home Brasil',
  cargo:'Desenvolvedor Front-End jr.',
  desc:'Depois de ter feito um bom trabalho, fui indicado a participar da equipe da Home Brasil. Minhas principais atividades foi desenvolver aplicações responsivas utilizando frameworks de interfaces, Bootstrap, Foundation, Wave. Além das tasks de apps responsivos, era muito comum, ter um grande numero de e-mails marketing, feitos no esquema table.',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript',
  class:'bg-light p-md-4',
  badge:'before-hidden warning rounded-pill',
  color:'warning'
},
{
  key:'6', 
  nome:'HP Brasil',
  cargo:'Analista de Suporte jr.',
  desc:'Minha primeira expêriencia, em uma grande corporação no mercado de tecnologia, foi muito proveitoso, pude conhecer pessoas e me integrar a cultura de tecnologia. Aprendi a entender problemas reais e ajudar a resolve-los.',
  periodo:'2012  / 2012  - Full-Time',
  skills:'Javascript',
  class:'bg-light p-md-4',
  badge:'before-hidden warning rounded-pill',
  color:'primary'
},
 

]


 export default function Experiencias(){
    return(
      <section>
          <div id="experiencias" className='section mt-5 mb-5'>
          <Container >
              <Row>
                <Col md={9}>
                  <span className="title_pathers d-none d-lg-flex">Experiências</span>
                  <Badge href="#" color="primary rounded-pill">Experiências</Badge>
                  <h2 className="display-4">Empresas e projetos <br/> que participei.</h2>
                  <p className='lead pt-3'>Meu objetivo é humanizar a relação entre produtos e pessoas, <br/> aproximar de maneira agrádavel, o melhor de um produto <br/> a necessidade do consumidor.</p>
                </Col>
                <Col md={3} className="d-flex flex-column justify-content-center">
                  
                </Col>
              </Row> 
              <Row className="p-5 p-lg-5">
                          
                  {cardContent.map((cardContent)=>( 

                   <div className="col-md-6 col-lg-4 p-0" key={cardContent.key}>  
                      <Card className={cardContent.class}> 
                          <CardBody>
                            <p>Experiência</p>
                            <Badge href="#" color={cardContent.color} className={cardContent.badge}>{cardContent.nome}</Badge> 
                            <CardTitle tag="h5">{cardContent.cargo}</CardTitle>
                            <CardText color="muted">{cardContent.desc}</CardText>
                            <CardText color="muted">{cardContent.periodo}</CardText>
                          </CardBody> 
                      </Card>   
                    </div>
                    
                  ))}
                

              </Row>
          </Container>
        </div> 
    
      </section>
      )
 }