const Definition = ({ word, ipa, PoS, children }) => (
  <section>
    <heading><h1>{word}</h1>{ipa && <p className="ipa">{ipa}</p>}</heading>

    <div className="definition-body">
      {PoS && <p className="part-of-speech">{PoS}</p>}

      <p className="definition">{children}</p>
    </div>

    <style jsx>
      {`
      h1, .ipa {
        display: inline;
      }
      
      .ipa {
        margin-left: 1rem;
        font-weight: light;
      }

      p {
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
      }

      .part-of-speech {
        padding-left: 1rem;
      }

      .definition {
        font-weight: lighter;
        font-size: smaller;
        padding-left: 2rem;
      }
      `}
    </style>
  </section>
);

export default Definition;
