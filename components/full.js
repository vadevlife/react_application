import React from 'react'
import { 
    Row,
    Col,
    Card,
    CardBody, 
   } from 'reactstrap'; 

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

 
 

export default function full() {
  return(
    <Tabs>
    <TabList>
      <Tab>Web</Tab>
      <Tab>Design</Tab>
      <Tab>Outros</Tab>
    </TabList>

    <TabPanel>
    <Row className='p-5'>
                    
                    <Col sm={6} lg={4} className="p-0">
                        
                        <Card style={{backgroundImage:'url("/enike.png'}}> 
                            <CardBody>
                                <h4 className="text-white">Loja Nike Shoes</h4>
                                <p className="text-light lead">Aplicação E-commerce</p> 
                              
                            </CardBody>  
                            <div className="overlay">
                                <div className="text-content p-4">
                                    <h4 className="text-white">Tema para E-commerce</h4>
                                    <p className="text-light">Objetivo deste projeto é mostrar ao logista as possibilidades de design e recursos para sua lojas online.</p> 
                                    <span>Html5, Css3, Javascript, Node.js, automatizadores de terefas.</span>
                                    <div className="d-flex mt-3 justify-content-between">
                                        <a class="btn btn-primary rounded-pill d-flex align-items-center" target="_blank" href="https://vadevlife.github.io/niketheme/"><i class="fas fa-desktop mr-2"> </i>Ver Demo</a>  
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
                                        <p className="text-light lead">Web Site Responsivo</p> 
                                    </CardBody> 
                                    <div className="overlay">
                                        <div className="text-content p-4">
                                            <h4 className="text-white">Portal de serviços PoupaTempo</h4>
                                            <p className="text-light ">Portal desenvolvido para auxiliar o cidadão na retirada de documentos pessoais.</p> 
                                            <span>Html5, Css3, Javascript, Node.js, automatizadores de terefas.</span>
                                            <div className="d-flex mt-3 justify-content-between">
                                                <a class="btn btn-primary rounded-pill d-flex align-items-center" target="_blank" href="https://www.poupatempo.sp.gov.br/"><i class="fas fa-desktop mr-2"> </i>Ver Site</a>  
                                            </div>
                                        </div>       
                                    </div> 
                                        
                                    </Card> 
                                </div>
                                <div className="col-md-12 col-lg-12 p-0" key={portfolio.key}>  
                                    <Card className="card-centr" style={{backgroundImage:'url("/detran.png'}}> 
                                        <CardBody>
                                            <h4 className="text-white">Portal Detran SP</h4>
                                            <p className="text-light lead">Web Site Responsivo</p> 

                                        </CardBody>
                                        <div className="overlay">
                                        <div className="text-content p-4">
                                            {/* <div className="mb-3 ">Projeto</div> */}
                                            <h4 className="text-white">Portal Detran</h4>
                                            <p className="text-light ">O DETRAN é o órgão responsável por realizar, fiscalizar e controlar o processo de formação de novos condutores. </p> 
                                            <span>Html5, Css3, Javascript, Node.js, automatizadores de terefas.</span>
                                            <div className="d-flex mt-3 justify-content-between">
                                                <a class="btn btn-primary rounded-pill d-flex align-items-center" target="_blank" href="https://www.detran.sp.gov.br/"><i class="fas fa-desktop mr-2"> </i>Ver Site</a>  
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
                                <p className="text-light lead">Web Site responsivo Wordpress</p> 
                            </CardBody>  
                            <div className="overlay">
                                <div className="text-content p-4">
                                    {/* <div className="mb-3 ">Projeto</div> */}
                                    <h4 className="text-white">Kirk de Noticias</h4>
                                    <p className="text-light">Web Site Wordpress para publicação de noticias de Charlie Kirk ativista conservador americano.</p> 
                                    <span>WordPress, Html5, Css3, Jquery.</span>
                                    <div className="d-flex mt-3 justify-content-between">
                                        <a class="btn btn-primary rounded-pill d-flex align-items-center" target="_blank" href="https://charliekirk.com/"><i class="fas fa-desktop mr-2"> </i>Ver Demo</a>  
                                        {/* <a class="btn btn-primary rounded-pill d-flex align-items-center" target="_blank" href="#">Saiba Mais<i class="fas fa-angle-right mr-2"></i> </a>   */}
                                    </div>
                                </div>       
                            </div> 
                             
                        </Card>     
                    </Col>
                    
                    
                    </Row>
    </TabPanel>

    <TabPanel>
    <Row className='p-5'>
                    
                    <Col sm={6} lg={4} className="p-0">
                        
                        <Card style={{backgroundImage:'url("/b2w.png'}}> 
                            <CardBody>
                                <h4 className="text-white">B2W Digital</h4>
                                <p className="text-light lead">Banner Publicitário</p> 
                              
                            </CardBody>  
                            <div className="overlay">
                                        <div className="text-content p-4">
                                            {/* <div className="mb-3 ">Projeto</div> */}
                                            <h4 className="text-white">Banner B2w</h4>
                                            <p className="text-light ">Anúncio da parceria entre B2W e Fastcommerce.</p> 
                                            <span>Adobe Photoshop</span>
                                            <div className="d-flex mt-3 justify-content-between">
                                                <a class="btn btn-primary rounded-pill d-flex align-items-center" target="_blank" href="#"><i class="fas fa-image mr-2"></i>Ver Material</a>  
                                                {/* <a class="btn btn-primary rounded-pill d-flex align-items-center" target="_blank" href=" ">Saiba Mais<i class="fas fa-angle-right mr-2"></i> </a>   */}
                                            </div>
                                        </div>       
                                    </div> 
                        </Card>     
                        
                    </Col>
                    
                    <Col md={6} lg={4}>
                        <Row>
                            <div className="col-md-12 col-lg-12 p-0" key={portfolio.key}>  
                                    <Card className="card-centr" style={{backgroundImage:'url("/waydesign.png'}}> 
                                    <CardBody>
                                        <h4 className="text-white">Whey Go!</h4>
                                        <p className="text-light lead">Banner E-commerce.</p> 
                                    </CardBody> 
                                    <div className="overlay">
                                        <div className="text-content p-4">
                                            {/* <div className="mb-3 ">Projeto</div> */}
                                            <h4 className="text-white">Anúncio Whey Protein E-commerce</h4>
                                            <p className="text-light ">Material publicitário para Redesign da Loja online Modo Saúde.</p> 
                                            <span>Adobe Photoshop.</span>
                                            <div className="d-flex mt-3 justify-content-between">
                                            <a class="btn btn-primary rounded-pill d-flex align-items-center" target="_blank" href="#"><i class="fas fa-image mr-2"></i>Ver Material</a>  
                                                 
                                                 
                                                {/* <a class="btn btn-primary rounded-pill d-flex align-items-center" target="_blank" href=" ">Saiba Mais<i class="fas fa-angle-right mr-2"></i> </a>   */}
                                            </div>
                                        </div>       
                                    </div> 
                                        
                                    </Card> 
                                </div>
                                <div className="col-md-12 col-lg-12 p-0" key={portfolio.key}>  
                                    <Card className="card-centr" style={{backgroundImage:'url("/party.png'}}> 
                                        <CardBody>
                                            <h4 className="text-white">House Party</h4>
                                            <p className="text-light lead">Design Social Media</p> 
                                        </CardBody>
                                        <div className="overlay">
                                        <div className="text-content p-4">
                                            {/* <div className="mb-3 ">Projeto</div> */}
                                            <h4 className="text-white">Anúncio Social Media</h4>
                                            <p className="text-light d-block text-left">Anúncio de evento para mídias sociais.</p>  
                                            <span>Adobe Photoshop.</span>
                                            <div className="d-flex mt-3 justify-content-between">
                                                <a class="btn btn-primary rounded-pill d-flex align-items-center" target="_blank" href="#"><i class="fas fa-image mr-2"></i>Ver Material</a>  
                                              
                                                 {/* <a class="btn btn-primary rounded-pill d-flex align-items-center" target="_blank" href=" ">Saiba Mais<i class="fas fa-angle-right mr-2"></i> </a>   */}
                                            </div>
                                        </div>       
                                    </div> 
                                     
                                    </Card> 
                                </div>
                        </Row>
                        
                    </Col>
                    
                    
                    
                    <Col md={4} className="p-0 d-sm-none d-lg-block">
                        <Card style={{backgroundImage:'url("/dpoupa.png'}}> 
                            <CardBody>
                                <h4 className="text-white">Design nova UI PoupaTempo</h4>
                                <p className="text-light lead">Design UI</p> 
                            </CardBody>  
                            <div className="overlay">
                                <div className="text-content p-4">
                                    {/* <div className="mb-3 ">Projeto</div> */}
                                    <h4 className="text-white">Protótipo para nova UI do Portal Poupatempo</h4>
                                    <p className="text-light">Redesign para Portal PoupaTempo.</p> 
                                    <span>Adobe XD.</span>
                                    <div className="d-flex mt-3 justify-content-between">
                                    <a class="btn btn-primary rounded-pill d-flex align-items-center" target="_blank" href="#"><i class="fas fa-image mr-2"></i>Ver Material</a>  

                                    </div>
                                </div>       
                            </div> 
                             
                        </Card>     
                    </Col>
                    
                    
                    </Row>      
    </TabPanel>

    <TabPanel>
    <Row className='p-5'>
                    
                    <Col sm={6} lg={4} className="p-0">
                        
                        <Card style={{backgroundImage:'url("/modosaude.png'}}> 
                            <CardBody>
                                <h4 className="text-white">Loja Modo Saúde</h4>
                                <p className="text-light lead">E-commerce Aplicação.</p> 
                              
                            </CardBody>  
                            <div className="overlay">
                                <div className="text-content p-4">
                                    {/* <div className="mb-3 ">Projeto</div> */}
                                    <h4 className="text-white">Loja Modo Saude</h4>
                                    <p className="text-light">Aplicação responsiva para Modo Saude Loja de suplementos alimentares.</p> 
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
                                    <Card className="card-centr" style={{backgroundImage:'url("/farma.png'}}> 
                                    <CardBody>
                                        <h4 className="text-white">Drogaria Cristal</h4>
                                        <p className="text-light lead">Design UI para <br/> aplicação E-commerce.</p> 
                                    </CardBody> 
                                    <div className="overlay">
                                        <div className="text-content p-4">
                                            {/* <div className="mb-3 ">Projeto</div> */}
                                            <h4 className="text-white">Loja Drogaria Cristal</h4>
                                            <p className="text-light ">Aplicação responsiva para Modo Saude Loja de suplementos alimentares.</p> 
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
                                    <Card className="card-centr" style={{backgroundImage:'url("/belacasa.png'}}> 
                                        <CardBody>
                                            <h4 className="text-white">Bela Casa - Home Store</h4>
                                            <p className="text-light lead">Design UI e desenvolvimento <br/> aplicação E-commerce.</p> 
                                        </CardBody>
                                        <div className="overlay">
                                        <div className="text-content p-4">
                                            {/* <div className="mb-3 ">Projeto</div> */}
                                            <h4 className="text-white">Loja Bella Casa</h4>
                                            <p className="text-light ">Aplicação responsiva para Modo Saude Loja de suplementos alimentares.</p> 
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
                        <Card style={{backgroundImage:'url("/colonialvillage.png'}}> 
                            <CardBody>
                                <h4 className="text-white">Personal House</h4>
                                <p className="text-light lead">Landing page <br/> WordPress responsivo.</p> 
                            </CardBody>  
                            <div className="overlay">
                                <div className="text-content p-4">
                                    {/* <div className="mb-3 ">Projeto</div> */}
                                    <h4 className="text-white">Landing-page Colonial Village II</h4>
                                    <p className="text-light">Web Site Wordpress para publicação de noticias de Charlie Kirk ativista conservador americano.</p> 
                                    <span>WordPress, Html5, Css3, Jquery.</span>
                                    <div className="d-flex mt-3 justify-content-between">
                                        <a class="btn btn-primary rounded-pill d-flex align-items-center" target="_blank" href="https://colonialvillage.com.br/"><i class="fas fa-desktop mr-2"> </i>Ver Site</a>  
                                        {/* <a class="btn btn-primary rounded-pill d-flex align-items-center" target="_blank" href="#">Saiba Mais<i class="fas fa-angle-right mr-2"></i> </a>   */}
                                    </div>
                                </div>       
                            </div> 
                             
                        </Card>     
                    </Col>
                    
                    
                    </Row>      
    </TabPanel>
  </Tabs>
  )
    
}