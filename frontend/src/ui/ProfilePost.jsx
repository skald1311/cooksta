import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPostInfo } from "../services/apiPost";
import SpinnerMini from "./SpinnerMini";
import { HiHeart } from "react-icons/hi2";

const StyledPost = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2.5rem;
  &:hover {
    opacity: 0.5;
  }
`;

function handleClick() {
  console.log("ahsdfhsadhf");
}

function ProfilePost({ postID }) {
  const [postImageBase64, setPostImageBase64] = useState("");
  const [postLikeCount, setPostLikeCount] = useState(null);

  useEffect(
    function () {
      const fetchPostInfo = async () => {
        const res = await getPostInfo(postID);
        setPostLikeCount(res["like_count"]);
        setPostImageBase64(res["image"]);
      };
      fetchPostInfo();
    },
    [postID]
  );

  return (
    <StyledPost>
      {postImageBase64 ? (
        <>
          <img
            src={`data:image/jpg;base64,${postImageBase64}`}
            alt="post img"
          />
          <Overlay onClick={handleClick}>
            <HiHeart />
            &nbsp;
            <span>{postLikeCount}</span>
          </Overlay>
        </>
      ) : (
        <SpinnerMini />
      )}
    </StyledPost>
  );
}

export default ProfilePost;
