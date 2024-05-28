export async function getProfilePic(username) {
  const response = await fetch(`http://127.0.0.1:8000/user/${username}/ppf`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
    credentials: "same-origin",
  });
  const data = await response.json();
  return data;
}

export async function getProfileDesc(username) {
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

export async function getProfileRank(username) {
  const response = await fetch(`http://127.0.0.1:8000/user/${username}/rank`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
    credentials: "same-origin",
  });
  const data = await response.json();
  return data;
}

export async function getProfileLikeCount(username) {
  const response = await fetch(
    `http://127.0.0.1:8000/user/${username}/like_count`,
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

export async function getProfilePosts(username) {
  const response = await fetch(
    `http://127.0.0.1:8000/user/${username}/getProfilePosts`,
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
