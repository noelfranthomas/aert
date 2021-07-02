import React from "react";
import Lottie from 'react-lottie-player';
import lottieJson from './team.json'

function TeamLottie() {
    return(
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
    )
  }

export default TeamLottie;