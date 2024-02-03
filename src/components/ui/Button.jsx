/* eslint-disable react/prop-types */

function Button({ children, onClick, type = "normal", aditionalStyle }) {
  const styleBase =
    "rounded-md bg-greenBrand px-2 py-1 text-xs font-medium text-white transition-all duration-300 outline-none ring-greenBrand/80 ring-offset-2 focus:ring";

  if (type === "normal")
    return (
      <button
        onClick={onClick}
        className={`${styleBase} ${aditionalStyle} hover:bg-greenBrandHover`}
      >
        {children}
      </button>
    );

  if (type === "danger")
    return (
      <button
        onClick={onClick}
        className={`${styleBase}  ${aditionalStyle} hover:bg-red-400`}
      >
        {children}
      </button>
    );
}

export default Button;
