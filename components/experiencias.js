 
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
  desc:'Em uma grande equipe, minha função foi criar e desenvolver atravez de fluxogramas, \n\n interfaces responsivas com frameworks de interface e recursos JavaScript',
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
  cargo:'Desenvolvedor Front-end',
  desc:'Responsável por integrações de novas lojas a recursos nativos da Plataforma de E-commerce. Sempre focado em aplicações leves e de auto desempenho para aumentar a conversão.',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript',
  class:'bg-light p-md-4',
  badge:'before-hidden rounded-pill',
  color:'primary'
},
{
  key:'3', 
  nome:'RioSlum Studio',
  cargo:'Desenvolvedor Front-end',
  desc:'Trabalhei em Projetos para o CMS Wordpress e Plugins. Metedologias Agéis, desenvolvimento responsivo, automatizadores de tarefas, eram algumas das atividades do dia-a-dia.',
  periodo:'2018  / 2019  - Freelancer',
  skills:'Javascript',
  class:'bg-light p-md-4',
  badge:'before-hidden purple rounded-pill',
  color:'purple primary'
},
{
  key:'4', 
  nome:'Home Brasil',
  cargo:'Desenvolvedor Front-End',
  desc:'Criação de landing pages, e-mails marketing e Web Sites Resposivos. Desenvolvi lojas na plataforma OpenCart e contribui ativamente no ranqueamento, utilizando web services para recursos de SEO.',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript',
  class:'bg-light p-md-4',
  badge:'before-hidden warning rounded-pill',
  color:'warning'
},
{
  key:'5', 
  nome:'E-commerce Express',
  cargo:'Desenvolvedor Front-End',
  desc:'Implementação de lojas virtuais responsivas e integração a recursos para e-commerce nativos das plataformas JetNeo e Magento.',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript',
  class:'bg-light p-md-4',
  badge:'before-hidden pink rounded-pill',
  color:'pink'
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
                  <Badge href="#" color="primary rounded-pill">Agências e Startups</Badge>
                  <h2 className="display-4">Minhas experiências profissionais.</h2>
                </Col>
                <Col md={3} className="d-flex flex-column justify-content-center">
                  
                </Col>
              </Row> 
              <Row className="p-5 p-lg-5">
                          
                  {cardContent.map((cardContent)=>( 

                   <div className="col-md-6 col-lg-4 p-0" key={cardContent.key}>  
                      <Card className={cardContent.class}> 
                          <CardBody>
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