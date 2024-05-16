import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import bgVideo from "../assets/home-bg2.mp4";
import loader from "../assets/loader.gif";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GalleryCard from "../components/GalleryCard";

const CalenderIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
    />
  </svg>
);

const Gallery = () => {
  const [galleryData, setGalleryData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startDateError, setStartDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");

  const handleSearch = async () => {
    if (startDate > endDate) {
      setEndDateError("End date cannot be before start date");
      setLoading(true);
      return;
    }
    const today = new Date();
    if (startDate > today || endDate > today) {
      setStartDateError("Selected date cannot be after today");
      setLoading(true);
      return;
    }
    setStartDateError("");
    setEndDateError("");

    const myStartDate = startDate.toISOString().split("T")[0];
    const myEndDate = endDate.toISOString().split("T")[0];

    setLoading(true);

    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
    const url =
      "https://api.nasa.gov/planetary/apod" +
      `?api_key=${NASA_KEY}` +
      "&" +
      `start_date=${myStartDate}` +
      "&" +
      `end_date=${myEndDate}`;
    try {
      const res = await fetch(url);
      const apiData = await res.json();
      setGalleryData(apiData);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
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
          <div className="mx-auto mt-28">
            <h1 className="uppercase mt-0 text-sm font-bold tracking-widest text-center text-transparent  sm:text-lg lg:text-xl bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] bg-clip-text">
              ASTRONOMY PICTURES OF THE GIVEN DATE RANGE
            </h1>
            <div className="flex flex-col items-center justify-center gap-5 mx-auto mt-5 md:flex-row">
              <div className="flex flex-row w-auto gap-3 ">
                <h1 className="mt-[10px] text-lg font-bold">Start Date:</h1>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="p-3 cursor-pointer rounded-xl bg-gradient-to-r from-gray-900 via-[#403242] to-gray-900"
                />
                <h1 className="absolute mt-3 ml-64 cursor-pointer">
                  {CalenderIcon}
                </h1>
              </div>
              <div className="flex flex-row w-auto gap-3 ">
                <h1 className="mt-[10px] text-lg font-bold">End Date:</h1>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  className="p-3 cursor-pointer rounded-xl bg-gradient-to-r from-gray-900 via-[#403242] to-gray-900"
                />
                <h1 className="absolute mt-3 ml-64 cursor-pointer">
                  {CalenderIcon}
                </h1>
              </div>

              <button
                onClick={handleSearch}
                className="px-6 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]"
              >
                Filter
              </button>
            </div>
          </div>

          {(startDateError || endDateError) && (
            <div className="flex flex-col items-center justify-center w-auto h-auto p-2 mx-10 mt-5 bg-red-200 rounded-2xl ring-2 ring-red-700">
              {startDateError && (
                <p className="mt-1 text-sm text-red-500 md:text-lg">
                  {startDateError}
                </p>
              )}
              {endDateError && (
                <p className="mt-1 text-sm text-red-500 md:text-lg">
                  {endDateError}
                </p>
              )}
            </div>
          )}

          <main className="p-5">
            {loading ? (
              <div className="w-48 h-48 mx-auto mt-40">
                <img src={loader} alt="loader" />
              </div>
            ) : galleryData ? (
              <>
                <div className="grid grid-cols-1 gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {galleryData.map((galleryData) => (
                    <GalleryCard data={galleryData} key={galleryData._id} />
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

export default Gallery;
