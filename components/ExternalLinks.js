const ExternalLinks = ({ link, linkToSource, linkToTrello, callToAction }) => (
  <ul>

    <li className="project-link">
      <p>
        {link ? <a href={link}>{callToAction}</a> : 'Coming Soon'}
      </p>
    </li>

    {linkToSource &&
      <li>
        <a href={linkToSource}>
          <img width="24px" src="/static/github.svg" alt="Github" />
        </a>
      </li>}

    {linkToTrello &&
      <li>
        <a href={linkToTrello}>
          <img width="24px" src="/static/trello-mark-blue.svg" alt="Trello" />
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
      
        p {
          margin: 0;
        }

      `}
    </style>
  </ul>
);

export default ExternalLinks;
