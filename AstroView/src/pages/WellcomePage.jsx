import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import bgVideo from "../assets/home-bg.mp4";
// import "../App.css";

import logo from "../assets/astro-view-icon.png";

const WellcomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <video
        src={bgVideo}
        autoPlay
        muted
        loop
        className="video-darken-filter"
      />
      <div className="bg-[#242424] h-screen">
        <div className="relative items-end justify-end hidden pt-5 lg:flex md:flex gap-x-6 right-10">
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
        <div className="relative flex items-end justify-end pt-5 lg:hidden md:hidden right-10">
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
                  className="px-4 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]"
                >
                  Login
                </a>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        <div className="relative px-6 pt-0 isolate lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center sm:mb-8">
                <img className="h-[200px] w-[200px]" src={logo} alt="" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-400 sm:text-3xl">
                Welcome to
              </h3>
              <div className="font-bold tracking-widest text-center text-transparent text-4xl sm:text-7xl bg-gradient-to-r from-[#EA524B] via-[#AB02D2] to-[#2502c4] bg-clip-text">
                AstroView
              </div>
              <div className="uppercase mt-3 text-sm font-bold tracking-widest text-center text-transparent  sm:text-lg bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] bg-clip-text">
                Explore the Cosmos with Us
              </div>
              <p className="mt-4 text-sm font-semibold leading-8 text-gray-400 capitalize sm:text-lg">
                AstroView is your one-stop shop for exploring the wonders of
                space! We leverage NASA's powerful APIs to deliver a wealth of
                information about our universe, right to your fingertips.
              </p>
              <div className="flex items-center justify-center mt-10 gap-x-6">
                <a
                  href="/signup"
                  className="px-4 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]"
                >
                  Get started
                </a>
                <a
                  href="/lern_more"
                  className="text-sm font-semibold leading-6 text-gray-400 hover:text-[#af2ac0]"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WellcomePage;
