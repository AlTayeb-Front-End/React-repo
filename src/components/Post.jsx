import "../style/posts/post.css";

export default function Post({ title, body, seprator, children }) {
  return (
    <div className={"div-post"}>
      <h2>{title}</h2>
      {seprator}
      <p>{body}</p>
      {children}
    </div>
  );
}
