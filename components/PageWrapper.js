/**
 * Contains global styles.
 */
import Head from 'next/head';

import Nav from './Nav';
import colors from '../constants/colors';

export default ({ title = '🙃🐢', children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <link href="https://fonts.googleapis.com/css?family=Signika" rel="stylesheet" />
    </Head>
    <Nav />
    {children}
    <style jsx global>{`
        html {
          box-sizing: border-box;
          min-height: 100%;
          border: mediumseagreen 5px solid;
          background: #f5f5f5;
          font-family: sans-serif;
        }

        *, *::before, *::after {
          box-sizing: inherit;
        }

        *::selection {
          background: lightpink;
        }

        h1 {
          font-size: 24px;
          font-family: 'Signika', sans-serif;
        }

        p {
          color: #555;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        a {
          color: ${colors.amazonBlue};
          text-decoration: none;
        }
    `}
    </style>
  </div>
);
