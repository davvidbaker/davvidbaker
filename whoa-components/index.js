import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import Element from './Element';
import whoaReducer from './reducers';

export { whoaReducer };

class WhoaRoot extends Component {
  static propTypes = {
    content: PropTypes.object.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content.children.length === this.props.content.children.length) {
      return false;
    }
  }

  render() {
    return (
      <article>
        {this.props.content.children.map(child => (
          <Element key={shortid.generate()} {...child} />
        ))}
        <style jsx>{`
      article {
        max-width: 50rem;
        margin: 0 auto;
        padding: 5px;
        position: relative;
      }
      `}</style>
      </article>
    );
  }
}

export default WhoaRoot;
