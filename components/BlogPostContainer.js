/* eslint-disable react/no-did-mount-set-state*/

/**
*
* Post
*
*/
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { colors } from '../constants/styles';
// import socrates from 'utils/socrates';

import NormativesList from './whoa/NormativesList';

const mouseEnterNormative = id => {
  document.querySelector(`#${id}`).className += ' highlight';
};

const mouseLeaveNormative = id => {
  document.querySelector(`#${id}`).className = document
    .querySelector(`#${id}`)
    .className.replace(' highlight', '');
};

/**
 * 
 * 
 * @class Post
 * @extends {Component}
 */
class BlogPostContainer extends Component {
  constructor() {
    super();
    this.state = { innerText: null };
  }

  componentDidMount() {
    const postEl = document.querySelector('.post');
    this.setState({
      innerText: postEl ? postEl.innerText : null,
    });
  }

  toggleMetaColumn(evt) {
    evt.preventDefault();
    this.gridDiv.className = this.gridDiv.className.match('on-screen')
      ? this.gridDiv.className.replace('on-', 'off-')
      : this.gridDiv.className.replace('off-', 'on-');
  }

  render() {
    return (
      <div className="blog-post-container">
        <div
          className="grid meta-off-screen"
          ref={ref => {
            this.gridDiv = ref;
          }}
        >
          <section className="meta-column on-screen">
            <NormativesList
              onMouseEnter={mouseEnterNormative}
              onMouseLeave={mouseLeaveNormative}
            >
              {this.props.normatives}
            </NormativesList>

            <div className="socrates">
              <p>
                {/*{JSON.stringify(socrates(this.state.innerText))}*/}
              </p>
            </div>
          </section>

          <section>
            <header>
              <ul>
                <li>
                  <button
                    onClick={evt => {
                      this.toggleMetaColumn(evt);
                    }}
                  >
                    🗒
                  </button>
                </li>
                <li>
                  <button
                    onClick={evt => {
                      this.toggleMetaColumn(evt);
                    }}
                  >
                    ⌛🤔
                  </button>
                </li>
              </ul>
            </header>
            <article className="post">
              {this.props.children}
            </article>
          </section>
        </div>

        <style>
          {`
            .blog-post-container {
              height: 100vh;
              overflow: hidden;
            }

            .grid {
              display: grid;
            }

            .post {
              margin-left: 0;
            }

            .post > *:not( .post-search ):not( video ), .post-search > *, .post-search input {
                margin-left: auto;
                margin-right: auto;
                max-width: 50rem;
                padding-left: 5%;
                padding-right: 5%;
            }

            .post-search {
              margin-left: 0;
            }

            .post-body {
              width: 50rem;

            }

            // TODO
            .socrates {
              overflow-x: hidden;
            }

            i::before, i::after {
              content: '*';
              color: #ddd;
              position: absolute;
              z-index: -1;
              margin-top: -0.25rem;
              margin-left: -0.3rem;
            }

            i::after {
            }

            img {
              max-width: 100%;
            }

            .highlight {
              background: ${colors.highlight};
            }

            .meta-column {
              background: #fafafa;
              border-right: 1px solid #b0b0b0;
              color: #555;
            }

            .meta-on-screen {
              grid-template-columns: 300px 1fr;
            }

            .meta-off-screen {
              grid-template-columns: 0 1fr;

              .meta-column {
                width: 0;
                visibility: hidden;
              }
            }

            header {
              font-size: 3rem;

              ul {
                display:flex;
                padding: 0;
                list-style: none;

                li {
                  margin: 0px 20px;
                }
              }

              button {
                cursor: pointer;
                transform: scale(1);

                &:hover {
                  transform: scale(1.05)
                }

                &:focus {
                  outline: 0;
                }
              }
            }

            section {
              height: 100vh;
              position: relative;
              overflow: scroll;
            }

            `}
        </style>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  normatives: state.posts.normatives,
});

BlogPostContainer.propTypes = { children: PropTypes.node, normatives: PropTypes.array };

export default connect(mapStateToProps)(BlogPostContainer);
