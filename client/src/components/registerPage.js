import "../styling/registerPage/registerPage.css";
import { useState } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function register(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok == true) {
      alert("you are now registered");
    } else {
      alert("registration failed");
    }
  }

  return (
    <div>
      <form action="" onSubmit={register}>
        <p>Register</p>
        <input
          type="text"
          name="username"
          id="usernameInput"
          placeholder="Email"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          name="password"
          id="passwordInput"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
