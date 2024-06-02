import styled from "styled-components";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const StyledFooter = styled.div`
  margin-top: auto;
  align-self: center;
`;

const FooterIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }
  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterIcon
        onClick={() =>
          window.open("https://github.com/skald1311/cooksta", "_blank")
        }
      >
        <IoLogoGithub />
      </FooterIcon>
      <FooterIcon
        onClick={() =>
          window.open("https://www.linkedin.com/in/hmd1311/", "_blank")
        }
      >
        <IoLogoLinkedin />
      </FooterIcon>
    </StyledFooter>
  );
}

export default Footer;
