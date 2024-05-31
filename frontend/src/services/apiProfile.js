import toast from "react-hot-toast";

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

export async function incrementFollower(username) {
  const response = await fetch(
    `http://127.0.0.1:8000/user/${username}/increment_follower`,
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

export async function decrementFollower(username) {
  const response = await fetch(
    `http://127.0.0.1:8000/user/${username}/decrement_follower`,
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

export async function changeProfilePic(username, newPic) {
  const response = await fetch(
    `http://127.0.0.1:8000/user/${username}/change_pfp`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newPic }),
      credentials: "same-origin",
    }
  );
  const data = await response.json();
  if (data["status"] === 200) {
    toast.success("Profile picture changed successfully.");
  } else {
    toast.error("Something went wrong.");
  }
  return data;
}

export async function changeProfileDesc(username, newDescription) {
  const response = await fetch(
    `http://127.0.0.1:8000/user/${username}/change_description`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newDescription }),
      credentials: "same-origin",
    }
  );
  const data = await response.json();
  if (data["status"] === 200) {
    toast.success("Description changed successfully.");
  } else {
    toast.error("Something went wrong.");
  }
  return data;
}
