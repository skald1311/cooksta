import { toast } from "react-hot-toast";

export async function login({ username, password }) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/user/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
      credentials: "same-origin",
    });
    const data = await response.json();
    console.log(data);
    if (data.status === 200) {
      window.location.href = "/";
      toast.error("Login successfully");
    } else {
      toast.error("Provided email or password are incorrect");
    }
  } catch (err) {
    throw err;
  }
}
