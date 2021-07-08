import {
    Navbar,
    Nav,  
    Row,
    Container,
    Col,
   
    }from 'react-bootstrap'; 


  function Header(){
    return   <div>  
 


                {/* HEADER */}
                <Container>
                  <Row>
                    <Col>
                      <Navbar bg="transparent" expand="lg" className=" p-0 pt-2 pb-2">
                        <Navbar.Brand href="#home">
                           
                              <img
                              className="img-fluid"
                              src="/logo.png" 
                              alt="First slide"
                              />

                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 p-0" />
                        <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="ml-auto">
                            <Nav.Link className="text-primary" href="#benefits">Vantagens </Nav.Link>
                            <Nav.Link className="text-primary" href="#portfolio">Portfólio</Nav.Link>
                            <Nav.Link className="text-primary" href="#experiences">Habilidades</Nav.Link> 
                            <Nav.Link className="btn btn-danger text-white rounded-pill p-2 shadow-sm" target="_blank" href="https://wa.me/+5512983171532?text=">Fale Comigo &nbsp; <i className="fab text-sucess fa-whatsapp"></i></Nav.Link>
                            
                            <Nav.Link className=" h4 text-primary mt-2" target="_blank" href="https://github.com/vadevlife">  <i className="fab fa-github"></i></Nav.Link>

                          </Nav>
                        </Navbar.Collapse>
                      </Navbar>
                    </Col>
                  </Row>
                </Container>
                {/* END: HEADER */}
            </div>
  }

export default Header
 