import withRedux from 'next-redux-wrapper';
import Link from 'next/link';
import Head from 'next/head';

import PageWrapper from '../components/PageWrapper';
import { posts } from '../internals/out_blog/output_blog_posts.js';
import PostList from '../components/Blog/PostList';
import BlogPost from '../components/Blog/Post';
import BlogGlobalStyles from '../components/Blog/styles';

import { initStore } from '../store';
import Nav from '../components/Nav';

const BlogPage = ({ url }) => {
  const post = url.query.slug
    ? posts.filter(post => url.query.slug === post.attributes.slug)[0]
    : null;
  return post
    ? <PageWrapper title={post.attributes.title} includeTweenMax>
        <BlogPost attributes={post.attributes} content={post.content} />
        <BlogGlobalStyles />
      </PageWrapper>
    : <PageWrapper title="🙃🐢 Blog">
        <Nav url={url} />
        <main style={{ marginLeft: '10px' }}>
          <div className="left-container">
            <p>
              This mostly contains unedited stream-of-consciousness writing.
            </p>
            <p>
              <em>
                {' '}The more interesting project is the paratext of the blog
                itself.
              </em>
            </p>
            <PostList />
          </div>
        </main>

        {/* NEED TO PUT MORE EFFORT INTO MARGINALS */}
        <img
          className="marginal marginal-right"
          src="/static/astronaut-pushing.svg"
          alt="Astronaut"
          style={{
            position: 'fixed',
            transform: 'scalex(-1)',
            bottom: 0,
            right: 0,
          }}
        />
        <BlogGlobalStyles />
      </PageWrapper>;
};

BlogPage.getInitialProps = async ({ store, isServer }) => {
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
)(BlogPage);
