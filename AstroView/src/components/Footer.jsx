import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto min-w-full bg-gradient-to-r from-gray-900 via-[#403242] to-gray-900 rounded-t-full">
      <div className="flex items-center justify-between h-16">
        <p className="ml-10 text-sm text-white">
          © 2024 <a href="/home" className=" hover:text-gray-300 hover:font-bold">AstroView,</a>  Inc. All rights Reserved.
        </p>
        <div className="mr-10">
        <a
            href="https://www.nasa.gov/"
            className="ml-6 text-sm text-white hover:text-gray-300 hover:font-bold"
          >
            Nasa
          </a>
          <a
            href="/lern_more"
            className="ml-6 text-sm text-white hover:text-gray-300 hover:font-bold"
          >
            About
          </a>
          <a
            href="https://github.com/IT21252990"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 text-sm text-white hover:text-gray-300 hover:font-bold"
          >
            GitHub
          </a>
          <a
             href="mailto:kalingajayathilaka@gmail.com"
            className="ml-6 text-sm text-white hover:text-gray-300 hover:font-bold"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
