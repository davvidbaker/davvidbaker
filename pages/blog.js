import withRedux from 'next-redux-wrapper';
import dynamic from 'next/dynamic';

import test from '../out_blog/posts/2017-03-23_things-are-lookin-up.js';
import PageWrapper from '../components/PageWrapper';
// import { posts } from '../internals/out_blog/output_blog_posts.js';
import posts from '../out_blog/lookupTable';
import PostList from '../components/Blog/PostList';
// import BlogPost from '../components/Blog/Post';
import BlogGlobalStyles from '../components/Blog/styles';

import { initStore } from '../store';
import Nav from '../components/Nav';

const str = 'components/Phone';
console.log('posts', posts);
// const DynamicBlogPost = (filename) => {
//   const { attributes, content } = test; // dynamic(import(`../out_blog/posts/${filename}`));

//   debugger;
//   return <BlogPost attributes={attributes} content={content} />;
// };

const BlogPage = ({ url }) => {
  const post = url.query.slug && posts.find(post => url.query.slug === post.slug);
  let Component;
  if (post) {
    Component = post.component;
  }
  return post
    ? <PageWrapper title={post.title}>
      <Component />
        <BlogGlobalStyles />
    </PageWrapper>
    : <PageWrapper title="🙃🐢 Blog">
      <Nav url={url} />
      <main style={{ marginLeft: '10px' }}>
        <div className="left-container" style={{maxWidth: '50rem', margin: '0 auto'}}>
          <p style={{textAlign: 'right'}}>
              This mostly contains unedited stream-of-consciousness writing.
            </p>
          <p style={{textAlign: 'right'}}>
            <em>
              {' '}The more interesting project is the paratext of the blog
                itself.
              </em>
          </p>
          <PostList posts={posts} />
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
          right: 0
        }}
      />
      <BlogGlobalStyles />
    </PageWrapper>;
};

BlogPage.getInitialProps = async ({ store, isServer }) => ({ isServer });

const mapDispatchToProps = dispatch => ({
  addCount: dispatch => ({ type: 'ADD' })
});

export default withRedux(initStore, state => ({ ...state }), mapDispatchToProps)(BlogPage);
