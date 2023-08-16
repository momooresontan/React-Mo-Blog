import { useEffect, useState } from "react";
import Post from "../Post";

export default function IndexPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((blogs) => {
        setBlogs(blogs);
      });
    });
  }, []);
  return <>{blogs.length > 0 && blogs.map((blog) => <Post {...blog} />)}</>;
}
