import React from "react";
import styled from "styled-components";

import LikeButton from "../LikeButton";
import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";

import { TweetContext } from "../TweetContext";

const ActionBar = ({ isRetweetedByCurrentUser, isLikedByCurrentUser }) => {
  //import the tweet context to update the following states
  const {
    isLiked,
    setIsLiked,
    isRetweeted,
    setIsRetweeted,
    numOfLikes,
    setNumOfLikes,
    numOfRetweets,
    setNumOfRetweets,
  } = React.useContext(TweetContext);

  return (
    <Wrapper>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="reply" />
      </Action>
      <Action
        color="rgb(23, 191, 99)"
        size={40}
        onClick={() => {
          console.log("You Clicked Retweet!");
          setIsRetweeted(!isRetweeted);
          if (isRetweeted) {
            setNumOfRetweets(numOfRetweets - 1);
          } else {
            setNumOfRetweets(numOfRetweets + 1);
          }
        }}
      >
        <TweetActionIcon
          kind="retweet"
          color={isRetweetedByCurrentUser ? "rgb(23, 191, 99)" : undefined}
        />
      </Action>
      <Action
        color="rgb(224, 36, 94)"
        size={40}
        onClick={() => {
          console.log("You Clicked Like!");
          setIsLiked(!isLiked);
          if (isLiked) {
            setNumOfLikes(numOfLikes - 1);
          } else {
            setNumOfLikes(numOfLikes + 1);
          }
        }}
      >
        <LikeButton isLiked={isLikedByCurrentUser} />
      </Action>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="share" />
      </Action>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`;

export default ActionBar;
