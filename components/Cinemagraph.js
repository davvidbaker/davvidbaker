/** NEEDS A LOOK. PUT IN HASTILY. NEEDS TO TAKE PROPS, and shaders maybe. */

import React from 'react';

const vertShader = `
uniform sampler2D uImageMask;
uniform float uTime;

varying vec2 vUV;

void main() {
  vUV = uv;
	// vUV.x  = fract(uv.x + 0.001 * sin(0.00005 * uTime));
	// vUV.y  = fract(uv.y + 0.001 * cos(0.0005 * uTime*3.141));

  vec4 uTexMask = texture2D(uImageMask, vUV);

   vUV.x -= 0.005 * cos(vUV.x * 10.0 + uTime/800.0) * (length(uTexMask.rgb));
   vUV.y += .0006 * sin(vUV.y * 10.0 + uTime/1000.0) * (length(uTexMask.rgb));
  
	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	gl_Position = projectionMatrix * mvPosition;
}
`;

const fragShader = `
uniform sampler2D uImage;
uniform sampler2D uImageMask;
uniform float uTime;

varying vec2 vUV;

void main() {
  vec4 tex = texture2D(uImage, vUV);
  vec4 mask = texture2D(uImageMask, vUV);
  gl_FragColor = tex;

  // if (uTime < 5000.0) {
  //   gl_FragColor = tex * uTime * 0.0002; 
  // } else {
  //   gl_FragColor = tex;
  // }

	if (length(mask.rgb) > 1.73) {
	gl_FragColor *= 2.0 + 0.5* sin(uTime * 0.0003) * length(mask.rgb) ;
}
}
`;

const customShader = {
  uniforms: {
    uTime: { value: null },
    uImage: { value: null },
    uImageMask: { value: null },
  },
  vertexShader: vertShader,
  fragmentShader: fragShader,
};

class Cinemagraph extends React.Component {
  // set the scene size
  componentDidMount() {
    let width = window.innerWidth,
      height = width * 0.563;

    // set some camera attributes
    const VIEW_ANGLE = 45,
      NEAR = 0.1,
      FAR = 10000;
    let aspect = width / height;

    // get the DOM element

    // create WebGL renderer, camera, and a scene
    const renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    let camera = new THREE.OrthographicCamera(-0.5, 0.5, -0.5, 0.5, 1, 1000);
    const scene = new THREE.Scene();
    window.scene = scene;

    const materials = [];
    // create gui

    // add camera to scene
    scene.add(camera);

    // camera starts at 0,0,0, so pull it back
    camera.position.z = 1;

    // start the renderer
    renderer.setSize(width, height);
    // set up plane dimensions
    const w = 1.28,
      l = 0.72;

    const planeMaterial = new THREE.ShaderMaterial(customShader);
    materials.push(planeMaterial);

    const boatGreenTextures = [];
    const boatGreenMasks = [];

    // [1, 2, 3].forEach(num => {
    boatGreenTextures.push(
      // new THREE.TextureLoader().load(`img/bridge.jpg`)
      new THREE.TextureLoader().load('static/mirror.png')
      // new THREE.TextureLoader().load(`https://s3-us-west-2.amazonaws.com/s.cdpn.io/339525/firebreath.png`)
    );
    boatGreenMasks.push(
      // new THREE.TextureLoader().load(`img/bridge-mask.jpg`)
      new THREE.TextureLoader().load('static/mirror_mask.png')
    );
    // });
    planeMaterial.uniforms.uImage.value = boatGreenTextures[0];
    planeMaterial.uniforms.uImageMask.value = boatGreenMasks[0];

    // create mesh with plane geometry
    let plane = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(1, 1, 200, 200),
      planeMaterial
    );
    plane.name = 'plane';
    plane.rotation.x = Math.PI;

    scene.add(plane);
    update();

    // this.canvas.addEventListener('mousemove', evt => {});
    let index = 1;
    this.canvas.addEventListener('click', (evt) => {
      index++;
      planeMaterial.uniforms.uImage.value = boatGreenTextures[index % 3];
      planeMaterial.uniforms.uImageMask.value = boatGreenMasks[index % 3];
    });

    function update(t, dt) {
      window.requestAnimationFrame(update, t, dt);
      // console.log(dt);

      materials.forEach((material) => {
        if (material.uniforms.uTime) {
          material.uniforms.uTime.value = t;
        }
      });
      render();
    }

    function render() {
      renderer.render(scene, camera);
    }

    const DELTA_T = 8;
  }

  render() {
    return (
      <div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/84/three.min.js" />
        <canvas ref={ref => this.canvas = ref} />
      </div>
    );
  }
}

export default Cinemagraph;
