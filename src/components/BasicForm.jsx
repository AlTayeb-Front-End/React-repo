import "../style/basic-form.css";
import FormInputText from "./formInputs/FormInputText";

export default function BasicForm({
  method,
  action,
  onSubmit,
  formData,
  setData,
}) {
  return (
    <form action={action} method={method} onSubmit={onSubmit}>
      <FormInputText
        type={"text"}
        name={"userName"}
        label={"User Name :"}
        placeholder="Enter Your Name"
        value={formData.userName}
        onChange={(event) => {
          setData({ ...formData, userName: event.target.value });
        }}
      />
      <FormInputText
        type={"text"}
        name={"passwork"}
        label={"Password :"}
        placeholder="Enter Your Password"
        value={formData.password}
        onChange={(event) => {
          setData({ ...formData, password: event.target.value });
        }}
      />
      <FormInputText
        type={"email"}
        name={"email"}
        label={"Email :"}
        placeholder="Enter Your Email"
        value={formData.email}
        onChange={(event) => {
          setData({ ...formData, email: event.target.value });
        }}
      />
      <FormInputText
        type={"number"}
        name={"age"}
        label={"User Age :"}
        placeholder="Enter Your Age"
        value={formData.age}
        onChange={(event) => {
          setData({ ...formData, age: event.target.value });
        }}
      />

      <input type="submit" />
    </form>
  );
}
