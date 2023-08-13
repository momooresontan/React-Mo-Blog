import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/getMe", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo.user.username);
      });
    });
  }, []);
  return (
    <header>
      <a href="/" className="logo">
        MoBlog
      </a>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
