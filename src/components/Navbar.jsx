import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="text-center p-5 text-[20px]">
        Anime Page using ANIME API
      </header>
      <nav className="w-full h-[40px] flex justify-center items-center p-10 ">
        <form action="" className="pt-2 mx-auto text-gray-600 flex gap-2">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-2 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button
            type="submit"
            className="bg-black text-white h-10 rounded-lg text-center w-16 text-[12px]"
          >
            Search
          </button>
        </form>
      </nav>
    </>
  );
};

export default Navbar;
