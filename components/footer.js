import {
    
    Row,
    Container,
    Col, 
    ListGroup
    }from 'react-bootstrap';
  import Image from 'next/image'; 

 
  function Footer(){
    return   <div> 
                   <footer className="container-fluid ">
        <Container>
        <Row className="align-items-center pt-5 pb-4">

          <Col xs={12} sm={12} md={4} lg={6} className="col-12 text-xs-center">

              <Image
                src="/logo.png"
                alt="Picture of the author"
                width={80}
                height={13}
                />  

            <p className="fw-bolde mt-3">
              <strong>Lorem ipsum dolor</strong> sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            </p>

            {/* icones */}
            <ListGroup className="social-media mt-xs-3 mb-4" horizontal>
              <ListGroup.Item className="text-secundary-main border border-0 pl-0"><i class="fab fa-facebook-f"></i></ListGroup.Item>
              <ListGroup.Item className="text-secundary-main border border-0 pl-0"><i class="fab fa-behance"></i></ListGroup.Item>
              <ListGroup.Item className="text-secundary-main border border-0 pl-0"><i class="fab fa-github"></i></ListGroup.Item>
              <ListGroup.Item className="text-secundary-main border border-0 pl-0"><i class="fab fa-linkedin-in"></i></ListGroup.Item>
            </ListGroup>

          </Col>

          <Col xs={6} sm={6} md={4} lg={3} className="col-6">
          <ListGroup className="border border-0  m-0">
            <h6><strong>Produtos</strong></h6>
            <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 ">Identidade Visual</ListGroup.Item>
            <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 ">SPA's - Single Page App </ListGroup.Item>
            <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 ">Habilidades</ListGroup.Item>
            <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 ">Experiências</ListGroup.Item>
            <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 ">Contato</ListGroup.Item>
          </ListGroup>  
          </Col>

          <Col xs={6} sm={6} md={4} lg={3} className="col-6">
          <ListGroup className="border border-0">
            <h6><strong>Navegue</strong></h6>
            <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 ">Portfólio 2021</ListGroup.Item>
            <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 ">Download do CV</ListGroup.Item>
            <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 ">Habilidades</ListGroup.Item>
            <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 ">Experiências</ListGroup.Item>
            <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 ">Contato</ListGroup.Item>
          </ListGroup>  
          </Col>

        </Row>
        
        <hr>
        </hr>

        <Row>
          <Col>
            <p className="fw-bolde text-center mt-3">
               Direitos reservados 2021 <strong>TypeAs.</strong> 
            </p>
          </Col>
        </Row>
        </Container>
        
      </footer>

            </div>
  }

export default Footer
 