import Link from 'next/link';

const NavLink = ({ url, pathname, str }) => {
  let isActive;
  console.log(url.pathname)
  if (pathname.length > 0) {
    isActive = url.pathname.includes(pathname);
  } else {
    if (url.pathname.length <= 1 ) {
      isActive = true;
    }
  }

  return (
    <Link href={`/${pathname}`}>
      <a>
        <li className={isActive ? 'active' : null}>
          {str}
        </li>
        <style jsx>
          {`
            li {
              padding: 10px;
              transition: background 0.2s;
            }
            li:hover {
              background: black;
            }
            a {
              color: unset;
              text-decoration: none;
            }
            a:hover {
              text-decoration: none;
            }
            .active {
              border-bottom: 2px solid black;
            }
          `}
        </style>
      </a>
    </Link>
  );
};

export default ({ url }) => {
  return (
    <nav>
      <ul>
        <NavLink url={url} str="Home" pathname="" />
        <NavLink url={url} str="Projects" pathname="projects" />
        <NavLink url={url} str="Blog" pathname="blog" />
      </ul>

      <style jsx>{`
        nav {
          background: var(--color-border, black);
          color: white;
          width: 100%;
          transition: background 5s;
        }
        ul {
          display: flex;
        }
      `}</style>

    </nav>
  );
};
