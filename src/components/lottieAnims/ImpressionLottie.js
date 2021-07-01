import React from 'react';
import loadable from '@loadable/component'
import '@lottiefiles/lottie-player'

const LottiePlayer = loadable(() => import('@node/@lottiefiles/lottie-player/'))

class impressionLottie extends React.Component {
  render() {
    return (
      <div className="App">
        <LottiePlayer
          loop
          autoplay
          ref={this.myRef} // 2. set the reference for the player
          id="zeroLottie"
          mode="normal"
          src="https://assets7.lottiefiles.com/packages/lf20_3zlw7rw7.json"
        ></LottiePlayer>
      </div>
    );
  }
}

export default impressionLottie;
