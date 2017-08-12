import { Component } from 'react';

class Markup extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(this.canvas);
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = 'palevioletred';

    this.canvas.addEventListener('touchstart', e =>
      console.log('touchstart', e)
    );
    this.canvas.addEventListener('touchmove', e =>
    {
      e.preventDefault() 
      console.log(e.touches[0].clientX)
      this.ctx.fillRect(e.touches[0].clientX, e.touches[0].clientY, 2, 2)
    }
    );
    this.canvas.addEventListener('touchend', e => console.log('touchend', e));
    this.canvas.addEventListener('webkitmouseforcechanged', e =>
      console.log('webkitmouseforcechanged', e)
    );
    this.canvas.addEventListener('touchforcechange', e =>
      console.log('touchforcechange', e)
    );
  }

  render() {
    return (
      <div>
        <canvas ref={canvas => this.canvas = canvas} />

        <style jsx>{`
          canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh; 
          }
          `}</style>
      </div>
    );
  }
}

export default Markup;
