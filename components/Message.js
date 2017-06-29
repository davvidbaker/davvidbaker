const Message = ({ children, me = false }) =>
  (<div className={`${me ? 'me' : 'you'}-column`}>
    <div className={`message ${me ? 'me' : 'you'}`}>
      {children}
    </div>
    <style jsx>
      {`
        .message {
          --me-color: olivedrab;
          --you-color: dodgerblue;
          display: inline-block;
          color: white;
          padding: 5px;
          margin: 5px;
          position: relative;
        }
        .message::before {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          left: -5px;
          bottom: 0;
          border-top: 5px solid transparent;
          border-bottom: 0px solid transparent;
        }
        .me-column {
          grid-column: 1 / span 1;
        }
        .you-column {
          grid-column: 2 / span 1;
          text-align: right;
        }

        .me {
          border-radius: 5px 5px 5px 0;
          background: var(--me-color);
        }
        .me::before {
          border-right: 5px solid var(--me-color);
          border-left: 0px solid transparent;
        }
        .you {
          border-radius: 5px 5px 0 5px;
          background: var(--you-color);
        }
        .you::before {
          right: -5px;
          left: unset;
          border-left: 5px solid var(--you-color);
          border-right: 0px solid transparent;
        }
      `}
    </style>
  </div>);

export default Message;
