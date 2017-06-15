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
      description: 'Swyzzle is a screensaver that melts your screen. Back when I was working in the Click 3X office in New York, I would put this activate the screen melting when I went out for lunch or to meetings, to make it look like my screen was fucked up. To my surprise, no one ever said anything.',
      builtWith: ['Electron', 'WebGL'],
      link: 'https://davvidbaker.github.io/Swyzzle/',
      linkToSource: 'https://github.com/davvidbaker/Swyzzle',
      linkToTrello: 'https://trello.com/b/fAycvoLY/swyzzle',
      images: []
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
      keywords: ['VR', 'AR', 'Performance Art', 'WebRTC'],
    },

    {
      name: 'La Mer',
      year: [2016],
      agency: 'Click 3X',
      role: 'Lead Developer',
      status: ['shipped', 'green'],
      tagline: "A 360 advertising experience made for La Mer's revitalizing hydrating serum campaign.",
      description: 'We (Click 3X) were tasked by La Mer to create an immersive 360 experience to bring to life the brand’s 2D marketing video for the new Revitalizing Hydrating Serum. Our team designed a 3D world, incorporating animation, interactive hot spots, and creative transitions between the scenes. The experience was developed in HTML5, translated into 11 languages, and is compatible across mobile and desktop devices.',
      callToAction: 'Paradise awaits...',
      link: 'http://experience.cremedelamer.com/',
      keywords: ['three.js', 'WebGL'],
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
      description: `In 1987, Bernie Sanders released a folk music album on which he covered the classic "This Land is Your Land". For fun, I decided to create an immersive music video for this track that features Bernie singing and dancing—it's not exactly a video, as you control certain aspects of your environment, but you get the idea. I contacted the studio that owns the rights to the song to see if I could get permission to publish this on the Oculus Store (for the Oculus Rift) and the Google Play Store (for Google Cardboard), but they haven't yet gotten back to me. Since I'm not trying to steal anyone's work or infringe on copyrights, for the time being if you want to see this you can send me an email at drbaker2@gmail.com and I can get you a copy. 

All characters, animations, scripting, and assets designed by me. Created primarily using Unity, Blender, Fuse.`,
    },
  ],
};
