import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";
  return (
    <div className="post-page">
      <div className="image">
        <img src={`http://localhost:4000/${postInfo.imageCover}`} alt="" />
      </div>
      <h1>{postInfo.title}</h1>
    </div>
  );
}
