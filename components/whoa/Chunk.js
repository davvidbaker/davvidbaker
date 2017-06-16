/**
*
* Chunk
*
*/
import shortid from 'shortid';
import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import WordChoice from './WordChoice';
import Ellipsis from './Ellipsis';
import Tangent from './Tangent';
import Normative from './Normative';
import Code from './Code';
import Search from './Search';

function Chunk({ type, children, ...props }) {
  let Tag, href, src, alt;

  switch (type) {
    case 'wordChoice':
      Tag = WordChoice;
      break;

    case 'ellipsis':
      Tag = Ellipsis;
      break;

    case 'tangent':
      Tag = Tangent;
      break;

    case 'search':
      Tag = Search;
      break;

    case 'normative':
      Tag = Normative;
      break;
    /* 🔝 Custom Elements Above 🔝 */

    case 'heading':
      Tag = `h${props.depth}`;
      break;

    case 'paragraph':
      Tag = 'p';
      break;

    case 'text':
      Tag = 'span';
      break;

    case 'code':
      Tag = Code;
      break;

    case 'inlineCode':
      Tag = Code;
      break;
    //  TODO what is delete
    case 'delete':
    case 'strong':
      Tag = 'strong';
      break;

    case 'emphasis':
      Tag = 'em';
      break;
    
    case 'blockquote':
      Tag = 'blockquote';
      break;

    case 'link':
    case 'linkReference':
      Tag = 'a';
      href = props.url;
      break;


      // TODO when you do images, make sure I am doing images right here.
    case 'imageReference':
    case 'image':
      Tag = 'img';
      src = props.src || props.url;
      alt = props.alt;
      break;

    case 'list':
      Tag = props.ordered ? 'ol' : 'ul';
      break;

    case 'listItem':
      Tag = 'li';
      break;

    case 'root':
      Tag = 'div';
      break;

    default:
      Tag = 'span';
      break;

    // return null;
  }

  return (
    <Tag href={href} src={src} alt={alt}>
      {children
        ? Array.isArray(children)
            ? children.map(child => {
                return (
                  <Chunk type={child.type} key={shortid.generate()} {...child}>
                    {child.children ? child.children : child.value}
                  </Chunk>
                );
              })
            : children.value ? children.value : children
        : null}
    </Tag>
  );
}

Chunk.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Chunk;
