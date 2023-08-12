import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Main from "./Main";
import Suggestions from "./Suggestions";

function Home() {
  return (
    <Container>
      <Nav />
      <Main />
      <Suggestions />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 250px) minmax(0, 3fr) minmax(0, 1fr);
  position: relative;
  @media (width <=768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default Home;
