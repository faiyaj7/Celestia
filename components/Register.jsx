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
import Link from "next/link";
import { signIn } from "next-auth/react";

import Authenticate from "./Authenticate";
const Register = () => {
  return (
    <div className="flex items-center justify-center w-full my-20 ">
      <div className="w-full lg:w-[40%] bg-pink-200 shadow-md shadow-pink-300 flex flex-col items-center gap-6 rounded-l-lg">
        {/* first part (toggle part) */}
        <div className="flex gap-10  mt-12">
          <div className="button flex items-center justify-center gap-2">
            <PiSignInBold />
            <Link href="/signin">Log In</Link>
          </div>

          <div className="button flex items-center justify-center gap-2">
            <IoMdContact /> <Link href="/signup">Create Account</Link>
          </div>
          <FaCaretDown
            size={20}
            className="absolute top-[266px] right-[44%] text-red-500 "
          />
        </div>
        {/* second part (heading part)*/}
        <div className="w-10/12 text-center">
          <h1 className="font-merriweather-sans text-2xl font-semibold w-full mb-3 ">
            One Step from becoming part of Celestia
          </h1>
          <h5 className="font-merriweather-sans font-merriweather-sans-regular">
            Eagerly waiting to get contact with{" "}
            <span className="text-red-500 text-lg font-semibold">Y</span>ou
          </h5>
        </div>

        {/* third part (authenticate part) */}
        <Authenticate />
      </div>
    </div>
  );
};

export default Register;
