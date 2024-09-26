import React from "react";
import ListHeader from "../_components/ListHeader";

const Committeelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full flex justify-between">
      <div className="w-80">
        <ListHeader />
      </div>
      <div className="w-3/4">{children}</div>
    </div>
  );
};

export default Committeelayout;
