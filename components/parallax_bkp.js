import {
    Navbar,
    Nav, 
    Carousel,
    Row,
    Container,
    Col,
    Card,
    Button,
    ListGroup
    }from 'react-bootstrap';
  
 
  function Parallax(){
    return   <div>
            <section className="mt-5">
                <div className="parallax w-100">
                <Container className="mt-3 mb-0 pt-5 pb-5">
                    <Row className="justify-content-start">
                        <Col className="col-12 col-md-5 col-lg-8 pt-3 pb-3  text-white">
                    
                            <h2  className="h1 mb-3">


                            E-commerce: o setor que<strong> cresceu 75% em meio à pandemia</strong>
                                
                            </h2>
                            <p className="mt-4 mb-4 text-white">
                            Designer e Desenvolvedor Front-End de Lojas Virtuais e aplicações responsivas.
                            </p>
                            <div className="buttons d-flex">
                                <Button className="rounded-pill mr-2" variant="danger">Portfólio</Button>{' '}
                                <Button className="rounded-pill" variant="transparent border border-white text-white">Contato</Button>{' '}
                            </div>
                        </Col>

                    </Row>
                </Container>         
                </div>
                <div className="icons_skills bg-primary-m">
                    <Container className="pt-5 pb-5">
                        <Row>
                            <Col className="pt-4 pb-4 d-flex flex-wrap justify-content-between">
                                <img
                                    className="img-fluid" //icon _ html
                                    src="/html_5.png"
                                    alt="icon_html5"
                                /> 
                                <img
                                    className="img-fluid" //icon _ html
                                    src="/css_3.png"
                                    alt="icon_css3"
                                /> 
                                <img
                                    className="img-fluid" //icon _ html
                                    src="/js.png"
                                    alt="icon_js"
                                /> 
                                <img
                                    className="img-fluid" //icon _ html
                                    src="/git.png"
                                    alt="icon_git"
                                /> 
                                <img
                                    className="img-fluid" //icon _ html
                                    src="/npm.png"
                                    alt="icon_npm"
                                /> 
                                <img
                                    className="img-fluid" //icon _ html
                                    src="/react.png"
                                    alt="icon_react"
                                /> 
                                <img
                                    className="img-fluid" //icon _ html
                                    src="/wordpress.png"
                                    alt="icon_wordpress"
                                /> 
                                <img
                                    className="img-fluid" //icon _ html
                                    src="/figma.png"
                                    alt="icon_figma"
                                /> 
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
  }

export default Parallax
 