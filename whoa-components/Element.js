/**
*
* Element
*
* Element must receive an object with prop type.
* It will also usually have children, unless teh type is an image, or text?
* There may be other props
*/
import shortid from 'shortid';
import React from 'react';
import PropTypes from 'prop-types';

import { plainText } from './utils';
import WordChoice from './WordChoice';
import Ellipsis from './Ellipsis';
import Tangent from './Tangent';
import Normative from './Normative';
import Redaction from './Redaction';
import Revision from './Revision';
import Code from './Code';
import Search from './Search';
import Image from './Image';

function Element({ type, children, ...props }) {
  if (typeof type !== 'string') {
    console.error('WHOA! type of element was not a string');
    debugger;
  }

  /*  console.table({ type });
  console.log('children', children);
  console.log('props', props);*/

  let Tag,
    href,
    src,
    alt;

  const elementProps = {};

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
      elementProps.id = props.id;
      break;

    case 'redaction':
      Tag = Redaction;
      break;

    case 'revision':
      Tag = Revision;
      break;
    /* 🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝
     * Custom Elements Above
     * 🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝
     **/


    case 'heading':
      Tag = `h${props.depth}`;
      break;

    case 'paragraph':
      Tag = 'p';
      break;

    case 'text':
      return <span>{props.value}</span>;
      break;

    case 'inlineCode':
      return <Code inline value={props.value} />;

    case 'code':
      return <Code value={props.value} />;
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
      elementProps.href = props.url;
      break;
    // TODO when you do images, make sure I am doing images right here.

    case 'imageReference':

    case 'image':
      Tag = 'img';
      return <Image src={props.src || props.url} alt={props.alt} />
      // elementProps.style = { maxWidth: '100%' };
      // elementProps.src = props.src || props.url;
      // elementProps.alt = props.alt;
      break;

    case 'list':
      // elementProps.style = { display: 'inline' };
      Tag = props.ordered ? 'ol' : 'ul';
      break;

    case 'listItem':
      Tag = 'li';
      break;

    case 'thematicBreak':
      return <hr />;

    case 'root':
      Tag = 'div';
      break;

    default:
      Tag = 'span';
      debugger;
      break;

    // return null;
  }

  // somewhat hacky way to avoid putting a <form> in a <p>
  if (children && children[0] && children[0].type === 'search') {
    Tag = 'div';
  }

  return (
    <Tag {...elementProps}>
      {children && ChildrenElements(children, type)}
    </Tag>
  );
}

function ChildrenElements(chunks, tag) {
  if (chunks.value) {
    return chunks.value;
  } else if (Array.isArray(chunks)) {
    /*
  Normatives and Search and Redaction are an exception, they expect an array.
*/
    if (
      tag === 'normative' ||
      tag === 'search' ||
      tag === 'redaction' ||
      tag === 'revision'
    ) {
      return chunks;
    }

    return chunks.map(
      val =>
        (val.type === 'text'
          ? val.value
          : <Element key={shortid.generate()} type={val.type} {...val}>
            {val.children}
          </Element>)
    );
  } else if (chunks.type) {
    return <Element type={chunks.type} {...chunks}>{chunks.children}</Element>;
  }
  return ChildrenElements(chunks);
}

Element.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Element;
