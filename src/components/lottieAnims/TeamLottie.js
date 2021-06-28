import React from 'react';
import '@lottiefiles/lottie-player';

class TeamLottie extends React.Component {
  render() {
    return (
      <div className="App">
        <lottie-player
          loop
          autoplay
          ref={this.myRef} // 2. set the reference for the player
          id="zeroLottie"
          mode="normal"
          src="https://assets3.lottiefiles.com/packages/lf20_twncpopt.json"
        ></lottie-player>
      </div>
    );
  }
}

export default TeamLottie;
