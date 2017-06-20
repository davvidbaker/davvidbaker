import React from 'react';
import { connect } from 'react-redux';

import Whoa from '../../whoa-components';
import SideBar from './SideBar';
import Header from './Header';
import Title from './Title';
import WithToggle from './WithToggle';

class Post extends React.Component {
  // ({ attributes, content, sideBarVisible, show, hide, toggle, setCurrentPost }) =>
  componentDidMount() {
    console.log(this.props.content);
    this.props.setCurrentPost(this.props.attributes.slug);
  }

  render() {
    return (
      <div style={{ maxWidth: '100vw', height: '100vh' }}>
        <SideBar sideBarVisible={this.props.sideBarVisible} />
        <main
          style={{
            left: this.props.sideBarVisible ? '300px' : 0,
            width: this.props.sideBarVisible ? 'calc(100% - 300px)' : '100%',
          }}
        >
          <Header
            show={this.props.show}
            hide={this.props.hide}
            sideBarVisible={this.props.sideBarVisible}
          />
          <Title
            title={this.props.attributes.title}
            date={this.props.attributes.date}
          />

          <div className="post-body">
            <Whoa content={this.props.content} />
          </div>

        </main>

        <style jsx>{`
          main {
            position: absolute;
            left: 300px;
            transition: width 0.5s, left 0.5s;
            overflow-y: scroll;
            height: 100vh;
            width: 100%;
          }
          `}</style>

      </div>
    );
  }
}

const PostWithToggle = WithToggle('sideBarVisible')(Post);

export default connect(null, dispatch => ({
  setCurrentPost: slug => dispatch({ type: 'SET_CURRENT_POST', slug }),
}))(PostWithToggle);
