import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import bgVideo from "../assets/home-bg2.mp4";
import loader from "../assets/loader.gif";
import "../App.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchCard from "../components/SearchCard";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [galleryData, setGalleryData] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    async function fetchAPIData() {
      const url = "https://images-api.nasa.gov/search?" + `q=${searchTerm}`;
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        const imageData = apiData.collection.items;
        console.log(imageData);
        setGalleryData(imageData);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchAPIData();
  }, [searchTerm]);

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
          <h1 className="uppercase mt-28 text-sm font-bold tracking-widest text-center text-transparent  sm:text-lg lg:text-xl bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] bg-clip-text">
            SEARCH ANY KEY WORD TO GET THE INFORMATIONS
          </h1>
          <main className="p-5">
            <div className="mt-5 mb-20">
              <form className="md:w-[500px] mx-auto relative">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Type Here"
                    className="w-full p-4 rounded-full  bg-gradient-to-r from-gray-900 via-[#403242] to-gray-900"
                    onChange={(e) => handleSearch(e)}
                  />
                  <button
                    disabled
                    className="cursor-pointer absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-[#403242] rounded-full"
                  >
                    <AiOutlineSearch />
                  </button>
                </div>
              </form>
            </div>
            {galleryData ? (
              <>
                <div className="grid grid-cols-1 gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {galleryData.map((imageData) => (
                    <SearchCard data={imageData} key={imageData.href} />
                  ))}
                </div>
              </>
            ) : (
              <div className="w-48 h-48 mx-auto mt-20 mb-20">
                <img src={loader} alt="loader" />
              </div>
            )}
          </main>
        </div>
        <div className="grow-0">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Search;
