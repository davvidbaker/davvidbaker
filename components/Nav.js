import Link from 'next/link';

export default props => (
  <nav>
    <ul>
      <li>
        <Link href="/index"><a>Home</a></Link>
      </li>
      <li>
        <Link href="/projects"><a>Projects</a></Link>
      </li>
      <li>
        <Link href="/blog"><a>Blog</a></Link>
      </li>
    </ul>
  </nav>
);

