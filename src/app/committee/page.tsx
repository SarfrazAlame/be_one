import { usePathname } from "next/navigation";
import React from "react";
import Committee from "../_components/Committee";

const page = () => {
  return (
    <div className="h-screen w-full py-4 px-12">
      <p className="text-center text-xl font-semibold text-orange-600">Communities and Organizations </p>
      <Committee/>
    </div>
  );
};

export default page;
