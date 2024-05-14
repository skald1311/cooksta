import { useEffect } from "react";

function App() {
  useEffect(function () {
    fetch(`http://127.0.0.1:8000/user/login/`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div>App</div>;
}

export default App;
