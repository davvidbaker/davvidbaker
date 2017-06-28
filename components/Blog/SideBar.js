import React from 'react';

import NormativesList from '../../whoa-components/NormativesList';

import { sideBarTransitionTime } from '../../constants/styles';

const SideBar = ({ sideBarVisible, toggleSideBar }) => (
  <div style={{ left: sideBarVisible ? '0px' : '-300px' }}>
    <NormativesList />

    <div className="arrow-container">
      <button
        className="arrow"
        onClick={() => {
          toggleSideBar(true);
        }}
      />
    </div>
    <style jsx>{`
      div:first-child {
        position: absolute;
        top: 0;
        height: 100%;
        width: 300px;
        max-width: 300px;
        background: #fafafa;
        left: 0;
        transition: left ${sideBarTransitionTime}s;
        border-right: 1px solid #ededed;
        margin-right: 5px;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        justify-content: flex-start;

      }

      .arrow-container {
        position: sticky;
        bottom: 0;
        text-align: center;
        background: #fafafa;
        border-top: 1px solid #ccc;
        {/*display: flex;
        flex-direction: column;
        justify-content: flex-end;
        flex-grow: 1;*/}
      }
      .arrow {
        border: 0;
        margin: 50px auto;
        padding: 0;
        height: 50px;
        width: 60%;
        position: relative;
        transform-origin: center center;
        transform: scale(0.5);
      }

      .arrow::before {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: -25px;
        left: -20%;
        border-right: 50px solid buttonface;
        border-top: 50px solid transparent;
        border-bottom: 50px solid transparent;
      }

      .arrow:focus {
        outline: 0;
      }

      .arrow:hover {
        background: darkgray;
      }
      .arrow:hover::before {
        border-right-color: darkgray;
      }
    `}</style>
  </div>
);

export default SideBar;
