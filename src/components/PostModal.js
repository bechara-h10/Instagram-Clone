import React, { useState } from "react";
import styled from "styled-components";
import { BsArrowLeft, BsChevronDown } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { addPostsAPI } from "../actions";
import { connect } from "react-redux";
import { Timestamp } from "firebase/firestore";

function PostModal(props) {
  const [shareImage, setShareImage] = useState("");
  const [editorText, setEditorText] = useState("");
  const [location, setLocation] = useState("");
  const handleChange = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert(`Not an image, the file is a ${typeof image}`);
      return;
    }
    setShareImage(image);
  };

  const addPost = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    const payload = {
      image: shareImage,
      user: props.user,
      caption: editorText,
      timestamp: Timestamp.now(),
      location: location,
    };
    props.addPost(payload);
    console.log(props.loading);
    reset(e);
  };

  const reset = (e) => {
    setShareImage("");
    setEditorText("");
    setLocation("");
    props.handleClick(e);
  };
  return (
    <>
      {props.showModal && (
        <Container>
          <Content>
            <Navigation>
              <BsArrowLeft onClick={(e) => reset(e)} />
              <span>Create a post</span>
              <button
                onClick={(e) => addPost(e)}
                disabled={!editorText || !shareImage ? true : false}
              >
                Share
              </button>
            </Navigation>
            <PostContent>
              <Upload>
                <input
                  type="file"
                  name="upload"
                  id="upload"
                  accept="image/gif,image/jpeg, image/png"
                  onChange={(e) => handleChange(e)}
                />
                <label
                  htmlFor="upload"
                  style={{
                    display: shareImage ? "none" : "block",
                  }}
                >
                  Select an image to upload
                </label>
                {shareImage && (
                  <img src={URL.createObjectURL(shareImage)} alt="" />
                )}
              </Upload>
              <Info>
                <div className="user-container">
                  {props.user ? (
                    <>
                      {" "}
                      <img src={props.user.photoURL} alt="" />
                      <a>{props.user.displayName}</a>
                    </>
                  ) : (
                    <>
                      <img src="/images/user.svg" alt="" />
                      <a>user_name</a>
                    </>
                  )}
                </div>
                <textarea
                  placeholder="Write a caption"
                  rows="10"
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                />
                <div className="location-container">
                  <input
                    type="text"
                    placeholder="Add a location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <CiLocationOn />
                </div>
                <div className="options-container">
                  <span>Accessibility</span>
                  <BsChevronDown />
                </div>
                <div className="options-container">
                  <span>Advanced settings</span>
                  <BsChevronDown />
                </div>
              </Info>
            </PostContent>
          </Content>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 200;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #262626;
  width: min(750px, 50%);
  height: 400px;
  border-radius: 16px;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 8px 16px;
  min-height: 50px;
  svg {
    font-size: 24px;
    cursor: pointer;
  }
  span {
    font-weight: 700;
  }

  button {
    background-color: transparent;
    color: var(--btn-bg-color);
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
    &:disabled {
      color: #777;
    }
  }
`;

const PostContent = styled.div`
  display: flex;
  min-height: 350px;
`;

const Upload = styled.div`
  flex: 1;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    display: none;
  }

  label {
    color: #fff;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Info = styled.div`
  flex: 1;
  border-left: solid 1px rgba(0, 0, 0, 0.15);
  div.user-container {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #fff;
    padding-left: 16px;
  }

  div.user-container > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  textarea {
    width: 100%;
    margin-top: 16px;
    padding-left: 16px;
    background-color: transparent;
    color: #fff;
    border: none;
    outline: none;
    font-size: 16px;
    resize: none;
  }
  div.location-container {
    width: 100%;
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: space-between;
    input {
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 16px;
      padding-left: 16px;
      color: #fff;
    }
    svg {
      font-size: 16px;
      margin-right: 16px;
    }
  }
  div.options-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    color: #fff;
    svg {
      font-size: 16px;
      cursor: pointer;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    loading: state.postState.loading,
  };
};

const mapDispacthToProps = (dispatch) => {
  return {
    addPost: (payload) => dispatch(addPostsAPI(payload)),
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(PostModal);
