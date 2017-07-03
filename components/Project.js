import Link from 'next/link';
import PropTypes from 'prop-types';
import { compose, withHandlers, withReducer } from 'recompose';
// import Router from 'next/router';

import ExternalLinks from './ExternalLinks';
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
    focus: ({ dispatch }) =>
      event => {
        dispatch({ type: 'FOCUS' });
      },
    unfocus: ({ dispatch }) =>
      event => {
        dispatch({ type: 'UNFOCUS' });
      },
  })
);

/* Replaces the comma with a Unicode no-breaking hypen */
const formatYears = years => String(years).replace(',', '‑');

const Project = (
  {
    name = '[Name Here]',
    tagline = 'tagline',
    highlight = false,
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
    showAdditionalInfo,
    agency
  }
) => (
  <li
    className = {`project ${highlight && 'highlight-project'}`}
    onMouseEnter={focus}
    onMouseLeave={unfocus}
  >
    <h1>{name} <span>{year && formatYears(year)}</span></h1>
    {status && <Status status={status} focused={focused} />}
    <p className="tagline">{tagline}</p>

    {/*? <Link href={{ pathname: '/projects/' + name.replace(/\s/g, '-'), query: { name: name.replace(/\s/g, '-') } }}><a>Read More...</a></Link>*/}
    {description
      ? <Link
          href={{
            pathname: '/projects',
            query: { name: name.replace(/\s/g, '-') },
          }}
          as={`/projects/${name.replace(/\s/g, '-')}`}
        >
          <a>Read more...</a>
        </Link>
      : null}
    <ExternalLinks {...{ link, linkToSource, linkToTrello, callToAction }} />

    <style jsx>
      {
        `
        .project {
          display: flex;
          flex-direction: column;
          border: solid #cecece 1px;
          padding: 10px;
          background: white;
          position: relative;
        }

        .project::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 5px;
          box-shadow: 0 0 20px rgba(0,0,0,0.3);
          left: 0;
          top: 0;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .project:hover::after {
          opacity: 1;
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
    `
      }
    </style>
  </li>
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
