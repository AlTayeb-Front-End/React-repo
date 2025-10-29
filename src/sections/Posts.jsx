import Post from "../components/Post";
import "../style/posts.css";
export default function Posts() {
  let posts = [];
  for (let counter = 0; counter < 10; counter++) posts.push(<Post />);

  return <dev className={"posts"}>{posts}</dev>;
}
