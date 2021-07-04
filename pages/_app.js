// import App from 'next/app'
import '../styles/app.css';  
// import Router from "next/router";
// import withGA from "next-ga";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
  
  
export default MyApp;
 
<script async src="https://www.googletagmanager.com/gtag/js?id=G-S53TZ2FD4T"></script>
 
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-S53TZ2FD4T');
 