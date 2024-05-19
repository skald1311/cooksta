import { toast } from "react-hot-toast";

export async function login({ username, password }, dispatch) {
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
      toast.success("Login successfully");
      dispatch({ type: "login", payload: username });
    } else {
      toast.error("Provided email or password are incorrect");
    }
  } catch (err) {
    throw err;
  }
}
