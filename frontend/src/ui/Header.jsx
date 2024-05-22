import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import { useAuth } from "../features/authentication/AuthContext";

const StyledHeader = styled.header`
  background-color: var(--color-pink-200);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  const { user } = useAuth();
  return (
    <StyledHeader>
      <UserAvatar user={user} />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
