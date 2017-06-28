import React from 'react';
import PropTypes from 'prop-types';

import popupStyle from './styles';

console.log(popupStyle);

export { popupStyle };

/* Popup can either be used as a component or just by importing the style, which is useful for before/after pseudo-elements */
/* ⚠ right now there is a bug in styled-jsx that breaks external stylesheets. The bug literally was filed today. https://github.com/zeit/styled-jsx/issues/251*/

const Popup = ({ children, additionalStyles = {} }) =>
  <span style={additionalStyles}>
    {children}
    <style jsx>
      {`
        span {
          position: absolute;
          background: var(--color-contrasting-background);
          border-radius: 3px;
          padding: 5px;
          color: white;
          opacity: 0.9;
          z-index: 1;
        }
      `}
    </style>
  </span>;

Popup.propTypes = {
  children: PropTypes.string.isRequired,
  additionalStyles: PropTypes.object,
};

export default Popup;
