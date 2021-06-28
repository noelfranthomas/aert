import React from 'react';
import '@lottiefiles/lottie-player';

class GrowLottie extends React.Component {
  render() {
    return (
      <div className="App">
        <lottie-player
          loop
          autoplay
          ref={this.myRef} // 2. set the reference for the player
          id="zeroLottie"
          mode="normal"
          src="https://assets7.lottiefiles.com/packages/lf20_5n3dhrjg.json"
        ></lottie-player>
      </div>
    );
  }
}

export default GrowLottie;
