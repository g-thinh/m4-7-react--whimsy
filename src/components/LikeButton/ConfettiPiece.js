import React from "react";
import styled, { keyframes } from "styled-components";
import Particle from "./Particle";

const ConfettiPiece = ({ angle, distance, color }) => {
  return (
    <CenteredWithinParent>
      <Particle angle={angle} distance={distance}>
        <Dot
          style={{
            width: 10,
            height: 10,
            background: color,
          }}
        />
      </Particle>
    </CenteredWithinParent>
  );
};

const CenteredWithinParent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Dot = styled.div`
  border-radius: 100%;
`;

export default ConfettiPiece;
