import { useState } from "react";
import Form from "../ui/Form";
import FormRowVertical from "../ui/FormRowVertical";
import Input from "../ui/Input";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { useAuth } from "../features/authentication/AuthContext";
import { changePassword } from "../services/apiChangePassword";

function Settings() {
  const { user } = useAuth();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!currentPassword || !newPassword) return;
    changePassword(user, currentPassword, newPassword);
    setCurrentPassword("");
    setNewPassword("");
  }

  return (
    <>
      <Heading as="h3">Update Account Password</Heading>
      <Form onSubmit={handleSubmit}>
        <FormRowVertical label="Current Password">
          <Input
            type="password"
            id="current-password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </FormRowVertical>
        <FormRowVertical label="New Password">
          <Input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Button size="large">Change Password</Button>
        </FormRowVertical>
      </Form>
    </>
  );
}

export default Settings;
