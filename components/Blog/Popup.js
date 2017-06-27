import React from 'react';
import PropTypes from 'prop-types';

/* Popup can either be used as a component or just by importing the style, which is useful for before/after pseudo-elements */
export const popupStyle = `
position: absolute;
background: var(--color-contrasting-background);
border-radius: 3px;
padding: 5px;
color: white;
opacity: 0.9;
`;

const Popup = ({ children, additionalStyles = {} }) => (
  <span style={additionalStyles}>
    {children}
    <style jsx>{`span {
position: absolute;
background: var(--color-contrasting-background);
border-radius: 3px;
padding: 5px;
color: white;
opacity: 0.9;
`}</style>
  </span>
);

Popup.propTypes = {
  children: PropTypes.string.isRequired,
  additionalStyles: PropTypes.object,
};

export default Popup;
