import React, { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../config/Auth";
import { useAuth } from "../contexts/AuthContext";
import { Dialog } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import bgVideo from "../assets/home-bg.mp4";
import logo from "../assets/astro-view-icon.png";

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

const Login = () => {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn && validateEmail(email)) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password).catch((error) => {
        setIsSigningIn(false);
        setErrorMessage(error.message);
      });
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch((err) => {
        setIsSigningIn(false);
        setErrorMessage(err.message);
      });
    }
  };

  const validateEmail = (email) => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    if (!isValid) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
    return isValid;
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
            href="login"
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
                Welcome Back
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
                      className="block w-full pl-5 rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    <div className="text-sm">
                      <a
                        href="/forgot_password"
                        className="font-semibold leading-6 text-[#AB02D2] hover:text-[#F05D5E] hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="relative p-3 mt-2 ">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={password}
                      placeholder="•••••••••••"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
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
                    disabled={isSigningIn}
                    className="px-3 py-1.5 flex w-full justify-center text-black hover:text-white hover:font-bold font-bold bg-gradient-to-r from-[#E218AE] via-[#F05D5E] to-[#F0A93C] rounded-md hover:bg-gradient-to-r hover:from-[#EA524B] hover:via-[#AB02D2] hover:to-[#2502c4]"
                  >
                    {isSigningIn ? "Signing In..." : "Sign In"}
                  </button>
                </div>
              </form>
              <p className="mt-5 text-sm text-center text-gray-300">
                Don't have an account?{" "}
                <Link
                  to={"/signup"}
                  className="font-semibold leading-6 text-[#AB02D2] hover:text-[#F05D5E] hover:underline"
                >
                  Sign up
                </Link>
              </p>
              <div className="flex flex-row w-full text-center">
                <div className="border-b-2 mt-5 mb-2.5 mr-2 w-full"></div>
                <div className="mt-5 text-sm font-bold w-fit">OR</div>
                <div className="border-b-2 mb-2.5 ml-2 w-full"></div>
              </div>
              <button
                disabled={isSigningIn}
                onClick={(e) => {
                  onGoogleSignIn(e);
                }}
                className={`w-full mt-10 flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium  ${
                  isSigningIn
                    ? "cursor-not-allowed"
                    : "hover:text-black hover:font-bold hover:bg-gray-100 transition duration-300 active:bg-gray-100"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_17_40)">
                    <path
                      d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                      fill="#34A853"
                    />
                    <path
                      d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_40">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>{" "}
                {isSigningIn ? "Signing In..." : "Continue with Google"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
