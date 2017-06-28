/**
 * TODO hit the space bar or something to remove all redactions.
 */

import shortid from 'shortid';
import React from 'react';

import Element from './Element';

const Redaction = ({ children }) => (
  <span className="redaction">
    {children.map(child => (
      <Element key={shortid.generate()} type={child.type} {...child}>
        {child.children}
      </Element>
        ))}
    {/* {children}*/}
    <style jsx>{`
        span {
          background: black;
        }
        `}</style>
  </span>
  );

export default Redaction;
