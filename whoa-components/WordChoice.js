/**
*
* WordChoice
*
*/

import React from 'react';

import { popupStyle } from '../components/Blog/Popup';
console.log(popupStyle)
/**
 * Right now, word choice will only work for up to three words
 */
function WordChoice({ children }) {
  return children[1]
    ? <span data-before={children[1]} data-after={children[2]}>
      {children[0]}
      <style jsx>{`
          span {
            display: inline-block;
          }
          span::before, span::after {
            opacity: 0.05;
            display: block;
            position: absolute;
            font-size: 0.8rem;
            line-height: 0.8rem;
            z-index: -1;
          }
          span:hover::before, span:hover::after {
            opacity: 1;
            background: rgba(255, 255, 255, 0.5);
            z-index: 1;
          }
          span::before {
            content: attr(data-before);
            transform: translateY(-0.6rem);
          }
          span::after {
            content: attr(data-after);
            transform: translateY(-0.3rem);
          }
        `}</style>
    </span>
    : <span>
      {children[0]}
      <style jsx>{`
          span::before {
            position: absolute;
            content: 'WC';
            z-index: -1;
            opacity: 0.2;
            color: lightblue;
            font-size: 2rem;
          }
          span:hover::after {
            ${popupStyle}
            content: '👈 word choice';
            line-height: 1;
          }
        `}</style>
    </span>;
}

WordChoice.propTypes = {};

export default WordChoice;
