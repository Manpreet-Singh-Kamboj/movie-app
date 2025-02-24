import clsx from "clsx";

const Button = ({ placeholder, onClick, icon, classnames }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "flex gap-2 items-center justify-center text-black px-4 md:px-6 py-1 md:py-2 rounded-full cursor-pointer",
        classnames
      )}
    >
      {icon && icon}
      {placeholder ? placeholder : "Submit"}
    </button>
  );
};

export default Button;
