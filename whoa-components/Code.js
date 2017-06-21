/**
*
* Code
*
*/

import React from 'react';
import PropTypes from 'prop-types';

function Code({ value, inline = false, ...props }) {
  return inline
    ? <span>
        <code>
          {value}
        </code>
        <style jsx>
          {`
            span {
              background: #f6f8fa;
              padding: 2px 5px;
              border-radius: 4px;
              font-size: 0.9rem;
            }
          `}
        </style>
      </span>
    : <pre>
        <code>{value}</code>
        <style jsx>{`
          pre {
            padding: 1rem;
            background: #333;
          }
          pre code {
            color: yellow;
          }
        `}</style>
      </pre>;
}

Code.propTypes = {
  inline: PropTypes.bool,
};

export default Code;
