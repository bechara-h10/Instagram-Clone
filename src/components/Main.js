import React from "react";
import styled from "styled-components";
import Story from "./Story";
import Post from "./Post";

function Main() {
  return (
    <Container>
      <StoryContainer>
        <Story />
      </StoryContainer>
      <PostContainer>
        <Post />
      </PostContainer>
    </Container>
  );
}

const Container = styled.main`
  grid-column: 2/3;
  position: relative;
  padding: 40px;
  @media (width <= 768px) {
    flex: 1;
    width: 100%;
    height: 100%;
  }
`;

const StoryContainer = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  gap: 24px;
  overflow-y: auto;
`;

const PostContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 200px;
  @media (width <= 768px) {
    gap: 20px;
  }
`;

export default Main;
