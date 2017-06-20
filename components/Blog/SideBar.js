import React from 'react';

import NormativesList from '../../whoa-components/NormativesList';

const SideBar = ({ sideBarVisible }) =>
  <div style={{ left: sideBarVisible ? '0px' : '-300px' }}>
    <NormativesList />

    <style jsx>{`
      div {
        position: absolute;
        top: 0;
        height: 100%;
        width: 300px;
        max-width: 300px;
        background: #fafafa;
        left: 0;
        transition: left 0.5s;
        border-right: 1px solid #ededed;
        margin-right: 5px;
      }
    `}</style>
  </div>;

export default SideBar;
