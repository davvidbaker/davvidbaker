import PageWrapper from '../components/PageWrapper';
import blogPosts from '../out_blog/output.js';
import BlogPost from '../components/BlogPost';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';

import dynamic from 'next/dynamic';

const BlogPage = ({ url }) => {
  const post = blogPosts[url.query.name];
  return (
    <PageWrapper>
      <h1>BLOG</h1>
      {post && <BlogPost attributes={post.attributes} content={post.content} />}
    </PageWrapper>
  );
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
