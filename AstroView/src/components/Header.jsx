import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import { MenuIcon, XIcon  } from "@heroicons/react/outline";
import { useAuth } from "../contexts/AuthContext";
import { doSignOut } from "../config/Auth";
import userLogo from "../assets/userLogo.png";
import logo from "../assets/astro-view-icon.png";

const navigation = [
  { name: "HOME", href: "/home" },
  { name: "APOD", href: "/apod" },
  { name: "GALLERY", href: "/gallery" },
  { name: "SEARCH", href: "/search" },
  { name: "MARS ROVER PHOTOS", href: "/mars_rover_images" },
  { name: "EPIC", href: "/epic" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPage = window.location.pathname;
  const navigate = useNavigate();

  const { userLoggedIn } = useAuth();
  const { currentUser } = useAuth();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-gray-900 via-[#403242] to-gray-900 rounded-b-full">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <div
            className="flex flex-row gap-3 ml-5 cursor-pointer"
            onClick={() => {
              navigate("/home");
            }}
          >
            <img className="w-auto h-10 " src={logo} alt="AstroView" />
            <div className="mt-2 font-bold tracking-widest text-center text-transparent text-xl bg-gradient-to-r from-[#EA524B] via-[#AB02D2] to-[#2502c4] bg-clip-text">
              AstroView
            </div>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon className="w-6 h-6 text-white" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 ${
                currentPage === item.href
                  ? "font-extrabold text-transparent text-lg bg-gradient-to-r from-[#EA524B] via-[#AB02D2] to-[#2502c4] bg-clip-text"
                  : "text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="justify-end hidden ml-5 mr-5 lg:flex">
          {userLoggedIn && (
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="relative flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <img
                    src={currentUser.photoURL ? currentUser.photoURL : userLogo}
                    className="w-8 h-8 rounded-full"
                  />
                </Menu.Button>
              </div>
              <Menu.Items className="absolute right-0 z-10 w-48 py-2 px-5 mt-2 origin-top-right bg-gradient-to-b from-gray-900 via-[#403242] to-gray-900 rounded-md shadow-lg ring-1 ring-black focus:outline-none">
                <Menu.Item>
                  <div className="items-center justify-center mx-auto ">
                    <h1 className="mt-2 mb-3 ml-3 text-sm font-semibold leading-6 text-white">
                      {currentUser.displayName
                        ? currentUser.displayName
                        : currentUser.email}
                    </h1>
                  </div>
                </Menu.Item>
                <div className="w-full mt-1 mb-1 mr-2 border-b-2"></div>
                <Menu.Item>
                  <a
                    href="#"
                    onClick={() => {
                      doSignOut().then(() => {
                        navigate("/");
                      });
                    }}
                    className="block px-2 py-2 pl-10 text-sm font-semibold leading-7 rounded-lg cursor-pointer text-gray-50 hover:bg-red-500 ring-red-600"
                  >
                    SIGN OUT
                  </a>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto  bg-gradient-to-b from-gray-900 via-[#403242] to-gray-900 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/home" className="-m-1.5 p-1.5 flex gap-5">
              <span className="sr-only">AstroView</span>
              <img className="w-auto h-10" src={logo} alt="AstroView" />
              <div className="mt-2 font-bold tracking-widest text-center text-transparent text-xl bg-gradient-to-r from-[#EA524B] via-[#AB02D2] to-[#2502c4] bg-clip-text">
                AstroView
              </div>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-100 bg-[#403242] hover:bg-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XIcon  className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg ${
                      currentPage === item.href
                        ? "font-extrabold text-transparent text-lg bg-gradient-to-r from-[#EA524B] via-[#AB02D2] to-[#2502c4] bg-clip-text"
                        : "text-gray-50 hover:bg-gray-50 hover:text-black"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 mx-auto mb-5">
                <div className="relative flex mt-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <img
                    src={currentUser.photoURL ? currentUser.photoURL : userLogo}
                    className="w-10 h-10 ml-5 rounded-full"
                  />
                </div>

                <div className="items-center justify-center mx-auto mt-3 ">
                  <h1 className="font-semibold leading-6 text-white text-md">
                    {currentUser.displayName
                      ? currentUser.displayName
                      : currentUser.email}
                  </h1>
                </div>
              </div>
              <div className="py-6">
                <a
                  onClick={() => {
                    doSignOut().then(() => {
                      navigate("/");
                    });
                  }}
                  className="cursor-pointer -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-50 hover:bg-red-500"
                >
                  SIGN OUT
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
