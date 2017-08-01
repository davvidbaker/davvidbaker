
        /**
         * This file was automatically created Tue Aug 01 2017 02:05:19 GMT-0400 (EDT)
         */
        import BlogPost from '../../components/Blog/Post.js';
         
        export default () => <BlogPost attributes={{"readTime":1.3418181818181818,"title":"Empty Document Memory","slug":"empty-space","date":"July 27, 2017"}} content={{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"My current project for work has got me diving deep into ","position":{"start":{"line":2,"column":1,"offset":1},"end":{"line":2,"column":57,"offset":57},"indent":[]}},{"type":"strong","children":[{"type":"text","value":"Chrome's memory debugging tools","position":{"start":{"line":2,"column":59,"offset":59},"end":{"line":2,"column":90,"offset":90},"indent":[]}}],"position":{"start":{"line":2,"column":57,"offset":57},"end":{"line":2,"column":92,"offset":92},"indent":[]}},{"type":"text","value":". I'm grappling with GPU memory for work, but I've always wanted to better understand ","position":{"start":{"line":2,"column":92,"offset":92},"end":{"line":2,"column":178,"offset":178},"indent":[]}},{"type":"delete","children":[{"type":"text","value":"everything","position":{"start":{"line":2,"column":180,"offset":180},"end":{"line":2,"column":190,"offset":190},"indent":[]}}],"position":{"start":{"line":2,"column":178,"offset":178},"end":{"line":2,"column":192,"offset":192},"indent":[]}},{"type":"text","value":" the memory section of the ","position":{"start":{"line":2,"column":192,"offset":192},"end":{"line":2,"column":219,"offset":219},"indent":[]}},{"type":"inlineCode","value":"Performance","position":{"start":{"line":2,"column":219,"offset":219},"end":{"line":2,"column":232,"offset":232},"indent":[]}},{"type":"text","value":" panel, also known as ","position":{"start":{"line":2,"column":232,"offset":232},"end":{"line":2,"column":254,"offset":254},"indent":[]}},{"type":"strong","children":[{"type":"text","value":"the panel formerly known as ","position":{"start":{"line":2,"column":256,"offset":256},"end":{"line":2,"column":284,"offset":284},"indent":[]}},{"type":"inlineCode","value":"Timeline","position":{"start":{"line":2,"column":284,"offset":284},"end":{"line":2,"column":294,"offset":294},"indent":[]}}],"position":{"start":{"line":2,"column":254,"offset":254},"end":{"line":2,"column":296,"offset":296},"indent":[]}},{"type":"text","value":".","position":{"start":{"line":2,"column":296,"offset":296},"end":{"line":2,"column":297,"offset":297},"indent":[]}}],"position":{"start":{"line":2,"column":1,"offset":1},"end":{"line":2,"column":297,"offset":297},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Any production web page is going to have a lot going on in a performance profile, so it is important to be able to filter out the noise and see the things that are really important. This got me wondering","position":{"start":{"line":4,"column":1,"offset":299},"end":{"line":4,"column":204,"offset":502},"indent":[]}},{"type":"ellipsis","children":[{"value":"...","type":"text"}],"position":{"start":{"line":4,"column":204,"offset":502},"end":{"line":4,"column":207,"offset":505},"indent":[]}}],"position":{"start":{"line":4,"column":1,"offset":299},"end":{"line":4,"column":207,"offset":505},"indent":[]}},{"type":"heading","depth":1,"children":[{"type":"text","value":"What does the performance profile of an empty document look like?","position":{"start":{"line":6,"column":3,"offset":509},"end":{"line":6,"column":68,"offset":574},"indent":[]}}],"position":{"start":{"line":6,"column":1,"offset":507},"end":{"line":6,"column":68,"offset":574},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"So I created an empty file, ","position":{"start":{"line":8,"column":1,"offset":576},"end":{"line":8,"column":29,"offset":604},"indent":[]}},{"type":"inlineCode","value":"memory.html","position":{"start":{"line":8,"column":29,"offset":604},"end":{"line":8,"column":42,"offset":617},"indent":[]}},{"type":"text","value":", and then opened the file from my filesystem in a Chrome incognito window. ","position":{"start":{"line":8,"column":42,"offset":617},"end":{"line":8,"column":118,"offset":693},"indent":[]}},{"type":"tangent","children":[{"type":"text","value":"I am using Chrome Canary, version 62.0.3166.0. You need to use an incognito window so extensions can be disabled―all of mine are.","position":{"start":{"line":8,"column":251,"offset":826},"end":{"line":8,"column":380,"offset":955},"indent":[]}}],"position":{"start":{"line":8,"column":118,"offset":693},"end":{"line":8,"column":251,"offset":826},"indent":[]}}],"position":{"start":{"line":8,"column":1,"offset":576},"end":{"line":8,"column":251,"offset":826},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"I started a performance profile recording with the ","position":{"start":{"line":10,"column":1,"offset":828},"end":{"line":10,"column":52,"offset":879},"indent":[]}},{"type":"inlineCode","value":"Memory","position":{"start":{"line":10,"column":52,"offset":879},"end":{"line":10,"column":60,"offset":887},"indent":[]}},{"type":"text","value":" checkbox checked,then reloaded the page manually and recorded for about 10 seconds. ","position":{"start":{"line":10,"column":60,"offset":887},"end":{"line":10,"column":145,"offset":972},"indent":[]}},{"type":"emphasis","children":[{"type":"text","value":"I couldn't rely on the start profiling and reload option ","position":{"start":{"line":10,"column":146,"offset":973},"end":{"line":10,"column":203,"offset":1030},"indent":[]}},{"type":"inlineCode","value":"⌘⇧E","position":{"start":{"line":10,"column":203,"offset":1030},"end":{"line":10,"column":208,"offset":1035},"indent":[]}},{"type":"text","value":", because it stops recording before I wanted it to.","position":{"start":{"line":10,"column":208,"offset":1035},"end":{"line":10,"column":259,"offset":1086},"indent":[]}}],"position":{"start":{"line":10,"column":145,"offset":972},"end":{"line":10,"column":260,"offset":1087},"indent":[]}}],"position":{"start":{"line":10,"column":1,"offset":828},"end":{"line":10,"column":260,"offset":1087},"indent":[]}},{"type":"heading","depth":3,"children":[{"type":"text","value":"I expected to see a profile that looked something like this 👇.","position":{"start":{"line":12,"column":5,"offset":1093},"end":{"line":12,"column":68,"offset":1156},"indent":[]}}],"position":{"start":{"line":12,"column":1,"offset":1089},"end":{"line":12,"column":68,"offset":1156},"indent":[]}},{"type":"paragraph","children":[{"type":"image","title":null,"url":"/static/blog/expected-profile.png","alt":"expected-profile.png","position":{"start":{"line":14,"column":1,"offset":1158},"end":{"line":14,"column":59,"offset":1216},"indent":[]}}],"position":{"start":{"line":14,"column":1,"offset":1158},"end":{"line":14,"column":59,"offset":1216},"indent":[]}},{"type":"heading","depth":3,"children":[{"type":"text","value":"But what I actually got looked like this 👇.","position":{"start":{"line":16,"column":5,"offset":1222},"end":{"line":16,"column":49,"offset":1266},"indent":[]}}],"position":{"start":{"line":16,"column":1,"offset":1218},"end":{"line":16,"column":49,"offset":1266},"indent":[]}},{"type":"paragraph","children":[{"type":"image","title":null,"url":"/static/blog/actual-profile.png","alt":"actual-profile.png","position":{"start":{"line":18,"column":1,"offset":1268},"end":{"line":18,"column":55,"offset":1322},"indent":[]}}],"position":{"start":{"line":18,"column":1,"offset":1268},"end":{"line":18,"column":55,"offset":1322},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Get the profile ","position":{"start":{"line":20,"column":1,"offset":1324},"end":{"line":20,"column":17,"offset":1340},"indent":[]}},{"type":"link","title":null,"url":"/static/blog/Profile-empty-document","children":[{"type":"text","value":"here","position":{"start":{"line":20,"column":18,"offset":1341},"end":{"line":20,"column":22,"offset":1345},"indent":[]}}],"position":{"start":{"line":20,"column":17,"offset":1340},"end":{"line":20,"column":60,"offset":1383},"indent":[]}},{"type":"text","value":".","position":{"start":{"line":20,"column":60,"offset":1383},"end":{"line":20,"column":61,"offset":1384},"indent":[]}}],"position":{"start":{"line":20,"column":1,"offset":1324},"end":{"line":20,"column":61,"offset":1384},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Okay, so actually, I understand where the flat tail at the end of that image is coming from, mostly.","position":{"start":{"line":22,"column":1,"offset":1386},"end":{"line":22,"column":101,"offset":1486},"indent":[]}}],"position":{"start":{"line":22,"column":1,"offset":1386},"end":{"line":22,"column":101,"offset":1486},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Zoomed in on the tail, it looks like this 👇.","position":{"start":{"line":24,"column":1,"offset":1488},"end":{"line":24,"column":46,"offset":1533},"indent":[]}}],"position":{"start":{"line":24,"column":1,"offset":1488},"end":{"line":24,"column":46,"offset":1533},"indent":[]}},{"type":"paragraph","children":[{"type":"image","title":null,"url":"/static/blog/actual-profile-tail.png","alt":"actual-profile-tail.png","position":{"start":{"line":26,"column":1,"offset":1535},"end":{"line":26,"column":65,"offset":1599},"indent":[]}}],"position":{"start":{"line":26,"column":1,"offset":1535},"end":{"line":26,"column":65,"offset":1599},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"This is the memory profile ","position":{"start":{"line":28,"column":1,"offset":1601},"end":{"line":28,"column":28,"offset":1628},"indent":[]}},{"type":"emphasis","children":[{"type":"text","value":"after","position":{"start":{"line":28,"column":29,"offset":1629},"end":{"line":28,"column":34,"offset":1634},"indent":[]}}],"position":{"start":{"line":28,"column":28,"offset":1628},"end":{"line":28,"column":35,"offset":1635},"indent":[]}},{"type":"text","value":" a ","position":{"start":{"line":28,"column":35,"offset":1635},"end":{"line":28,"column":38,"offset":1638},"indent":[]}},{"type":"strong","children":[{"type":"text","value":"major ","position":{"start":{"line":28,"column":40,"offset":1640},"end":{"line":28,"column":46,"offset":1646},"indent":[]}},{"type":"link","title":null,"url":"https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)","children":[{"type":"text","value":"garbage collection","position":{"start":{"line":28,"column":47,"offset":1647},"end":{"line":28,"column":65,"offset":1665},"indent":[]}}],"position":{"start":{"line":28,"column":46,"offset":1646},"end":{"line":28,"column":135,"offset":1735},"indent":[]}}],"position":{"start":{"line":28,"column":38,"offset":1638},"end":{"line":28,"column":137,"offset":1737},"indent":[]}},{"type":"text","value":" 👆, which you can see if you ","position":{"start":{"line":28,"column":137,"offset":1737},"end":{"line":28,"column":167,"offset":1767},"indent":[]}},{"type":"link","title":null,"url":"/static/blog/Profile-empty-document","children":[{"type":"text","value":"get the profile","position":{"start":{"line":28,"column":168,"offset":1768},"end":{"line":28,"column":183,"offset":1783},"indent":[]}}],"position":{"start":{"line":28,"column":167,"offset":1767},"end":{"line":28,"column":221,"offset":1821},"indent":[]}},{"type":"text","value":" and follow along.","position":{"start":{"line":28,"column":221,"offset":1821},"end":{"line":28,"column":239,"offset":1839},"indent":[]}}],"position":{"start":{"line":28,"column":1,"offset":1601},"end":{"line":28,"column":239,"offset":1839},"indent":[]}},{"type":"list","ordered":false,"start":null,"loose":false,"children":[{"type":"listItem","loose":false,"checked":null,"children":[{"type":"paragraph","children":[{"type":"text","value":"We've got 1 document, as expected.","position":{"start":{"line":31,"column":3,"offset":1844},"end":{"line":31,"column":37,"offset":1878},"indent":[]}}],"position":{"start":{"line":31,"column":3,"offset":1844},"end":{"line":31,"column":37,"offset":1878},"indent":[]}}],"position":{"start":{"line":31,"column":1,"offset":1842},"end":{"line":31,"column":37,"offset":1878},"indent":[]}},{"type":"listItem","loose":false,"checked":null,"children":[{"type":"paragraph","children":[{"type":"text","value":"We have 0 listeners, as expected.","position":{"start":{"line":32,"column":3,"offset":1881},"end":{"line":32,"column":36,"offset":1914},"indent":[]}}],"position":{"start":{"line":32,"column":3,"offset":1881},"end":{"line":32,"column":36,"offset":1914},"indent":[]}}],"position":{"start":{"line":32,"column":1,"offset":1879},"end":{"line":32,"column":36,"offset":1914},"indent":[]}},{"type":"listItem","loose":false,"checked":null,"children":[{"type":"paragraph","children":[{"type":"text","value":"We have 4 nodes, which Chrome will automatically generate for every HTML page: ","position":{"start":{"line":33,"column":3,"offset":1917},"end":{"line":33,"column":82,"offset":1996},"indent":[]}},{"type":"inlineCode","value":"document","position":{"start":{"line":33,"column":82,"offset":1996},"end":{"line":33,"column":92,"offset":2006},"indent":[]}},{"type":"text","value":", ","position":{"start":{"line":33,"column":92,"offset":2006},"end":{"line":33,"column":94,"offset":2008},"indent":[]}},{"type":"inlineCode","value":"html","position":{"start":{"line":33,"column":94,"offset":2008},"end":{"line":33,"column":100,"offset":2014},"indent":[]}},{"type":"text","value":", ","position":{"start":{"line":33,"column":100,"offset":2014},"end":{"line":33,"column":102,"offset":2016},"indent":[]}},{"type":"inlineCode","value":"head","position":{"start":{"line":33,"column":102,"offset":2016},"end":{"line":33,"column":108,"offset":2022},"indent":[]}},{"type":"text","value":", and ","position":{"start":{"line":33,"column":108,"offset":2022},"end":{"line":33,"column":114,"offset":2028},"indent":[]}},{"type":"inlineCode","value":"body","position":{"start":{"line":33,"column":114,"offset":2028},"end":{"line":33,"column":120,"offset":2034},"indent":[]}},{"type":"text","value":".","position":{"start":{"line":33,"column":120,"offset":2034},"end":{"line":33,"column":121,"offset":2035},"indent":[]}}],"position":{"start":{"line":33,"column":3,"offset":1917},"end":{"line":33,"column":121,"offset":2035},"indent":[]}}],"position":{"start":{"line":33,"column":1,"offset":1915},"end":{"line":33,"column":121,"offset":2035},"indent":[]}}],"position":{"start":{"line":31,"column":1,"offset":1842},"end":{"line":33,"column":121,"offset":2035},"indent":[1,1]}},{"type":"paragraph","children":[{"type":"image","title":null,"url":"/static/blog/dom-tree-4.svg","alt":"dom-tree-4.svg","position":{"start":{"line":35,"column":1,"offset":2037},"end":{"line":35,"column":47,"offset":2083},"indent":[]}}],"position":{"start":{"line":35,"column":1,"offset":2037},"end":{"line":35,"column":47,"offset":2083},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"What I don't understand about the tail is why we have any JavaScript heap at all 🤔. ","position":{"start":{"line":37,"column":1,"offset":2085},"end":{"line":37,"column":86,"offset":2170},"indent":[]}},{"type":"normative","id":"normative-H1ZzDX9qT8b","children":[{"type":"text","value":"I should "},{"type":"text","value":"come back to that later.","position":{"start":{"line":37,"column":86,"offset":2170},"end":{"line":37,"column":110,"offset":2194},"indent":[]}}],"position":{"start":{"line":37,"column":86,"offset":2170},"end":{"line":37,"column":119,"offset":2203},"indent":[]}}],"position":{"start":{"line":37,"column":1,"offset":2085},"end":{"line":37,"column":119,"offset":2203},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"My big question is this:","position":{"start":{"line":39,"column":1,"offset":2205},"end":{"line":39,"column":25,"offset":2229},"indent":[]}}],"position":{"start":{"line":39,"column":1,"offset":2205},"end":{"line":39,"column":25,"offset":2229},"indent":[]}},{"type":"heading","depth":2,"children":[{"type":"text","value":"What are the other 4 documents and 71 nodes that are generated and then cleaned up after a few seconds?","position":{"start":{"line":41,"column":4,"offset":2234},"end":{"line":41,"column":107,"offset":2337},"indent":[]}}],"position":{"start":{"line":41,"column":1,"offset":2231},"end":{"line":41,"column":107,"offset":2337},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"This kind of thing is very difficult to Google.","position":{"start":{"line":43,"column":1,"offset":2339},"end":{"line":43,"column":48,"offset":2386},"indent":[]}}],"position":{"start":{"line":43,"column":1,"offset":2339},"end":{"line":43,"column":48,"offset":2386},"indent":[]}},{"type":"paragraph","children":[{"type":"search","children":[{"type":"text","value":"chrome empty document generated documents","position":{"start":{"line":45,"column":46,"offset":2433},"end":{"line":45,"column":87,"offset":2474},"indent":[]}}],"position":{"start":{"line":45,"column":1,"offset":2388},"end":{"line":45,"column":46,"offset":2433},"indent":[]}}],"position":{"start":{"line":45,"column":1,"offset":2388},"end":{"line":45,"column":46,"offset":2433},"indent":[]}},{"type":"paragraph","children":[{"type":"search","children":[{"type":"text","value":"garbage collected documents after page loads","position":{"start":{"line":47,"column":49,"offset":2483},"end":{"line":47,"column":93,"offset":2527},"indent":[]}}],"position":{"start":{"line":47,"column":1,"offset":2435},"end":{"line":47,"column":49,"offset":2483},"indent":[]}}],"position":{"start":{"line":47,"column":1,"offset":2435},"end":{"line":47,"column":49,"offset":2483},"indent":[]}},{"type":"paragraph","children":[{"type":"search","children":[{"type":"text","value":"performance timeline shows extra documents","position":{"start":{"line":49,"column":47,"offset":2531},"end":{"line":49,"column":89,"offset":2573},"indent":[]}}],"position":{"start":{"line":49,"column":1,"offset":2485},"end":{"line":49,"column":47,"offset":2531},"indent":[]}}],"position":{"start":{"line":49,"column":1,"offset":2485},"end":{"line":49,"column":47,"offset":2531},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"So far, I really haven't gotten anywhere with an answer to this.","position":{"start":{"line":51,"column":1,"offset":2533},"end":{"line":51,"column":65,"offset":2597},"indent":[]}}],"position":{"start":{"line":51,"column":1,"offset":2533},"end":{"line":51,"column":65,"offset":2597},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Further research is needed.","position":{"start":{"line":53,"column":1,"offset":2599},"end":{"line":53,"column":28,"offset":2626},"indent":[]}}],"position":{"start":{"line":53,"column":1,"offset":2599},"end":{"line":53,"column":28,"offset":2626},"indent":[]}}],"position":{"start":{"line":1,"column":1,"offset":0},"end":{"line":54,"column":1,"offset":2627}}}} />;
  