import { useState } from "react";

const MobileNavbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const handleMobileNavOpen = () => {
    setMobileNavOpen((prev) => !prev);
    console.log(mobileNavOpen);
  };
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
        className={`fixed top-0 right-0 h-full w-[70%] bg-white shadow-lg transition-all duration-300 ease-in-out ${
          mobileNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
    </>
  );
};

export default MobileNavbar;
