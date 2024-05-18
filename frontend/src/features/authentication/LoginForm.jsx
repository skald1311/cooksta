import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { login } from "../../services/apiAuth";

function LoginForm() {
  const [username, setUsername] = useState("demo_account");
  const [password, setPassword] = useState("12345678");

  function handleSubmit(e) {
    e.preventDefault();
    if (!username || !password) return;
    login({ username, password });
  }

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
        <Button size="large">Log in</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
