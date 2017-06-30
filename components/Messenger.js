/**
 * Two ways to use this.
 *
 * 1. In parent component, import <Messenger> and wrap a bunch of <Messages />
 *
 * 2. In parent component, import messengerize and apply that to a template literal with keys indicating me and you.
 */

import Message from './Message';

const messengerize = (strings, ...details) => Trim trim trim and implement this should be easy👀;

export { messengerize };

const Messenger = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        display: grid;
      }
    `}</style>
  </div>
);

export default Messenger;
