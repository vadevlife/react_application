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
  import Image from 'next/image'; 
  import Highligts from "../components/Highligts";
  import Footer from "../components/Footer"; 
  import Portfolio from "../components/portfolio"; 
  import Parallax from '../components/parallax';
  import Download from '../components/download';
  import Header from '../components/header';
  import Skills from '../components/skills';
  import Fullbanner from '../components/fullbanner';
  import Benefits from '../components/benefits';


 

  function Home(){
    return   <div>
     
      {/* header */}
      <Header></Header>
      
      {/* banner_top */}
      {/* <Fullbanner></Fullbanner>          */}
   
      {/* Highligts */}
      {/* <Highligts></Highligts> */}

      {/* vantagens */}
      {/* <Benefits></Benefits> */}

      {/* banner_parallax */}
      {/* <Parallax></Parallax> */}
     
      {/* Skills */}
      {/* <Skills></Skills> */}
        
      {/* work */}
      {/* <Portfolio></Portfolio> */}

      {/* Download */}
      {/* <Download></Download> */}

      {/* footer _ Rodape */}
      {/* <Footer></Footer> */}
    
 </div>
  }

export default Home