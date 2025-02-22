import { useEffect, useRef, useState } from "react";
import { navbarLinks } from "../../constants";
import Navlink from "./Navlink";
import { X } from "lucide-react";

const MobileNavbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navRef = useRef(null);

  const handleMobileNavOpen = () => {
    setMobileNavOpen((prev) => !prev);
  };
  const handleClickOutside = () => {
    if (!navRef.current) return;
    setMobileNavOpen(false);
  };

  useEffect(() => {
    if (mobileNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileNavOpen]);

  return (
    <>
      <button type="button" onClick={handleMobileNavOpen}>
        <img
          src="/menu.svg"
          alt="Nav-Menu Icon"
          width={30}
          className="block md:hidden"
        />
      </button>

      <div
        ref={navRef}
        className={`fixed top-0 right-0 h-full w-[70%] bg-[#333] shadow-lg transition-all duration-300 ease-in-out ${
          mobileNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end py-4 px-4">
          <X color="white" width={35} />
        </div>
        {navbarLinks.map((link, index) => (
          <div key={index} className="py-2 px-3">
            <Navlink label={link.label} icon={link.icon} path={link.path} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MobileNavbar;
