import React from "react";
import styled from "styled-components";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";

function BottomSheet(props) {
  console.log(props.cardDetail);
  return (
    <>
      <SwipeableBottomSheet
        open={props.sheetVisible}
        onChange={() => {
          props.setSheetVisible(!props.sheetVisible);
          props.setItemsVisible(true);
        }}
        fullScreen={false}
        style={{
          zIndex: "100",
          width: "50vw",
          margin: "auto",
        }}
      >
        <Container>
          {props.cardDetail.length !== 0 ? (
            props.cardDetail.map((comment, index) => {
              return (
                <Comment key={index}>
                  <p>{comment.by}</p>
                  <span>{comment.text}</span>
                </Comment>
              );
            })
          ) : (
            <span>No comments on this post</span>
          )}
        </Container>
      </SwipeableBottomSheet>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  min-height: 50vh;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
  border-bottom: solid 1px rgba(0, 0, 0, 0.15);
  padding-bottom: 8px;
  p {
    color: black;
    font-weight: 700;
  }
  span {
    white-space: break-word;
    overflow-wrap: break-word;
    max-width: 100%;
  }
`;

export default BottomSheet;
