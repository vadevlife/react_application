import React, {Components}  from 'react'
import SocialMedia from '../components/social'
import { 
    Badge,
    Media, 
    Container, 
    Row,
    Col
  } from 'reactstrap';

   
class Footer extends React.Component {

     
    render() {
        return (
 
         <Container >
             <hr/>
             <Row>
                 <Col md={4} className="d-none d-md-flex">
                    <Media object className="d-block" src="/logo_vini_footer.png" width={130} height={40}  alt="Vini - Development" />
                 </Col>

                 <Col xs={12} md={4} >
                    <a href="#" className="text-muted text-center d-block"> © 2021 Vinicius Araujo - Portfólio</a>
                 </Col>

                 <Col xs={12} md={4} >
                    
                    {/* SOCIAL MEDIA */}
                    <SocialMedia/>
                 </Col>
             </Row>
         </Container>
    )
}
}
export default Footer