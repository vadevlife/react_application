import React, { useState } from 'react';     
import { Anchor } from 'antd'; 
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand, 
  Nav,
  NavItem,
  NavLink,  
  Media,
  Button, 
  Container,  
} from 'reactstrap'; 
const { Link } = Anchor;

export default function NavBar() {  

    const [isOpen, setIsOpen] = useState(false); 
    const toggle = () => setIsOpen(!isOpen);
  
    const navitens = [{
      title:'Experiências',
      anchor:'#experiencias'
    },
    {
      title:'Softwares Skills',
      anchor:'#skills'},
     
    {
      title:'Portfólio',
      anchor:'#portfolio'
    }]
 
    return (
      <div> 
        
            <Container fluid> 
              <Navbar light expand="lg" className="p-0"> 
                  <NavbarBrand href="/"> 
                      <Media object className="logo" src="/vini-logo.png" alt="Vini - Development" />
                  </NavbarBrand> 
                  <NavbarToggler className="border-0" onClick={toggle} />
                    <Collapse  isOpen={isOpen} navbar> 
                      <Nav className="ml-auto " navbar>

                        <Anchor> 
                          {navitens.map((navitens,index) => ( 
                            <NavItem key={index}> 
                                <Link href={navitens.anchor}  title={navitens.title} />
                            </NavItem>  
                          ))} 
                        </Anchor>
                        {/* <a className="btn btn-primary rounded-pill d-flex align-items-center" target="_blank" href="https://wa.me/+5512981255741?text=" > Fale Comigo  <i className="fab fa-whatsapp ml-2"></i></a> */}
                        <a className="btn btn-primary rounded-pill d-flex align-items-center" target="_blank" href="https://www.linkedin.com/in/vinicius-araujo-1418649b/"> Conecte-se <i className="fab fa-linkedin-in ml-2 h6" target="_blank"></i></a> 
                          
                          
                        <div className="social-group">
                          <a href="https://github.com/vadevlife?tab=repositories" target="_blank"><i className="fab fa-github-alt h6"></i></a>
                          {/* <a href="https://www.linkedin.com/in/vinicius-araujo-1418649b/"><i className="fab fa-linkedin-in" target="_blank"></i></a>  */}
                        </div>
                      
                           
                      </Nav> 
                    </Collapse>
              </Navbar>
  
          </Container>
   
   
      </div>
    );
  } 