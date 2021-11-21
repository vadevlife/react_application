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

export default function NavBar() {  

    const [isOpen, setIsOpen] = useState(false); 
    const toggle = () => setIsOpen(!isOpen);
  
    const navitens = [{title:'Experiências'},{title:'Portfólio'},{title:'Lembrete'}]
  
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
  
                          <NavItem>
                            <NavLink >Anchor</NavLink> 
                          </NavItem> 

                          <a href="https://wa.me/+5511910451115?text=" class="text-white"><i class="fab fa-whatsapp" style="font-size: 25px;"></i></a>
  
                          <Button color="primary" className="rounded-pill">Fale Comigo</Button>{' '}
  
                      </Nav>
  
                    </Collapse>
              </Navbar>
  
          </Container>
   
   
      </div>
    );
  } 