/**
*
* Ellipsis
*
*/

import React from 'react';

function Ellipsis({ children }) {
  return (
    <span>
      ...
      <style jsx>
        {`
          span {
            background: orange;
          }
        `}
      </style>
    </span>
  );
}

Ellipsis.propTypes = {};

export default Ellipsis;
