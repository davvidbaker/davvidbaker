import PropTypes from 'prop-types';

import ExternalLinks from './ExternalLinks';
import Status from './Status';

/* Replaces the comma with a Unicode no-breaking hypen */
const formatYears = years => String(years).replace(',', '‑');

const AdditionalInfo = ({
  name = '[Name Here]',
  tagline = 'tagline',
  status,
  description,
  year,
  link,
  linkToSource,
  linkToTrello,
  callToAction = 'Check it out',
  focused,
  focus,
  unfocus,
  hideAdditionalInfo,
}) => (
  <div id="additional-info" onClick={hideAdditionalInfo}>
    <div
      className="inner"
      onClick={e => {
        e.preventDefault();
      }}
    >

      <h1>{name} <span>{year && formatYears(year)}</span></h1>
      {status && <Status status={status} focused />}
      <p className="tagline">{tagline}</p>

      {description ? <p>{description}</p> : null}
      <ExternalLinks {...{ link, linkToSource, linkToTrello, callToAction }} />

      <style jsx>
        {`
        div {
          margin: auto;
          margin-top: 2.5vw;
          display: flex;
          flex-direction: column;
          border: dashed #cecece 2px;
          padding: 10px;
          background: white;
          max-width: 80vw;
          width:100%;
          padding: 2.5vw;
        }

        h1 {
          margin: 0;
          line-height: 1;
        }

        h1 span {
          color: #ddd;
          font-size: smaller;
        }

        .tagline {
          flex: 1;
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
