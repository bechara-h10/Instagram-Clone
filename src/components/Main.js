import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Story from "./Story";
import Post from "./Post";
import BottomSheet from "./BottomSheet";
import { getPostsAPI } from "../actions";
import { connect } from "react-redux";

function Main(props) {
  useEffect(() => {
    props.getPosts();
  }, []);
  return (
    <Container>
      {props.loading && (
        <Loader>
          <div>
            <a href="#">Posting</a>
          </div>
        </Loader>
      )}
      <StoryContainer>
        <Story />
      </StoryContainer>
      <PostContainer>
        {props.posts &&
          props.posts.map((post) => {
            return (
              <Post
                key={post.id}
                actorImage={post.actor.image}
                actorName={post.actor.name}
                date={post.actor.date}
                caption={post.caption}
                comments={post.comments}
                commentedBy={post.commentedBy}
                likes={post.likes}
                location={post.location}
                image={post.sharedImg}
                postId={post.id}
                likedBy={post.likedBy}
              />
            );
          })}
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
  gap: 50px;
`;

const Loader = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    height: 120px;
    width: 120px;
    box-sizing: border-box;
    display: flex;
    position: relative;
    justify-content: center;
    perspective-origin: 60px 60px;
    transform-origin: 60px 60px;
    border: 0px solid rgb(0, 0, 0);
    flex: 0 0 auto;
    flex-flow: column nowrap;

    &:after,
    &:before {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      border-style: solid;
      border-width: 2px;
      box-sizing: border-box;
      content: "";
      left: 0;
      position: absolute;
      top: 0;
    }
    &:after {
      -webkit-animation: rotate 2s infinite ease;
      animation: rotate 2s infinite ease;
      border-color: #3897f0 transparent transparent;
      -webkit-transform-origin: 50%;
      transform-origin: 50%;
    }
    &:before {
      border-color: #c7c7c7;
    }
    a {
      display: block;
      font-size: 14px;
      margin: -60px 0;
      padding: 60px 9px;
      position: relative;
      text-align: center;
      z-index: 1;
      color: rgb(199, 199, 199);
      text-decoration: none;
      font: normal normal 600 normal 14px / 14px proxima-nova, "Helvetica Neue",
        Arial, Helvetica, sans-serif;
    }
  }

  @media (width <=768px) {
    div {
      height: 60px;
      width: 60px;
      &:before,
      &:after {
        height: 60px;
        width: 60px;
      }
      a {
        font-size: 12px;
      }
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    posts: state.postState.posts,
    loading: state.postState.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPostsAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
