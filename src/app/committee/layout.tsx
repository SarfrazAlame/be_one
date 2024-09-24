import React from "react";
import ListHeader from "../_components/ListHeader";

const Committeelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-2/3 grid grid-cols-2">
      <div className="flex items-center justify-end ">
        <ListHeader />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Committeelayout;
