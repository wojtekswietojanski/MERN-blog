import "../styling/header/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" id="logo">
        MountainsBlog
      </Link>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
