import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LoginOption from "../ui/LoginOption";
import SignUpForm from "../features/authentication/SignUpForm";

// Sign up form is exactly the same as the login form, except for minor changes

const SignUpLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function SignUp() {
  return (
    <SignUpLayout>
      <Logo />
      <Heading as="h4">COOKSTA</Heading>
      <SignUpForm />
      <LoginOption />
    </SignUpLayout>
  );
}

export default SignUp;
