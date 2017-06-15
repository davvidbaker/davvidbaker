/**
 * Contains global styles.
 */
import Head from 'next/head';
import { compose, withHandlers, withReducer } from 'recompose';

import Nav from './Nav';
import colors from '../constants/colors';

// now unnecessary, with nonchanging border color
const enhance = withReducer(
  'borderColor',
  'dispatch',
  (state, action) => colors.border
    // `#${Math.floor(Date.now() / 100000000000 % 1 * 0xffffff).toString(16)}`
);

export default enhance(
  ({ title = '🙃🐢', borderColor, children, dispatch }) => (
    <div id="body-div" style={{ borderColor }}>
      <Head>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Signika"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width" />
        <meta name="theme-color" content={borderColor} />
        <meta name="theme-color" content={borderColor ? borderColor : 'blue'} />
        <meta charset="utf-8" />
      </Head>
      <Nav />
      <button onClick={dispatch}>Click me</button>
      {children}
      <style jsx global>
        {`
        html {
          box-sizing: border-box;
          font-family: sans-serif;
          min-height: 100vh;
        }

        *, *::before, *::after {
          box-sizing: inherit;
        }

        *::selection {
          background: ${colors.border};
        }

        body {
          min-height: 100vh;
          margin: 0;
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

        a:hover {
          text-decoration: underline;
        }

        body > div:first-child {
          width: 100%;
          height: 100%;
        }

        #body-div {
          border: ${colors.border} 5px solid;
          background: #f5f5f5;
          min-height: 100vh;
          padding: 8px;
          position: relative;
        }

        .fade-enter {
          opacity: 0.01;
        }

        .fade-enter.fade-enter-active {
          opacity: 1;
          transition: opacity 200ms ease-in 205ms;
        }

        .fade-leave {
          opacity: 1;
        }

        .fade-leave.fade-leave-active {
          opacity: 0.01;
          transition: opacity 200ms ease-in;
        }

        #additional-info {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .markdown p:first-child {
          margin-top: 0;
        }
    `}
      </style>
    </div>
  )
);
