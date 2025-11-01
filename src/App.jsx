import "./style/global.css";
import TagButtons from "./sections/TagButtons";
import Post from "./components/Post";
import Header from "./sections/Header";
import Posts from "./sections/Posts";
import BasicForm from "./components/BasicForm";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    email: "",
    age: 0,
    checkedBox: "",
    radioBox: "",
  });
  return (
    <>
      <Header />
      <BasicForm
        method={"GET"}
        action={"/"}
        onSubmit={(event) => {
          event.preventDefault();
          console.log(formData);
        }}
        formData={formData}
        setData={setFormData}
      />
    </>
  );
}

export default App;
