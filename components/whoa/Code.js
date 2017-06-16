/**
*
* Code
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../constants/styles';




function Code({ children, block = false }) {
  const Wrapper = block || children.includes('\n') ? 'pre' : 'span';
  return (
    <Wrapper className={block || children.includes('\n') ? 'block' : 'inline'}>
      <code>
        {children}
      </code>
      <style jsx>
        {`
          pre {
            padding: 1rem;

            &.block {
                background: #333;
              
              code {
                color: yellow;      
              }
            }
          }

          span {
            background: ${colors.inlineBackground};
            padding: 2px 5px;
            border-radius: 4px;
            font-size: 0.9rem;
          }
        `}
      </style>
    </Wrapper>
  );
}

Code.propTypes = {
  block: PropTypes.bool,
};

export default Code;
