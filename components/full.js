import React from 'react'
import { 
    Row,
    Col,
    Card,
    CardBody,
    
 
   } from 'reactstrap'; 
 
 

export default function full() {
  return(
        <>
         <Row className='p-5'>
                    
                    <Col sm={6} lg={4} className="p-0">
                        
                        <Card style={{backgroundImage:'url("/enike.png'}}> 
                            <CardBody>
                                <h4 className="text-white">Loja Nike Shoes</h4>
                                <p className="text-light lead">Aplicação para e-commerce</p> 
                              
                            </CardBody>  
                            <div className="overlay">
                                <div className="text-content p-4">
                                    {/* <div className="mb-3 ">Projeto</div> */}
                                    <h4 className="text-white">Tema para E-commerce</h4>
                                    <p className="text-light">Objetivo deste projeto é mostrar ao logista as possibilidades de design e recursos para sua lojas online.</p> 
                                    <span>Html5, Css3, Javascript, Node.js, automatizadores de terefas.</span>
                                    <div className="d-flex mt-3 justify-content-between">
                                        <a class="btn btn-primary rounded-pill d-flex align-items-center" target="_blank" href="https://vadevlife.github.io/niketheme/"><i class="fas fa-desktop mr-2"> </i>Ver Demo</a>  
                                        {/* <a class="btn btn-primary rounded-pill d-flex align-items-center" target="_blank" href="#">Saiba Mais<i class="fas fa-angle-right mr-2"></i> </a>   */}
                                    </div>
                                </div>       
                            </div> 
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
                                    <div className="overlay">
                                        <div className="text-content p-4">
                                            {/* <div className="mb-3 ">Projeto</div> */}
                                            <h4 className="text-white">Portal de serviços PoupaTempo</h4>
                                            <p className="text-light ">Portal desenvolvido para auxiliar o cidadão na retirada de documentos pessoais.</p> 
                                            <span>Html5, Css3, Javascript, Node.js, automatizadores de terefas.</span>
                                            <div className="d-flex mt-3 justify-content-between">
                                                <a class="btn btn-primary rounded-pill d-flex align-items-center" target="_blank" href="https://www.poupatempo.sp.gov.br/"><i class="fas fa-desktop mr-2"> </i>Ver Site</a>  
                                                {/* <a class="btn btn-primary rounded-pill d-flex align-items-center" target="_blank" href=" ">Saiba Mais<i class="fas fa-angle-right mr-2"></i> </a>   */}
                                            </div>
                                        </div>       
                                    </div> 
                                        
                                    </Card> 
                                </div>
                                <div className="col-md-12 col-lg-12 p-0" key={portfolio.key}>  
                                    <Card className="card-centr" style={{backgroundImage:'url("/detran.png'}}> 
                                        <CardBody>
                                            <h4 className="text-white">Portal Detran SP</h4>
                                            <p className="text-light lead">Atuei no Design UI e Prototipação.</p> 
                                        </CardBody>
                                        <div className="overlay">
                                        <div className="text-content p-4">
                                            {/* <div className="mb-3 ">Projeto</div> */}
                                            <h4 className="text-white">Portal Detran</h4>
                                            <p className="text-light ">O DETRAN é o órgão responsável por realizar, fiscalizar e controlar o processo de formação de novos condutores. </p> 
                                            <span>Html5, Css3, Javascript, Node.js, automatizadores de terefas.</span>
                                            <div className="d-flex mt-3 justify-content-between">
                                                <a class="btn btn-primary rounded-pill d-flex align-items-center" target="_blank" href="https://www.poupatempo.sp.gov.br/"><i class="fas fa-desktop mr-2"> </i>Ver Site</a>  
                                                {/* <a class="btn btn-primary rounded-pill d-flex align-items-center" target="_blank" href=" ">Saiba Mais<i class="fas fa-angle-right mr-2"></i> </a>   */}
                                            </div>
                                        </div>       
                                    </div> 
                                     
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
        </>
  )
    
}