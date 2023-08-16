export default function Post({
  title,
  summary,
  content,
  imageCover,
  createdAt,
}) {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2023/08/nvidia-siggraph1.jpg?w=850&h=492&crop=1"
          alt=""
        />
      </div>
      <div className="text">
        <h2>{title}</h2>
        <p className="info">
          <a className="author">Momooreoluwa Sontan</a>
          <time>{createdAt}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
