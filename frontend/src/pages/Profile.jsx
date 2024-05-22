import Row from "../ui/Row";
import Heading from "../ui/Heading";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getProfileDesc, getProfilePic } from "../services/apiProfile";
import { useEffect, useState } from "react";
import { HiHandThumbUp } from "react-icons/hi2";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-900);
`;

const Avatar = styled.img`
  display: block;
  width: 8rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

const StyledUserInfoRow = styled(Row)`
  Heading {
    font-size: 2rem;
    color: var(--color-grey-900);
    font-weight: 500;
  }
  p {
    color: var(--color-grey-500);
    font-weight: 100;
  }
  margin-left: 1.4rem;
  gap: 0.5rem;
`;

const RankAndLikeCountContainer = styled.div`
  color: var(--color-pink-700);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4rem;
  img {
    width: 40px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  HiHandThumbUp,
  p {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  p {
    margin-top: -10px;
  }
`;

const GreyBar = styled.div`
  width: 0.5px;
  height: 80px;
  background-color: var(--color-grey-0);
  margin: 0 10px;
`;

const StyledProfileRow = styled.div`
  display: flex;
  justify-content: normal;
  align-items: center;
`;

function Profile() {
  let { username } = useParams();
  const [profilePic, setProfilePic] = useState(null);
  const [profileDesc, setProfileDesc] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const ppf_base64 = await getProfilePic(username);
        const profile_desc = await getProfileDesc(username);
        setProfilePic(ppf_base64);
        setProfileDesc(profile_desc);
      } catch (err) {
        console.error("Error fetching profile: ", err);
      }
    };
    fetchProfile();
  }, [username]);

  return (
    <StyledProfileRow>
      <Row type="horizontal">
        <StyledUserAvatar>
          <Avatar
            src={`data:image/jpg;base64,${profilePic}`}
            alt={`Avatar of ${username}`}
          />
        </StyledUserAvatar>
        <StyledUserInfoRow>
          <Heading as="h3">{username}</Heading>
          <p>{profileDesc}</p>
        </StyledUserInfoRow>
      </Row>
      <RankAndLikeCountContainer>
        <Row>
          <img src="/platinum.png" alt="Chef Hat Platinum" />
          <p>Platinum</p>
        </Row>
        <GreyBar></GreyBar>
        <Row>
          <HiHandThumbUp size={40} />
          <p>1.13k</p>
        </Row>
      </RankAndLikeCountContainer>
    </StyledProfileRow>
  );
}

export default Profile;
