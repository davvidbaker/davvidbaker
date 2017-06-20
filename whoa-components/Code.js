/**
*
* Code
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../global-styles.js';

const Block = styled.pre`

  padding: 1rem;

  &.block {
      background: #333;
    
    code {
      color: yellow;      
    }
  }

`;

const Inline = styled.span`
    background: ${colors.inlineBackground};
    padding: 2px 5px;
    border-radius: 4px;
    font-size: 0.9rem;
`;

function Code({ value, inline = false, ...props }) {
  const Wrapper = inline ? Inline : Block;
  return (
    <Wrapper className={inline ? 'inline' : 'block'}>
      <code>
        {value}
      </code>
    </Wrapper>
  );
}

Code.propTypes = {
  block: PropTypes.bool,
};

export default Code;
