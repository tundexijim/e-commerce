"use client";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { useEffect, useState } from "react";
const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/sunglass.jpg",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/glasses.jpg",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/man.jpg",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev: any) =>
          prev === data.length - 1 ? 0 : prev + 1
        ),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-cover bg-center h-[100vh]"
      style={{ backgroundImage: `url(${data[currentSlide].image})` }}
    >
      <NavBar />
      <div className=" flex flex-col gap-8 justify-center items-center h-[calc(100vh-8rem)] text-blue-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <Link href="/products">
          <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
        </Link>
      </div>
    </div>
  );
}
