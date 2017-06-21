import withRedux from 'next-redux-wrapper';
import { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import { posts } from '../../internals/out_blog/output_blog_posts';

class PostList extends Component {
  componentDidMount() {
    this.props.clear();
  }

  render() {
    return (
      <ul>
        {posts
          .sort(
            (a, b) =>
              new Date(b.attributes.date).valueOf() -
              new Date(a.attributes.date).valueOf()
          )
          .map(post =>
            <li key={`link-${post.attributes.slug}`}>
              <Link
                href={{
                  pathname: '/blog',
                  query: { slug: post.attributes.slug },
                }}
                as={`/blog/${post.attributes.slug}`}
              >
                <a>
                  <h1>{post.attributes.title}</h1>
                </a>
              </Link>
              {' '}
              <p>{post.attributes.date}</p>
            </li>
          )}

        <style jsx>{`
          ul {
            list-style: none;
            padding: 10px;
          }
          li {
            margin-bottom: 10px;
          }
          a {
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          a:visited {
            color: rebeccapurple;
          }
          h1 {
            display: inline;
            color: var(--color-main);
            font-size: 1rem;
          }
          p {
            display: inline;
            color: #888;
            font-family: var(--font-monospace);
            font-size: 1rem;
          }
        `}</style>
      </ul>
    );
  }
}

export default connect(null, dispatch => ({
  clear: () => {
    dispatch({ type: 'CLEAR' });
  },
}))(PostList);
