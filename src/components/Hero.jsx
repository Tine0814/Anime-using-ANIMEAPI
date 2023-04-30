import React from "react";

function Hero() {
  return (
    <section className="w-full ml-20  p-5 flex gap-4 flex-wrap">
      <div className="bg-[#19376D] rounded-xl w-[280px] h-[300px] text-center flex items-center flex-col gap-4 ">
        <div className="w-[220px] h-[210px] flex justify-center items-center mt-[2rem] ">
          <div className="  w-full h-full rounded-2xl flex items-center justify-center ">
            <img
              className=" rounded-xl max-w-full max-h-full shadow-2xl"
              src="https://images.saatchiart.com/saatchi/1755977/art/8291898/7356904-HSC00002-7.jpg"
              alt=""
            />
          </div>
        </div>
        <h1>Anime</h1>
      </div>
    </section>
  );
}

export default Hero;
