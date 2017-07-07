import unified from 'unified';
import remarkParse from 'remark-parse';
import remarkWhoa from 'remark-whoa';
import React from 'react';

import Whoa from '../whoa-components';
import BlogPost from '../components/Blog/Post.js';
import Phone from '../components/Phone.js';
import Message from '../components/Message.js';
import Messenger from '../components/Messenger.js';

const whoaParse = unified().use(remarkParse).use(remarkWhoa).parse;

const attributes = {
  title: 'What am I trying to do here?',
  slug: 'that-was-bad',
  date: 'July 7, 2017',
  js: true,
};

export default () => (
  <BlogPost attributes={attributes}>

    <p>That last post (Coffee) is rather painful to read.</p>

    <p>
      I had wanted to write something using that new phone messenger component, but that post didn't really lend itself to it. I'm not happy with how the phone component looks some of the time in landscape, but I don't feel like fixing it right now either.
    </p>

    <div className="full-width">
    <Phone>
      <Messenger className="messenger" name="You">
        <Message me>
          <h1>You there, reader.</h1>
        </Message>

        <Message me>
          <h3>It's me.</h3>
        </Message>

        <Message>
          <p>Me?</p><br /><br />
          <strong>You</strong> can't be <em>me</em>.
        </Message>

        <Message style={{ background: 'gold', color: 'black' }}>
          <h1>Who am I in this situation?</h1>
        </Message>

        <Message me>
          <p>
            You tell me.
          </p>
        </Message>

        <Message>
          <p>Does anyone else find this a bit annoying?</p>
        </Message>

        <Message>
          <p>I bet <strong>you</strong> do.</p>
        </Message>

        <Message me>
          <h2>How about an h2?</h2>
          <h1>These look the same no.</h1>
        </Message>

        <Message>
          <h1>What does this look like</h1>
        </Message>
        <Message me>
          <p>Hello</p>
        </Message>

        <Message>
          <p>It's me</p>
        </Message>

        <Message>
          <h1>What does this look like</h1>
        </Message>

        <Message>
          <p>
            A bunch ot text as;fljasd;fljkas;df j;ksafj;kja sh sjd hjsasjhd slafhj a;sdjf;alsf jl;asjdf; hkj;hlj
          </p>
        </Message>

        <Message me>
          <h1>What does this look like</h1>
        </Message>

        <Message>
          <h1>What does this look like</h1>
        </Message>
        <Message me>
          <p>Hello</p>
        </Message>

        <Message>
          <p>It's me</p>
        </Message>

        <Message>
          <h1>What does this look like</h1>
        </Message>

        <Message>
          <p>
            A bunch ot text as;fljasd;fljkas;df j;ksafj;kja sh sjd hjsasjhd slafhj a;sdjf;alsf jl;asjdf; hkj;hlj
          </p>
        </Message>

        <Message me>
          <h1>What does this look f</h1>
        </Message>

      </Messenger>

    </Phone>
    </div>
    <style jsx>{`
            p, h1, h2, h3, h4 {
        margin: 0.25rem;
        display: inline-block;
      }
`}</style>
  </BlogPost>
);
