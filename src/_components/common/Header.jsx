import MobileNavbar from "./MobileNavbar";
import Search from "./Search";

const Header = () => {
  return (
    <header className="sticky top-0 z-[10] bg-[#181818] border-b border-gray-400 py-3 md:py-4 px-4">
      <nav className="flex justify-between items-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold">
          Cine<span className="text-[#FF4949]">Flix</span>
        </h2>
        <Search />
        <MobileNavbar />
      </nav>
    </header>
  );
};

export default Header;
