import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostInfo, likePost, unlikePost } from "../services/apiPost";
import Row from "../ui/Row";
import styled from "styled-components";
import SpinnerMini from "../ui/SpinnerMini";
import {
  decrementFollower,
  getProfilePic,
  incrementFollower,
} from "../services/apiProfile";
import ButtonIcon from "../ui/ButtonIcon";

import { HiPencil } from "react-icons/hi2";
import { PiForkKnifeFill } from "react-icons/pi";
import {
  FaLocationDot,
  FaRegCalendarPlus,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa6";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;
const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.5rem;
  color: var(--color-grey-900);
  cursor: pointer;
  margin-bottom: 5px;
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

const ImageContainer = styled.div`
  width: 350px;
  height: 350px;
`;

const TextContainer = styled.div`
  max-width: 300px;
  overflow-wrap: break-word;
  font-size: 2rem;
  margin-left: 10px;
`;

const LikeContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 3rem;
`;

function Post() {
  let { postID } = useParams();
  const navigate = useNavigate();

  const [postData, setPostData] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [like, setLike] = useState(false);

  function handleLike() {
    if (!like === true) {
      // Like a post
      likePost(postID);
      incrementFollower(postData["author"]);
    } else {
      // Unlike a post
      unlikePost(postID);
      decrementFollower(postData["author"]);
    }
    setLike(!like);
  }

  useEffect(
    // Fetch post data
    function () {
      const fetchPostInfo = async () => {
        const res = await getPostInfo(postID);
        setPostData(res);
      };
      fetchPostInfo();
    },
    [postID]
  );

  useEffect(
    // Fetch user's pfp
    function () {
      const fetchProfilePic = async () => {
        const ppf_base64 = await getProfilePic(postData["author"]);
        setProfilePic(ppf_base64);
      };
      if (postData) {
        fetchProfilePic();
      }
    },
    [postData]
  );

  return (
    <StyledContainer>
      {postData ? (
        <>
          <Row>
            <ImageContainer>
              <img
                src={`data:image/jpg;base64,${postData["image"]}`}
                alt="post img"
              />
            </ImageContainer>
          </Row>
          <Row>
            <StyledUserAvatar
              onClick={() =>
                navigate(`/profile/${postData["author"]}`, { replace: true })
              }
            >
              {profilePic ? (
                <>
                  <Avatar
                    src={`data:image/jpg;base64,${profilePic}`}
                    alt={`Avatar of ${postData["author"]}`}
                  />
                  <span>{postData["author"]}</span>
                </>
              ) : (
                <SpinnerMini />
              )}
            </StyledUserAvatar>
            <TextContainer>
              <HiPencil />
              &nbsp;
              <span>{postData["caption"]}</span>
            </TextContainer>
            <TextContainer>
              <PiForkKnifeFill />
              &nbsp;
              <span>{postData["item_name"]}</span>
            </TextContainer>
            <TextContainer>
              <FaLocationDot />
              &nbsp;
              <span>{postData["location"]}</span>
            </TextContainer>
            <TextContainer>
              <FaRegCalendarPlus />
              &nbsp;
              <span>{postData["upload_date"]}</span>
            </TextContainer>
            <LikeContainer>
              <ButtonIcon onClick={handleLike}>
                {like ? <FaHeart /> : <FaRegHeart />}
              </ButtonIcon>
              &nbsp;
              <span>
                {like ? postData["like_count"] + 1 : postData["like_count"]}
              </span>
            </LikeContainer>
          </Row>
        </>
      ) : (
        <SpinnerMini />
      )}
    </StyledContainer>
  );
}

export default Post;
