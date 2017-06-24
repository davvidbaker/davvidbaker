import React from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';

import Element from './Element';
import whoaReducer from './reducers';

export { whoaReducer };

const WhoaRoot = ({ content, timelineFrame }) =>
  <article>
    {content.children.map(
      (child, index) =>
        index < timelineFrame
          ? <Element key={shortid.generate()} {...child} />
          : null
    )}
    <style jsx>{`
      article {
        max-width: 50rem;
        margin: 0 auto;
        padding: 5px;
      }
    `}</style>
  </article>;

export default connect(state => ({ timelineFrame: state.whoa.timelineFrame }))(
  WhoaRoot
);
