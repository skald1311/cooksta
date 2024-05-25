import { useRef, useState } from "react";
import Form from "../ui/Form";
import FormRowVertical from "../ui/FormRowVertical";
import Input from "../ui/Input";
import Button from "../ui/Button";
import styled from "styled-components";
import toast from "react-hot-toast";
import { convertToBase64 } from "../utils/helpers";
import { useAuth } from "../features/authentication/AuthContext";
import { createPost } from "../services/apiCreatePost";

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
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
  const [itemName, setItemName] = useState("");

  const { user } = useAuth(); // To know the username who's logged in
  const imageInputRef = useRef(null); // For resetting the input field text to "No file chosen"

  function handleReset() {
    setImage(null);
    setCaption("");
    setLocation("");
    setItemName("");
    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!image || !caption || !location || !itemName) {
      toast.error("Please provide all the necessary information");
    }
    const imageBase64 = await convertToBase64(image); // Handling conversion on frontend
    const dataToBeSend = {
      user,
      imageBase64,
      caption,
      location,
      itemName,
    };
    createPost(dataToBeSend);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Image">
        <FileInput
          type="file"
          accept="image/*"
          id="image-input"
          onChange={(e) => setImage(e.target.files[0])}
          ref={imageInputRef}
        />
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
      <Button size="small" type="button" onClick={handleReset}>
        Reset
      </Button>
      <FormRowVertical>
        <Button size="large">Create Post</Button>
      </FormRowVertical>
    </Form>
  );
}

export default CreatePost;
