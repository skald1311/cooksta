export async function getPostInfo(postID) {
  const response = await fetch(`http://127.0.0.1:8000/post/${postID}/info`, {
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

export async function likePost(postID) {
  const response = await fetch(`http://127.0.0.1:8000/post/${postID}/like`, {
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

export async function unlikePost(postID) {
  const response = await fetch(`http://127.0.0.1:8000/post/${postID}/unlike`, {
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

export async function getPosts() {
  const response = await fetch(`http://127.0.0.1:8000/post/get_posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dummy: 100 }),
    credentials: "same-origin",
  });
  const data = await response.json();
  return data;
}
