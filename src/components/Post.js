import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineEllipsis } from "react-icons/ai";
import { addCommentAPI, likePostAPI } from "../actions";
import { connect } from "react-redux";
import BottomSheet from "./BottomSheet";

function Post(props) {
  const [comment, setComment] = useState("");
  const [itemsVisible, setItemsVisible] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false);
  const likePost = (e) => {
    e.preventDefault();
    props.likePost(props.postId, props.user);
  };
  const commentOnPost = (e) => {
    e.preventDefault();
    props.addComment(props.postId, comment, props.user);
    setComment("");
  };
  return (
    <Container>
      <PostInfo>
        <div>
          <img src={props.actorImage} alt="" />
        </div>
        <div>
          <a>{props.actorName}</a>
          <span>{new Date().toDateString()}</span>
          <span>{props.location}</span>
        </div>
        <div>
          <AiOutlineEllipsis />
        </div>
      </PostInfo>
      <PostContent>
        <img src={props.image} alt="" />
      </PostContent>
      <UserInterractions>
        {props.user && props.likedBy.indexOf(props.user.email) === -1 ? (
          <img
            src="/images/heart-icon.png"
            alt=""
            onClick={(e) => likePost(e)}
          />
        ) : (
          <img
            src="/images/heart-icon-filled.png"
            alt=""
            onClick={(e) => likePost(e)}
          />
        )}
        <img src="/images/comments-icon.png" alt="" />
        <img src="/images/send-icon.png" alt="" />
        <img src="/images/save-icon.png" alt="" />
      </UserInterractions>
      <Description>
        <p>{props.likes} Likes</p>
        <p>
          <span>{props.actorName}</span> {props.caption}
        </p>
      </Description>
      <Comments>
        <p onClick={() => setSheetVisible(true)}>
          View all {props.comments} comments
        </p>
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          disabled={!comment ? true : false}
          onClick={(e) => commentOnPost(e)}
        >
          Post
        </button>
      </Comments>
      <BottomSheet
        setSheetVisible={(item) => setSheetVisible(item)}
        sheetVisible={sheetVisible}
        setItemsVisible={(item) => setItemsVisible(item)}
        cardDetail={props.commentedBy}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  @media (width <= 768px) {
    width: 100%;
  }
`;

const PostInfo = styled.div`
  display: flex;
  padding: 8px 0;
  div:first-child {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: contain;
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 8px;
    font-size: 14px;
    cursor: pointer;

    a {
      font-weight: 700;
      &:hover {
        color: rgba(0, 0, 0, 0.6);
      }
      text-decoration: none;
    }
    span {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  div:last-child {
    margin-left: auto;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const PostContent = styled.div`
  border: solid 1px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  img {
    width: 100%;
    height: 85%;
    object-fit: contain;
  }
`;

const UserInterractions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 0;
  position: relative;

  img {
    width: 26px;
    height: 26px;
    cursor: pointer;
  }
  img:nth-child(2) {
    width: 32px;
    height: 32px;
  }
  img:last-child {
    margin-left: auto;
  }
`;

const Description = styled.div`
  p:first-child,
  span {
    font-weight: 700;
    margin-bottom: 8px;
    cursor: pointer;
  }
`;

const Comments = styled.div`
  margin-top: 8px;
  color: rgba(0, 0, 0, 0.6);
  position: relative;
  p {
    cursor: pointer;
  }
  input {
    width: 100%;
    margin-top: 8px;
    padding-bottom: 16px;
    border: none;
    font-size: 16px;
    border-bottom: solid 1px rgba(0, 0, 0, 0.6);
    outline: none;
  }
  button {
    position: absolute;
    right: 0;
    top: 50%;
    color: var(--btn-bg-color);
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    &:disabled {
      display: none;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    posts: state.postState.posts,
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    likePost: (postId, payload) => dispatch(likePostAPI(postId, payload)),
    addComment: (postId, text, payload) =>
      dispatch(addCommentAPI(postId, text, payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
