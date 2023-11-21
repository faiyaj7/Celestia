import Link from "next/link";
import React from "react";
import { IoMdContact } from "react-icons/io";
import { PiSignInBold } from "react-icons/pi";
import {
  FaArrowRight,
  FaGoogle,
  FaFacebook,
  FaCaretDown,
} from "react-icons/fa";

import Image from "next/image";
import Authenticate from "./Authenticate";
const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full my-16 ">
      {/* Left part */}
      <div className="w-full lg:w-[40%] bg-pink-200 p-5 flex flex-col items-center gap-8 rounded-l-lg shadow-md shadow-pink-300">
        {/* first part */}
        <div className="flex gap-10  mt-16">
          <div className="button flex items-center justify-center gap-2">
            <PiSignInBold />
            <Link href="/signin">Log In</Link>
          </div>
          {/* top-[287px] left-[300px] */}
          <FaCaretDown
            size={20}
            className="absolute top-[286px] left-[15%] lg:left-[42%] text-red-500 "
          />

          <div className="button flex items-center justify-center gap-2">
            <IoMdContact /> <Link href="/signup">Create Account</Link>
          </div>
        </div>
        {/* second part */}
        <div>
          <h1 className="font-merriweather-sans text-4xl font-semibold mb-3">
            Welcome back!
          </h1>
          <h5 className="font-merriweather-sans font-medium">
            Get into your dashboard
          </h5>
        </div>

        {/* third part */}
        <Authenticate />
      </div>
    </div>
  );
};

export default Login;
