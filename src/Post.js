import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
  _id,
  title,
  summary,
  content,
  imageCover,
  createdAt,
  author,
}) {
  return (
    <div className="post">
      <div className="image">
        <Link to={"/post/id"}>
          <img src={`http://localhost:4000/${imageCover}`} alt="" />
        </Link>
      </div>
      <div className="text">
        <Link to={"/post/id"}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
