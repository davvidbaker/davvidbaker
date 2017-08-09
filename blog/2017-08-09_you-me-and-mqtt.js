import unified from 'unified';
import remarkParse from 'remark-parse';
import remarkWhoa from 'remark-whoa';
import React from 'react';

import Whoa from '../whoa-components';
import MeList from '../components/MeList.js';
import BlogPost from '../components/Blog/Post.js';

const whoaParse = unified().use(remarkParse).use(remarkWhoa).parse;

const attributes = {
  title: 'Great Slug',
  slug: 'you-me-and-mqtt',
  date: 'August 9, 2017',
  js: true,
};

export default () => (
  <BlogPost attributes={attributes}>
    <MeList
      title="I want"
      items={[
        'lots of things.',
        "to tell you about what I've been learning recently.",
        'more time.',
      ]}
    />
    <p>
      There's certain things about composabililitlity that differ from framework to framework.
    </p>
    <Whoa>
      {whoaParse(
        'It took me far to long to just get to editing this post. I should definitely fix that ASAP. There are a bunch of things that I should do better.'
      )}
    </Whoa>
    <MeList
      title="This is a good space to practice"
      items={[
        'refactoring.',
        'maintaining.',
        'sustaining.',
        'experimenting.',
        'comparadacting.',
      ]}
    />

    <Whoa>
      {whoaParse(
        `
## I should look at prettier's source code. I wonder how easy it is to intercept its AST.

I just came across this quote for the first time.
> When applications are done well, they are just the really application-specific, brackish residue that can't be so easily abstracted away. All the nice, reusable components sublimate away onto github and npm where everybody can collaborate to advance the commons.

— substack from "how I write modules"

Really quick. **Idea** for learning a codebase. Visuals traces expressed as a graph of the traces through the files, functions, etc. I should make that happen.
`

      )}
    </Whoa>

    <style global jsx>{`
        article li {
          list-style: none !important;
        }
        `}</style>
  </BlogPost>
);
