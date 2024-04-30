import { keyframes } from "styled-components";

//Fade Animations
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const fadeOut = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 0;
  }
`;

// Slide Up/Down Animations
export const slideUp = keyframes`
  from {
    transform: translateY(50%);
  }
  to {
    transform: translateY(0);
  }
`;
export const slideDown = keyframes`
  from {
    transform: translateY(-50%);
  }
  to {
    transform: translateY(0);
  }
`;

// Slide Left/Right Animations
export const slideLeft = keyframes`
  from {
    transform: translateX(50%);
  }
  to {
    transform: translateX(0);
  }
`;
export const slideRight = keyframes`
 
 from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
`;

// Grow Up/Down Animations
export const growUp = keyframes`
 from {
    transform: scale(1);
  }
  to {
    transform: translateX(1.05);
  }
`;
export const growDown = keyframes`
 from {
    transform: scale(1.05);
  }
  to {
    transform: translateX(1);
  }
`;

// Pulse Grow Animations
export const pulseGrow = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const pulse = keyframes`
  0% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.4;
  }
`;

// Pulse Fly Animations
export const fly = keyframes`
  0% {
    transform: translateY(-0.2rem);
  }
  50% {
    transform: translateY(0.5rem);
  }
  100% {
    transform: translateY(-0.2rem);
  }
`;

export const moveReflection = keyframes`
 0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(120%);
  }
  100% {
    transform: translateX(120%);
  }
`;