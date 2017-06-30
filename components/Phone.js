import Message from './Message';
import Messenger from './Messenger';
import smoothScrollTo from '../utils/smoothScrollTo';

const Phone = () => (
  <div className="phone-container">
    <div className="phone-speaker" />
    <div className="phone-screen">

      <Messenger className="messenger" name="You">
        <Message me>
          <h1>You there, reader.</h1>
        </Message>

        <Message me>
          <h3>It's me.</h3>
        </Message>

        <Message>
          <p>Me?</p><br /><br />
          <strong>You</strong> can't be <em>me</em>.
        </Message>

        <Message style={{ background: 'gold', color: 'black' }}>
          <h1>Who am I in this situation?</h1>
        </Message>

        <Message me>
          <p>
            You tell me.
          </p>
        </Message>

        <Message>
          <p>Does anyone else find this a bit annoying?</p>
        </Message>

        <Message>
          <p>I bet <strong>you</strong> do.</p>
        </Message>

        <Message me>
          <h2>How about an h2?</h2>
          <h1>These look the same no.</h1>
        </Message>

        <Message>
          <h1>What does this look like</h1>
        </Message>
        <Message me>
          <p>Hello</p>
        </Message>

        <Message>
          <p>It's me</p>
        </Message>

        <Message>
          <h1>What does this look like</h1>
        </Message>

        <Message>
          <p>
            A bunch ot text as;fljasd;fljkas;df j;ksafj;kja sh sjd hjsasjhd slafhj a;sdjf;alsf jl;asjdf; hkj;hlj
          </p>
        </Message>

        <Message me>
          <h1>What does this look like</h1>
        </Message>

        <Message>
          <h1>What does this look like</h1>
        </Message>
        <Message me>
          <p>Hello</p>
        </Message>

        <Message>
          <p>It's me</p>
        </Message>

        <Message>
          <h1>What does this look like</h1>
        </Message>

        <Message>
          <p>
            A bunch ot text as;fljasd;fljkas;df j;ksafj;kja sh sjd hjsasjhd slafhj a;sdjf;alsf jl;asjdf; hkj;hlj
          </p>
        </Message>

        <Message me>
          <h1>What does this look like</h1>
        </Message>

        <Message>
          <h1>What does this look like</h1>
        </Message>
      </Messenger>
    </div>
    <button
      className="phone-button"
      onClick={() =>
        smoothScrollTo(document.querySelector('.messenger-body'), 0)}
    />
    <style jsx>
      {`
    .phone-container {
      --aspect-ratio: 2;
      --phone-height: 90vh;
      --phone-button-height: 5vh;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin: 0 auto;
      background: #000;
      border: 3px solid #999;
      height: var(--phone-height, 90vh);
      width: calc(var(--phone-height, 90vh) / var(--aspect-ratio, 2));
      border-radius: 5vmin;
      padding: 0 2vmin;

      transition: width 0.5s 0.1s, height 0.5s 0.3s;
    }
    
    .phone-screen {
      background: white;
      flex-grow: 1;
      width: 100%;
      height: 0;
    }

    .phone-speaker {
      width: 20%;
      height: 1%;
      background: #444;
      border-radius: 10%;
      margin: 5vmin auto;
    }

    .phone-button {
      background: #222;
      border-radius: 50%;
      width: var(--phone-button-height, 5vh);
      height: var(--phone-button-height, 5vh);
      margin: 3vmin auto;
      display: block;
    }
    .phone-button:focus {
      outline: none;
    }

    @media(orientation:landscape) {
      .phone-container {
        --phone-button-height: 5vw;
        --phone-height: calc(90vw * var(--aspect-ratio));
        --aspect-ratio: 0.5;        

        flex-direction: row;
        padding: 2vmin 0;
      }

      .phone-screen {
        width: 0;
        height: 100%;
      }

      .phone-speaker {
        height: 20%;
        width: 1%;
        margin: auto 5vmin;
      }

      .phone-button {
        margin: auto 3vmin;
      }
    }


     p, h1, h2, h3, h4 {
      margin: 0.25rem;
      display: inline-block;
    }

    `}
    </style>
  </div>
);

export default Phone;
