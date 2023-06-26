import React, { useEffect, useState } from "react";

function Hero() {
  const [newData, setNewData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://kitsu.io/api/edge/anime");
        const jsonData = await response.json();
        setNewData(jsonData.data || []); // Ensure newData is an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(newData);

  return (
    <section className="w-full ml-20 p-5 flex gap-4 flex-wrap">
      {newData &&
        newData.map((anime, index) => (
          <div
            key={index}
            className="bg-[#19376D] rounded-xl w-[280px] p-5 text-center flex items-center flex-col gap-4"
          >
            <div className="w-[220px] flex justify-center ">
              <div className="w-full h-full overflow-hidden rounded-2xl flex items-center justify-center">
                <img src={anime.attributes.posterImage.original} alt="" />
              </div>
              {/* <div className="bg-red-200 w-full"></div> */}
            </div>
          </div>
        ))}
    </section>
  );
}

export default Hero;
