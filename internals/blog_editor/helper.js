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

import post from 'blog/2017-06-30_phone-messenger-component.whoa';

console.log(post);

const BlogPage = ({ addCount }) => {
  return (
    <PageWrapper title={post.attributes.title} includeTweenMax>
      <BlogPost attributes={post.attributes} content={post.content} />
      <BlogGlobalStyles />
    </PageWrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addCount: dispatch => ({ type: 'ADD' }),
  };
};

// const RootComp = withRedux(
//   initStore,
//   state => ({ ...state }),
//   mapDispatchToProps
// )(BlogPage);

const RootComp = () => <Provider store={initStore()}><BlogPage /></Provider>;

export default RootComp;
