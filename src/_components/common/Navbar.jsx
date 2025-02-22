import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <header className="block sm:hidden py-3 px-4">
      <nav className="flex justify-between items-center">
        <div>
          <h1 className="text-white text-2xl md:text-3xl font-bold">
            Cine<span className="text-[#FF4949]">Flix</span>
          </h1>
        </div>
        <div className="block sm:hidden">
          <MobileNavbar />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
