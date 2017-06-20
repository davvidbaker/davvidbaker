import { injectGlobal } from 'styled-components';
// import ahNatural from 'fonts/ah natural.ttf';

// TODO theming
export const colors = {
  accent1: 'firebrick',
  highlight: '#fbfaa4',
  text: '#111',
  inlineBackground: '#f0f0f0',
};

export const fonts = {
  monospace: 'monospace',
};

// console.log(ahNatural);
// debugger;
injectGlobal`

  * {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  html, body {
    height: 100vh;
  }

  html,
  body,
  #app {
    min-height: 100%;
    min-width: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: /*Ubuntu,*/ 'Helvetica Neue', Helvetica, Arial, sans-serif;
    height: 100vh;
  }

  body.fontLoaded {
    font-family: /*Ubuntu,*/ 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;

    font-family: 'ah natural';
  }

  .date {
    font-family: monospace;
    color: #ccc;
  }

  p,
  label {
    line-height: 1.5em;
  }

  ul {
    margin-top: 0;
  }

  .hot-take-alert {
    color: orange;
  }
  
blockquote {
  border-left: 5px solid ${colors.accent1};
  padding: 0.5rem;
  padding-left: 1.5rem;
  margin: 0 1rem;

  p {
    margin: 0;
    margin-top: 0.5rem;
  }

  &::before {
    content: '';
    width: 20px;
    height: 5px;
    background: ${colors.accent1};
    position: absolute;
    transform: translateX(-1.5rem) translateY(-0.5rem);
  }
}

img {
  // float: right;
}


`;
