/**
 * Contains global styles and <head> content.
 * Wraps every page.
 */
import Head from 'next/head';
import { compose, withHandlers, withReducer } from 'recompose';
import React from 'react';

// now unnecessary, with nonchanging border color
const enhance = withReducer(
  'borderColor',
  'dispatch',
  (state, action) => 'white'

  // `#${Math.floor(Date.now() / 100000000000 % 1 * 0xffffff).toString(16)}`
);

export default enhance(({
  title = '🙃🐢',
  borderColor,
  background,
  children,
  dispatch,
}) => (
  <div id="body-div" style={{ borderColor }}>
    <Head>
      <title>
        {title}
      </title>
      <link
        href="https://fonts.googleapis.com/css?family=Signika|Josefin+Slab:400,400i,700|Cutive+Mono"
        rel="stylesheet"
      />

      <link rel="icon" type="image/x-icon" href="/static/favicon.png" />

      <meta name="viewport" content="width=device-width" />
      <meta name="theme-color" content={borderColor} />
      <meta name="theme-color" content={borderColor || 'blue'} />
      <meta charSet="utf-8" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
  
      {background && <style>{`body {--body-background: ${background}}`}</style>}
    </Head>
    {children}
    <style jsx global>
      {`
          :root {
            --color-main: firebrick;
            --color-accent: midnightblue;
            --color-link: #0066c0;
            --color-border: darkslategrey;
            --color-highlight: #fbfaa4;
            --color-select: powderblue;
            --body-background: white;

            --color-contrasting-background: firebrick;
            --font-monospace: monospace;
            --display-marginal: block;
          }
          @media (max-width: 500px) {
            :root {
               {
                /*--display-marginal: none;*/
              }
            }
            .marginal {
              transition: 0.4s;
              z-index: -100;
              opacity: 0.05;
            }
          }
          html {
            box-sizing: border-box;
            font-family: sans-serif;
            min-height: 100vh;
            margin: 0;
            padding: 0;
          }
          *,
          *::before,
          *::after {
            box-sizing: inherit;
          }
          *::selection {
            background: var(--color-select);
          }
          body {
            min-height: 100vh;
            margin: 0;
            background: var(--body-background);
          }

          #body-div {
            min-height: 100vh;
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          a {
            color: var(--color-link);
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }

          code {
            font-family: var(--font-monospace, monospace);
            font-size: large;
          }

          hr {
            margin: 2em auto;
            border-left: 10vw solid transparent;
            border-right: 10vw solid transparent;
            width: 30%;
          }

          .marginal {
            display: var(--display-marginal, block);
            max-width: 250px;
          }
        `}
    </style>
  </div>
));
