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

  return (
    <>
      <Header />
      <div style={{ display: "flex", gap: "20px" }}>
        <Posts />
        <TagButtons />
      </div>
    </>
  );
}

export default App;
