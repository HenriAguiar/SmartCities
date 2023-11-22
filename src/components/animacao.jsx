import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './animation.json'

console.log(animationData)

function Animacao() {
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false
  });

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Lottie options={defaultOptions}
            height={100}
            width={100}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}/>
  );
}

export default Animacao;