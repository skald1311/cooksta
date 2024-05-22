import styled from "styled-components";
import { getProfilePic } from "../../services/apiProfile";
import { useEffect, useState } from "react";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function UserAvatar({ user }) {
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const ppf_base64 = await getProfilePic(user);
        setProfilePic(ppf_base64);
      } catch (err) {
        console.error("Error fetching profile: ", err);
      }
    };
    fetchProfile();
  }, [user]);

  return (
    <StyledUserAvatar>
      <Avatar
        src={`data:image/jpg;base64,${profilePic}`}
        alt={`Avatar of ${user}`}
      />
      <span>{user}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
