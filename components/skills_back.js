import {
  Row,
  Container,
  Col,
  Card,
  Button, 
  }from 'react-bootstrap';
  import Image from 'next/image'; 

 
  function Skills(){
    return   <div>
                {/* PORTFÓLIO / HABILIDADES / SKILLS */}
      <section className="skills bg-danger position-relative p-0">
        {/* BANNER */}
          <Container className="container-fluid">
            <Row className="mt-5">
              <h2  className="text-white pt-2 mb-3 position-absolute col-md-6">
                Portfólio e Habilidades com tecnologias que<strong> uso em meu dia-á-dia.</strong>
              </h2>
            </Row>
            
          </Container>
          <img
              className="img-fluid d-block w-100"
              src="/bnn_habilidades.png" 
              alt="First slide"
            />  
        {/* SKILLS */}
        <Container className="pt-5 pb-5">
          <Row>
            <Col className="d-flex flex-wrap justify-content-between align-items-center w-100">

              <i class="fab fa-html5 h1 text-white"></i>
              <i class="fab fa-css3-alt h1 text-white"></i>
              <i class="fab fa-js-square h1 text-white"></i>
              <i class="fab fa-react h1 text-white"></i>
              <i class="fab fa-magento h1 text-white"></i>

            </Col>
          </Row>
        </Container>
      </section>


            </div>
  }

export default Skills
 