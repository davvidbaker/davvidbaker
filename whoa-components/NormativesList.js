/**
*
* Normatives
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withHandlers, compose } from 'recompose';
import { connect } from 'react-redux';

import { colors } from '../global-styles';

const enhance = compose(
  connect(state => ({
    normatives: state.whoa.normatives,
    currentPost: state.whoa.currentPost,
  })),
  withHandlers({
    onMouseEnter: dispatch => id => {
      console.log('mouse entered', id);
      document.querySelector(`#${id}`).style.background = colors.highlight;
    },
    onMouseLeave: dispatch => id => {
      document.querySelector(`#${id}`).style.background = 'unset';
      console.log('mouse left', id);
    },
  })
);

const UL = styled.ul`
  list-style: none;
  padding: 0;
  
  a {
    color: unset;
    text-decoration: none;
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
`;

const NormativesList = ({
  currentPost,
  normatives,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <UL className="offscreen">
      {normatives &&
        normatives.map(normative =>
          <li
            key={normative.id}
            onMouseEnter={() => {
              onMouseEnter(normative.id);
            }}
            onMouseLeave={() => {
              onMouseLeave(normative.id);
            }}
            onClick={() => {
              // TODO could be better
              const scrollTo =
                document.getElementById(normative.id).getBoundingClientRect()
                  .top -
                document.querySelector('main').getBoundingClientRect().top;
              console.log('scrolling to ', scrollTo);

              console.log(
                'normative top',
                document.getElementById(normative.id).getBoundingClientRect()
                  .top
              );
              if (
                Math.abs(
                  document.getElementById(normative.id).getBoundingClientRect()
                    .top
                ) > 1
              )
                TweenMax.to('main', 0.4, {
                  scrollTop: scrollTo,
                });
            }}
          >
            <p>{normative.statement}</p>
          </li>
        )}
    </UL>
  );
};
NormativesList.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  normatives: PropTypes.array.isRequired,
};

export default enhance(NormativesList);
