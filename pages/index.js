import Head from 'next/head';
import Link from 'next/link';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';

import PageWrapper from '../components/PageWrapper';

const IndexPage = () =>
  <PageWrapper title="🙃🐢">

    <style jsx>
      {`

      `}
    </style>
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
