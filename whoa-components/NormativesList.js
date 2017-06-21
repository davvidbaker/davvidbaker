/**
*
* Normatives
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withHandlers, compose } from 'recompose';
import { connect } from 'react-redux';

const enhance = compose(
  connect(state => ({
    normatives: state.whoa.normatives,
    currentPost: state.whoa.currentPost,
  })),
  withHandlers({
    onMouseEnter: dispatch => id => {
      console.log('mouse entered', id);
      document.querySelector(`#${id}`).style.background =
        'var(--color-highlight)';
    },
    onMouseLeave: dispatch => id => {
      document.querySelector(`#${id}`).style.background = 'unset';
      console.log('mouse left', id);
    },
  })
);

const NormativesList = ({
  currentPost,
  normatives,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <ul className="offscreen">
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
      <style jsx>{`
        a {
          color: unset;
          text-decoration: none;
        }
        li {
          overflow-x: hidden;
          padding: 10px 15px;
          border-bottom: 1px solid #ededed;
        }
        li:nth-last-of-type(1) {
          border-bottom-color: #ccc;
        }
        li:hover {
          background: var(--color-highlight);
        }
      `}</style>
    </ul>
  );
};
NormativesList.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  normatives: PropTypes.array.isRequired,
};

export default enhance(NormativesList);
