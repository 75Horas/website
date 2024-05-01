import styled from "styled-components";

export const Body_InfiniteLooper = styled.div`
  position: relative;
  /* width: 100%; */

  opacity: 0.5;
.looper {
  width: 100%;
  overflow: hidden;
}

.looper__innerList {
  display: flex;
  justify-content: center;
  width: fit-content;
}

.gradient{
  pointer-events: none;
  z-index: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
    
  background: rgb(36,36,36);
  background: -moz-linear-gradient(90deg, rgba(36,36,36,1) 0%, rgba(36,36,36,0) 15%, rgba(36,36,36,0) 85%, rgba(36,36,36,1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(36,36,36,1) 0%, rgba(36,36,36,0) 15%, rgba(36,36,36,0) 85%, rgba(36,36,36,1) 100%);
  background: linear-gradient(90deg, rgba(36,36,36,1) 0%, rgba(36,36,36,0) 15%, rgba(36,36,36,0) 85%, rgba(36,36,36,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#242424",endColorstr="#242424",GradientType=1);
}

.looper__listInstance {
  width: max-content;

  gap: 1rem;
  animation: slideAnimation linear infinite;
}

@keyframes slideAnimation {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}
`;