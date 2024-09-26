import React from "react";
import ListHeader from "../_components/ListHeader";

const Committeelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full flex justify-between">
      <div className="w-80 hidden lg:block">
        <ListHeader />
      </div>
      <div className="lg:w-3/4 w-full">{children}</div>
    </div>
  );
};

export default Committeelayout;
