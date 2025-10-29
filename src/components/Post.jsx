import "../style/post.css";

export default function Post({ title, body, seprator }) {
  return (
    <dev className={"dev-post"}>
      <h2>{title}</h2>
      {seprator}
      <p>{body}</p>
    </dev>
  );
}
