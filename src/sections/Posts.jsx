import Post from "../components/Post";
import "../style/posts.css";
export default function Posts({ data }) {
  // let posts = [];
  // for (let counter = 0; counter < data.length; counter++)
  //   posts.push(
  //     <Post
  //       title={data[counter].title}
  //       body={data[counter].body}
  //       seprator={data[counter].seprator}
  //     />
  //   );

  return (
    <div className={"posts"}>
      {data.map((element) => {
        return (
          <Post
            key={element.title}
            title={element.title}
            body={element.body}
            seprator={element.seprator}
          >
            {element.children}
          </Post>
        );
      })}
    </div>
  );
}
