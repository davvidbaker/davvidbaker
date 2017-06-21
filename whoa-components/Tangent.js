/**
*
* Tangent
*
* A tangent (for now at least), can only contain plain text.
*/

import React from 'react';
import shortid from 'shortid';

import Element from './Element';
import plainText from './utils/plainText';

class Tangent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      straightLength: 300,
      id: shortid.generate(),
    };
  }

  componentDidMount() {
    // debugger
    // TODO this is hacky-ish, could instead use a ref that is passed down down down. Actually maybe this is better
    const svgLeft = this.svg.getBoundingClientRect().left;
    const postBody = document.querySelector('article').getBoundingClientRect();

    const straightLength = postBody.right - svgLeft - 200;
    this.setState(
      { straightLength: straightLength > 0 ? straightLength : 0 },
      this.stateWasSet
    );
    // );
  }

  stateWasSet() {
    console.log('straight length', this.state.straightLength);

    // this part totally doesn't work. I am trying to not have overflow x
    console.log(
      'client bounding box',
      this.textPath,
      this.textPath.getBoundingClientRect().height
    );
    const textPathRect = this.textPath.getBoundingClientRect();

    this.svg.setAttribute('width', textPathRect.width);
    this.svg.setAttribute('height', textPathRect.height);
  }

  render() {
    return (
      <span>
        <svg
          ref={ref => {
            this.svg = ref;
          }}
        >
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2 2" result="shadow" />
              <feOffset dx="0" dy="0" />
            </filter>

            <path
              id={this.state.id}
              d={`M 0 0 
                 l ${this.state.straightLength} 0
                 c 200 0 200 0 200 200
                 l 0 3000`}
            />
          </defs>
          <text>
            <textPath
              href={`#${this.state.id}`}
              ref={ref => {
                this.textPath = ref;
              }}
            >
              {/*{this.props.children[0].props.value}*/}
              {plainText(this.props.children)}
            </textPath>
          </text>
        </svg>
        <br />
        <style jsx>{`
          span {
            display: inline;
          }
          svg {
            position: absolute;
            display: inline-block;
            pointer-events: none;
          }
          text {
            transform: translateY(1rem);
            pointer-events: painted;
          }
          text:hover {
            fill: red;
          }
        `}</style>
      </span>
    );
  }
}

Tangent.propTypes = {};

export default Tangent;
