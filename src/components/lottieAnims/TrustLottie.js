import React from "react";
import Lottie from 'react-lottie-player';
import lottieJson from './trust.json'

function TrustLottie() {
    return(
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
    )
  }

export default TrustLottie;