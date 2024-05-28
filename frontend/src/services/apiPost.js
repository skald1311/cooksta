export async function getPostImage(postID) {
  const response = await fetch(`http://127.0.0.1:8000/post/${postID}/image`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ postID }),
    credentials: "same-origin",
  });
  const data = await response.json();
  return data;
}
