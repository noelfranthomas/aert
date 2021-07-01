import React from 'react';

class impressionLottie extends React.Component {
  componentDidMount() {
    try {
      this.UIkit = require('@lottiefiles/lottie-player');
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    return (
      <div className="App">
        <lottie-player
          loop
          autoplay
          ref={this.myRef} // 2. set the reference for the player
          id="zeroLottie"
          mode="normal"
          src="https://assets7.lottiefiles.com/packages/lf20_3zlw7rw7.json"
        ></lottie-player>
      </div>
    );
  }
}

export default impressionLottie;
