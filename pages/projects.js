import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
  compose,
  withHandlers,
  withReducer,
  branch,
  renderComponent,
} from 'recompose';
import shortid from 'shortid';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';

// import { connect } from 'react-redux';

import PageWrapper from '../components/PageWrapper';
import { PROJECTS } from '../constants';
import Project from '../components/Project';
import AdditionalInfo from '../components/AdditionalInfo';
import Nav from '../components/Nav';

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
        return action.value;
      case 'HIDE_READ_MORE':
        return false;
      default:
        return state;
    }
  }),
  withHandlers({
    showAdditionalInfo: ({ dispatch }) => projectName => {
      dispatch({ type: 'SHOW_READ_MORE', value: projectName });
    },
    hideAdditionalInfo: ({ dispatch }) => event => {
      dispatch({ type: 'HIDE_READ_MORE' });
    },
  })
);

const ProjectList = ({
  projects,
  showAdditionalInfo,
  hideAdditionalInfo,
  showingAdditionalInfo,
}) =>
  <ul className={showingAdditionalInfo ? 'hidden' : 'visible'}>
    {projects
      .sort(compareYears)
      .map(project =>
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
        />
      )}
    <style jsx>
      {`
        ul {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          grid-gap: 2.5vw;
          -webkit-margin-before: 0;
          -webkit-margin-after: 0;
        }
      `}
    </style>
    <style global jsx>{`
      h1 {
        font-size: 24px;
      }
      p {
        color: #555;
        line-height: 1.5;
      }
      a {
        color: var(--color-link);
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
      body > div:first-child {
        width: 100%;
        height: 100%;
      }
      #body-div {
        border: var(--color-border) 0px solid;
        background: #f5f5f5;
        min-height: 100vh;
        padding: 8px;
        position: relative;
      }
      .fade-enter {
        opacity: 0.01;
      }
      .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 200ms ease-in 205ms;
      }
      .fade-leave {
        opacity: 1;
      }
      .fade-leave.fade-leave-active {
        opacity: 0.01;
        transition: opacity 200ms ease-in;
      }
      #additional-info {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .markdown p:first-child {
        margin-top: 0;
      }
    `}</style>
  </ul>;

const Page = withToggle(
  ({
    projects,
    url,
    showAdditionalInfo,
    hideAdditionalInfo,
    showingAdditionalInfo,
  }) => {
    const project = url.query.name
      ? projects.filter(
          project => project.name === url.query.name.replace(/-/g, ' ')
        )[0]
      : null;
    return (
      <div
        id="projects-page"
        style={{ position: 'relative', padding: '2.5vw' }}
      >
        <Nav />
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {url.query.name && project
            ? <AdditionalInfo
                key="additional-info"
                hideAdditionalInfo={hideAdditionalInfo}
                {...project}
              />
            : <ProjectList
                key="project-list"
                projects={projects}
                showAdditionalInfo={showAdditionalInfo}
              />}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
);

const ProjectsPage = ({ url }) =>
  <PageWrapper>
    <Page projects={PROJECTS} url={url} />
  </PageWrapper>;

ProjectsPage.getInitialProps = async ({ store, isServer }) => {
  return { isServer };
};

const mapDispatchToProps = dispatch => {
  return {
    addCount: dispatch => ({ type: 'ADD' }),
  };
};
export default withRedux(
  initStore,
  state => ({ ...state }),
  mapDispatchToProps
)(ProjectsPage);
