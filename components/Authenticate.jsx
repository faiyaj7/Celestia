"use client";
import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { signIn } from "next-auth/react";
const Authenticate = () => {
  return (
    <div className="flex flex-col items-start w-1/2 gap-5 mb-12">
      <div className="flex items-center justify-between w-full gap-1">
        <h1 className="w-[30%] text-xs font-medium">or Continue with</h1>
        <hr className="border border-slate-600 w-[70%] " />
      </div>
      <div className="flex items-center justify-center gap-10 w-full">
        <button className="button" onClick={() => signIn("google")}>
          <FaGoogle />
        </button>
        <button className="button">
          <FaFacebook />
        </button>
      </div>
    </div>
  );
};

export default Authenticate;
