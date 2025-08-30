import { css, keyframes } from "styled-components";

export const fadeInFromLeft = () => {
  const keyframe = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
    
  to {
    transform: translateX(0);
    opacity: 1;
  }`;
  return css`
    animation: ${keyframe} 1s;
  `;
};

export const fadeInFromRight = () => {
  const keyframe = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
    
  to {
    transform: translateX(0);
    opacity: 1;
  }`;
  return css`
    animation: ${keyframe} 1s;
  `;
};

export const fadeInFromTop = () => {
  const keyframe = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
    
  to {
    transform: translateY(0);
    opacity: 1;
  }`;
  return css`
    animation: ${keyframe} 1s;
  `;
};

export const fadeInFromBottom = () => {
  const keyframe = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
    
  to {
    transform: translateY(0);
    opacity: 1;
  }`;
  return css`
    animation: ${keyframe} 1s;
  `;
};

export const rotateInY = () => {
  const keyframe = keyframes`
    from {
      transform: rotateY(-90deg) translateZ(200px);
      opacity: 0;
    }
    to {
      transform: rotateY(0deg) translateZ(0);
      opacity: 1;
    }
  `;
  return css`
    animation: ${keyframe} 0.8s ease-out;
  `;
};

export const rotateInX = () => {
  const keyframe = keyframes`
    from {
      transform: rotateX(90deg) translateZ(200px);
      opacity: 0;
    }
    to {
      transform: rotateX(0deg) translateZ(0);
      opacity: 1;
    }
  `;
  return css`
    animation: ${keyframe} 0.8s ease-out;
  `;
};

export const moveUp = () => {
  const keyframe = keyframes`
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100px); /* adjust distance */
    }
  `;
  return css`
    animation: ${keyframe} 5.5s linear forwards;
  `;
};

export const mindFuck = () => {
  const keyframe = keyframes`
    0% {
      width: 0vw; height: 0vh; 
    }

    100% {
      width: 100vw; height: 100vh;
    }
  `;
  return css`
    animation: ${keyframe} 0.2s linear forwards;
  `;
};

export const mindFuckReverse = () => {
  const keyframe = keyframes`
    0% {
      width: 100vw; height: 100vh; 
    }

    100% {
      width: 0vw; height: 0vh;
    }
  `;
  return css`
    animation: ${keyframe} 0.2s linear forwards;
  `;
};
