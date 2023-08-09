import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <a href="" className="logo">
        MoBlog
      </a>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="">Register</Link>
      </nav>
    </header>
  );
}
