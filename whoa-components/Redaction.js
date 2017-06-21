/**
 * TODO hit the space bar or something to remove all redactions.
 */


import shortid from 'shortid';

import Element from './Element';

export default ({ children }) => {
  return (
    <span className="redaction">
      {children.map(child => {
        return (
          <Element key={shortid.generate()} type={child.type} {...child}>
            {child.children}
          </Element>
        );
      })}
      {/*{children}*/}
      <style jsx>{`
        span {
          background: black;
        }
        `}</style>
    </span>
  );
};
