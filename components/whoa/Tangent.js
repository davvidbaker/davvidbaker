/**
*
* Tangent
*
* A tangent (for now at least), can only contain plain text.
*/

import React from 'react';
import shortid from 'shortid';

import Chunk from './Chunk';
import plainText from '../../utils/plainText'

class Tangent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      straightLength: 300,
      id: shortid.generate(),
    };
  }

  componentDidMount() {
    // TODO this is hacky-ish, could instead use a ref that is passed down down down. Actually maybe this is better
    const svgLeft = this.svg.getBoundingClientRect().left;
    const postBody = document
      .querySelector('.post-body')
      .getBoundingClientRect();

    // this part totally doesn't work. I am trying to not have overflow x
    console.log(
      'client bound ',
      this.textPath,
      this.textPath.getBoundingClientRect()
    );
    this.svg.setAttribute('width', this.textPath.getBoundingClientRect().width);
    this.svg.setAttribute(
      'height',
      this.textPath.getBoundingClientRect().height
    );
    // debugger;
  }

  render() {
    // debugger;
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
              d={
                `M 0 0 
                 l ${this.state.straightLength} 0
                 c 200 0 200 0 200 200
                 l 0 3000`
              }
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
        {' '}

        <style jsx>{`
          span {
            display: inline; 
          }

          svg {
            position: absolute
            display: inline-block;
            pointer-events: none;

            text {
              transform: translateY(1rem);
              pointer-events: painted;

              &:hover {
                fill: red;
              }
            }
          }
          `}</style>
      </span>
    );
  }
}

Tangent.propTypes = {};

export default Tangent;
