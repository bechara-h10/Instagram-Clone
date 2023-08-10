import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Content>
        <LoggedInAccounts>
          <img src="/images/logo.png" alt="" />
          <img src="/images/user.svg" alt="" />
          <button>Continue as user</button>
          <a>Remove Account</a>
        </LoggedInAccounts>
        <SignIn>
          <p>Not user?</p>
          <p>
            <span>Switch Accounts</span> or <span>Sign Up</span>
          </p>
        </SignIn>
        <GetApp>
          <p>Get the app</p>
          <a href="#">
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              alt=""
            />
          </a>
          <a
            href="#
          "
          >
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
              alt=""
            />
          </a>
        </GetApp>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 48px 48px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const LoggedInAccounts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  min-height: 340px;
  padding: 36px 92px;
  img:first-child {
    width: 180px;
  }
  img:nth-child(2) {
    width: 78px;
    border-radius: 50%;
  }

  button {
    background-color: var(--btn-bg-color);
    color: var(--background-color);
    border: none;
    padding: 8px 36px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      background-color: var(--btn-bg-color_Hover);
    }
  }
  a {
    color: var(--btn-bg-color);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      color: #022046;
    }
  }
`;

const SignIn = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  padding: 36px 84px;
  text-align: center;
  p {
    color: rgba(0, 0, 0, 0.6);
    font-size: 16px;
    span {
      color: var(--btn-bg-color);
      cursor: pointer;
      &:hover {
        color: #022046;
      }
    }
  }
`;

const GetApp = styled.div`
  font-size: 14px;
  text-align: center;
  p {
    margin-bottom: 8px;
  }
  a {
    img {
      width: 100px;
      aspect-ratio: 3/1;
      object-fit: contain;
    }
  }
`;
export default Login;
