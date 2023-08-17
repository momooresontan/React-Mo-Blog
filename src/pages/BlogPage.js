import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BlogPage() {
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`);
  }, []);
  return <div>This is more info</div>;
}
