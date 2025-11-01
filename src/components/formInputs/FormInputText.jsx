import "../../style/formInputs/form-input-text.css";

export default function FormInputText({
  name,
  type,
  label,
  placeholder = "",
  onChange,
  value,
}) {
  return (
    <article className="form-input-text-article">
      <label className="form-input-text-label" htmlFor={name}>
        {label}
      </label>
      <input
        className="form-input-text"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </article>
  );
}
