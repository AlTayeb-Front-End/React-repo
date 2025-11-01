import "../../style/formInputs/form-input-text.css";

export default function FormInputText({
  name,
  type,
  label,
  placeholder = "",
  onChange,
  value = "",
  checked = "",
}) {
  const fields = {
    type: type,
    id: name,
    name: name,
    onChange: onChange,
  };
  return (
    <article className="form-input-text-article">
      <label className="form-input-text-label" htmlFor={name}>
        {label}
      </label>
      {value !== "" || value !== null || value !== undefined ? (
        <input
          className="form-input-text"
          {...fields}
          placeholder={placeholder}
          value={value}
        />
      ) : (
        <input checked={checked} {...fields} />
      )}
    </article>
  );
}
