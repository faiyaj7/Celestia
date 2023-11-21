// "use client";
import React from "react";
import { useParams } from "next/navigation";
import prisma from "@/utils/prismaClient";
import Product from "@/components/Product";

export async function generateStaticParams() {
  const product = await prisma.product.findMany();
  return product.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({ params }, parent) {
  const product = await prisma.product.findUnique({
    where: { id: params.slug },
  });

  return {
    title: product.title,
    description: product.desc,
  };
}
const page = async ({ params }) => {
  const product = await prisma.product.findUnique({
    where: { id: params.slug },
    include: { image: true },
  });

  return <Product item={product} />;
};

export default page;
