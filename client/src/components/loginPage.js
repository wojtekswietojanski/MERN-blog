import "../styling/registerPage/registerPage.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState("");

  async function login(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    } else {
      alert("wrong credentials");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <form action="" onSubmit={login}>
        <p>Login</p>
        <input
          type="text"
          name="username"
          id="emailInput"
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          name="password"
          id="passwordInput"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
