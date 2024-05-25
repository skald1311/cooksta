export async function createPost(username) {
  const response = await fetch(
    `http://127.0.0.1:8000/user/${username}/description`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
      credentials: "same-origin",
    }
  );
  const data = await response.json();
  return data;
}
