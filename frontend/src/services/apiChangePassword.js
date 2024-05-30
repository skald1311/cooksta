import { toast } from "react-hot-toast";

export async function changePassword(username, currentPassword, newPassword) {
  const response = await fetch(
    `http://127.0.0.1:8000/user/${username}/get_password`,
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
  const fetchedCurrentPassword = data["password"];
  if (fetchedCurrentPassword === currentPassword) {
    // Matching current password => proceeds with changing password
    const response2 = await fetch(
      `http://127.0.0.1:8000/user/${username}/change_password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currentPassword, newPassword }),
        credentials: "same-origin",
      }
    );
    const data2 = await response2.json();
    if (data2["status"] === 200) {
      toast.success(data2["message"]);
    }
  } else {
    // Inputted current password and fetched current password don't match => toast.error
    toast.error("Incorrect current password. Please try again!");
  }
  return;
}
