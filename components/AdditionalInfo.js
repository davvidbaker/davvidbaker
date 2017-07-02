import PropTypes from 'prop-types';
import marked from 'marked';

import ExternalLinks from './ExternalLinks';
import Status from './Status';
import { colors, fonts } from '../constants/styles';

/* Replaces the comma with a Unicode no-breaking hypen */
const formatYears = years => String(years).replace(',', '‑');

const AdditionalInfo = ({
  name = '[Name Here]',
  status,
  description,
  year,
  link,
  linkToSource,
  linkToTrello,
  callToAction = 'Check it out',
  videos,
  images,
  keywords,
  teammates,
  logo,
  hideAdditionalInfo,
}) => (
  <div id="additional-info" onClick={hideAdditionalInfo}>

    <div className="heading">
      <div>
        <h1 style={{ marginRight: '5px', transform: 'translateY(3px)' }}>
          {name} <span>{year && formatYears(year)}</span>
        </h1>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        {status && <Status status={status} focused />}

        <ExternalLinks
          {...{ link, linkToSource, linkToTrello, callToAction }}
        />
      </div>
    </div>

    <section className="about-project">
      <div className="description-and-gallery">
        {description
          ? <p className="description">
            {logo && <img className="logo" src={logo} alt={`${name} logo`} />}
            <span
              className="markdown"
              dangerouslySetInnerHTML={{ __html: marked(description) }}
            />
          </p>
          : null}

        <div className="gallery">
          {images &&
            images.map(image => <img key={image} src={image} alt={image} />)}
          {videos &&
            videos.map(video => (
              <video
                loop
                controls
                muted
                autoPlay
                src={video}
                alt={`${name} video`}
                key={video}
              />
            ))}
        </div>
      </div>
      {keywords &&
        <div className="keywords-container">
          <h3>Buzz Words 🐝</h3>
          <ul className="keywords flex-list">
            {keywords.map(word => <li key={word}><span>{word}</span></li>)}
          </ul>
        </div>}
      {teammates &&
        <ul className="teammates flex-list">
          {teammates.map(teammate => (
            <a href={teammate.link}>
              <li key={teammate.name}><span>{teammate.name}</span></li>
            </a>
          ))}
        </ul>}
    </section>

    <style jsx>
      {`

        #additional-info {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          max-width: 80vw;
          width:100%;
        }

        .heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 3rem;
        }

        .heading div {
          display: flex;
        }

        .logo {
          float: left;
          height: 50px;
          margin: 15px 5px 5px 0;
          transform: translateY(10px);
        }
        
        .gallery {
          display: grid;
          grid-gap: 1vw;
          grid-auto-flow: dense;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          justify-items: center;
          align-items: center;
          margin: 2.5vw 0;
        }

        .gallery video {
          box-shadow: 0 0 20px 2px #888;
          grid-column-end: span 3;
        }

        .gallery img, .gallery video {
          max-width: 50vw;
          max-height: 50vh;
        }

        .gallery img:hover, .gallery video:hover {
          z-index: 2;
        }
       

        .gallery div {
          height: 200px;
          width: 200px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }

        h1 {
          margin: 0;
          line-height: 1;
        }

        h1 span {
          color: #ddd;
          font-size: smaller;
        }

        #additional-info {
          height: 100%;
        }

        .description-and-gallery {
          max-width: 50rem;
          display: flex;
          flex-direction: column;
        }

        .about-project {
          display: flex;
          flex-direction: column;
        }

        @media(min-width: 60rem) {
          .about-project {
            flex-direction: row;
          }
        }

        .description {
          line-height: 1.5;
        }

        .flex-list {
          min-height: 2rem;
          display: flex;
        }

        .flex-list li {
          padding: 5px;
          margin: 5px 0;
          transition: background 0.3s;
        }

        .flex-list li:hover::before {
          opacity: 1;
        }

        .keywords-container h3 {
          margin-bottom: 5px;
        }

        .keywords li {
        }
        .keywords li::before {
          content: '🐝';
          font-size: small;
          opacity: 0
        }

        
        .teammates li {
          background: rebeccapurple;
        }
        
    `}
    </style>
  </div>
);

AdditionalInfo.propTypes = {
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string,
  status: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  year: PropTypes.arrayOf(PropTypes.number),
  callToAction: PropTypes.string,
  link: PropTypes.string,
  linkToSource: PropTypes.string,
  linkToTrello: PropTypes.string,
};

export default AdditionalInfo;
