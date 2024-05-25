export async function createPost(postData) {
  const response = await fetch(`http://127.0.0.1:8000/post/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
    credentials: "same-origin",
  });
  const data = await response.json();
  return data;
}
