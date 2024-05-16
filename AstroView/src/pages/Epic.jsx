import React, { useState, useEffect } from "react";
// import "react-datepicker/dist/react-datepicker.css";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Dialog } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import bgVideo from "../assets/home-bg2.mp4";
import loader from "../assets/loader.gif";
// import "../App.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Epic = () => {
  const [epicData, setEpicData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [frames, setFrames] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchAPIData() {
      setLoading(true);

      const NASA_KEY = process.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/EPIC/api/natural/images?" + `api_key=${NASA_KEY}`;
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        setEpicData(apiData);
        console.log(apiData);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchAPIData();
  }, []);

  useEffect(() => {
    if (epicData && epicData.length > 0) {
      const intervalId = setInterval(() => {
        const index = frames.length % epicData.length;
        setFrames((frames) => [...frames, epicData[index]]);
      }, 200);

      return () => clearInterval(intervalId);
    }
  }, [epicData, frames]);

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

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
            EPIC : Earth Polychromatic Imaging Camera
          </h1>
          <main className="p-5 mt-5">
            {loading ? (
              <div className="w-48 h-48 mx-auto mt-40">
                <img src={loader} alt="loader" />
              </div>
            ) : epicData ? (
              <>
                <div className="flex flex-col lg:flex-row">
                  <div className="flex justify-center max-h-screen mx-auto md:w-3/4 lg:w-1/2">
                    {isPlaying && (
                      <img
                        src={`https://epic.gsfc.nasa.gov/archive/natural/${frames[
                          frames.length - 1
                        ].date
                          .split(" ")[0]
                          .replace(/-/g, "/")}/png/${
                          frames[frames.length - 1].image
                        }.png`}
                        alt="NASA EPIC Image"
                      />
                    )}
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={toggleVideo}
                      className="px-4 mt-32 h-10 md:mt-28 lg:mt-32 mx-52 md:mx-32 lg:mx-36 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]"
                    >
                      {isPlaying ? "Stop Video" : "Play as the Video"}
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {epicData.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => setOpen(true)}
                      className="p-3 rounded-xl cursor-pointer bg-gradient-to-r from-gray-900 via-[#403242] to-gray-900 hover:bg-gradient-to-b hover:from-[#ffffff] hover:via-[#686868] hover:to-[#000000] h-max w-max mt-5 hover:p-3 flex flex-col mx-auto shadow-lg"
                    >
                      <div className="relative group ">
                        <div className="flex items-center justify-center">
                          <img
                            src={`https://epic.gsfc.nasa.gov/archive/natural/${image.date
                              .split(" ")[0]
                              .replace(/-/g, "/")}/png/${image.image}.png`}
                            alt={`NASA EPIC Image ${index}`}
                            className="rounded-lg w-[300px]"
                          />
                        </div>
                        <div className=" w-[300px] mt-1 bg-black p-2 rounded-b-xl text-sm">
                          <h1>{image.date}</h1>
                        </div>
                      </div>
                      <div>
                        <Transition.Root show={open} as={Fragment}>
                          <Dialog
                            as="div"
                            className="fixed inset-0 flex items-center justify-center overflow-y-scroll scrollbar-hide lg:mt-40"
                            onClose={() => setOpen(false)}
                          >
                            <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 scale-95"
                              enterTo="opacity-100 scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 scale-100"
                              leaveTo="opacity-0 scale-95"
                            >
                              <div className="relative mt-80 lg:mt-0 max-h-screen bg-gradient-to-r from-gray-900 via-[#403242] to-gray-900 rounded-lg w-full max-w-5xl mx-5 md:mx-auto flex flex-col lg:flex-row scrollbar-hide overflow-y-scroll lg:overflow-y-visible lg:max-h-[80vh]">
                                <button
                                  type="button"
                                  className="absolute -mt-4 -mr-4 text-gray-300 rounded-md top-5 right-5 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                  onClick={() => setOpen(false)}
                                >
                                  <span className="sr-only">Close panel</span>
                                  <XIcon
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                  />
                                </button>
                                <div className="flex flex-col justify-center p-6">
                                  <h2 className="text-lg font-semibold leading-6 text-gray-50">
                                    {image.caption}
                                  </h2>
                                  <img
                                    src={`https://epic.gsfc.nasa.gov/archive/natural/${image.date
                                      .split(" ")[0]
                                      .replace(/-/g, "/")}/png/${
                                      image.image
                                    }.png`}
                                    className="mt-4 rounded-xl max-w-[400px] self-start"
                                  />
                                  <h2 className="mt-4 text-lg font-semibold leading-6 text-gray-50">
                                    {" "}
                                    {image.date}
                                  </h2>
                                </div>
                                <div className="p-6 overflow-y-scroll text-lg font-semibold leading-6 text-gray-50 lg:flex-grow scrollbar-hide">
                                  <h2 className="mt-4 text-lg font-semibold leading-6 text-gray-50">
                                    Position of the satellite in space: <br />X
                                    : {" " + image.dscovr_j2000_position.x}{" "}
                                    <br />Y :{" "}
                                    {" " + image.dscovr_j2000_position.y} <br />
                                    Z : {" " + image.dscovr_j2000_position.z}{" "}
                                    <br />
                                  </h2>
                                  <h2 className="mt-4 text-lg font-semibold leading-6 text-gray-50">
                                    Position of the moon in space: <br />X :{" "}
                                    {" " + image.lunar_j2000_position.x} <br />Y
                                    : {" " + image.lunar_j2000_position.y}{" "}
                                    <br />Z :{" "}
                                    {" " + image.lunar_j2000_position.z} <br />
                                  </h2>
                                  <h2 className="mt-4 text-lg font-semibold leading-6 text-gray-50">
                                    Position of the sun in space: <br />X :{" "}
                                    {" " + image.sun_j2000_position.x} <br />Y :{" "}
                                    {" " + image.sun_j2000_position.y} <br />Z :{" "}
                                    {" " + image.sun_j2000_position.z} <br />
                                  </h2>
                                </div>
                              </div>
                            </Transition.Child>
                          </Dialog>
                        </Transition.Root>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </main>
        </div>
        <div className=" grow-0">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Epic;
