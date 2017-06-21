/**
*
* Tangent
*
* A tangent (for now at least), can only contain plain text.
*/

import React from 'react';
import shortid from 'shortid';

import Element from './Element';
import WithToggle from '../components/Blog/WithToggle';
import plainText from './utils/plainText';
import { popup } from '../constants/styles'

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
      { straightLength: straightLength > 0 ? straightLength : 100 },
      this.stateWasSet
    );
    // );
  }

  stateWasSet() {
    console.log('straight length', this.state.straightLength);

    const textPathRect = this.textPath.getBoundingClientRect();

    this.svg.setAttribute('width', textPathRect.width);
    this.svg.setAttribute('height', textPathRect.height);
  }

  render() {
    const innerText = plainText(this.props.children);

    return (
      <span data-content={this.props.popupOpen ? innerText : null} onClick={() => this.props.popupOpen ? this.props.hide() : this.props.show()}>
        {this.props.popupOpen && <span className="popup">
            {innerText}
          </span>}
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
                 c 200 0 ${this.state.straightLength} 0 ${this.state.straightLength} 200
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

          .popup {
            ${popup}
            content: attr(data-content);
            padding: 10px;
            transform: translatey(1.5rem);
            opacity: 0.95;
            background: steelblue;
            max-width: 50%;
          }
        `}</style>
      </span>
    );
  }
}

Tangent.propTypes = {};

export default WithToggle('popupOpen')(Tangent);
