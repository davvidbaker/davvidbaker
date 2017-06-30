/**
 * Two ways to use this.
 *
 * 1. In parent component, import <Messenger> and wrap a bunch of <Messages />
 *
 * ⚠ maybe not 2. In parent component, import messengerize and apply that to a template literal with keys indicating me and you.
 */

// import Message from './Message';
import PropTypes from 'prop-types';

// const messengerize = (strings, ...details) => {
//   console.log(details);

//   return <Messenger>
//     <Message>{strings}</Message>
//   </Messenger>
// }

// export { messengerize };

const Messenger = ({ children, name }) => (
  <section>
    {name && <header><h1>{name}</h1></header>}

    <div className="messenger-body">
      {children}
    </div>

    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      header {
        background: #f7f7f7;
        border-bottom: 1px solid #aaa;
        text-align: center;
      }

      header h1 {
        font-weight: bold;
      }

      .messenger-body {
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        flex-grow: 1;
      }
    `}</style>
  </section>
);

Messenger.propTypes = {
  name: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.object),
};

export default Messenger;
