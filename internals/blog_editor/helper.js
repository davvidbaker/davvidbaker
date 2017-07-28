// import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import React from 'react';

import PageWrapper from 'components/PageWrapper';
import { posts } from 'internals/out_blog/output_blog_posts.js';
import PostList from 'components/Blog/PostList';
import BlogPost from 'components/Blog/Post';
import BlogGlobalStyles from 'components/Blog/styles';

import { initStore } from '../../store';
import Nav from 'components/Nav';

// import post from 'blog/2017-06-30_phone-messenger-component.whoa';

import Post from 'blog/2017-07-28_empty-space.whoa';
// console.log(post);

const BlogPage = ({ addCount }) => {
  return (
    <PageWrapper title={Post.attributes.title}>
      <BlogPost attributes={Post.attributes} content={Post.content} />
      <BlogGlobalStyles />
    </PageWrapper>
  );
};


// const BlogPage = ({ addCount }) => (
//   <PageWrapper title="BLOG POST EDITOR">
//     <Post />
//     <BlogGlobalStyles />
//   </PageWrapper>
//   );

// const mapDispatchToProps = dispatch => ({
//   addCount: dispatch => ({ type: 'ADD' }),
// });

const RootComp = () => <Provider store={initStore()}><BlogPage /></Provider>;

export default RootComp;
