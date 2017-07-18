import shortid from 'shortid';
import { Component } from 'react';

class MeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ind: 0,
      lastItem: null,
      currentItem: props.items[0],
      nextItem: null,
    };

    this.nextInd = 0;
  }

  componentDidMount() {
    this.setState(this.state, this.revealNext);
  }

  revealNext() {
    this.nextInd = (this.state.ind + 1) % this.props.items.length;

    this.setState(
      {
        nextItem: this.props.items[this.nextInd],
        lastItem: this.state.nextItem || this.state.currentItem,
        ind: this.state.ind + 1,
      },
      (cb) => {
        console.log(this.state);
        this.nextChar(0);
      }
    );

    // if (
    //   this.props.items[this.nextInd] &&
    //   typeof this.props.items[this.nextInd] === 'string'
    // ) {
    //   this.nextChar(0);
    // }
  }

  nextChar(i) {
    if (i < this.state.lastItem.length && i < this.state.nextItem.length) {
      window.requestAnimationFrame(() => {

        // check if new letter is an emoji, which has length 2
        const newLetter = letterThatMightBeAnEmoji(
          this.state.nextItem.substr(i, 2)
        );

        let remainingString = this.state.lastItem.substr(
          i + 1,
          this.state.lastItem.length
        );

        // const newLetter = this.state.nextItem[i];
        this.setState(
          {
            currentItem: `${this.state.nextItem.substr(0, i)}${newLetter}${remainingString}`,
          },
          this.nextChar(i + newLetter.length)
        );
      });
    } else if (i < this.state.lastItem.length) {
      window.requestAnimationFrame(() => {
        this.setState(
          {
            currentItem: `${this.state.currentItem.substr(0, i)}️${this.state.lastItem
              .substr(i + 1, this.state.lastItem.length)
              .replace(/./, ' ')}`,
          },
          this.nextChar(i + 1)
        );
      });
    } else if (i < this.state.nextItem.length) {
      window.requestAnimationFrame(() => {
        const newLetter = letterThatMightBeAnEmoji(
          this.state.nextItem.substr(i, 2)
        );
        this.setState(
          { currentItem: `${this.state.currentItem}${newLetter}` },
          this.nextChar(i + 1)
        );
      });
    } else {
      setTimeout(() => {
        this.revealNext();
      }, 1000);
    }
  }

  render() {
    return (
      <li className="believe">
        <p>
          <span className="title">{this.props.title}</span>
          {' '}
          <span>{this.state.currentItem}</span>
        </p>
        <ul>
          {this.props.items.map(item => (
            <li key={shortid.generate()}>
              <p>
                {item}
              </p>
            </li>
          ))}
        </ul>
        <style jsx>{`
          .title {
            font-weight: bold;
          }

          * {
            font-family: monospace;
          }

          li p {
            margin: 0.25rem 0;
          }

          ul {
            list-style: disc;
            padding-left: 3rem;
          }
        `}</style>
      </li>
    );
  }
}
export default MeList;

function letterThatMightBeAnEmoji(str) {
  return str.match(/([\uD800-\uDBFF][\uDC00-\uDFFF])/)
    ? str.substr(0, 2)
    : str.substr(0, 1);
}
