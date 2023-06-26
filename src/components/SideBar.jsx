import React from "react";
import { motion } from "framer-motion";

function SideBar({ topAnime }) {
  return (
    <>
      <aside className="top-0 p-10 w-[200px] h-[400px] max-h-[700px] flex flex-col gap-6">
        <h1 className="font-bold">Top ANIME</h1>
        {/* {topAnime.map((anime) => (
          <div className=" transition hover:bg-white hover:text-black w-full text-center p-2 rounded-2xl h-[40px]">
            <a href="">{anime.title}</a>
          </div>
        ))} */}
      </aside>
    </>
  );
}

export default SideBar;
