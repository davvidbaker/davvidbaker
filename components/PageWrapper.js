/**
 * Contains global styles.
 */
import Head from 'next/head';
import { compose, withHandlers, withReducer } from 'recompose';
import Nav from '../components/Nav';

// import {colors, fonts} from '../constants/styles';

// now unnecessary, with nonchanging border color
const enhance = withReducer(
  'borderColor',
  'dispatch',
  (state, action) => 'mediumseagreen'
  // `#${Math.floor(Date.now() / 100000000000 % 1 * 0xffffff).toString(16)}`
);

export default enhance(
  ({
    title = '🙃🐢',
    includeTweenMax = false,
    borderColor,
    children,
    dispatch,
  }) =>
    <div id="body-div" style={{ borderColor }}>
      <Head>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Signika|Josefin+Slab:400,400i,700|Cutive+Mono"
          rel="stylesheet"
        />

        {includeTweenMax &&
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js" />}

        <meta name="viewport" content="width=device-width" />
        <meta name="theme-color" content={borderColor} />
        <meta name="theme-color" content={borderColor ? borderColor : 'blue'} />
        <meta charSet="utf-8" />
      </Head>
      {children}
      <style jsx global>
        {`
          :root {
            --color-main: firebrick;
            --color-link: #0066c0;
            --color-border: mediumseagreen;
            --color-highlight: #fbfaa4;
            
            --font-monospace: monospace;
          }
          html {
            box-sizing: border-box;
            font-family: 'Josefin Slab', sans-serif;
            min-height: 100vh;
          }
          *, *::before, *::after {
            box-sizing: inherit;
          }
          *::selection {
            background: var(--color-border);
          }
          body {
            min-height: 100vh;
            margin: 0;
          }
          ul {
            list-style: none;
            padding: 0;
          }
        `}
      </style>
    </div>
);
