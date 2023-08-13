import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  useEffect(() => {
    fetch("http://localhost:4000/getMe", {
      credentials: "include",
    });
  }, []);
  return (
    <header>
      <a href="/" className="logo">
        MoBlog
      </a>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}
