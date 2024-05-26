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
  // Add created postID to user's post array
  const created_postID = data.postID;
  const username = postData.user;
  const response2 = await fetch(
    `http://127.0.0.1:8000/user/${username}/addPost`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ created_postID }),
      credentials: "same-origin",
    }
  );
  const data2 = await response2.json();
  return [data, data2];
}
