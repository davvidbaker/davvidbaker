import withRedux from 'next-redux-wrapper';
import Link from 'next/link';
import Head from 'next/head';

import PageWrapper from '../components/PageWrapper';
import { posts } from '../internals/out_blog/output_blog_posts.js';
import PostList from '../components/Blog/PostList';
import BlogPost from '../components/Blog/Post';
import { initStore } from '../store';

const BlogPage = ({ url }) => {
  const post = url.query.slug
    ? posts.filter(post => url.query.slug === post.attributes.slug)[0]
    : null;
  return post
    ? <PageWrapper title={post.attributes.title} includeTweenMax>
        <BlogPost attributes={post.attributes} content={post.content} />
      </PageWrapper>
    : <PageWrapper>
        <h1>BLOG</h1>
        <PostList />
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
