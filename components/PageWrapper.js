import Head from 'next/head';

import Nav from './Nav';

export default ({ title = '🙃🐢', children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <link href="https://fonts.googleapis.com/css?family=Signika" rel="stylesheet" />
    </Head>
    <Nav />
    {children}
    <style jsx global>
      {`
        html {
          box-sizing: border-box;
          min-height: 100%;
          border: mediumseagreen 5px solid;
          background: #f5f5f5;
        }

        *::selection {
          background: lightpink;
        }

        h1 {
          font-size: 24px;
          font-family: 'Signika', sans-serif;          
        }
    `}
    </style>
  </div>
);
