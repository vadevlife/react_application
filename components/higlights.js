import React from 'react' 
import {
  Container,
  Row,
  Col,  
}from 'reactstrap'

export default function highlights() {
  return(
        <React.Fragment> 
           <section className='tecnologies section pt-5 mb-5 pt-3 pb-3'>
           <Container>
             <Row>
               <Col md={12} lg={1} className="d-flex align-items-center pb-2">
                 <span className="text-black "> Tecnologias</span>
               </Col>
               <Col md={11} className="d-flex justify-content-around flex-wrap">
                <i className="text-muted fab fa-html5"></i>
                <i className="text-muted fab fa-css3-alt"></i>
                <i className="text-muted fab fa-js"></i>
                <i className="text-muted fab fa-react "></i>
                <i className="text-muted fab fa-npm"></i>
                <i className="text-muted fab fa-git"></i>
                <i className="text-muted fab fa-magento"></i>
                {/* <Media object className="img-fluid p-5" src="/tecnologias.png" alt="Vini - Development" />  */}
               </Col>
             </Row>
           </Container>
           </section>
        </React.Fragment>

  )
    
}