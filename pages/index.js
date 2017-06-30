import Head from 'next/head';
import Link from 'next/link';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';
import Nav from '../components/Nav';
import Phone from '../components/Phone';

import PageWrapper from '../components/PageWrapper';

const IndexPage = ({ url }) =>
  <PageWrapper title="🙃🐢">
    <Nav url={url} />
    <main style={{ padding: '10px' }}>
      <Phone />
      <h2>Hello!</h2>
      <p>
        If you've gotten here, it's probably because I am applying for a job!
      </p>
      <p>
        <label htmlFor="traditional">
          Would you like to see a more traditional cover letter?
        </label>
        <input type="checkbox" id="traditional" />
      </p>

      <p>
        You should check out the projects page. A lot of stuff on there is
        unpolished personal projects, but still worth a look.
      </p>

      <p>
        These days, <strong>I am a frontend developer.</strong> I love making
        stuff, and I love the pace that comes with with writing software.
      </p>

      <p>
        I used to (back in college) focus more on the hardware side of things
        but have found software to be much more accessible now that I don't have
        24/7 access to lab full of all the discrete electronic components I
        might ever need 😢.
      </p>

      <p>
        Do I know everything? <strong>Certainly not!</strong> There is sooooo
        much to learn about in our industry and the world, at times it can be
        overwhelming. I do however, learn quickly and I am eager to fill gaps in
        my knowledge.
      </p>

      <p>I am drawn to good ol' clean design that serves a purpose.</p>

      <p>...</p>
    </main>
    <style jsx global>
      {`
        body {
          --color-border: darkslategray;
        }
      `}
    </style>
  </PageWrapper>;

IndexPage.getInitialProps = async ({ store, isServer }) => ({ isServer });

const mapDispatchToProps = dispatch => ({
  addCount: dispatch => ({ type: 'ADD' }),
});

export default withRedux(
  initStore,
  state => ({ ...state }),
  mapDispatchToProps
)(IndexPage);
