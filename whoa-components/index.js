import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import Element from './Element';
import whoaReducer from './reducers';

export { whoaReducer };

class WhoaRoot extends Component {
  static propTypes = {
    content: PropTypes.object,
  };

  shouldComponentUpdate(nextProps, nextState) {
    const nextContent = nextProps.content || nextProps.children;
    const currentContent = this.props.content || this.props.children;
    if (nextContent.children.length === currentContent.children.length
    ) {
      return false;
    }
  }

  render() {
    if (!this.props.content) {
      return (
        <div>
          {this.props.children.children.map(child => (
            <Element key={shortid.generate()} {...child} />
          ))}
        </div>
      );
    }

    // only pure whoa files are just in content
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
