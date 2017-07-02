import Link from 'next/link';

const NavLink = ({ url, pathname, str }) => {
  let isActive;
  console.log(url.pathname);
  if (pathname.length > 0) {
    isActive = url.pathname.includes(pathname);
  } else if (url.pathname.length <= 1) {
    isActive = true;
  }

  return (
    <Link prefetch href={`/${pathname}`}>
      <li className={isActive ? 'active' : 'inactive'}>
        <a className={isActive ? 'active' : 'inactive'}>
          {str}
        </a>
        <style jsx>{`
          li {
            padding: 5px 10px;
            transition: background 0.2s;
            color: #ccc;
          }
          li:hover {
            color: #222;
          }
          a {
            cursor: pointer;
            color: inherit;
            font-weight: bold;
            text-decoration: none;
          }
          a:hover {
            text-decoration: none;
          }
          a:visited {
            color: unset;
          }

          a.active {
            cursor: default;
            color: #222;
          }
          .inactive {
            border-bottom: 5px solid transparent;
          }
        `}</style>
      </li>
    </Link>
  );
};

export default ({ url }) => (
  <nav>
    <ul>
      <NavLink url={url} str="Home" pathname="" />
      <NavLink url={url} str="Projects" pathname="projects" />
      <NavLink url={url} str="Blog" pathname="blog" />
    </ul>

    <style jsx>{`
        nav {
          width: 100%;
          overflow: hidden;
        }
        ul {
          display: flex;
          justify-content: center;
          width: 100vw;
        }
      `}</style>

  </nav>
  );
