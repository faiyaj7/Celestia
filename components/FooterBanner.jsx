import Link from "next/link";
import React from "react";

const FooterBanner = () => {
  return (
    <section className="bg-violet-400 w-full flex flex-col items-center gap-10 mt-[150px]">
      <div className="w-full lg:w-[30%] mt-20 text-center">
        <h1 className="font-merriweather-sans text-3xl font-semibold">
          Transform your Skin with Celestia Skincare
        </h1>
      </div>
      <h5 className="text-lg font-merriweather-sans font-medium text-center">
        Unleash the Natural Radiance of Your Complexion
      </h5>
      <div className="mb-20 flex gap-3">
        <Link href="/" className="button">
          Shop Now
        </Link>
        <Link href="/" className="button">
          Contact
        </Link>
      </div>
    </section>
  );
};

export default FooterBanner;
