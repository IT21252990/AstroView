import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Dialog } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
// import "../App.css";

export default function GalleryCard(props) {
  const { data, key } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="p-3 rounded-xl cursor-pointer bg-gradient-to-r from-gray-900 via-[#403242] to-gray-900 hover:bg-gradient-to-b hover:from-[#ffffff] hover:via-[#686868] hover:to-[#000000] h-max w-max mt-5 hover:p-3 flex flex-col mx-auto shadow-lg"
      >
        <div className="relative group">
          <div className="flex items-center justify-center">
            <img
              src={data?.url}
              className="max-w-[400px] sm:max-w-[300px] xl:max-w-[200px] rounded-t-xl"
            />
          </div>
          <div className="max-w-96 sm:max-w-[300px] xl:max-w-72 mt-1 bg-black p-2 rounded-b-xl text-sm">
            <h1>{data?.title}</h1>
          </div>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex items-center justify-center overflow-y-scroll scrollbar-hide lg:mt-40" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative mt-80 lg:mt-0 max-h-screen bg-gradient-to-r from-gray-900 via-[#403242] to-gray-900 rounded-lg w-full max-w-5xl mx-5 md:mx-auto flex flex-col lg:flex-row scrollbar-hide overflow-y-scroll lg:overflow-y-visible lg:max-h-[80vh]">
              <button
                type="button"
                className="absolute -mt-4 -mr-4 text-gray-300 rounded-md top-5 right-5 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close panel</span>
                <XIcon className="w-6 h-6" aria-hidden="true" />
              </button>
              <div className="flex flex-col justify-center p-6">
                <h2 className="text-lg font-semibold leading-6 text-gray-50">{data?.title}</h2>
                <img
                  src={data?.url}
                  className="mt-4 rounded-xl max-w-[400px] sm:max-w-[300px] xl:max-w-[200px] self-start"
                />
                <h2 className="mt-4 text-lg font-semibold leading-6 text-gray-50">{data?.date}</h2>
              </div>
              <div className="p-6 overflow-y-scroll text-lg font-semibold leading-6 text-justify text-gray-50 lg:flex-grow scrollbar-hide">
                {data?.explanation}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
}
