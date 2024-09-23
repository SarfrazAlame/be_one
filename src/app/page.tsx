import Mosque from "@/components/Mosque";
import Slider from "@/components/Slider";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center gap-y-4">
      <h1 className="text-4xl text-center font-[800] text-slate-800 font-sans">
        Grow by helping each other
      </h1>
      <p className="mx-3 md:w-1/2 md:mx-0  text-center text-[18px] text-gray-500">
        "Ummah Unity is a global platform connecting Muslims for collaboration
        and resource sharing. Our goal is to strengthen the Ummah through unity
        and collective growth."
      </p>
      {/* <Mosque /> */}
      <Slider />
    </div>
  );
};

export default page;
