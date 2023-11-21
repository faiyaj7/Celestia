"use client";
import Link from "next/link";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { faqList } from "@/constants";
const Faq = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between mt-[150px] px-24 gap-5 ">
      {/* Left Part */}
      <div className="w-full lg:w-[25%] ">
        <h1 className="text-3xl font-merriweather-sans font-semibold">
          Frequently Asked Questions
        </h1>
        <div className="my-5">
          <h5 className="text-sm font-merriweather-sans font-medium">
            Find answers to common questions about skincare routines, product
            usage and skin types.
          </h5>
        </div>

        <Link href="/" className="button">
          Contact
        </Link>
      </div>
      {/* Right Part */}
      <div className="w-full lg:w-[30%]">
        {faqList.map((item) => (
          <Disclosure as="div" key={item.question}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className="flex w-full justify-between rounded-lg bg-red-200 px-4 py-2 text-left 
                font-merriweather-sans text-sm font-medium text-black hover:bg-red-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                >
                  <span>{item.question}</span>
                  {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {item.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
};

export default Faq;
