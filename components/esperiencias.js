 

 export default function Experiencias(){
    return(
        <div id="experiencias" className='section mt-5 mb-5'>
          <Container >
              <Row>
                <Col md={9}>
                  <span className="title_pathers d-none d-lg-flex">Experiências</span>
                  <Badge href="#" color="primary rounded-pill">Agências e Startups</Badge>
                  <h2 className="display-4">Experiências Profissionais e builds Legais</h2>
                </Col>
                <Col md={3} className="d-flex flex-column justify-content-center">
                  
                </Col>
              </Row> 
              <Row className="p-4 ">
                          
                  {cardContent.map((cardContent)=>( 
                
                    <Card className={cardContent.class}  > 
                        <CardBody>
                          <Badge href="#" color={cardContent.color} className={cardContent.badge}>{cardContent.nome}</Badge> 
                          <CardTitle tag="h5">{cardContent.cargo}</CardTitle>
                          <CardText color="muted">{cardContent.desc}</CardText>
                          <p>{cardContent.periodo}</p> 
                        </CardBody> 
                    </Card>   
                    
                  ))}
                

              </Row>
          </Container>
        </div> 
    )
 }