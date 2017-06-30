import shortid from 'shortid';

const Message = ({ children, me = false, style }) => {
  const id = shortid.generate();

  return (
    <div className={`${me ? 'me' : 'you'}-column`}>
      <div className={`message ${me ? 'me' : 'you'}`} id={id} style={style && style}>
        {children}
        <style>
          {`#${id} {
          ${style && `--you-color: ${style.background};`}
        }`}
        </style>
      </div>
      <style jsx>
        {`
        .message {
          --me-color: #ddd;
          --you-color: dodgerblue;
          --border-radius: 10px;
          
          display: inline-block;
          color: white;
          padding: 5px;
          margin: var(--border-radius, 10px);
          position: relative;
          max-width: 75%;
        }
        .message::before {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          left: -5px;
          bottom: 0;
          border-top: var(--border-radius, 10px) solid transparent;
          border-bottom: 0px solid transparent;
        }

        .you-column {
          text-align: right;
        }

        .me {
          color: black;
          border-radius: var(--border-radius, 10px) var(--border-radius, 10px) var(--border-radius, 10px) 0;
          background: var(--me-color);
        }
        .me::before {
          border-right: var(--border-radius, 10px) solid var(--me-color);
          border-left: 0px solid transparent;
        }
        .you {
          border-radius: var(--border-radius, 10px) var(--border-radius, 10px) 0 var(--border-radius, 10px);
          background: var(--you-color);
          text-align: left;
        }
        .you::before {
          right: -5px;
          left: unset;
          border-left: var(--border-radius, 10px) solid var(--you-color);
          border-right: 0px solid transparent;
        }
      `}
      </style>
    </div>
  );
};

export default Message;
