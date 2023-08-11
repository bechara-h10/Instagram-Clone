import React from "react";
import styled from "styled-components";

function Suggestions() {
  return (
    <Container>
      <User>
        <img src="/images/user.svg" alt="" />
        <p>
          <span>user_name</span>
          <span>Full name</span>
        </p>
        <a>Switch</a>
      </User>
      <SuggestedUsers>
        <p>
          <span> Suggested for you</span>
          <a>See all</a>
        </p>
        <UserSuggestion>
          <img src="/images/user.svg" alt="" />
          <p>
            <span>user_name</span>
            <span>Full name</span>
          </p>
          <a>Follow</a>
        </UserSuggestion>
        <UserSuggestion>
          <img src="/images/user.svg" alt="" />
          <p>
            <span>user_name</span>
            <span>Full name</span>
          </p>
          <a>Follow</a>
        </UserSuggestion>
        <UserSuggestion>
          <img src="/images/user.svg" alt="" />
          <p>
            <span>user_name</span>
            <span>Full name</span>
          </p>
          <a>Follow</a>
        </UserSuggestion>
        <UserSuggestion>
          <img src="/images/user.svg" alt="" />
          <p>
            <span>user_name</span>
            <span>Full name</span>
          </p>
          <a>Follow</a>
        </UserSuggestion>
        <UserSuggestion>
          <img src="/images/user.svg" alt="" />
          <p>
            <span>user_name</span>
            <span>Full name</span>
          </p>
          <a>Follow</a>
        </UserSuggestion>
      </SuggestedUsers>
    </Container>
  );
}

const Container = styled.div`
  grid-column: 3/4;
  @media (width <= 768px) {
    display: none;
  }
`;

const User = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 36px 8px;
  img {
    width: 56px;
    border-radius: 50%;
    cursor: pointer;
  }
  p {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    span:first-child {
      font-weight: 700;
      cursor: pointer;
    }
    span:nth-child(2) {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  a {
    color: var(--btn-bg-color);
    font-size: 13px;
    cursor: pointer;
  }
`;

const SuggestedUsers = styled.div`
  p {
    display: flex;
    justify-content: space-between;
    padding: 0 12px;
    span {
      color: rgba(0, 0, 0, 0.6);
    }
    a {
      font-weight: 700;
    }
  }
`;

const UserSuggestion = styled(User)`
  padding: 0 12px;
  margin-top: 12px;
`;

export default Suggestions;
