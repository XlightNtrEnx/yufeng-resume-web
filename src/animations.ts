import { keyframes, css } from "styled-components";

export type Animation = () => ReturnType<typeof css>;

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
