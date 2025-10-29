// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import "./style/global.css";
import TagButtons from "./sections/TagButtons";
import Post from "./components/Post";
import Header from "./sections/Header";
import Posts from "./sections/Posts";

function App() {
  // const [count, setCount] = useState(0);
  const data = [
    {
      title: "title 1",
      body: "This is body 1",
      seprator: <div style={{ borderTop: "2px solid red" }}></div>,
    },
    {
      title: "title 2",
      body: "This is body 2",
      seprator: <div style={{ borderTop: "2px dashed yellow" }}></div>,
    },
    {
      title: "title 3",
      body: "This is body 3",
      seprator: <div style={{ borderTop: "2px pointed white" }}></div>,
    },
    {
      title: "title 4",
      body: "This is body 4",
      seprator: <div style={{ borderTop: "2px solid blue" }}></div>,
    },
  ];
  return (
    <>
      <Header />
      <div style={{ display: "flex", gap: "20px" }}>
        <Posts data={data} />
        <TagButtons />
      </div>
    </>
  );
}

export default App;
