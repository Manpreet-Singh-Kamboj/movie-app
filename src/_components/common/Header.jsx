import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <header className="bg-[#181818] border-b border-gray-400 py-3 md:py-4 px-4">
      <nav className="flex justify-between items-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold">
          Cine<span className="text-[#FF4949]">Flix</span>
        </h2>
        <div className="block sm:hidden">
          <MobileNavbar />
        </div>
      </nav>
    </header>
  );
};

export default Header;
