import Head from 'next/head';
import Link from 'next/link';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';
import Nav from '../components/Nav';

import PageWrapper from '../components/PageWrapper';

const IndexPage = () =>
  <PageWrapper title="🙃🐢">
    <Nav />
  </PageWrapper>;

IndexPage.getInitialProps = async ({ store, isServer }) => {
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
)(IndexPage);
