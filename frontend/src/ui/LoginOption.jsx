import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLoginOption = styled.div`
  padding: 2.4rem 4rem;

  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  font-size: 1.6rem;
`;

const InnerDiv = styled.div`
  text-align: center;
`;

const StyledNavLink = styled(NavLink)`
  color: var(--color-indigo-700);
`;

function LoginOption() {
  return (
    <StyledLoginOption>
      <InnerDiv>
        Have an account already?
        <StyledNavLink to="/login"> Login</StyledNavLink>
      </InnerDiv>
    </StyledLoginOption>
  );
}

export default LoginOption;
