/**
*
* Ellipsis
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
background: orange;
`;

function Ellipsis({children}) {
  return (
    <Wrapper>
      ...
      {/*//THIS IS LAZY DOUBLY SO
      {Array.isArray(children)
        ? <Element type={children[0].props.type}>
            {children[0].props.children}
          </Element>
        : <Element type={children.props.type}>{children.props.children}</Element>}*/}
    </Wrapper>
  );
}

Ellipsis.propTypes = {};

export default Ellipsis;
