import "../styling/registerPage/registerPage.css";

const LoginPage = () => {
  return (
    <div>
      <form action="">
        <p>Login</p>
        <input type="text" name="email" id="emailInput" placeholder="Email" />
        <input
          type="text"
          name="password"
          id="passwordInput"
          placeholder="Password"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
