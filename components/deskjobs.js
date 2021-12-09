
import React from 'React'
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
 
const portfolio=[{
    key:'1',
    nome:'Poupatempo',
    logo:'/poupatempo.png',
    color:'light',
    bg:'url("/poupatempo.png',
    text:'Desenvolvedor Web de serviços do Portal Detran.', 
    url:'http://www.detran.sp.gov.br/wps/portal/portaldetran/cidadao/servicos/servicosOnline',
},{
    key:'2',
    nome:'Portal Detran SP',
    logo:'/detran.png', 
    bg:'url("/detran.png',  
    color:'light',
    text:'Desenvolvedor WordPress PersonalHouse / Colonial Village ||' ,
    url:'https://colonialvillage.com.br/', 
}]


 
export default function portfoliodesktop(){
   return(
       <React.Fragment>
           
           <Row className='p-5'>
                    
                    <Col sm={6} lg={4} className="p-0">
                        
                        <Card style={{backgroundImage:'url("/enike.png'}}> 
                            <CardBody>
                                <h4 className="text-white">Nike Tema E-commerce</h4>
                                <p className="text-light lead">Atuei no Design UI e Prototipação.</p> 
                            </CardBody> 
                             
                        </Card>     
                        
                    </Col>

                    <Col md={6} lg={4}>
                        <Row>
                            <div className="col-md-12 col-lg-12 p-0" key={portfolio.key}>  
                                    <Card className="card-centr" style={{backgroundImage:'url("/poupatempo.png'}}> 
                                    <CardBody>
                                        <h4 className="text-white">Portal PoupaTempo SP</h4>
                                        <p className="text-light lead">Atuei no Design UI e Prototipação.</p> 
                                    </CardBody> 
                                    </Card> 
                                </div>
                                <div className="col-md-12 col-lg-12 p-0" key={portfolio.key}>  
                                    <Card className="card-centr" style={{backgroundImage:'url("/detran.png'}}> 
                                    <CardBody>
                                        <h4 className="text-white">Portal Detran SP</h4>
                                        <p className="text-light lead">Atuei no Design UI e Prototipação.</p> 
                                    </CardBody> 
                                    </Card> 
                                </div>
                        </Row>
                        
                    </Col>

                   

                    <Col md={4} className="p-0 d-sm-none d-lg-block">
                        <Card style={{backgroundImage:'url("/charliekirk.png'}}> 
                            <CardBody>
                                <h4 className="text-white">Charlie Kirk</h4>
                                <p className="text-light lead">Atuei no Design UI e Prototipação.</p> 
                            </CardBody>  
                             
                        </Card>     
                    </Col>
                    
                   
                </Row>
       </React.Fragment>
   )
}
