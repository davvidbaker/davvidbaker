import React from 'react';
import PropTypes from 'prop-types';

import popupStyle from './style';
const x = 10;

export { popupStyle };

/* Popup can either be used as a component or just by importing the style, which is useful for before/after pseudo-elements */

const Popup = ({ children, additionalStyles = {} }) => (
  <span style={additionalStyles}>
    {children}
    <style jsx>{`span {
${popupStyle}
`}</style>
  </span>
);

Popup.propTypes = {
  children: PropTypes.string.isRequired,
  additionalStyles: PropTypes.object,
};

export default Popup;
