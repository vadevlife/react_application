// import App from 'next/app'
import '../styles/app.css';  
import Router from "next/router";
import withGA from "next-ga";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
  
  
export default withGA("S53TZ2FD4T", Router)(MyApp);

