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
import { connect } from 'react-redux';

import { plainText, hash } from './utils';
import WordChoice from './WordChoice';
import Ellipsis from './Ellipsis';
import Tangent from './Tangent';
import Normative from './Normative';
import Redaction from './Redaction';
import Code from './Code';
import Search from './Search';

class Element extends React.Component {
  // ({ type, children, addTimeline, ...props }) {
  constructor(props) {
    super(props);
    if (typeof props.type !== 'string') {
      console.error('WHOA! type of element was not a string');
      debugger;
    }

    /*  console.table({ type });
  console.log('children', children);
  console.log('props', props);*/

    let Tag, href, src, alt;

    const elementProps = {};

    switch (props.type) {
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
        Tag = 'div'
        elementProps.id = props.id;
        break;

      case 'redaction':
        Tag = Redaction;
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
        elementProps.style = { maxWidth: '100%' };
        elementProps.src = props.src || props.url;
        elementProps.alt = props.alt;
        break;

      case 'list':
        // elementProps.style = { display: 'inline' };
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
    // somewhat hacky way to avoid putting a <form> in a <p>
    if (
      props.children &&
      props.children[0] &&
      props.children[0].type === 'search'
    ) {
      Tag = 'div';
    }

    const id = hash(JSON.stringify(props.position)).toString();
    this.state = { Tag, elementProps, id, children: null };
  }

  componentDidMount() {
    if (
      this.props.type !== 'text' &&
      this.props.children &&
      this.props.addTimeline
    ) {
      // for now just hashing based on position. This is bad, because it will change if something is added to whoa file before it. Need to hash contents...
      this.props.addTimeline(this.state.id, {
        length: this.props.children.length,
        currentFrame: this.props.children.length,
      });
    }
  }

  render() {
    // return null;
    return (
      <this.state.Tag {...this.state.elementProps}>
        {this.props.children &&
          this.props.timelines &&
          this.props.timelines[this.state.id] &&
          ChildrenElements(
            this.props.children,
            this.props.type,
            this.props.timelines[this.state.id].currentFrame
          )}
      </this.state.Tag>
    );
  }
  // debugger;
}

function ChildrenElements(chunks, tag, curFrame) {
  if (chunks.value) {
    return chunks.value;
  } else if (Array.isArray(chunks)) {
    /* 
  Normatives and Search and Redaction are an exception, they expect an array.
*/
    if (tag === 'normative' || tag === 'search' || tag === 'redaction') {
      return chunks;
    }

    return chunks.map((val, ind) => {
      if (ind < curFrame) {
        return val.type === 'text'
          ? val.value
          : <Element key={shortid.generate()} type={val.type} {...val}>
              {val.children}
            </Element>;
      } else {
        return null;
      }
    });
  } else if (chunks.type) {
    return (
      <Element type={chunks.type} {...chunks}>
        {chunks.children}
      </Element>
    );
  } else {
    return ChildrenElements(chunks);
  }
}

Element.propTypes = {
  type: PropTypes.string.isRequired,
};

export default connect(
  state => ({
    timelines: state.whoa.timelines,
  }),
  dispatch => ({
    addTimeline: (id, timeline) =>
      dispatch({ type: 'ADD_TIMELINE', id, timeline }),
    removeTimeline: id => dispatch({ type: 'REMOVE_TIMELINE', id }),
  })
)(Element);
