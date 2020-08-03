import React from "react";
import moment from "moment";

import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = React.createContext(null);

//############################ TWEET CONTEXT ##########################

export const TweetProvider = ({ children }) => {
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
        isRetweetedByCurrentUser: false,
        isLikedByCurrentUser: false,
        date: date,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
