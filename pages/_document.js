import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../lib/gtag'


export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
         <title>Portfólio - Development</title>   
         <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
         <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;800&display=swap" rel="stylesheet"></link>
      
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-S53TZ2FD4T`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-S53TZ2FD4T', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
