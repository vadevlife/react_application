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
          <Row>
            <Col>
              <Image
                  src="/logo.png"
                  alt="Picture of the author"
                  width={80}
                  height={13}
              />  
              <p className="fw-bolde mt-3">
                Conheça vantagens de se obter uma aplicação de<br></br> auto desempenho para seu negócio.
              </p>
            </Col>
            <Col>
              <div className="d-flex justify-content-end">
                <ListGroup className="border border-0" horizontal>
                  <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 "><a className="text-muted" href="#benefits">Vantagens </a></ListGroup.Item>
                  <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 "><a className="text-muted" href="#portfolio">Portfólio</a></ListGroup.Item>
                  <ListGroup.Item  className="text-muted border border-0 pt-1 pl-0 "><a className="text-muted" href="#experiences">Habilidades</a></ListGroup.Item>
                </ListGroup>
              </div>
              <div className="d-flex justify-content-end">
                  <ListGroup className="social-media mt-xs-3 mb-4" horizontal>
                  {/* <ListGroup.Item className="text-secundary-main border border-0 pl-0"><i class="fab fa-facebook-f"></i></ListGroup.Item> */}
                  {/* <ListGroup.Item className="text-secundary-main border border-0 pl-0"><i class="fab fa-behance"></i></ListGroup.Item> */}
                  <ListGroup.Item className="text-secundary-main border border-0 pl-0"><a className="text-danger " href="https://github.com/vadevlife" target="_blank"><i className="fab fa-github"></i></a></ListGroup.Item>
                  <ListGroup.Item className="text-secundary-main border border-0 pl-0"><a className="text-danger " href="https://www.linkedin.com/in/vinicius-araujo-1418649b/" target="_blank"><i className="fab fa-linkedin-in"></i></a></ListGroup.Item>
                </ListGroup>  
              </div> 
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

    <div>

    </div>
  </div>
  }

export default Footer
 