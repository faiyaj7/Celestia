"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { emptyCart, emptyQuantities, emptyPrice } from "@/store/cartSlice";
import runFireworks from "@/utils/canvasConfetti";

const Success = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.clear();
    dispatch(emptyCart());
    dispatch(emptyPrice());
    dispatch(emptyQuantities());
    runFireworks();
  }, [dispatch]);

  return (
    <div className="success-wrapper mb-[100px] ">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2 className="text-center">Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:faiyaj710@gmail.com">
            faiyaj710@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="button">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
