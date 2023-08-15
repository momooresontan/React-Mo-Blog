import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePostPage() {
  return (
    <form>
      <input type="title" placeholder={"Title"} />
      <input type="summary" placeholder={"Summary"} />
      <input type="file" />
      <ReactQuill />
    </form>
  );
}
