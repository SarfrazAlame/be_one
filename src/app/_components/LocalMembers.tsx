import { Member } from "@prisma/client";
import React from "react";

const LocalMembers = ({ mems }: { mems: Member[] }) => {
  return (
    <>
      <table className="border-t w-full">
        <tr className="flex justify-between">
          <th className="font-semibold">Name</th>
          <th className="font-semibold -mx-10">Price</th>
        </tr>
        {mems.map((mem) => (
          <>
            <tr className="border-b">
              <td className="border-t text-sm h-10">{mem.name}</td>
              <td className="border-t text-sm h-10">{mem.price}rs</td>
            </tr>
          </>
        ))}
      </table>
    </>
  );
};

export default LocalMembers;
