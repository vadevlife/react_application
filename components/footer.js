import { 
    Media, 
    Container, 
    Row,
    Col
  } from 'reactstrap';
  
export default function Footer(){
    return(
         <Container>
             <hr/>
             <Row >
                 <Col>
                 <Media object className="" src="/logo_vini_footer.png" width={130} height={40}  alt="Vini - Development" />

                 </Col>
                 <Col>
                 <a > Politica de Privacidade</a>
                 </Col>
                 <Col md={1} className="d-flex justify-content-between">
                 <i className="fab fa-facebook-f text-primary"></i>
                 <i className="fab fa-github-alt text-primary"></i>
                 <i className="fab fa-linkedin-in text-primary"></i>
                 </Col>
             </Row>
         </Container>
    )
}