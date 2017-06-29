const Phone = () => (
  <div className="phone-container">
    <div className="phone-speaker" />
    <div className="phone-screen">
      <h1>
        David Baker
      </h1>
      <p>contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcont entcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p>
    </div>
    <button className="phone-button"></button>
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
      overflow-y: scroll;
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

    `}
    </style>
  </div>
);

export default Phone;
