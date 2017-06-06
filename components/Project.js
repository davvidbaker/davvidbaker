import PropTypes from 'prop-types';

const Project = ({
  name = '[Name Here]',
  tagline = 'tagline',
  status,
  description,
  year,
  link,
  linkToSource,
  linkToTrello,
}) => (
  <div>
    <h1 data-content={name}>{name}</h1>
    {year && <p className="year">{year}</p>}
    {status && <p className="status">{status}</p>}
    <p>{tagline}</p>

    {link ? <a href={link}>link</a> : <p>Coming Soon</p>}
    {linkToSource && <a href={linkToSource}>linkToSource</a>}
    {linkToTrello && <a href={linkToTrello}>linkToTrello</a>}

    {description ? <p>Read More...</p> : null}
    <style jsx>
      {`
        div {
          border: dashed #cecece 2px;
          padding: 10px;
          background: white;
        }

        h1 {
          margin: 0;
          line-height: 1;
        }
      `}

    </style>
  </div>
);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string,
  status: PropTypes.string,
  description: PropTypes.string,
  year: PropTypes.arrayOf('PropTypes.string'),
  link: PropTypes.string,
  linkToSource: PropTypes.string,
  linkToTrello: PropTypes.string,
};

export default Project;
