import withRedux from 'next-redux-wrapper';
import Link from 'next/link';
import Head from 'next/head';


import PageWrapper from '../components/PageWrapper';
import { posts } from '../internals/out_blog/output_blog_posts.js';
import PostList from '../components/Blog/PostList';
import BlogPost from '../components/Blog/Post';
import { initStore } from '../store';

const BlogPage = ({ url }) => {
  console.log(posts);
  const post = url.query.slug
    ? posts.filter(post => url.query.slug === post.attributes.slug)[0]
    : // post => {
      //     console.log(post.attributes.slug, url.query.slug);
      //     console.log(post.attributes.slug === url.query.slug);
      //     return post.attributes.slug === [url.query.slug];
      //   })[0]
      null;
  // debugger;
  // const post = newArray[0];
  console.log('post', post);
  return post
    ? <div>
        <Head>
          <title>{post.attributes.title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js" />
        </Head>
        <BlogPost attributes={post.attributes} content={post.content} />
      </div>
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
