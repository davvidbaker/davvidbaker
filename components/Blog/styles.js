import React from 'react';

const BlogGlobalStyles = () =>
  <style global jsx>{`
    * {
      font-family: sans-serif;
    }
    blockquote {
      border-left: 5px solid var(--color-main);
      padding: 0.5rem;
      padding-left: 1.5rem;
      margin: 0 1rem;
    }
    blockquote p {
      margin: 0;
      margin-top: 0.5rem;
    }
    blockquote p::before {
      content: '';
      width: 20px;
      height: 5px;
      background: var(--color-main);
      position: absolute;
      transform: translateX(-1.5rem) translateY(-1rem);
    }
    p {
      line-height: 1.5;
    }
    span.redaction span::selection {
      background: black;
    }
    a {
      color: #0066c0;
      text-decoration: none;
    }
    a:visited {
      color: rebeccapurple;
    }

    h1 {
      font-size: 2rem;
    }

    article ul {
      list-style: disc;
      padding-left: 2rem;
    }


  `}</style>;

export default BlogGlobalStyles;
