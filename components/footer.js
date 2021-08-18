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
 
         <Container>
             <hr/>
             <Row>

                 <Col>
                    <Media object className="" src="/logo_vini_footer.png" width={130} height={40}  alt="Vini - Development" />
                 </Col>

                 <Col>
                    <a href="#" className="text-muted"> Politica de Privacidade</a>
                 </Col>

                 <Col md={2} className="d-flex justify-content-between">
                        
                        <SocialMedia/>

                 </Col>

             </Row>
         </Container>
    )
}
}
export default Footer