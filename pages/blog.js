import withRedux from 'next-redux-wrapper';

import PageWrapper from '../components/PageWrapper';
import BlogPost from '../components/BlogPost';
import { initStore } from '../store';
import dynamic from 'next/dynamic'
const {attributes, content} = dynamic(
  import('../blog/test.whoa'),
  { ssr: false }
)
console.log(content);

const BlogPage = ({ url }) =>
  <PageWrapper>
    <h1>BLOG</h1>
    <BlogPost attributes={attributes} content={content} />
  </PageWrapper>;

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
