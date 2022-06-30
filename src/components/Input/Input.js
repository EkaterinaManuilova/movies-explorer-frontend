function Input({
  name,
  type,
  value,
  onChange,
  placeholder,
  minLength,
  maxLength,
  errors,
}) {

  return (
    <div className="input">
      <input
        className="input__item"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        autoComplete="off"
        required
        />
        <span
          className={`input__error input__error-active`}>
            {errors.name}
        </span>
    </div>
  );
}

export default Input;