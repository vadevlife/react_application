import React, { useState } from 'react';     
import {
  Badge,   
  Jumbotron, 
  Container, 
  Row,
  Col
} from 'reactstrap'; 

export default function NavBar() {  

   
    
    return (
      <div>
  
        <Jumbotron fluid className="mb-0">
          <Container fluid>
            <Row>
              <Col md={7} lg={9}>
                <Badge href="#" color="primary rounded-pill first">Portfólio</Badge>
                <h1 className="display-4">Transforme idéias <br/>em Experiências.</h1>
                <p className='lead'>Profissional Designer UI e Desenvolvedor <br/> Front-end  de Lojas Digitais e aplicações responsivas.</p>
              </Col>
              <Col md={3} className="d-none flex-column justify-content-center"  >
                <strong className="h4">02</strong>
                <h4 className="h6 fw-600">Projetos Favoritos </h4>
                <a href="https://www.poupatempo.sp.gov.br/" target="_blank">Novo Portal PoupaTempo </a> 
                <a href="https://charliekirk.com/" target="_blank">Charlie kirk</a>
              </Col>
              <Col md={5} lg={3} className="d-md-flex flex-column   justify-content-center">
                <strong className="h4">2021</strong>
                <h4 className="h6 fw-600">Por, Vinicius Araujo</h4>
                <a className="d-none d-md-block" href="https://www.linkedin.com/in/vinicius-araujo-1418649b/" target="_blank">FrontEnd Dev. </a> 
                {/* <a href="https://charliekirk.com/" target="_blank">Charlie kirk</a> */}
              </Col>
            </Row> 
          </Container>
        </Jumbotron>
  
   
      </div>
    );
  } 