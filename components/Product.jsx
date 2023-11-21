import Image from "next/image";
import React from "react";
import SingleItemFunctionality from "./SingleItemFunctionality";
const Product = ({ item }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center gap-3 px-5 mt-[100px] mb-[150px] ">
      {/* Left part */}
      <div className="w-full lg:w-[35%]">
        <Image
          src={item.image.public_url}
          alt={item.title}
          width={800}
          height={800}
          className="w-full object-cover rounded-lg"
        />
      </div>
      {/* Right Part */}
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-merriweather-sans font-semibold">
          {item.title[0].toUpperCase() + item.title.slice(1)}
        </h1>
        <h2>
          Availablity{" "}
          {item.stock > 0 ? (
            <span className="text-green-600 font-merriweather-sans font-semibold">
              (In Stock)
            </span>
          ) : (
            <span className="text-red-600 font-merriweather-sans font-semibold">
              (Out of Stock)
            </span>
          )}
        </h2>
        <h3 className="font-merriweather-sans font-semibold text-lg text-red-600 ">
          {item.price} BDT
        </h3>
        <p className="font-merriweather-sans font-medium text-sm">
          {item.desc}
        </p>
        <div className="flex items-center justify-start gap-3">
          <SingleItemFunctionality item={item} />
        </div>
      </div>
    </div>
  );
};

export default Product;
