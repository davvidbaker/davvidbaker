/**
 * using RequireJS export because I am using this in next.config.js for dynamic routes
 */
module.exports = {
  PROJECTS: [
    {
      name: 'Whoa',
      status: ['active development', 'darkmagenta'],
      tagline: 'An exploration of writing with custom markup and components.',
      year: [2017],
    },
    {
      name: 'Swyzzle',
      year: [2016],
      tagline: 'The screensaver revolution has begun.',
      status: ["i'll be back", 'midnightblue'],
      callToAction: 'Get swyzzling!',
      description: 'Swyzzle is a screensaver that **melts your screen**. \n\n Back when I was working in the Click 3X office in New York, I would activate the screen melting when I went out for lunch or to meetings, to make it look like my screen was fucked up. To my surprise, *no one ever said anything.*\n\nRight now **it only works on macOS and Linux** (Ubuntu, not sure about other distros). And it does not yet support multiple displays.',
      keywords: ['Electron', 'WebGL'],
      link: 'https://davvidbaker.github.io/Swyzzle/',
      linkToSource: 'https://github.com/davvidbaker/Swyzzle',
      linkToTrello: 'https://trello.com/b/fAycvoLY/swyzzle',
      logo: '/static/swyzzle-logo.svg',
      images: [],
      videos: ['/static/swyzzle_fast_small.mp4'],
    },
    {
      name: 'Box Man',
      status: ['unpolished', 'olivedrab'],
      year: [2015, 2017],
      tagline: 'A reality experiment of sorts.',
      description: 'Box Man is an out of body experience that uses a Google Cardboard head mounted display to enable you to experience your life from outside of your body. A friend records you with a second mobile device, and this stream is then beamed in real time to the Cardboard on your face, resulting in real time third person perspective of yourself.',
      callToAction: 'Do It!',
      link: 'https://davvidbaker.github.io/BoxMan/about',
      linkToSource: 'https://github.com/davvidbaker/BoxMan',
      linkToTrello: 'https://trello.com/b/6r04R3fb/box-man',
      logo: '/static/boxman-boxman.png',
      images: ['/static/boxman-boxman.png', '/static/boxman-cameraguy.png'],
      keywords: ['VR', 'AR', 'Performance Art', 'WebRTC'],
    },

    {
      name: 'La Mer',
      year: [2016],
      agency: 'Click 3X',
      role: 'Lead Developer',
      status: ['shipped', 'green'],
      tagline: "A 360 advertising experience made for La Mer's revitalizing hydrating serum campaign.",
      description: 'We (*Click 3X*) were tasked by La Mer to create an **immersive 360 experience** to bring to life the brand’s 2D marketing video for the new *Revitalizing Hydrating Serum*. Our team designed a 3D world, incorporating animation, interactive hot spots, and creative transitions between the scenes. The experience was developed in HTML5, translated into 11 languages, and is compatible across mobile and desktop devices.',
      callToAction: 'Paradise awaits...',
      link: 'http://experience.cremedelamer.com/',
      keywords: ['three.js', 'WebGL'],
      videos: ['/static/La_Mer_Demo.mp4'],
    },

    {
      name: 'Puppy Club',
      year: [2016, 2017],
      agency: 'Click 3X',
      role: 'Lead Developer',
      tagline: "A cross-platform kids' game that was the bane of my existence for about a year.",
      keywords: ['Phaser', 'HTML5 Game'],
    },

    {
      name: 'Typography',
      year: [2015],
      tagline: 'Since first grade, I had dreamed of turning my handwriting into a font.',
      description: 'Since first grade, I had dreamed of turning my handwriting into a font. **Dream achieved**.\n\nI also made a custom font for typing common characters from the International Phonetic Alphabet, for when one is wont to write phonetically.',
      callToAction: 'Get the fonts!',
      link: 'https://github.com/davvidbaker/fonts/wiki/Fonts',
      images: ['/static/typography.png']
    },

    {
      name: 'Wedding Card',
      year: [2016],
      status: ['shipped', 'green'],
      tagline: 'A card for my brother and his now-wife. ',
      link: 'https://davvidbaker.github.io/wedding-card/index.html',
      linkToSource: 'https://github.com/davvidbaker/wedding-card',
      keywords: ['Phaser'],
    },

    {
      name: 'This Land is Your Land',
      year: [2016],
      tagline: 'VR Music Video',
      status: ['shipped', 'green'],
      description: `In 1987, Bernie Sanders released a folk music album on which he covered the classic "This Land is Your Land". For fun, I decided to create an immersive music video for this track that features Bernie singing and dancing—it's not exactly a video, as you control certain aspects of your environment, but you get the idea. I contacted the studio that owns the rights to the song to see if I could get permission to publish this on the Oculus Store (for the Oculus Rift) and the Google Play Store (for Google Cardboard), but they haven't yet gotten back to me. Since I'm not trying to steal anyone's work or infringe on copyrights, for the time being if you want to see this you can send me an email at davvidbaker@gmail.com and I can get you a copy. 

All characters, animations, scripting, and assets designed by me.`,
      keywords: ['Unity', 'Blender', 'Adobe Fuse'],
      images: ['/static/bernieSnap1.JPG', '/static/bernieSnap4.JPG'],
    },

    {
      name: 'Ragdoll Golf',
      year: [2015],
      tagline: 'You are Will Smith. All you want is to get to the hole. But the hole is just a big orange cylinder. And you are just a ragdoll.',
      status: ['shipped', 'green'],
      description: 'Inspired by [Cat with Bow Golf](http://www.addictinggames.com/sports-games/catwithbowgolf.jsp), this is a mini-game demo I created with Unity for Google Cardboard.',
      images: ['/static/ragdollGolf.PNG'],
      keywords: ['Unity', 'VR', 'Fuse', 'Will Smith'],
      callToAction: 'Get it while its hot!',
      link: 'https://play.google.com/store/apps/details?id=com.BrainsAndSpace.ragdollGolf&hl=en',
    },

    {
      name: 'ForceField',
      year: [2015],
      status: ['complete', 'green'],
      tagline: 'A cable-driven force feedback computer mouse for use in haptic/tactile virtual reality, fine motor skill rehabilitation, and 3d computer aided design.',
      description: "ForceField is a cable-driven force feedback computer mouse for use in haptic/tactile virtual reality, fine motor skill rehabilitation, and 3d computer aided design. ForceField allows you to create and simulate virtual objects, textures, and forces in your desktop environment.\n\nWe created this for Penn's senior design competition and won the Frederick Ketterer Memorial Award for outstanding creativity in Engineering Design as well as 4th place overall in the school of engineering. Tyler and Preston did the majority of the mechanical engineering, Colin did the computer-side software, and I took lead on the electrical engineering aspects as well as the microcontroller-side software.\n\nFor more information or access to any of the design files, shoot me an email at davvidbaker@gmail.com, and I'd be happy to share.",
      keywords: ['Embedded Systems', 'Hardware', 'VR'],
      teammates: [
        { name: 'Colin Feo', link: 'https://www.linkedin.com/in/colinfeo/' },
        {
          name: 'Preston Morris',
          link: 'https://www.linkedin.com/in/prestonjmorris/',
        },
        {
          name: 'Tyler Caron',
          link: 'https://www.linkedin.com/in/tyler-caron-a54bb852/',
        },
      ],
      images: ['/static/forcefield.jpg'],
      link: 'https://www.youtube.com/watch?v=5L02NgFlN2I&feature=youtu.be',
      callToAction: 'Watch presentation',
    },

    {
      name: 'Udder Space',
      year: [2015, 2016],
      status: ['pilot', 'teal'],
      tagline: 'In a futuristic world where super intelligent cows are now the dominant species, a giant asteroid threatens the destruction of Earth.',
      description: "In a futuristic world where super intelligent cows are now the dominant species, a giant asteroid threatens the destruction of Earth. To save their species, a group of brave bovine astronauts must travel through outer space to find a new planet to call home. The four of us created this animated children's show pilot and pitched to DreamWorksTV. Joe and Pat were the head writers, while I did all of the artwork and animation.",
      keywords: [
        'Animated Cartoon',
        'After Effects',
        'Character Animator',
        'Photoshop',
        'Illustrator',
      ],
      images: ['/static/udder-space.png'],
      callToAction: 'Watch pilot',
      link: 'https://www.youtube.com/watch?v=usUPKPuEd1Q&feature=youtu.be',
      teammates: [
        {
          name: 'Joe Miciak',
          link: 'https://www.linkedin.com/in/joseph-miciak-603b7188/',
        },
        { name: 'Pat Romano', link: '#' },
        { name: 'Zach Fox', link: 'https://twitter.com/zacharydafox?lang=en' },
      ],
    },

    {
      name: 'sound360',
      year: [2015],
      status: ['unknown', 'black'],
      tagline: 'A surround sound system that uses a single centrally placed speaker.',
      description: "sound360 is a surround sound system that only uses a single centrally placed speaker. Ultrasonic transducers—with the help of some fancy signal modulation and a nonlinearity in the air—create narrow beams of sound which are then bounced off reflectors to arrive at a listener positioned centrally on the couch. For more details you can check out the [project's final report here](/static/sound360_finalReport.pdf).\n\nMarcus and I created this project for an **embedded systems class in college**, and I continued to develop it for Penn's xLAB over the summer of 2015. *I'm not sure if anyone there has continued working on the project*. We created everything—circuitry, design, code, etc.",
      keywords: ['Embedded Systems', 'Hardware', 'Audio', 'Signal Processing'],
      images: ['/static/sound360.png'],
      link: '/static/sound360_finalReport.pdf',
      teammates: [
        {
          name: 'Marcus Pan',
          link: 'https://www.linkedin.com/in/marcus-pan-358947a3/',
        },
      ],
      callToAction: 'Read report',
    },

    {
      name: 'Musical Scales',
      year: [2016],
      status: ['shipped', 'green'],
      tagline: 'A friend of mine was looking for a chart showing a bunch of the different scales on the banjo fretboard, so I made him this and added a few other instruments.',
      link: 'https://s.codepen.io/davvidbaker/debug/yeWMPg',
    },
    {
      name: 'Jesus Golf',
      year: [2015],
      status: ['shipped', 'goldenrod'],
      tagline: 'This is a little web game I made for an Adobe Generation Professional course.',
      linkToSource: 'https://github.com/davvidbaker/jesus-golf',
      link: 'https://davvidbaker.github.io/jesus-golf/index.html',
    },
  ],
};
