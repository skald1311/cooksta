import { useRef, useState } from "react";
import Form from "../ui/Form";
import FormRowVertical from "../ui/FormRowVertical";
import Input from "../ui/Input";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { useAuth } from "../features/authentication/AuthContext";
import { changePassword } from "../services/apiChangePassword";
import styled from "styled-components";
import { convertToBase64 } from "../utils/helpers";
import { changeProfileDesc, changeProfilePic } from "../services/apiProfile";

const FileInput = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  &::file-selector-button {
    font-family: "Snowstorm", cursive;
    // Medium
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
    color: var(--color-pink-50);
    background-color: var(--color-rosepink);
    &:hover {
      background-color: var(--color-button-hover);
    }
    border: none;
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-sm);
  }
`;

function Settings() {
  const { user } = useAuth();
  const imageInputRef = useRef(null);

  const [image, setImage] = useState(null);
  const [newDescription, setNewDescription] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  async function handleUpdatePfp(e) {
    e.preventDefault();
    if (!image) return;
    const imageBase64 = await convertToBase64(image);
    changeProfilePic(user, imageBase64);
    setImage(null);
    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  }

  async function handleUpdateDesc(e) {
    e.preventDefault();
    if (!newDescription) return;
    changeProfileDesc(user, newDescription);
    setNewDescription("");
  }

  function handleChangePassword(e) {
    e.preventDefault();
    if (!currentPassword || !newPassword) return;
    changePassword(user, currentPassword, newPassword);
    setCurrentPassword("");
    setNewPassword("");
  }

  return (
    <>
      <Heading as="h3">Update Profile Picture</Heading>
      <Form onSubmit={handleUpdatePfp}>
        <FormRowVertical label="New Profile Picture">
          <FileInput
            type="file"
            accept="image/*"
            id="image-input"
            onChange={(e) => setImage(e.target.files[0])}
            ref={imageInputRef}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Button size="large">Update Profile Picture</Button>
        </FormRowVertical>
      </Form>
      <br />
      <Heading as="h3">Update Description</Heading>
      <Form onSubmit={handleUpdateDesc}>
        <FormRowVertical label="New Description">
          <Input
            type="description"
            id="new-description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Button size="large">Update Description</Button>
        </FormRowVertical>
      </Form>
      <br />
      <Heading as="h3">Update Password</Heading>
      <Form onSubmit={handleChangePassword}>
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
          <Button size="large" variation="danger">
            Change Password
          </Button>
        </FormRowVertical>
      </Form>
    </>
  );
}

export default Settings;
