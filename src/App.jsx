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
      children: (
        <div style={{ border: "2px solid red" }}>
          <div style={{ borderTop: "2px solid red" }}></div>
          <div style={{ borderTop: "2px solid green" }}>This is first div</div>
          <div style={{ borderTop: "2px solid blue" }}></div>
          <div style={{ borderTop: "2px solid blue" }}></div>
        </div>
      ),
    },
    {
      title: "title 2",
      body: "This is body 2",
      seprator: <div style={{ borderTop: "2px dashed yellow" }}></div>,
      children: (
        <div style={{ border: "2px dashed yellow" }}>
          <div style={{ borderTop: "2px dashed red" }}></div>
          <div style={{ borderTop: "2px dashed green" }}>This is two div</div>
          <div style={{ borderTop: "2px dashed blue" }}></div>
          <div style={{ borderTop: "2px dashed blue" }}></div>
        </div>
      ),
    },
    {
      title: "title 3",
      body: "This is body 3",
      seprator: <div style={{ borderTop: "2px dashed white" }}></div>,
      children: (
        <div style={{ border: "2px dashed white" }}>
          <div style={{ borderTop: "2px dashed red" }}></div>
          <div style={{ borderTop: "2px dashed green" }}>This is three div</div>
          <div style={{ borderTop: "2px dashed blue" }}></div>
          <div style={{ borderTop: "2px dashed blue" }}></div>
        </div>
      ),
    },
    {
      title: "title 4",
      body: "This is body 4",
      seprator: <div style={{ borderTop: "2px solid blue" }}></div>,
      children: (
        <div style={{ border: "2px solid blue" }}>
          <div style={{ borderTop: "2px solid red" }}></div>
          <div style={{ borderTop: "2px solid green" }}>This is four div</div>
          <div style={{ borderTop: "2px solid blue" }}></div>
          <div style={{ borderTop: "2px solid blue" }}></div>
        </div>
      ),
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
