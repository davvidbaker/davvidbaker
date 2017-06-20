import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`

ul {
  padding: 0;
  list-style: none;
}

button {
  border-style: none;
  background: unset;
  font-size: 3rem;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.05);
  }
}
`;

const Header = ({ show, hide, sideBarVisible }) =>
  <Wrapper>
    <ul>
      <li>
        <button onClick={sideBarVisible ? hide : show}>🗒</button>
      </li>
    </ul>
  </Wrapper>;

export default Header;