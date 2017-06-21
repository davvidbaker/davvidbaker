import React from 'react';
import shortid from 'shortid';

import Element from './Element';
import whoaReducer from './reducers';

export { whoaReducer };

export default ({ content }) =>
  <article>
    {content.children.map(child =>
      <Element key={shortid.generate()} {...child} />
    )}
    <style jsx>{`
      article {
        max-width: 50rem;
        margin: 0 auto;
        padding: 5px;
      }
      `}</style>
  </article>;
