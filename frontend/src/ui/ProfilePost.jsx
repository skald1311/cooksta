import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPostImage } from "../services/apiPost";
import SpinnerMini from "./SpinnerMini";

const StyledPost = styled.div`
  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
  }
`;

function ProfilePost({ postID }) {
  const [postImageBase64, setPostImageBase64] = useState("");

  useEffect(
    function () {
      const fetchPostImage = async () => {
        const res = await getPostImage(postID);
        setPostImageBase64(res["base64string"]);
      };
      fetchPostImage();
    },
    [postID]
  );

  return (
    <StyledPost>
      {postImageBase64 ? (
        <img src={`data:image/jpg;base64,${postImageBase64}`} alt="post img" />
      ) : (
        <SpinnerMini />
      )}
    </StyledPost>
  );
}

export default ProfilePost;
