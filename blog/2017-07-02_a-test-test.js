import unified from 'unified';
import remarkParse from 'remark-parse';
import remarkWhoa from 'remark-whoa';
import React from 'react';

import Whoa from '../whoa-components';
import BlogPost from '../components/Blog/Post.js';

const whoaParse = unified().use(remarkParse).use(remarkWhoa).parse;

const attributes = {
  title: 'TESTTEST',
  slug: 'a-test-test',
  date: 'July 1, 2017',
  js: true,
};

export default () => (
  <BlogPost attributes={attributes}>
    <p>Something more paragraph.</p>
    <Whoa>{whoaParse('🕵{Should be redacted} and it is')}</Whoa>
  </BlogPost>
);
