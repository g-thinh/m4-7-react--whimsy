import React from "react";
import styled from "styled-components";

import Heart from "./Heart";
import PoppingCircle from "./PoppingCircle";
import ScaleIn from "./ScaleIn";

import { range } from "../../utils";

import { TweetContext } from "../TweetContext";
import ConfettiPiece from "./ConfettiPiece";

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ isLiked, size = 40 }) => {
  const heartSize = size * 0.6;

  const { isLikedByCurrentUser } = React.useContext(TweetContext);

  return (
    <Wrapper style={{ width: size, height: size }}>
      {isLikedByCurrentUser && <PoppingCircle size={size} color="#E790F7" />}
      {isLikedByCurrentUser &&
        range(12).map((i) => (
          <ConfettiPiece
            key={i}
            angle={360 * (i / 12)}
            distance={20}
            color={PARTICLE_COLORS[0]}
          />
        ))}
      {isLikedByCurrentUser ? (
        <ScaleIn>
          <Heart width={heartSize} isToggled={isLiked} />
        </ScaleIn>
      ) : (
        <Heart width={heartSize} isToggled={isLiked} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LikeButton;
