import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom"; // Import Link from React Router
import bgVideo from "../assets/home-bg2.mp4";
// import "../App.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import APOD from "../assets/apod.jpg";
import GALLERY from "../assets/gallery.png";
import SEARCH from "../assets/search.png";
import MARS from "../assets/mars_rover.jpg";
import EPIC from "../assets/epic.jpg";

const slides = [
  {
    url: APOD,
    isApod: true,
  },
  {
    url: GALLERY,
    isGallery: true,
  },
  {
    url: SEARCH,
    isSearch: true,
  },
  {
    url: MARS,
    isMars: true,
  },
  {
    url: EPIC,
    isEpic: true,
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderButton = (slide) => {
    if (slide.isApod) {
      return (
        <>
          <div className="">
            <h1 className=" uppercase mt-5 text-sm font-extrabold tracking-widest text-center text-transparent  sm:text-lg lg:text-xl bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] bg-clip-text">
              APOD : <br></br> Astronomy Picture of the Day
            </h1>
            <h1 className="pl-10 mt-10 font-semibold text-justify pr-14 md:pl-5 md:pr-10">
              {" "}
              Discover the cosmos! Each day a different image or photograph of
              our fascinating universe is featured, along with a brief
              explanation written by a professional astronomer.
            </h1>
            <Link to="/apod">
              {" "}
              <button className="px-4 mt-32 mx-52 md:mx-32 lg:mx-36 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]">
                VIEW MORE
              </button>
            </Link>
          </div>
        </>
      );
    } else if (slide.isGallery) {
      return (
        <>
          <div className="">
            <h1 className=" uppercase mt-5 text-sm font-extrabold tracking-widest text-center text-transparent  sm:text-lg bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] bg-clip-text">
              GALLERY : <br></br> Astronomy Pictures of the Given Date Range
            </h1>
            <h1 className="pl-10 mt-10 font-semibold text-justify pr-14 md:pl-5 md:pr-10">
              {" "}
              Discover the cosmos! Provide the Date Range & Get the different
              images or photographs of our fascinating universe is featured,
              along with a brief explanation written by a professional
              astronomer.
            </h1>
            <Link to="/gallery">
              {" "}
              <button className="px-4 mt-32 md:mt-28 lg:mt-32 mx-52 md:mx-32 lg:mx-36 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]">
                VIEW MORE
              </button>
            </Link>
          </div>
        </>
      );
    } else if (slide.isSearch) {
      return (
        <>
          <div className="">
            <h1 className=" uppercase mt-5 text-sm font-extrabold tracking-widest text-center text-transparent  sm:text-lg bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] bg-clip-text">
              SEARCH : <br></br> Just Search & Learn from NASA
            </h1>
            <h1 className="pl-10 mt-10 font-semibold text-justify pr-14 md:pl-5 md:pr-10">
              {" "}
              Discover the cosmos! Provide the any word want you yo know & Get
              the different images or photographs and many many more
              informations about it from NASA databases.
            </h1>
            <Link to="/search">
              {" "}
              <button className="px-4 mt-32 md:mt-28 lg:mt-32 mx-52 md:mx-32 lg:mx-36 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]">
                VIEW MORE
              </button>
            </Link>
          </div>
        </>
      );
    } else if (slide.isMars) {
      return (
        <>
          <div className="">
            <h1 className=" uppercase mt-5 text-sm font-extrabold tracking-widest text-center text-transparent  sm:text-lg bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] bg-clip-text">
              MARS : <br></br> MARS ROVER PHOTOS
            </h1>
            <h1 className="pl-10 mt-10 font-semibold text-justify pr-14 md:pl-5 md:pr-10">
              {" "}
              Discover the cosmos! In there you can see lot of images and
              informations about the Mars from Rovers from NASA. you can filter
              them in your preference & Learn easily.
            </h1>
            <Link to="/mars_rover_images">
              {" "}
              <button className="px-4 mt-32 md:mt-28 lg:mt-32 mx-52 md:mx-32 lg:mx-36 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]">
                VIEW MORE
              </button>
            </Link>
          </div>
        </>
      );
    } else if (slide.isEpic) {
      return (
        <>
          <div className="">
            <h1 className=" uppercase mt-5 text-sm font-extrabold tracking-widest text-center text-transparent  sm:text-lg bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] bg-clip-text">
              EPIC : <br></br> Earth Polychromatic Imaging Camera
            </h1>
            <h1 className="pl-10 mt-10 font-semibold text-justify pr-14 md:pl-5 md:pr-10">
              EPIC provides full disc imagery of the Earth and captures unique
              perspectives of certain astronomical events such as lunar
              transits.Also you can play images as the video and can get well
              user experience.{" "}
            </h1>
            <Link to="/epic">
              {" "}
              <button className="px-4 mt-32 md:mt-28 lg:mt-32 mx-52 md:mx-32 lg:mx-36 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]">
                VIEW MORE
              </button>
            </Link>
          </div>
        </>
      );
    }
    return null;
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
        <div className="mt-16 grow h-max">
          <div className="uppercase mt-8 text-sm font-bold tracking-widest text-center text-transparent  sm:text-lg bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] bg-clip-text">
            Explore the Cosmos with Us !
          </div>
          <div className="max-w-4xl h-[550px] lg:h-[600px] w-full m-auto py-16 px-4 relative group">
            <div
              style={{ backgroundImage: `url(${slides[currentIndex]?.url})` }}
              className="w-full h-full duration-1000 bg-center bg-cover rounded-2xl"
            >
              <div className="absolute right-0 w-full md:w-1/2 lg:h-[473px] h-[425px] bg-black bg-opacity-55 md:bg-opacity-85">
                <div className="absolute flex justify-center w-full">
                  {renderButton(slides[currentIndex])}
                </div>
              </div>
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div  className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight data-testid="next-slide"  onClick={nextSlide} size={30} />
            </div>

            <div className="flex justify-center py-2 top-4">
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className={`text-2xl cursor-pointer ${
                    currentIndex === slideIndex
                      ? "text-[#F0A93C]"
                      : "text-gray-500"
                  }`}
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>

          {/* // */}
          <div className="grid grid-cols-1 gap-5 m-5 mt-5 mb-20 xl:grid-cols-2">
            <div
              className="flex w-full h-full bg-gray-600"
            >
              <div style={{ backgroundImage: `url(${APOD})` }}
              className="w-full h-full duration-1000 bg-center bg-cover ">
              </div>
              <div className="top-0 w-full h-full pt-5 bg-black bg-opacity-80">
                <h1 className=" uppercase mt-5 text-sm font-extrabold tracking-widest text-center text-transparent  sm:text-lg lg:text-xl bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] bg-clip-text">
                  APOD : <br></br> Astronomy Picture of the Day
                </h1>
                <h1 className="pl-10 mt-10 font-semibold text-justify pr-14 md:pl-5 md:pr-10">
                  {" "}
                  Discover the cosmos! Each day a different image or photograph
                  of our fascinating universe is featured, along with a brief
                  explanation written by a professional astronomer.
                </h1>
                <Link to="/apod">
                  {" "}
                  <button className="px-4 mt-32 mb-10 justify-center items-center md:mx-40 mx-20  lg:mx-32 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]">
                    VIEW MORE
                  </button>
                </Link>
              </div>
            </div>
         
            <div
              className="flex w-full h-full bg-gray-600"
            >
              <div style={{ backgroundImage: `url(${GALLERY})` }}
              className="w-full h-full duration-1000 bg-center bg-cover ">
              </div>
              <div className="top-0 w-full h-full pt-5 bg-black bg-opacity-80">
              <h1 className=" uppercase mt-5 text-sm font-extrabold tracking-widest text-center text-transparent  sm:text-lg bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] bg-clip-text">
              GALLERY : <br></br> Astronomy Pictures of the Given Date Range
            </h1>
            <h1 className="pl-10 mt-10 font-semibold text-justify pr-14 md:pl-5 md:pr-10">
              {" "}
              Discover the cosmos! Provide the Date Range & Get the different
              images or photographs of our fascinating universe is featured,
              along with a brief explanation written by a professional
              astronomer.
            </h1>
            <Link to="/gallery">
              {" "}
              <button className="px-4 mt-32 mb-10 justify-center items-center md:mx-40 mx-20  lg:mx-32 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]">
                VIEW MORE
              </button>
            </Link>
              </div>
            </div>

            <div
              className="flex w-full h-full bg-gray-600"
              >
                <div style={{ backgroundImage: `url(${SEARCH})` }}
                className="w-full h-full duration-1000 bg-center bg-cover ">
                </div>
              <div className="top-0 w-full h-full pt-5 bg-black bg-opacity-80">
              <h1 className=" uppercase mt-5 text-sm font-extrabold tracking-widest text-center text-transparent  sm:text-lg bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] bg-clip-text">
              SEARCH : <br></br> Just Search & Learn from NASA
            </h1>
            <h1 className="pl-10 mt-10 font-semibold text-justify pr-14 md:pl-5 md:pr-10">
              {" "}
              Discover the cosmos! Provide the any word want you yo know & Get
              the different images or photographs and many many more
              informations about it from NASA databases.
            </h1>
            <Link to="/search">
              {" "}
              <button className="px-4 mt-32 mb-10 justify-center items-center md:mx-40 mx-20  lg:mx-32 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]">
                VIEW MORE
              </button>
            </Link>
              </div>
            </div>

            <div
              className="flex w-full h-full bg-gray-600"
              >
                <div style={{ backgroundImage: `url(${MARS})` }}
                className="w-full h-full duration-1000 bg-center bg-cover ">
                </div>
              <div className="top-0 w-full h-full pt-5 bg-black bg-opacity-80">
              <h1 className=" uppercase mt-5 text-sm font-extrabold tracking-widest text-center text-transparent  sm:text-lg bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] bg-clip-text">
              MARS : <br></br> MARS ROVER PHOTOS
            </h1>
            <h1 className="pl-10 mt-10 font-semibold text-justify pr-14 md:pl-5 md:pr-10">
              {" "}
              Discover the cosmos! In there you can see lot of images and
              informations about the Mars from Rovers from NASA. you can filter
              them in your preference & Learn easily.
            </h1>
            <Link to="/mars_rover_images">
              {" "}
              <button className="px-4 mt-32 mb-10 justify-center items-center md:mx-40 mx-20  lg:mx-32 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]">
                VIEW MORE
              </button>
            </Link>
              </div>
            </div>

            <div
              className="flex w-full h-full bg-gray-600"
              >
                <div style={{ backgroundImage: `url(${EPIC})` }}
                className="w-full h-full duration-1000 bg-center bg-cover ">
                </div>
              <div className="top-0 w-full h-full pt-5 bg-black bg-opacity-80">
              <h1 className=" uppercase mt-5 text-sm font-extrabold tracking-widest text-center text-transparent  sm:text-lg bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] bg-clip-text">
              EPIC : <br></br> Earth Polychromatic Imaging Camera
            </h1>
            <h1 className="pl-10 mt-10 font-semibold text-justify pr-14 md:pl-5 md:pr-10">
              EPIC provides full disc imagery of the Earth and captures unique
              perspectives of certain astronomical events such as lunar
              transits.Also you can play images as the video and can get well
              user experience.{" "}
            </h1>
            <Link to="/epic">
              {" "}
              <button className="px-4 mt-32 mb-10 justify-center items-center md:mx-40 mx-20  lg:mx-32 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]">
                VIEW MORE
              </button>
            </Link>
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

export default Home;
