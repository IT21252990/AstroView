import React, { useState, useEffect } from "react";
import bgVideo from "../assets/home-bg2.mp4";
import loader from "../assets/loader.gif"
// import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Apod = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = process.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        console.log(apiData);
        setData(apiData);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchAPIData();
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-[-1] bg-cover">
        <video
          src={bgVideo}
          autoPlay
          muted
          loop
          className="video-darken-filter-home"
        />
      </div>

      <div className="flex flex-col min-h-screen">
        <div className="grow-0">
          <Header />
        </div>
        <div className="grow h-max">
          <div className="bg-transparent">
            <div className="min-h-full pt-6">
              <h1 className="uppercase mt-20 text-sm font-bold tracking-widest text-center text-transparent  sm:text-lg lg:text-xl bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] bg-clip-text">
                APOD : Astronomy Picture of the Day
              </h1>
              <div className="relative self-center h-full max-w-2xl mx-auto mt-5 sm:px-6 lg:grid lg:max-w-4xl lg:px-8">
                {data ? (
                 <img src={data?.url}/>
                ) : (
                  <div className="w-48 h-48 mx-auto mt-20">
                   <img src={loader} alt="loader" />
                  </div>
                )}
                <div className="flex flex-col gap-x-10">
                  <h1 className="ml-3 text-2xl font-bold text-white">
                    {data?.title}
                  </h1>
                  <h1 className="ml-3 font-mono text-lg text-white">
                    {data?.date}
                  </h1>
                </div>
                <h1 className="px-3 mt-5 mb-10 text-sm font-normal text-justify md:text-lg text-gray-50">
                  {data?.explanation}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" grow-0">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Apod;
