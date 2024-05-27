import styled from "styled-components";

const StyledPost = styled.div`
  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
  }
`;

function ProfilePost() {
  return (
    <StyledPost>
      <img src="/demo_pic.jpg" alt="dfda" />
    </StyledPost>
  );
}

export default ProfilePost;
