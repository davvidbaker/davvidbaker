import Head from 'next/head';
import Link from 'next/link';
import withRedux from 'next-redux-wrapper';

import { initStore } from '../store';
import Nav from '../components/Nav';
import Phone from '../components/Phone';
import Definition from '../components/Definition';

import PageWrapper from '../components/PageWrapper';
import MeList from '../components/MeList';


const IndexPage = ({ url }) => (
  <PageWrapper title="🙃🐢">
    <Nav url={url} />
    <main style={{ padding: '10px' }}>
      <header>
        <h1>David Baker</h1>
        <h2>web developer making internet things</h2>
        <ul>
          <li>
            <a href="https://github.com/davvidbaker">
              <img src="/static/github.svg" alt="Github" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/davvidbaker">
              <img src="/static/twitter.svg" alt="Github" />
            </a>
          </li>
          <li>
            <a href="https://codepen.io/davvidbaker/">
              <img width="35px" src="/static/codepen.png" alt="Github" />
            </a>
          </li>
        </ul>
      </header>

      <article>
        <h2>Hello!</h2>
        <p>You're probably here because I am applying for a job!</p>

        <p>
          Currently,{' '}
          <strong>
            I am a developer at <a href="http://click3x.com/">Click 3X</a>
          </strong>{' '}
          in New York, New York. I have been at Click since June of 2016.
        </p>
        <p>
          I <span style={{ color: 'red' }}>❤</span> making stuff, and I love how
          quickly you can turn ideas into reality in our industry. It really is
          an awesome time to be alive and making things. I used to (
          <em>back in college</em>
          )
          focus more on the hardware side of things but have found software to
          be much more accessible now that I don't have 24/7 access to lab full
          of all the discrete electronic components I might ever need 😢.
        </p>

        <p>
          Do I know everything? <strong>Certainly not!</strong> There are{' '}
          <em>sooooo</em> many niches in our industry, <em>and</em> everything
          is in constant flux. I do, however, learn quickly, and I'm always
          working hard to fill gaps in my knowledge.
        </p>

        <p>
          <strong>You should check out the projects page</strong> to see some of
          my work. It contains a mix of client work and (unpolished) personal
          projects.
        </p>

        <hr />
        <p>Here are some things you might want to know about me:</p>
        <ul className="about-list">
          <MeList
            title="I believe in..."
            items={[
              'design that serves a purpose.',
              'the potential of the internet to make positive change in the world.',
              'myself occasionally 🙃.',
              'the merits of iterative design.',
              'a web component future 🔧.',
              'the proliferation of emoji as a stage in the evolution of written language.',
            ]}
          />
          {/* <MeList
            title="I would like to work..."
            items={[
              'alongside smart, talented people who are passionate about what they do.',
              'mostly on the front end, but I am not afraid to get my hands dirty.',
              'on useful products that I believe in.',
              'with folks who value quality code.',
            ]}
          />
          <MeList
            title="I am interested in..."
            items={[
              'new media 🤦. ',
              <span>
                <strike>virtual</strike> <strike>augmented</strike> reality.
              </span>,
              <span>
                <a href="https://www.w3.org/annotation/">
                  annotations on the web
                </a>.
              </span>,
              'the internet of things.',
              'rapid prototyping.',
              <span><strike>artificial</strike> intelligence.</span>, 'memory, especially working memory.',
              'sustainability in the tech world.', 'the future of the internet 🌐.', 'education.'

            ]}
          />
          <MeList
            title="When building websites, I care about..."
            items={[
              'the user experience.',
              'performance ⚡.',
              'accessibility.',
              'the health of the codebase.',
              'vertical rhythm.'
            ]}
          /> */}

        </ul>
      </article>
    </main>
    <style jsx>{`
      main {
        max-width: 50rem;
        margin: 0 auto;
      }

      header h1 {
        font-size: 4rem;
        text-align: center;
        margin: 0 auto;
      }

      header h2 {
        text-align: center;
        font-size: 1.5rem;
        font-weight: lighter;
        color: #999;
        margin-top: 0;
        margin-bottom: 0.75rem;
      }

      header ul {
        display: flex;
        justify-content: center;
      }

      header li {
        width: 35px;
        margin-right: 20px;
        position: relative;
      }
      header li:last-of-type {
        margin-right: 0;
      }

      header li::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;
        background: white;
        opacity: 0.5;
        pointer-events: none;
      }

      header li:hover::before {
        opacity: 0;
      }

      article {
        color: #222;
        line-height: 1.5;
      }
    `}</style>
  </PageWrapper>
);

IndexPage.getInitialProps = async ({ store, isServer }) => ({ isServer });

const mapDispatchToProps = dispatch => ({
  addCount: dispatch => ({ type: 'ADD' }),
});

export default withRedux(
  initStore,
  state => ({ ...state }),
  mapDispatchToProps
)(IndexPage);
