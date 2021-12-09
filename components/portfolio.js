import React from 'react'
import useMediaQuery from '/hooks/useMediaQuery'
import PortfolioMobile from './mob-jobs'
import PortfolioDesktop from './desk-jobs'


import {
   Container,
   Row,
   Col,
   Card,
   CardBody,
   CardText,
   CardTitle,
   Badge,
   List,
   ListInlineItem    
  } from 'reactstrap'; 




export default function Portfolio(){
    const isDesktop = useMediaQuery('(min-width: 960px)');
    
    return(
        <React.Fragment> 
        <div id="portfolio" className='section mt-5 mb-5'>
         
            <Container > 
                <Row className=""> 
                    <Col md={9}>
                        <span className="title_pathers d-none d-lg-flex">Portfólio</span>
                        <Badge href="#" color="primary rounded-pill">Design e Desenvolvimento</Badge>
                        <h2 className="display-4">Projetos que tive o prazer de fazer parte!</h2>
                    </Col>      
                </Row>

                {isDesktop ?  <PortfolioDesktop/>  : <PortfolioMobile/>}
                
                 
            </Container>
        </div>
        </React.Fragment> 

    )
}