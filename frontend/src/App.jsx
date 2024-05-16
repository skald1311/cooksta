// import { useEffect } from "react";
// useEffect(function () {
//   fetch(`http://127.0.0.1:8000/user/login/`)
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }, []);

import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  cursor: pointer;
  margin: 20px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.div`
  background-color: orangered;
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
