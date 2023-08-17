import { formatISO9075 } from "date-fns";

export default function Post({
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
        <img src={`htttp://localhost:4000/${imageCover}`} alt="" />
      </div>
      <div className="text">
        <h2>{title}</h2>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
