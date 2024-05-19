import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { signUp } from "../../services/apiSignUp";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [isSignedUp, setIsSignedUp] = useState(false);
  const { dispatch, isAuthenticated } = useAuth(); // this for automatic log in after sign up

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username || !password) return;
    signUp({ username, password }, dispatch);
  }

  // useEffect(
  //   // If signed up, navigate back to login for user to sign in
  //   function () {
  //     if (isSignedUp) navigate("/login", { replace: true });
  //   },
  //   [isSignedUp, navigate]
  // );

  useEffect(
    // Sign in automatically after successful sign up
    function () {
      if (isAuthenticated) navigate("/", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Username">
        <Input
          type="username"
          id="username"
          // This makes this form better for password managers
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large">Sign Up</Button>
      </FormRowVertical>
    </Form>
  );
}

export default SignUpForm;
