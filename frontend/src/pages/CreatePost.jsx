import { useState } from "react";
import Form from "../ui/Form";
import FormRowVertical from "../ui/FormRowVertical";
import Input from "../ui/Input";
import Button from "../ui/Button";

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
        <Input type="file" accept="image/*" />
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
