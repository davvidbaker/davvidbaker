import React from 'react';
import styled from 'styled-components';

import { colors, fonts } from '../../global-styles';

const DIV = styled.div`
display: flex;
justify-content: center;
margin: 0 5px;

.inner-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

h1 {
  color: ${colors.accent1};
  margin-bottom: 0 
}

p {
  align-self: flex-end;
  font-family: ${fonts.monospace};
  color: #888;
}
`;

const Title = ({title, date}) =>
  <DIV>
    <div className="inner-title">
      <h1 style={{}}>
        {title}
      </h1>
      <p>
        {date}
      </p>
    </div>
  </DIV>;

export default Title;
