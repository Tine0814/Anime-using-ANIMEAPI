import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Hero from "./components/Hero";
import { useState, useEffect } from "react";

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");

  const GetTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());

    SetTopAnime(temp.top.slice(0, 10));
  };

  const HandleSearch = (e) => {
    e.preventDefault();

    FetchAnime(search);
  };

  const FetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());

    SetAnimeList(temp.results);
  };

  useEffect(() => {
    GetTopAnime();
  }, []);
  return (
    <BrowserRouter>
      <div className="relative w-full h-auto min-h-screen bg-[#0B2447] text-white">
        <Navbar />
        <div className="flex p-5">
          <SideBar topAnime={topAnime} />
          <Hero
            HandleSearch={HandleSearch}
            search={search}
            SetSearch={SetSearch}
            animeList={animeList}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
