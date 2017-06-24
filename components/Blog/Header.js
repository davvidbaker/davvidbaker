import React from 'react';
import { compose, withState } from 'recompose';

const Header = ({
  show,
  hide,
  sideBarVisible,
  toggleSideBar,
  tick,
  untick,
  seekMain,
  seek,
  timelineFrame,
  timelines,
}) =>
  <header>
    <ul>
      <li>
        <button
          onClick={() => {
            {
              /*sideBarVisible ? hide() : show();*/
            }
            toggleSideBar(sideBarVisible);
          }}
        >
          🗒
        </button>
      </li>

      <input
        type="range"
        min="0"
        max=""
        style={{ width: '100vw' }}
        value={timelineFrame}
        onChange={e => {
          seekMain(e.target.value);
          console.log(e.target.value);
        }}
      />

      {Object.keys(timelines).map(id => {
        return (
          <input
            key={id}
            type="range"
            id={id}
            onChange={e => {
              console.log(e.target.attributes.id.value);
              seek(e.target.attributes.id.value, e.target.value);
            }}
          />
        );
      })}
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

// const Input = id => withState('id', 'setId', id);

export default Header;
