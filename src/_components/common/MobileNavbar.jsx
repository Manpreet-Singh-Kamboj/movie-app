import { useState } from "react";
import { accountLinks, navbarLinks } from "../../constants";
import Navlink from "./Navlink";
import { X } from "lucide-react";

const MobileNavbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileNavOpen = () => {
    setMobileNavOpen((prev) => !prev);
  };

  return (
    <div className="block sm:hidden z-[10]">
      <button type="button" onClick={handleMobileNavOpen}>
        <img
          src="/menu.svg"
          alt="Nav-Menu Icon"
          width={30}
          className="block md:hidden"
        />
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-[#181818] shadow-lg transition-all duration-300 ease-in-out border-l border-gray-400 ${
          mobileNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end py-4 px-4">
          <button
            type="button"
            onClick={handleMobileNavOpen}
            className="border border-gray-400 py-1 px-1 rounded-lg"
          >
            <X color="rgb(229 231 235)" width={20} height={20} />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-white px-3 text-xl">Discover</p>
          {navbarLinks.map((link, index) => (
            <div key={index} className="py-2 px-3">
              <Navlink label={link.label} icon={link.icon} path={link.path} />
            </div>
          ))}
          <hr className="border-gray-400" />
          <div className="px-4 flex flex-col gap-6 justify-center">
            <p className="font-semibold sm:text-md text-xl text-white">
              Your Account
            </p>
            {accountLinks.map((link, index) => (
              <div key={index}>
                <Navlink label={link.label} icon={link.icon} path={link.path} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
