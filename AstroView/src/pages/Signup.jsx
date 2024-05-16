import React, { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useAuth } from "../contexts/AuthContext";
import { doCreateUserWithEmailAndPassword } from "../config/Auth";
import bgVideo from "../assets/home-bg.mp4";
import logo from "../assets/astro-view-icon.png";
import "../App.css";

const EyeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path
      fillRule="evenodd"
      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
      clipRule="evenodd"
    />
  </svg>
);

const EyeOffIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
  </svg>
);

const Signup = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { userLoggedIn } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      await doCreateUserWithEmailAndPassword(email, password);
    }
  };

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
                  className="px-4 py-2 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]"
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
          {userLoggedIn && <Navigate to={"/home"} replace={true} />}

          <div className="flex flex-col flex-1 min-h-full px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-20 text-2xl font-bold leading-9 tracking-tight text-center text-white uppercase">
                Create a New Account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={onSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-50"
                  >
                    Email address :
                  </label>
                  <div className="p-3 mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="example@example.com"
                      className="block pl-5 w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-50"
                    >
                      Password :
                    </label>
                  </div>
                  <div className="relative p-3 mt-2 ">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder="•••••••••••"
                      className="block pl-5 w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center px-4 focus:outline-none"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? EyeOffIcon : EyeIcon}
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-50"
                    >
                      Confirm Password :
                    </label>
                  </div>
                  <div className="relative p-3 mt-2">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={confirmPassword}
                      onChange={(e) => {
                        setconfirmPassword(e.target.value);
                      }}
                      placeholder="•••••••••••"
                      className="block pl-5 w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center px-4 focus:outline-none"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? EyeOffIcon : EyeIcon}
                    </button>
                  </div>
                </div>

                {errorMessage && (
                  <span className="font-bold text-red-600">{errorMessage}</span>
                )}

                <div className="p-3">
                  <button
                    type="submit"
                    disabled={isRegistering}
                    className="flex w-full justify-center px-3 py-1.5 text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]"
                  >
                    {isRegistering ? "Signing Up..." : "Sign Up"}
                  </button>
                </div>
                <div className="mt-10 text-sm text-center text-gray-500">
                  Already have an account? {"   "}
                  <Link
                    to={"/login"}
                    className="font-semibold leading-6 text-[#AB02D2] hover:text-[#F05D5E] hover:underline"
                  >
                    Continue
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
