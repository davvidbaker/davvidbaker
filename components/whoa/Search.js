/**
*
* Search
*
*/


class Search extends React.Component {
  state = { textValue: '' };

  componentWillMount() {
    this.setState({ textValue: this.props.children[0].props.value });
  }

  componentDidMount() {
    // this.textInput.select();
  }

  onChange(evt) {
    evt.preventDefault();
    this.setState({ textValue: evt.target.value });
  }

  onSubmit(evt) {
    evt.preventDefault();
    console.log(this.state.textValue);
    const searchString = `https://www.google.com/search?q=${this.state
      .textValue}`;

    const strWindowFeatures =
      'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes';

    window.open(searchString, 'WindowName', strWindowFeatures);
  }

  onFocus(evt) {
    evt.target.parentElement.className += ' inFocus';
  }

  onBlur(evt) {
    evt.target.parentElement.className = evt.target.parentElement.className.replace(
      /\sinFocus/,
      ''
    );
    // evt.target.parentElement.style.boxShadow = '0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)';
  }

  render() {
    return (
      <div>
        <form
          onSubmit={evt => {
            this.onSubmit(evt);
          }}
          action=""
        >
          <input
            type="text"
            value={this.state.textValue}
            ref={input => {
              this.textInput = input;
            }}
            style={{ maxWidth: '100%' }}
            // TODO this is hacky
            onChange={evt => {
              this.onChange(evt);
            }}
            onFocus={this.onFocus}
            onMouseEnter={this.onFocus}
            onMouseLeave={this.onBlur}
            onBlur={this.onBlur}
          />
        </form>
        <style jsx>{`
          div {
            font-family: arial, sans-serif;
            font-size: 24px;
            width: 100%;
            text-align:center;
          }
          form {
            display:inline-block;
            width: 100%;
            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
            margin: 5px 0;
          }

          input {
            height: 100%;
            width: 100%;
            text-align:center;
            outline: none;
            border: 0;
          }

          .inFocus {
            box-shadow: 0 2px 8px 2px rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
          }
          `}</style>
      </div>
    );
  }
}

Search.propTypes = {
  children: React.PropTypes.object,
};

export default Search;
