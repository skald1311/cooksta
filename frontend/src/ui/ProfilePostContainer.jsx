import styled from "styled-components";
import ProfilePost from "./ProfilePost";

const StyledProfilePostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 15px;
  grid-gap: 5px;
`;

function ProfilePostContainer() {
  return (
    <StyledProfilePostContainer>
      <ProfilePost />
      <ProfilePost />
      <ProfilePost />
      <ProfilePost />
      <ProfilePost />
      <ProfilePost />
      <ProfilePost />
      <ProfilePost />
      <ProfilePost />
    </StyledProfilePostContainer>
  );
}

export default ProfilePostContainer;
