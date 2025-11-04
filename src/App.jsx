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
    checkedBox: [],
    radioBox: "",
    country: "",
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
      <div>{formData.userName}</div>
      <div>{formData.password}</div>
      <div>{formData.email}</div>
      <div>{formData.age}</div>
      <div>{formData.checkedBox}</div>
      <div>{String(formData.radioBox)}</div>
      <div>{String(formData.country)}</div>
    </>
  );
}

export default App;
