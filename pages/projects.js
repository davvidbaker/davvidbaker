import PageWrapper from '../components/PageWrapper';
import { PROJECTS } from '../constants';
import Project from '../components/Project';

export default ({}) => (
  <PageWrapper>
    <ul>
      {PROJECTS.map(project => (
        <Project
          key={Math.random()}
          status={project.status}
          tagline={project.tagline}
          name={project.name}
          description={project.description}
          link={project.link}
          linkToSource={project.linkToSource}
          linkToTrello={project.linkToTrello}
        />
      ))}
    </ul>

    <style jsx>
      {`
        ul {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          padding: 0;
          grid-gap: 10px;
        }
        `}
    </style>
  </PageWrapper>
);
