import PropTypes from 'prop-types';
import { compose, withHandlers, withReducer } from 'recompose';

import Status from './Status';

const withToggle = compose(
  withReducer('focused', 'dispatch', (state, action) => {
    switch (action.type) {
      case 'FOCUS':
        return true;
      case 'UNFOCUS':
        return false;
      default:
        return state;
    }
  }),
  withHandlers({
    focus: ({ dispatch }) => event => {
      dispatch({ type: 'FOCUS' });
    },
    unfocus: ({ dispatch }) => event => {
      dispatch({ type: 'UNFOCUS' });
    },
  })
);

const ExternalLinks = ({ link, linkToSource, linkToTrello, callToAction }) => (
  <ul>

    <li className="project-link">
      {link ? <a href={link}>{callToAction}</a> : <p>Coming Soon</p>}
    </li>

    {linkToSource &&
      <li>
        <a href={linkToSource}>
          <img width="24px" src="static/github.svg" alt="Github" />
        </a>
      </li>}

    {linkToTrello &&
      <li>
        <a href={linkToTrello}>
          <img width="24px" src="static/trello-mark-blue.svg" alt="Trello" />
        </a>
      </li>}

    <style jsx>
      {`
        ul {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }  
      
        li {
          padding: 0 3px;
          transition: scale 0.2s;
        }

        li:hover:not(.project-link) {
          transform: scale(1.05);
        }

        .project-link {
          flex-grow: 1;
        }
      
      `}
    </style>
  </ul>
);

/* Replaces the comma with a Unicode no-breaking hypen */
const formatYears = years => String(years).replace(',', '‑');

const Project = ({
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
}) => (
  <div onMouseEnter={focus} onMouseLeave={unfocus}>
    <h1 data-content={name}>{name} <span>{year && formatYears(year)}</span></h1>
    {status && <Status status={status} focused={focused} />}
    <p>{tagline}</p>

    {description ? <p>Read More...</p> : null}
    <ExternalLinks {...{ link, linkToSource, linkToTrello, callToAction }} />

    <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          border: dashed #cecece 2px;
          padding: 10px;
          background: white;
        }

        h1 {
          margin: 0;
          line-height: 1;
        }

        h1 span {
          color: #ddd;
          font-size: smaller;
        }
    `}</style>
  </div>
);

Project.propTypes = {
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

export default withToggle(Project);
