import { useState } from "react";
import Form from "../ui/Form";
import FormRowVertical from "../ui/FormRowVertical";
import Input from "../ui/Input";
import Button from "../ui/Button";
import styled from "styled-components";

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
      background-color: var(--color-pink-700);
    }
    border: none;
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-sm);
  }
`;

function CreatePost() {
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
  const [itemName, setItemName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Image">
        <FileInput type="file" accept="image/*" id="image-input" />
      </FormRowVertical>
      <FormRowVertical label="Caption">
        <Input
          type="caption"
          id="caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Location">
        <Input
          type="location"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Item Name">
        <Input
          type="item-name"
          id="item-name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large">Create Post</Button>
      </FormRowVertical>
    </Form>
  );
}

export default CreatePost;
