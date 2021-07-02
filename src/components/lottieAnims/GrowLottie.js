import React from "react";
import Lottie from 'react-lottie-player';
import growJson from './grow.json'

function GrowLottie() {
    return(
    <Lottie
      loop
      animationData={growJson}
      play
    />
    )
  }

export default GrowLottie;