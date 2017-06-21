import withRedux from 'next-redux-wrapper';
import Link from 'next/link';
import Head from 'next/head';

import PageWrapper from '../components/PageWrapper';
import { posts } from '../internals/out_blog/output_blog_posts.js';
import PostList from '../components/Blog/PostList';
import BlogPost from '../components/Blog/Post';
import { initStore } from '../store';

const BlogGlobalStyles = () =>
  <style global jsx>{`
    * {
      font-family: sans-serif;
    }
    blockquote {
      border-left: 5px solid var(--color-main);
      padding: 0.5rem;
      padding-left: 1.5rem;
      margin: 0 1rem;
    }
    blockquote p {
      margin: 0;
      margin-top: 0.5rem;
    }
    blockquote p::before {
      content: '';
      width: 20px;
      height: 5px;
      background: var(--color-main);
      position: absolute;
      transform: translateX(-1.5rem) translateY(-1rem);
    }

    p {
      line-height: 1.5;
    }
  `}</style>;

const BlogPage = ({ url }) => {
  const post = url.query.slug
    ? posts.filter(post => url.query.slug === post.attributes.slug)[0]
    : null;
  return post
    ? <PageWrapper title={post.attributes.title} includeTweenMax>
        <BlogPost attributes={post.attributes} content={post.content} />
        <BlogGlobalStyles />
      </PageWrapper>
    : <PageWrapper>
        <h1>BLOG</h1>
        <PostList />
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
