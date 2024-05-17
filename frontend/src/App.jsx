// import { useEffect } from "react";
// useEffect(function () {
//   fetch(`http://127.0.0.1:8000/user/login/`)
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }, []);

import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: var(--color-pink-200);
`;

const StyledApp = styled.div`
  background-color: var(--color-pink-100);
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Cooksta</H1>
        <Input placeholder="username"></Input>
        <Input placeholder="password"></Input>
        <Button>Login</Button>
        <Button>Sign up</Button>
      </StyledApp>
    </>
  );
}

export default App;
