import React, { useState } from 'react'; 
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Badge,
  Nav,
  NavItem,
  NavLink,  
  Media,
  Button,
  Jumbotron, 
  Container,
  Card,  
  CardBody,
  CardTitle, 
  CardText,
  Row,
  Col
} from 'reactstrap';

import Footer from '../components/footer';


const navitens = [{title:'Experiências'},{title:'Portfólio'},{title:'Lembrete'}]


export default function NavBar() {  

  const [isOpen, setIsOpen] = useState(false); 
  const toggle = () => setIsOpen(!isOpen);
   
  return (
    <div>
          <Container fluid>

            <Navbar light expand="md">

            <NavbarBrand href="/"> 
                <Media object className="logo" src="/vini-logo.png" alt="Vini - Development" />
            </NavbarBrand>

          <NavbarToggler className="border-0" onClick={toggle} />
            <Collapse  isOpen={isOpen} navbar> 
              <Nav className="ml-auto" navbar>
                
                {navitens.map((navitens,index) => ( 
                  <NavItem key={index}>
                    <NavLink >{navitens.title}</NavLink>
                  </NavItem> 
                ))}  

                <Button color="primary" className="rounded-pill">Fale Comigo</Button>{' '}

              </Nav>

            </Collapse>
          </Navbar>
        </Container >

        <Jumbotron fluid className="mb-0">
          <Container fluid>
            <Row>
              <Col md={9}>
                <Badge href="#" color="primary ">PERFIL 2021</Badge>
                <h1 className="display-4">Minha UI<br/> e Aplicações</h1>
              </Col>
              <Col md={3} className="d-flex flex-column   justify-content-center">
                <strong className="h4">02</strong>
                <h4 className="h6 fw-600">Projetos Favoritos </h4>
                <a href="#">Novo Portal PoupaTempo </a> 
                <a href="">Charlie kirk</a>
              </Col>
            </Row> 
          </Container>
        </Jumbotron>

        
    
      

        <div className='section mt-5 mb-5'>
          <Container fluid>
              <Row>
                <Col md={9}>
                  <Badge href="#" color="primary ">Experiências</Badge>
                  <h2 className="display-4"> Profissionais e builds Legais</h2>
                </Col>
                <Col md={3} className="d-flex flex-column   justify-content-center">
                  
                </Col>
              </Row> 
          </Container>
        </div>   


        <div className=" ">       
          <Container fluid>
        
        
          <div className="d-flex flex-wrap justify-content-between">       

            <Card className="col-md-3 bg-primary" > 
                <CardBody>
                  <Badge href="#" color="light" className="purple rounded-pill">PRODESP</Badge> 
                  <CardTitle tag="h5">Desenvolvedor<br/> Front-End </CardTitle>
                  <CardText color="muted"> Criação, prototipação e desenvolvimento de componentes responsivos, dia-a-dia com ferramentas client-side.</CardText>
                  <p>2019  / 2020  - Full-Time</p>
                  <a href="#">Projetos </a> 
                <a href="">Criações</a>
                </CardBody> 
            </Card>  
            <Card className="col-md-3" > 
                <CardBody>
                  <Badge href="#" color="primary" className="purple rounded-pill">FASTCOMMERCE</Badge> 
                  <CardTitle tag="h5">Integrador de <br/>E-commerce Front-End </CardTitle>
                  <CardText >Integração de novos E-commerces, aplicações modulares focada em desempenho e corvenção nos modelos B2B e Marketplace.</CardText>
                  <p>2016  / 2019  - Full-Time</p>
                </CardBody> 
            </Card>  
            <Card className="col-md-3 " > 
                <CardBody>
                  <Badge href="#" color="warning" className="rounded-pill">HOME BRASIL</Badge> 
                  <CardTitle tag="h5">Desenvolvedor<br/> Front-End </CardTitle>
                  <CardText>Criação e desenvolvimento de componentes responsivos com ferramentas client-side.</CardText>
                  <p>2014  / 2015  - PJ</p>
                </CardBody> 
            </Card>
            <Card className="col-md-3 " > 
                <CardBody>
                  <Badge href="#" color="light" className="purple rounded-pill">PRODESP</Badge> 
                  <CardTitle tag="h5">Desenvolvedor<br/> Front-End </CardTitle>
                  <CardText>Criação e desenvolvimento de componentes responsivos com ferramentas client-side.</CardText>
                  <p>2019  / 2020  - Full-Time</p>
                </CardBody> 
            </Card>     
                  
            </div>   
          </Container>   
        </div>      


        <div className=" ">       
          <Container fluid>
            <div className="d-flex flex-wrap justify-content-between">       


              <Card className="col-md-3" > 
                  <CardBody>
                    <Badge href="#" color="pink" className="rounded-pill">HelloPay</Badge> 
                    <CardTitle tag="h5">Desenvolvedor<br/> Front-End </CardTitle>
                    <CardText >Criação e desenvolvimento de componentes responsivos com ferramentas client-side.</CardText>
                    <p>2021  -  Frella</p>
                  </CardBody> 
              </Card>  

            </div>      
          </Container>
        </div>        

        {/* //Footer */}

        <Footer/>
    </div>
  );
} 