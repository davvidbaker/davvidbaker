import React from 'react';

const Title = ({title, date}) =>
  <div className="outer-title">
    <div className="inner-title">
      <h1 style={{}}>
        {title}
      </h1>
      <p>
        {date}
      </p>
    </div>
    <style jsx>{`
      .outer-title {
        display: flex;
        justify-content: center;
        margin: 0 5px;
      }

      .inner-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
      }

      h1 {
        color: var(--color-main);
        margin-bottom: 0;
        font-size: 2rem;
      }

      p {
        align-self: flex-end;
        font-family: var(--font-monospace);
        color: #888;
      }
      `}</style>
  </div>;

export default Title;
