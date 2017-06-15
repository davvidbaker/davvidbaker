import {
  compose,
  withHandlers,
  withReducer,
  withProps,
  mapProps,
} from 'recompose';
import shortid from 'shortid';
// import { connect } from 'react-redux';

import PageWrapper from '../components/PageWrapper';
import { PROJECTS } from '../constants';
import Project from '../components/Project';

const compareYears = (a, b) => {
  if (Math.max(...a.year) > Math.max(...b.year)) {
    return -1;
  } else if (Math.max(...a.year) < Math.max(...b.year)) {
    return 1;
  } else if (Math.min(...a.year) < Math.min(...b.year)) {
    return 1;
  }
  return 0;
};

const withToggle = compose(
  withReducer('showingAdditionalInfo', 'dispatch', (state = false, action) => {
    switch (action.type) {
      case 'SHOW_READ_MORE':
        return true;
      case 'HIDE_READ_MORE':
        return false;
      default:
        return state;
    }
  }),
  withHandlers({
    showAdditionalInfo: ({ dispatch }) =>
      event => {
        dispatch({ type: 'SHOW_READ_MORE', value: event.target });
      },
    hideAdditionalInfo: ({ dispatch }) =>
      event => {
        dispatch({ type: 'HIDE_READ_MORE' });
      },
  })
);

const AdditionalInfo = ({ hideAdditionalInfo, showingAdditionalInfo }) => (
  <div
    className={showingAdditionalInfo ? 'visible' : 'hidden'}
    onClick={hideAdditionalInfo}
  >
    <p>
      Addy Info
    </p>
  </div>
);

const ProjectList = (
  { projects, showAdditionalInfo, hideAdditionalInfo, showingAdditionalInfo }
) => (
  <ul
    className={showingAdditionalInfo ? 'hidden' : 'visible'}
    onClick={showAdditionalInfo}
  >
    {projects
      .sort(compareYears)
      .map(project => (
        <Project
          key={project.name}
          year={project.year}
          status={project.status}
          tagline={project.tagline}
          name={project.name}
          description={project.description}
          callToAction={project.callToAction}
          link={project.link}
          linkToSource={project.linkToSource}
          linkToTrello={project.linkToTrello}
          showAdditionalInfo={showAdditionalInfo}
          hideAdditionalInfo={hideAdditionalInfo}
        />
      ))}
    <style jsx>
      {
        `
        ul {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          grid-gap: 2.5vw;
          padding: 2.5vw;
        }
      `
      }
    </style>
  </ul>
);

const EnhancedPageWrapper = withToggle(({
  projects,
  children,
  showAdditionalInfo,
  hideAdditionalInfo,
  showingAdditionalInfo,
}) => {
  return (
    <PageWrapper>
      {children.map(child =>
        React.cloneElement(child, {
          projects,
          showAdditionalInfo,
          hideAdditionalInfo,
          showingAdditionalInfo,
          key: shortid.generate(),
        }))}
    </PageWrapper>
  );
});

export default ({}) => (
  <EnhancedPageWrapper projects={PROJECTS}>
    <ProjectList />
    <AdditionalInfo />
  </EnhancedPageWrapper>
);
