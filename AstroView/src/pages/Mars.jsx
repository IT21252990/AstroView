import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import bgVideo from "../assets/home-bg2.mp4";
import loader from "../assets/loader.gif";

import "../App.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import RoverImageCard from "../components/RoverImageCard";

const Mars = () => {
  const [roverData, setRoverData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("sol");
  const [selectedRover, setSelectedRover] = useState("Curiosity");
  const [selectedCamera, setSelectedCamera] = useState("FHAZ");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  useEffect(() => {
    async function fetchAPIData() {
      setLoading(true);
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      let url = "";
      if (selectedOption === "sol") {
        url =
          `https://api.nasa.gov/mars-photos/api/v1/rovers/${selectedRover.toLowerCase()}/photos?` +
          `api_key=${NASA_KEY}` +
          `&sol=1000&camera=${selectedCamera.toLowerCase()}`;
      } else if (selectedOption === "latest_photos") {
        url =
          `https://api.nasa.gov/mars-photos/api/v1/rovers/${selectedRover.toLowerCase()}/latest_photos?` +
          `api_key=${NASA_KEY}&camera=${selectedCamera.toLowerCase()}`;
      } else if (selectedOption === "opportunity") {
        url =
          `https://api.nasa.gov/mars-photos/api/v1/rovers/${selectedRover.toLowerCase()}/photos?` +
          `api_key=${NASA_KEY}&earth_date=${selectedDate}&camera=${selectedCamera.toLowerCase()}`;
      }
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        setRoverData(apiData);
        console.log(apiData);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchAPIData();
  }, [selectedOption, selectedRover, selectedCamera, selectedDate]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleRoverChange = (event) => {
    setSelectedRover(event.target.value);
  };

  const handleCameraChange = (event) => {
    setSelectedCamera(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date.toISOString().split("T")[0]);
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
              USE SELECT OPTIONS TO GET THE MORE INFORMATIONS
            </h1>
          <main className="p-5">
            <div className="flex flex-col items-center justify-center gap-5 mx-auto mt-5 md:flex-row">
              <div className="flex flex-row w-auto gap-3">
                <label htmlFor="selectOption" className="mt-1 text-lg font-bold">
                  Select Option:
                </label>
                <select
                  id="selectOption"
                  value={selectedOption}
                  onChange={handleOptionChange}
                  className=" border bg-gradient-to-r from-gray-900 via-[#403242] to-gray-900 border-gray-300 p-3 cursor-pointer rounded-xl"
                >
                  <option value="sol">Photos by Sol</option>
                  <option value="latest_photos">Latest Photos</option>
                  <option value="opportunity">Earth date Photos</option>
                </select>
              </div>
              <div className="flex flex-row w-auto gap-3">
                <label htmlFor="selectRover" className="mt-1 text-lg font-bold">
                  Select Rover:
                </label>
                <select
                  id="selectRover"
                  value={selectedRover}
                  onChange={handleRoverChange}
                  className=" border bg-gradient-to-r from-gray-900 via-[#403242] to-gray-900 border-gray-300 p-3 cursor-pointer rounded-xl"
                >
                  <option value="Curiosity">Curiosity</option>
                  <option value="Opportunity">Opportunity</option>
                  <option value="Spirit">Spirit</option>
                </select>
              </div>
              <div className="flex flex-row w-auto gap-3">
                <label htmlFor="selectCamera" className="mt-1 text-lg font-bold">
                  Select Camera:
                </label>
                <select
                  id="selectCamera"
                  value={selectedCamera}
                  onChange={handleCameraChange}
                  className="p-3 cursor-pointer rounded-xl border bg-gradient-to-r from-gray-900 via-[#403242] to-gray-900 border-gray-300 "
                >
                  <option value="FHAZ">FHAZ</option>
                  <option value="RHAZ">RHAZ</option>
                  <option value="MAST">MAST</option>
                  <option value="CHEMCAM">CHEMCAM</option>
                  <option value="MAHLI">MAHLI</option>
                  <option value="MARDI">MARDI</option>
                  <option value="NAVCAM">NAVCAM</option>
                  <option value="PANCAM">PANCAM</option>
                  <option value="MINITES">MINITES</option>
                </select>
              </div>

              {selectedOption === "opportunity" && (
                <DatePicker
                  selected={new Date(selectedDate)}
                  onChange={handleDateChange}
                  className="p-2 border border-gray-300 rounded"
                />
              )}
            </div>
            {loading ? (
              <div className="w-48 h-48 mx-auto mt-40">
                <img src={loader} alt="loader" />
              </div>
            ) : (
              <>
                {selectedOption === "sol" &&
                roverData &&
                roverData.photos &&
                roverData.photos.length > 0 ? (
                  <div className="grid grid-cols-1 gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {roverData.photos.map((photo) => (
                      <RoverImageCard data={photo} key={photo.id} />
                    ))}
                  </div>
                ) : selectedOption === "latest_photos" &&
                  roverData &&
                  roverData.latest_photos &&
                  roverData.latest_photos.length > 0 ? (
                  <div className="grid grid-cols-1 gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {roverData.latest_photos.map((photo) => (
                      <RoverImageCard data={photo} key={photo.id} />
                    ))}
                  </div>
                ) : selectedOption === "opportunity" &&
                  roverData &&
                  roverData.photos &&
                  roverData.photos.length > 0 ? (
                  <div className="grid grid-cols-1 gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {roverData.photos.map((photo) => (
                      <RoverImageCard data={photo} key={photo.id} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center w-auto h-auto p-2 mx-10 mt-5 bg-red-200 rounded-2xl ring-2 ring-red-700">
                    <p className="mt-1 text-sm text-red-500 md:text-lg">
                      No data to show for the selected options.
                    </p>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
        <div className=" grow-0">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Mars;
