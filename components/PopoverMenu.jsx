"use client";
import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { AiOutlineDown } from "react-icons/ai";

import Link from "next/link";
import Image from "next/image";
import { solutions } from "@/constants";
const PopoverMenu = () => {
  return (
    <>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
          ${open ? "text-white" : "text-white/90"} 
          group inline-flex items-center rounded-md bg-red-700 px-3 py-2 
          text-base font-medium hover:text-white 
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
            >
              <span>More</span>
              <AiOutlineDown
                className={`${open ? "text-orange-300" : "text-orange-300/70"} 
            ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200 "
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0 "
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2  mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                          <Image
                            src={item.icon}
                            alt={item.name}
                            width={200}
                            height={200}
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};

export default PopoverMenu;
