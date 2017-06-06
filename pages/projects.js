import PageWrapper from '../components/PageWrapper';
import { PROJECTS } from '../constants';
import Project from '../components/Project';

const compareYears = (a, b) => {
  if (Math.max(...a.year) > Math.max(...b.year)) {
    return -1;
  } else if (Math.max(...a.year) < Math.max(...b.year)) {
    return 1
  } else if (Math.min(...a.year) < Math.min(...b.year)) {
    return 1;
  }
  return 0;
}

export default ({}) => (
  <PageWrapper>
    <ul>
      {PROJECTS.sort(compareYears).map(project => (
        <Project
          key={Math.random()}
          year={project.year}
          status={project.status}
          tagline={project.tagline}
          name={project.name}
          description={project.description}
          callToAction={project.callToAction}
          link={project.link}
          linkToSource={project.linkToSource}
          linkToTrello={project.linkToTrello}
        />
      ))}
    </ul>

    <style jsx>{`
        ul {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          grid-gap: 2.5vw;
          padding: 2.5vw;
        }
      `}
    </style>
  </PageWrapper>
);
