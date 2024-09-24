import React from "react";
import ListHeader from "../_components/ListHeader";

const Committeelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full grid grid-cols-6">
      <div></div>
      <div className="flex items-center justify-center">
        <ListHeader />
      </div>
      <div className="w-3/4">{children}</div>
      <div></div>
    </div>
  );
};

export default Committeelayout;
