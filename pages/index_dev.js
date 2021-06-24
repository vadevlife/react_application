import {
  Navbar,
  Nav, 
  Carousel,
  Row,
  Container,
  Col,
  Card,
  Button, 
  }from 'react-bootstrap';
  import '@fortawesome/fontawesome-free/css/all.css'; 
  import 'bootstrap/dist/css/bootstrap.css'; 
  // import from 'react-bootstrap';
  
  import Header from '../components/header';
  import Parallax from '../components/parallax';
  import Skills from '../components/skills';
  import Portfolio from '../components/portfolio';
  import Download from '../components/download';
  import Fullbanner from '../components/fullbanner';
  import Highligts from '../components/highligts';
  import Benefits from '../components/benefits';
  import Footer from '../components/footer';
  

 

  function Home(){
    return   <div>
     
      {/* header */}
      <Header></Header>
      
      {/* banner_top */}
      <Fullbanner></Fullbanner>         
   
      {/* Highligts */}
      <Highligts></Highligts>

      {/* vantagens */}
      <Benefits></Benefits>

      {/* banner_parallax */}
      <Parallax></Parallax>
     
      {/* Skills */}
      <Skills></Skills>
        
      {/* work */}
      <Portfolio></Portfolio>

      {/* Download */}
      <Download></Download>

      {/* footer _ Rodape */}
      <Footer></Footer>
    
 </div>
  }

export default Home