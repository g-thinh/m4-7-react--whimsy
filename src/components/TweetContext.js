import React from "react";
import moment from "moment";

import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = React.createContext(null);

//############################ TWEET CONTEXT ##########################

export const TweetProvider = ({ children }) => {
  //### STATES ###

  const [numOfLikes, setNumOfLikes] = React.useState(460);
  const [numOfRetweets, setNumOfRetweets] = React.useState(65);
  const [isLiked, setIsLiked] = React.useState(false);
  const [isRetweeted, setIsRetweeted] = React.useState(false);

  //### VARIABLES ##
  const date = moment().format("h:mm a - MMM Do, YYYY");

  // ### RENDER CONTEXT ####
  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
        date: date,
        numOfLikes,
        setNumOfLikes,
        numOfRetweets,
        setNumOfRetweets,
        isLiked,
        setIsLiked,
        isRetweeted,
        setIsRetweeted,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
