/**
*
* Tangent
*
* A tangent (for now at least), can only contain plain text.
*/

import React from 'react';
import shortid from 'shortid';

import WithToggle from '../../components/Blog/WithToggle';
import Popup from '../../components/Blog/Popup';
import { popupStyle } from './style';

import plainText from '../../utils/plainText';

class Tangent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      straightLength: 300,
      curveParameter: 200,
      id: shortid.generate(),
    };
  }

  componentDidMount() {
    // TODO this is hacky-ish, could instead use a ref that is passed down down down. Actually maybe this is better

    window.addEventListener('resize', () => {
      this.calculatePath();
    });

    this.calculatePath();
  }

  calculatePath() {
    const svgLeft = this.svg.getBoundingClientRect().left;
    const postBody = document.querySelector('article').getBoundingClientRect();
    let straightLength = postBody.right - svgLeft - 60;
    if (straightLength < 0) {
      straightLength = 0;
    }
    console.log(
      'calculated straight length',
      straightLength,
      this.svg.getBoundingClientRect()
    );
    this.setState(
      {
        straightLength: straightLength > 0 ? straightLength : 0,
        curveParameter: straightLength > 200
          ? 200
          : straightLength < 0 ? 0 : straightLength,
      },
      this.stateWasSet
    );
  }

  stateWasSet() {
    console.log('straight length', this.state.straightLength);

    if (
      this.svg.getBoundingClientRect().right >
      document.documentElement.clientWidth
    ) {
      this.setState(
        {
          straightLength: this.state.straightLength - 10,
          curveParameter: this.state.curveParameter - 1,
        },
        this.stateWasSet
      );
    }

    const textPathRect = this.textPath.getBoundingClientRect();

    this.svg.setAttribute('width', textPathRect.width);
    this.svg.setAttribute('height', textPathRect.height + 20);
  }

  render() {
    const innerText = plainText(this.props.children);

    return (
      <span
        onClick={() =>
          (this.props.popupOpen ? this.props.hide() : this.props.show())}
      >
        {this.props.popupOpen &&
          <Popup additionalStyles={popupStyle}>
            {innerText}
          </Popup>}
        <svg
          ref={(ref) => {
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
                 c ${this.state.curveParameter} 0 ${this.state.curveParameter} 0 ${this.state.curveParameter} 200
                 l 0 3000`}
            />
          </defs>
          <text>
            <textPath
              href={`#${this.state.id}`}
              ref={(ref) => {
                this.textPath = ref;
              }}
            >
              {innerText}
            </textPath>
          </text>
        </svg>
        <br />
        <style jsx>{`
          span {
            display: inline;
            cursor: pointer;
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
            fill: steelblue;
          }
        `}</style>
      </span>
    );
  }
}

Tangent.propTypes = {};

export default WithToggle('popupOpen')(Tangent);
