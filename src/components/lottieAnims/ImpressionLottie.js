import React from "react";
import Lottie from 'react-lottie-player';
import lottieJson from './impression.json'

function ImpressionLottie() {
    return(
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
    )
  }

export default ImpressionLottie;