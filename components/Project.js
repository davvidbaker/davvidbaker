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
  }
) => (
  <div
    onMouseEnter={focus}
    onMouseLeave={unfocus}
    style={{ transition: "transform 1s", transform: `rotate(${Math.random() * 2 - 1}deg)` }}
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
        div {
          display: flex;
          flex-direction: column;
          border: solid #cecece 1px;
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

        .tagline {
          flex: 1;
        }
    `
      }
    </style>
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
