import remarkWhoa from 'remark-whoa';
import unified from 'unified';
import remarkParse from 'remark-parse';
import * as marky from 'marky';

import Whoa from '../whoa-components';
import Phone from '../components/Phone';
import Definition from '../components/Definition';

const whoaParse = unified().use(remarkParse).use(remarkWhoa).parse;

const Sample = () => {
  marky.mark('whoa Parse')
  const content = whoaParse(
    `
# Writing with \`.whoa\` inside of javascript files
My expectation that it would be expensive to use [remark](https://github.com/wooorm/remark) to parse files during runtime was completely wrong. **Remark is very fast.**

I profiled the toll that parsing a chunk of \`.whoa\`, which is not much more than just using [Woorm](https://github.com/wooorm)'s [unified module](https://unifiedjs.github.io/) and [remark-parse module](https://github.com/wooorm/remark/tree/master/packages/remark-parse)—
\`unified().use(remarkParse).use(remarkWhoa).parse\`. I used [marky](https://github.com/nolanlawson/marky) to take care of the intricacies of some of the performance measurements. You can profile this page yourself in the Chrome DevTools Performance pane—I've left the User Timing measurement in there, but if you don't want to do that, here's a snapshot.

![whoa-parse-profile](/static/blog/whoa-parse-profile.png) 

So it shows parsing a few paragraphs of \`.whoa\` took 288.74 ms, but take note that this is with *10x CPU slowdown* on. 

## Anyways, the whole thing gets prebuilt into html ahead of time, so it isn't really a concern.
 `);
  marky.stop('whoa Parse');
  return <div>      <Definition word="chthonic" ipa={`\/ˈθɒnɪk\/`} PoS="adjective">concerning, belonging to, or inhabiting the underworld: a chthonic deity.</Definition>
      <Phone /> <Whoa content={content} /></div>;
};

export default Sample;
