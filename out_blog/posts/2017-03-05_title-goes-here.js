
        /**
         * This file was automatically created Thu Jul 20 2017 23:58:53 GMT-0500 (CDT)
         */
        import BlogPost from '../../components/Blog/Post.js';
         
        export default () => <BlogPost attributes={{"readTime":0.8545454545454545,"title":"The Post Title Goes Here","slug":"title-goes-here","date":"March 12, 2017"}} content={{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Gosh darn I need to sit down and actually figure out how it is I want to organize posts. I need to set up dynamic routing. It would probably be nice to have things set up so I can just run ","position":{"start":{"line":2,"column":1,"offset":1},"end":{"line":2,"column":190,"offset":190},"indent":[]}},{"type":"inlineCode","value":"npm run generate post {posttitle}","position":{"start":{"line":2,"column":190,"offset":190},"end":{"line":2,"column":225,"offset":225},"indent":[]}},{"type":"text","value":" and boom new post with everything set up. Eventually a gui might be nice.","position":{"start":{"line":2,"column":225,"offset":225},"end":{"line":2,"column":299,"offset":299},"indent":[]}}],"position":{"start":{"line":2,"column":1,"offset":1},"end":{"line":2,"column":299,"offset":299},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"I really need to decide whether ","position":{"start":{"line":4,"column":1,"offset":301},"end":{"line":4,"column":33,"offset":333},"indent":[]}},{"type":"strong","children":[{"type":"text","value":"vim","position":{"start":{"line":4,"column":35,"offset":335},"end":{"line":4,"column":38,"offset":338},"indent":[]}}],"position":{"start":{"line":4,"column":33,"offset":333},"end":{"line":4,"column":40,"offset":340},"indent":[]}},{"type":"text","value":" is doing me good. I do like that it has made me more comfortable editing files in the terminal, which is useful when working on remote machines. The downside has been not necessarily with regards to ","position":{"start":{"line":4,"column":40,"offset":340},"end":{"line":4,"column":240,"offset":540},"indent":[]}},{"type":"strong","children":[{"type":"text","value":"vim","position":{"start":{"line":4,"column":242,"offset":542},"end":{"line":4,"column":245,"offset":545},"indent":[]}}],"position":{"start":{"line":4,"column":240,"offset":540},"end":{"line":4,"column":247,"offset":547},"indent":[]}},{"type":"text","value":", but rather the vim extension for ","position":{"start":{"line":4,"column":247,"offset":547},"end":{"line":4,"column":282,"offset":582},"indent":[]}},{"type":"strong","children":[{"type":"text","value":"VS Code","position":{"start":{"line":4,"column":284,"offset":584},"end":{"line":4,"column":291,"offset":591},"indent":[]}}],"position":{"start":{"line":4,"column":282,"offset":582},"end":{"line":4,"column":293,"offset":593},"indent":[]}},{"type":"text","value":". There are certain functionalities that it takes away from me. For instance, CTRL+D ought to highlight the next instance of the currently highlighted word, instead it looks like it decrements the indentation. Maybe that is actually a vim command? It is quite possible I just mostly need to learn more vim commands. The problem is that vim commands are not implemented perfectly in the extension either. Like global find replace with confirmation. ","position":{"start":{"line":4,"column":293,"offset":593},"end":{"line":4,"column":741,"offset":1041},"indent":[]}},{"type":"inlineCode","value":":%s/foo/bar/gc","position":{"start":{"line":4,"column":741,"offset":1041},"end":{"line":4,"column":757,"offset":1057},"indent":[]}},{"type":"text","value":" By the way, this is regarding the extension ","position":{"start":{"line":4,"column":757,"offset":1057},"end":{"line":4,"column":802,"offset":1102},"indent":[]}},{"type":"link","title":null,"url":"https://github.com/VSCodeVim/Vim","children":[{"type":"text","value":"Vim v0.6.2","position":{"start":{"line":4,"column":803,"offset":1103},"end":{"line":4,"column":813,"offset":1113},"indent":[]}}],"position":{"start":{"line":4,"column":802,"offset":1102},"end":{"line":4,"column":848,"offset":1148},"indent":[]}},{"type":"text","value":". ","position":{"start":{"line":4,"column":848,"offset":1148},"end":{"line":4,"column":850,"offset":1150},"indent":[]}},{"type":"normative","id":"normative-BkrG9byU-","children":[{"type":"text","value":"I should "},{"type":"text","value":"look at the codebase and see if it might be worthwhile to try to make some PRs.","position":{"start":{"line":4,"column":850,"offset":1150},"end":{"line":4,"column":929,"offset":1229},"indent":[]}}],"position":{"start":{"line":4,"column":850,"offset":1150},"end":{"line":4,"column":938,"offset":1238},"indent":[]}},{"type":"text","value":" ","position":{"start":{"line":4,"column":938,"offset":1238},"end":{"line":4,"column":939,"offset":1239},"indent":[]}},{"type":"normative","id":"normative-ByxrG5ZyLZ","children":[{"type":"text","value":"I should "},{"type":"text","value":"do this.","position":{"start":{"line":4,"column":939,"offset":1239},"end":{"line":4,"column":947,"offset":1247},"indent":[]}}],"position":{"start":{"line":4,"column":939,"offset":1239},"end":{"line":4,"column":956,"offset":1256},"indent":[]}},{"type":"text","value":" ","position":{"start":{"line":4,"column":956,"offset":1256},"end":{"line":4,"column":957,"offset":1257},"indent":[]}},{"type":"normative","id":"normative-Sy-rM9Z1U-","children":[{"type":"text","value":"I should "},{"type":"text","value":"should should .","position":{"start":{"line":4,"column":957,"offset":1257},"end":{"line":4,"column":972,"offset":1272},"indent":[]}}],"position":{"start":{"line":4,"column":957,"offset":1257},"end":{"line":4,"column":981,"offset":1281},"indent":[]}},{"type":"text","value":" ","position":{"start":{"line":4,"column":981,"offset":1281},"end":{"line":4,"column":982,"offset":1282},"indent":[]}},{"type":"normative","id":"normative-HyfrfcZy8W","children":[{"type":"text","value":"I should "},{"type":"text","value":"do that.","position":{"start":{"line":4,"column":982,"offset":1282},"end":{"line":4,"column":990,"offset":1290},"indent":[]}}],"position":{"start":{"line":4,"column":982,"offset":1282},"end":{"line":4,"column":999,"offset":1299},"indent":[]}}],"position":{"start":{"line":4,"column":1,"offset":301},"end":{"line":4,"column":999,"offset":1299},"indent":[]}}],"position":{"start":{"line":1,"column":1,"offset":0},"end":{"line":4,"column":999,"offset":1299}}}} />;
  