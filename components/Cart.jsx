"use client";

import getStripe from "@/lib/getStripe";
import {
  removeItemsFromCart,
  toggleCartItems,
  toggleDelete,
} from "@/store/cartSlice";
// import getStripe from "@/lib/getStripe";

import Image from "next/image";
import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartSlice.cart);
  const totalPrice = useSelector((state) => state.cartSlice.totalPrice);

  const discount = 0.15;
  const priceAfterDicount = totalPrice * discount;
  const totalAfterDicount = totalPrice - priceAfterDicount;
  const shadowStyle = {
    boxShadow:
      "5px 0 25px -5px rgb(0 0 0 / 0.1), 0 5px 10px -6px rgb(0 0 0 / 0.1)",
  };

  const handlePaymentByStripe = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    stripe.redirectToCheckout({ sessionId: data.session.id });
  };

  return (
    <section className="flex flex-col lg:flex-row justify-around gap-10 lg:gap-10 mt-24 lg:ml-10">
      {cart.length > 0 ? (
        <>
          {/* Left Part */}
          <div
            className="overflow-x-auto shadow-slate-500 lg:mb-[150px] "
            style={shadowStyle}
          >
            <table className="table-auto border-separate border-spacing-12  ">
              <thead>
                <tr className="darkModeFont">
                  <th>Item</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>{""}</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="w-[80px] h-[80px]">
                        <Image
                          src={item.image.public_url}
                          alt={item.title}
                          width={80}
                          height={80}
                          className="rounded-lg object-cover w-full h-full"
                        />
                      </div>
                    </td>
                    <td className="w-20">{item.title}</td>

                    <td>{item.price} BDT</td>
                    <td>{item.totalQuantity}</td>
                    <td>{item.totalPrice} BDT</td>

                    <td>
                      <div className="w-3">
                        <Image
                          src="/arrowLeft.png"
                          alt="arrowLeft"
                          width={20}
                          height={20}
                          className="w-full cursor-pointer"
                          onClick={() =>
                            dispatch(
                              toggleCartItems({ id: item.id, operator: "dec" })
                            )
                          }
                        />
                      </div>
                    </td>
                    <td>
                      <div className="w-3">
                        <RxCross1
                          onClick={() => {
                            dispatch(toggleDelete(true));
                            dispatch(removeItemsFromCart({ id: item.id }));
                          }}
                          className="w-full cursor-pointer"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="w-3">
                        <Image
                          src="/arrowRight.png"
                          alt="arrowRight"
                          width={20}
                          height={20}
                          onClick={() =>
                            dispatch(
                              toggleCartItems({ id: item.id, operator: "inc" })
                            )
                          }
                          className="w-full cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Right Part */}
          <div
            className="w-4/5  lg:w-[25%] h-1/4 shadow-2xl dark:shadow-slate-700
             flex flex-col items-center justify-center gap-10 rounded-lg p-5 mx-auto mb-10"
          >
            <span className="text-4xl font-extrabold darkModeFont font-merriweather-sans">
              Total
            </span>
            <div className="w-full flex justify-between items-center gap-10">
              <span className="text-lg darkModeFont font-merriweather-sans">
                SubTotal
              </span>
              <h1 className="darkModeFont ">{totalPrice} BDT</h1>
            </div>
            <div className="w-full flex justify-between items-center gap-10">
              <span className="text-sm darkModeFont font-merriweather-sans">
                Discount 15%
              </span>
              <span className="darkModeFont font-merriweather-sans text-sm">
                {priceAfterDicount} BDT
              </span>
            </div>
            <hr className="border border-slate-500 w-11/12 mx-auto" />
            <div className="flex items-center justify-between w-full">
              <h4 className="font-merriweather-sans">Total : </h4>
              <h1 className="font-merriweather-sans text-sm">
                {totalAfterDicount} BDT
              </h1>
            </div>
            <button
              className="btn darkModeFont button"
              onClick={handlePaymentByStripe}
            >
              Pay by Stripe
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-screen p-2 ">
          <Image
            src="/empty cart.png"
            alt="empty cart"
            width={120}
            height={120}
          />
          <h2 className="font-bold text-2xl mt-10 mb-2 text-center darkModeFont">
            Your Cart is Empty
          </h2>
          <p className="font-light text-sm text-center darkModeFont">
            Looks like you have not added anytime to your cart. Go ahead &
            explore our pizzas
          </p>
        </div>
      )}

      {/* Right Part */}
    </section>
  );
};

export default Page;
