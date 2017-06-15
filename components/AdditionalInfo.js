import PropTypes from 'prop-types';
import marked from 'marked';

import ExternalLinks from './ExternalLinks';
import Status from './Status';
import colors from '../constants/colors';

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
    <div className="inner">

      <div className="heading">
        <div>
          <h1 style={{ marginRight: '5px', transform: 'translateY(3px)' }}>
            {name} <span>{year && formatYears(year)}</span>
          </h1>
          {status && <Status status={status} focused />}
        </div>
        <ExternalLinks
          {...{ link, linkToSource, linkToTrello, callToAction }}
        />
      </div>

      {description
        ? <p className="description">
            {logo && <img className="logo" src={logo} alt={`${name} logo`} />}
            <span
              className="markdown"
              dangerouslySetInnerHTML={{ __html: marked(description) }}
            />
          </p>
        : null}

      <div
        className="gallery"

      >
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

      {keywords &&
        <ul className="keywords flex-list">
          {keywords.map(word => <li key={word}><span>{word}</span></li>)}
        </ul>}
      {teammates &&
        <ul className="teammates flex-list">
          {teammates.map(teammate => <a href={teammate.link}><li key={teammate.name}><span>{teammate.name}</span></li></a>)}
        </ul>}

      <style jsx>
        {`
        .inner {
          margin: auto;
          margin-top: 2.5vw;
          display: flex;
          flex-direction: column;
          border: dashed #cecece 2px;
          padding: 1rem;
          background: white;
          max-width: 80vw;
          max-height: 80vh;
          width:100%;
          overflow-y: scroll;
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
          margin: 0 5px 5px 0;
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

        .flex-list {
          min-height: 2rem;
          display: flex;
        }

        .flex-list li {
          color: white;
          padding: 5px;
          margin: 5px;
          transition: background 0.3s;
          font-family: monospace;
        }

        .flex-list li:hover {
          background: black;
        }

        .keywords li {
          background: ${colors.border};
        }
        .teammates li {
          background: rebeccapurple;
        }
        
    `}
      </style>
    </div>
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
