import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 30px;
  margin-top: 4px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return <Container>Sell on Bigcart with 50% off on Selling Fee</Container>;
};

export default Announcement;
