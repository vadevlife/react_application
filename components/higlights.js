import React from 'react' 
import {
  Container,
  Row,
  Col,
  Media

}from 'reactstrap'

export default function highlights() {
  return(
        <React.Fragment> 
           <section className='tecnologies section mt-5 mb-5 pt-3 pb-3'>
           <Container>
             <Row>
               <Col md={1} className="d-flex align-items-center pb-2">
                 <span className="text-black "> Tecnologias</span>
               </Col>
               <Col md={11} className="d-flex justify-content-around">
                <i class="text-muted fab fa-html5 "></i>
                <i class="text-muted fab fa-css3-alt"></i>
                <i class="text-muted fab fa-js"></i>
                <i class="text-muted fab fa-react "></i>
                <i class="text-muted fab fa-npm "></i>
                <i class="text-muted fab fa-git "></i>
                {/* <Media object className="img-fluid p-5" src="/tecnologias.png" alt="Vini - Development" />  */}
               </Col>
             </Row>
           </Container>
           </section>
        </React.Fragment>

  )
    
}