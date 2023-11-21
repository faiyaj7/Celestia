import prisma from "@/utils/prismaClient";
import Menu from "@/components/Menu";
import React from "react";
export const metadata = {
  title: "Menu",
  description: "Generated by create next app",
};

const page = async () => {
  const product = await prisma.product.findMany({ include: { image: true } });
  return <Menu product={product} />;
};

export default page;
