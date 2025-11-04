import "../style/basic-form.css";
import FormInputText from "./formInputs/FormInputText";

export default function BasicForm({
  method,
  action,
  onSubmit,
  formData,
  setData,
}) {
  function handelArrayPush(array, value) {
    return [...array, value];
  }
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
      {/* skills check boxs */}
      <FormInputText
        type={"checkbox"}
        value={"html"}
        name={"choose"}
        label={"HTHML :"}
        checked={formData.checkedBox}
        onChange={(event) => {
          setData({
            ...formData,
            checkedBox: handelArrayPush(
              formData.checkedBox,
              event.target.value
            ),
          });
        }}
      />
      <FormInputText
        type={"checkbox"}
        value={"css"}
        name={"choose"}
        label={"CSS :"}
        checked={formData.checkedBox}
        onChange={(event) => {
          setData({
            ...formData,
            checkedBox: handelArrayPush(
              formData.checkedBox,
              event.target.value
            ),
          });
        }}
      />
      <FormInputText
        type={"checkbox"}
        value={"javascript"}
        name={"choose"}
        label={"JavaScript :"}
        checked={formData.checkedBox}
        onChange={(event) => {
          setData({
            ...formData,
            checkedBox: handelArrayPush(
              formData.checkedBox,
              event.target.value
            ),
          });
        }}
      />
      <FormInputText
        type={"checkbox"}
        value={"bootstrap"}
        name={"choose"}
        label={"Bootstrap :"}
        checked={formData.checkedBox}
        onChange={(event) => {
          setData({
            ...formData,
            checkedBox: handelArrayPush(
              formData.checkedBox,
              event.target.value
            ),
          });
        }}
      />
      <FormInputText
        type={"checkbox"}
        value={"react"}
        name={"choose"}
        label={"React :"}
        checked={formData.checkedBox}
        onChange={(event) => {
          setData({
            ...formData,
            checkedBox: handelArrayPush(
              formData.checkedBox,
              event.target.value
            ),
          });
        }}
      />
      {/* end skills check boxs */}

      <FormInputText
        type={"radio"}
        name={"one"}
        label={"OS :"}
        placeholder="Choose Your OS :"
        checked={formData.radioBox}
        onChange={(event) => {
          setData({ ...formData, radioBox: event.target.checked });
        }}
      />
      <select
        name="country"
        id="country"
        value={formData.country}
        onChange={(event) => {
          setData(() => {
            return { ...formData, country: event.target.value };
          });
        }}
      >
        <option value="Minya">Minya</option>
        <option value="Cairo">Cairo</option>
        <option value="Assute">Assute</option>
        <option value="Ain-Shams">Ain-Shams</option>
        <option value="Fayom">Fayom</option>
      </select>
      <input type="submit" />
    </form>
  );
}
