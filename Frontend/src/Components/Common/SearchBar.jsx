import Reac, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSeachToggle = () => {
    setIsOpen(!isOpen);
  };
  const headleSearch = (e) => {
    e.preventDefault();
    // Perform search logic here using the searchTerm state
    console.log("Searching for:", searchTerm);
    setIsOpen(false);
  };
  return (
    <div
      className={`flex items-center justify-center gap-4 w-full transition-all duration-300 z-50 ${
        isOpen ? "absolute top-0 left-0 w-full bg-[#fff] h-30 " : "w-auto"
      }`}
    >
      {/* Search Bar */}
      {isOpen ? (
        <from
          className="relative flex items-center justify-around w-full "
          onSubmit={headleSearch}
        >
          <div className=" relative w-1/2">
            <input
              type="text"
              placeholder="Search "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className=" bg-gray-100 px-4 py-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-500"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              type="submit"
              onClick={headleSearch}
            >
              <SearchIcon className=" h-6 w-6" />
            </button>
          </div>
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <CloseIcon className=" h-6 w-6" onClick={handleSeachToggle} />
          </button>
        </from>
      ) : (
        <button onClick={handleSeachToggle}>
          <SearchIcon className=" h-6 w-6" />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
