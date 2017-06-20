import React from 'react';
import shortid from 'shortid';
import styled from 'styled-components';

import Element from './Element';
import whoaReducer from './reducers';

const Wrapper = styled.article`
max-width: 50rem;
margin: 0 auto;
padding: 5px;
`;

export { whoaReducer };

export default ({ content }) =>
  <Wrapper>
    {content.children.map(child =>
      <Element key={shortid.generate()} {...child} />
    )}
  </Wrapper>;
