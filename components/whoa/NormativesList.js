/**
*
* Normatives
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../constants/styles';

const NormativesList = ({ onMouseEnter, onMouseLeave, children }) => {
  return (
    <ul className="offscreen">
      {children && children.map(child =>
        <li
          key={child.id}
          onMouseEnter={() => {
            onMouseEnter(child.id);
          }}
          onMouseLeave={() => {
            onMouseLeave(child.id);
          }}
        >
          {child.statement}
        </li>
      )}

      <style>
        {`
        ul {
          list-style: none;
          padding: 0;
        }
        
        li {
          overflow-x: hidden;
          padding: 10px 15px;
          border-bottom: 1px solid #ededed;

          &:nth-last-of-type(1) {
            border-bottom-color: #ccc;
          }

          &:hover {
            background: ${colors.highlight};
          }
        } 
        `}
      </style>
    </ul>
  );
};
NormativesList.applypropTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  children: PropTypes.array,
};

export default NormativesList;
