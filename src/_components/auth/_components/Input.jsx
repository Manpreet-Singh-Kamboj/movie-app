const Input = ({
  label,
  name,
  type,
  placeholder,
  value,
  handleChange,
  required,
}) => {
  return (
    <>
      <label htmlFor={name} className="opacity-65 ml-[-0.2rem] text-sm">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className="border-[1px] py-2 px-4 rounded-full text-sm"
        onChange={handleChange}
        required={required}
      />
    </>
  );
};

export default Input;
