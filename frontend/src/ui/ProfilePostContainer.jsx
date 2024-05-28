import styled from "styled-components";
import ProfilePost from "./ProfilePost";
import { useAuth } from "../features/authentication/AuthContext";
import { useEffect, useState } from "react";
import { getProfilePosts } from "../services/apiProfile";

const StyledProfilePostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 15px;
  grid-gap: 5px;
`;

function ProfilePostContainer() {
  const { user } = useAuth();
  const [userPosts, setUserPosts] = useState([]);

  useEffect(
    function () {
      const fetchPostArray = async () => {
        try {
          const res = await getProfilePosts(user);
          setUserPosts(res["postArray"]);
        } catch (err) {
          console.error("Error fetching post array: ", err);
        }
      };
      fetchPostArray();
    },
    [user]
  );

  return (
    <StyledProfilePostContainer>
      {userPosts?.map((postID) => (
        <ProfilePost postID={postID} />
      ))}
    </StyledProfilePostContainer>
  );
}

export default ProfilePostContainer;
