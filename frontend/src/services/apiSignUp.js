import { toast } from "react-hot-toast";

export async function signUp({ username, password }, dispatch) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/user/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
      credentials: "same-origin",
    });
    const data = await response.json();
    // console.log(data);
    if (data.status === 200) {
      toast.success("Sign up successfully 🎉");
      // setIsSignedUp(true);
      dispatch({ type: "login", payload: username });
    } else {
      // status === 400: username already exists
      toast.error("Username has already been taken");
    }
  } catch (err) {
    throw err;
  }
}
