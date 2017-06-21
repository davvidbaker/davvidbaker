import React from 'react';

const Header = ({ show, hide, sideBarVisible, toggleSideBar }) =>
  <header>
    <ul>
      <li>
        <button
          onClick={() => {
            {/*sideBarVisible ? hide() : show();*/}
            toggleSideBar(sideBarVisible);
          }}
        >
          🗒
        </button>
      </li>
    </ul>
    <style jsx>{`
      ul {
        padding: 0;
        list-style: none;
      }
      button {
        border-style: none;
        background: unset;
        font-size: 3rem;
      }
      button:focus {
        outline: none;
      }
      button:hover {
        transform: scale(1.05);
      }
    `}</style>
  </header>;

export default Header;
