import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import bgVideo from "../assets/home-bg.mp4";
// import "../App.css";
import logo from "../assets/astro-view-icon.png";

const paperAirplane = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="w-10 h-10"
  >
    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
  </svg>
);

const WellcomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="relative bg-gray-900 sm:h-auto lg:h-screen ">
        <div className="absolute z-50 items-end justify-end hidden pt-5 lg:flex md:flex gap-x-6 right-10">
          <a
            href="/signup"
            className="px-4 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]"
          >
            Register
          </a>
          <a
            href="/login"
            className="px-4 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]"
          >
            Login
          </a>
        </div>
        <div className="absolute z-50 flex items-end justify-end pt-5 lg:hidden md:hidden right-10">
          <button
            type="button"
            className="inline-flex rounded-md p-2.5 text-[#ffffff]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <Dialog
          as="div"
          className="lg:hidden md:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-auto h-[50px] bg-transparent px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-transparent">
            <div className="flex">
              <button
                type="button"
                className="rounded-md text-[#454545]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XIcon className="w-6 h-6" aria-hidden="true" />
              </button>
              <div className="relative flex items-end justify-end pt-1 gap-x-6 right-5">
                <a
                  href="/signup"
                  className="px-4 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]"
                >
                  Register
                </a>
                <a
                  href="/login"
                  className="px-4 lg:mx-36 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]"
                >
                  Login
                </a>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        <div className="lg:absolute top-0 lg:h-full lg:w-[55%] md:h-1/3 w-full">
          <video
            src={bgVideo}
            autoPlay
            muted
            loop
            className="video-darken-filter-lern-more"
          />
          <div className="relative px-6 pt-10 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center sm:mb-8">
                  <img
                    className="md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px] h-[50px] w-[50px] z-50"
                    src={logo}
                    alt=""
                    onClick={() => {
                      navigate("/");
                    }}
                  />
                </div>
                <div className="font-bold tracking-widest text-center text-transparent text-4xl md:text-7xl bg-gradient-to-r from-[#EA524B] via-[#AB02D2] to-[#2502c4] bg-clip-text">
                  AstroView
                </div>
                <div className="uppercase mt-3 text-sm font-bold tracking-widest text-center text-transparent  sm:text-lg bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] bg-clip-text">
                  Explore the Cosmos with Us
                </div>
                <div className="flex items-center justify-center mt-10 gap-x-6">
                  <a
                    href="/signup"
                    className="px-4 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto mx-auto bg-transparent lg:w-1/2 lg:h-full lg:mt-0 lg:absolute lg:right-0 lg:ml-10">
          <h1 className="px-10 mt-28 text-sm font-bold text-center text-[#F05D5E] capitalize sm:text-lg">
            AstroView is your one-stop shop for exploring the wonders of space!
            We leverage NASA's powerful APIs to deliver a wealth of information
            about our universe, right to your fingertips.
          </h1>
          <h1 className="px-10 mt-5 text-sm font-bold leading-3 text-center text-gray-400 capitalize sm:text-lg">
            Here's what awaits you on AstroView:
          </h1>

          <h1 className="flex flex-row gap-2 px-10 pl-20 mt-20 text-sm leading-none text-justify text-gray-100 ">
            {paperAirplane}Search the Cosmos: Delve into a vast library of
            space-related data using our intuitive search function. Find what
            piques your curiosity, from breathtaking images of distant galaxies
            to detailed information about planets and stars.
          </h1>
          <h1 className="flex flex-row gap-2 px-10 pl-20 mt-5 text-sm leading-none text-justify text-gray-100 ">
            {paperAirplane}Unveiling the Universe: Learn fascinating facts and
            news about space exploration through engaging content. AstroView
            makes space knowledge accessible to everyone, regardless of
            background.
          </h1>
          <h1 className="px-10 pb-10 mt-20 text-sm font-bold leading-3 text-center text-gray-400 capitalize sm:text-lg">
            With AstroView, embark on an exciting journey of discovery and
            unlock the mysteries of the cosmos!
          </h1>
        </div>
      </div>
    </>
  );
};

export default WellcomePage;
