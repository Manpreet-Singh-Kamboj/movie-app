import { accountLinks, navbarLinks } from "../../constants";
import Navlink from "./Navlink";

const Sidebar = () => {
  return (
    <aside className="hidden sm:flex flex-col gap-10 sm:w-[30%] md:w-[25%] border-r border-gray-400 lg:w-[17%] bg-[#181818] text-white">
      <div className="mt-6 px-4 flex flex-col gap-6 justify-center">
        <p className="font-semibold sm:text-md text-xl">Discover</p>
        {navbarLinks.map((link, index) => (
          <div key={index}>
            <Navlink label={link.label} icon={link.icon} path={link.path} />
          </div>
        ))}
      </div>
      <hr className="border-gray-400" />
      <div className="px-4 flex flex-col gap-6 justify-center">
        <p className="font-semibold sm:text-md text-xl">Your Account</p>
        {accountLinks.map((link, index) => (
          <div key={index}>
            <Navlink label={link.label} icon={link.icon} path={link.path} />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
