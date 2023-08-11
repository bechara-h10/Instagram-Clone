import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <Container>
      <Content>
        <Logo>
          <img src="/images/logo.png" alt="" />
        </Logo>
        <NavList>
          <NavListItem className="home-item">
            <a>
              <img src="/images/home-icon.png" alt="" />
              <span>Home</span>
            </a>
          </NavListItem>
          <NavListItem className="search-item">
            <a>
              <img src="/images/search-icon.png" alt="" />
              <span>Search</span>
            </a>
          </NavListItem>
          <NavListItem className="explore-item">
            <a>
              <img src="/images/explore-icon.png" alt="" />
              <span>Explore</span>
            </a>
          </NavListItem>
          <NavListItem className="reels-item">
            <a>
              <img src="/images/reels-icon.png" alt="" />
              <span>Reels</span>
            </a>
          </NavListItem>
          <NavListItem className="messages-item">
            <a>
              <img src="/images/chat-icon.png" alt="" />
              <span>Messages</span>
            </a>
          </NavListItem>
          <NavListItem className="notifications-item">
            <a>
              <img src="/images/heart-icon.png" alt="" />
              <span>Notifications</span>
            </a>
          </NavListItem>
          <NavListItem className="create-item">
            <a>
              <img src="/images/add-icon.png" alt="" />
              <span>Create</span>
            </a>
          </NavListItem>
          <NavListItem className="user-img">
            <a>
              <img src="/images/user.svg" alt="" />
              <span>Profile</span>
            </a>
          </NavListItem>
          <NavListItem className="more-item">
            <a>
              <img src="/images/more-icon.png" alt="" />
              <span>More</span>
            </a>
          </NavListItem>
        </NavList>
      </Content>
    </Container>
  );
}

const Container = styled.nav`
  width: min(250px, 25%);
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100vh;
  border-right: solid 1px rgba(0, 0, 0, 0.15);
  @media (width <= 768px) {
    bottom: 0;
    left: 0;
    right: 0;
    border-right: none;
    border-top: solid 1px rgba(0, 0, 0, 0.15);
    height: auto;
    width: 100vw;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 24px 24px 48px 24px;
  @media (width <= 768px) {
    flex-direction: row;
    height: auto;
    padding: 0;
    width: 100vw;
  }
`;

const Logo = styled.div`
  margin-bottom: 36px;
  margin-left: 8px;
  width: 100%;
  cursor: pointer;
  img {
    width: 100px;
  }
  @media (width<=768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  list-style: none;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  @media (width <= 768px) {
    flex-direction: row;
    height: auto;
  }
`;

const NavListItem = styled.li`
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: 8px;
    height: 40px;
  }
  img {
    width: 24px;
    transition: transform 250ms ease-in-out;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    img {
      transform: scale(1.05);
    }
  }

  &.user-img {
    img {
      border-radius: 50%;
    }
  }

  @media (width<=768px) {
    a {
      gap: 5px;
    }
    &.search-item,
    &.messages-item,
    &.notifications-item,
    &.more-item {
      display: none;
    }
  }
`;

export default Nav;
