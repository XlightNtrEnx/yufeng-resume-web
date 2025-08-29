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

export const spinForever = () => {
  const spin = keyframes`
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  `;
  return css`
    animation: ${spin} 1s linear infinite;
  `;
};
