import React from "react";
import styled from "styled-components";

function Story(props) {
  return (
    <Container>
      <Content>
        <div>
          <img src="/images/user.svg" alt="" />
        </div>
        <span> user_name</span>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  width: 100px;
  text-align: center;

  div {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: auto;
    position: relative;
    z-index: 2;
    overflow: visible;
  }

  div > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
    border: solid 2px rgba(0, 0, 0, 0.6);
  }

  span {
    font-size: 14px;
    text-overflow: ellipsis;
    overflow-y: hidden;
  }
  div::before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(to bottom right, #e1306c, #8a3ab9, #ff7e29);
    border-radius: 50%;
    z-index: -1;
  }
`;

export default Story;
