import React, { useState } from "react";
import { doPasswordReset } from "../config/Auth";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { MenuIcon, XIcon  } from "@heroicons/react/outline";
import bgVideo from "../assets/home-bg.mp4";
import logo from "../assets/astro-view-icon.png";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await doPasswordReset(email);
      alert("Password reset email sent. Please check your inbox.");
    } catch (error) {
      console.error("Error sending password reset email:", error.message);
      alert("Error sending password reset email. Please try again later.");
    }
  };

  return (
    <>
      <div className="relative h-screen bg-gray-900 sm:h-auto lg:h-screen ">
        <div className="absolute z-50 items-end justify-end hidden pt-5 lg:flex md:flex gap-x-6 right-10">
          <a
            href="/signup"
            className="px-4 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]"                >
            
            Register
          </a>
          <a
            href="login"
            className="px-4 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]"                >
            
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
                <XIcon  className="w-6 h-6" aria-hidden="true" />
              </button>
              <div className="relative flex items-end justify-end pt-1 gap-x-6 right-5">
                <a
                  href="/signup"
                  className="px-4 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]"                >
                
                  Register
                </a>
                <a
                  href="/login"
                  className="px-4 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]"                >
                
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
                <div className="flex justify-center lg:mt-20 sm:mb-8">
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
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto mx-auto mt-20 bg-transparent lg:w-1/2 lg:h-full lg:mt-0 lg:absolute lg:right-0 lg:ml-10">
          <div className="flex flex-col flex-1 min-h-full px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-20 text-2xl font-bold leading-9 tracking-tight text-center text-white uppercase lg:mt-40">
               Forgot Your Password ?
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleForgotPassword}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-50"
                  >
                    Enter Your Email address :
                  </label>
                  <div className="p-3 mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="example@example.com"

                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="block w-full pl-5 rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="p-3">
                  <button
                    type="submit"
                    className="px-3 py-1.5 flex w-full justify-center text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]"                >
                    
                    Send Reset Password Request
                  </button>
                </div>
              </form>
              {message && <p>{message}</p>}
              <p className="mt-5 text-sm text-center text-gray-300">
              Remember Password?{" "}
                <Link
                  to={"/login"}
                  className="font-semibold leading-6 text-[#AB02D2] hover:text-[#F05D5E] hover:underline"
                  >
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default ForgotPasswordPage;

