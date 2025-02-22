import { Link } from "react-router-dom";

const Navlink = ({ label, icon, path }) => {
  return (
    <Link
      to={path}
      className="w-full py-3 px-3 bg-[#27262b] hover:bg-[#1c1c1f] border  transition-all duration-300 ease rounded-xl flex gap-4 items-center text-[#c1c1c1]"
    >
      <img src={icon} alt={label} className="w-6 h-6 text-white" />
      <p>{label}</p>
    </Link>
  );
};

export default Navlink;
