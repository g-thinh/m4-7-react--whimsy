import React from "react";
import styled from "styled-components";

export const Stat = ({ statName, statData }) => {
  return (
    <Wrapper>
      <strong>{statData}</strong> {statName}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-right: 20px;
`;
