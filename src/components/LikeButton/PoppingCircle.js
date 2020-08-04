import React from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ size, color }) => {
  return <Wrapper style={{ width: size, height: size, background: color }} />;
};

const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const fade = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

//had to add position: absolute so that the little heart is inside the
//PoppingCircle
const Wrapper = styled.div`
  display: block;
  position: absolute;
  border-radius: 50%;
  animation: ${scale} 500ms forwards, ${fade} 500ms ease-in forwards;
`;

export default PoppingCircle;
