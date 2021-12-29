import React from 'react'
import useMediaQuery from '/hooks/useMediaQuery'
import Full from '../components/full'; 
import Small from '../components/small';  


import {
   Container,
   Row,
   Col, 
   Badge 
  } from 'reactstrap';   


export default function Portfolio(){
    const isDesktop = useMediaQuery('(min-width: 960px)');
    
    return(
        <React.Fragment> 
        <div id="portfolio" className='section pt-5 mb-5'>
         
            <Container > 
                <Row className="mb-5"> 
                    <Col md={9}>
                        <span className="title_pathers d-none d-lg-flex">Portfólio</span>
                        <Badge href="#" color="primary rounded-pill">Design e Desenvolvimento</Badge>
                        <h2 className="display-4">Aplicações fluídas e intuitivas veja recentes</h2>
                    </Col>      
                </Row>

                  
                {isDesktop ? <Full/>  : <Small/>}
                 
            </Container>
        </div>
        </React.Fragment> 

    )
}