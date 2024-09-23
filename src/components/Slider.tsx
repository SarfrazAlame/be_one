'use client'
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Slider = () => {
  const router = useRouter()
  return (
    <div className="w-full lg:flex justify-evenly lg:mt-20 mt-5 mx-2 sm:mx-0 ">
      <div className="lg:w-1/4 w-full flex flex-col items-center">
        <h1 className="text-3xl text-center font-semibold text-gray-800 my-2">
          Be One with Ummah Unity
        </h1>
        <p className="mb-4 text-center  ">
          Create a community of your mosque on this platform to connect with our
          brothers around the world.
        </p>
        <Button className="mb-12" onClick={()=>router.push('/create-community')}>Join Community</Button>
      </div>

      <div className="flex items-center justify-center mx-2 md:mx-0 ">
        <img
          src="https://cdn.pixabay.com/photo/2024/01/12/00/57/ai-generated-8502842_640.jpg"
          alt="image"
          className="rounded"
        />
      </div>
    </div>
  );
};

export default Slider;
