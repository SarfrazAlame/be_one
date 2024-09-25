"use client";

import { OrganizationWithUser } from "@/auth/definition";
import { Input } from "@/components/ui/input";
import React from "react";
import { IoIosAddCircle } from "react-icons/io";

const Members = ({
  org,
  userId,
}: {
  org: OrganizationWithUser;
  userId: string;
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <div className="my-4 ">
        <div>
          <h1 className="text-center text-xl font-semibold text-slate-600 font-sans">
            {org.mosquename} Committee
          </h1>
        </div>
        {/* <div className="my-8 mx-4 flex flex-col gap-4 items-center">
        <div className="flex gap-5 items-center">
          <p>Name :</p>
          <p className="text-sm">{org.name}</p>
          <p className="text-sm">{org.email}</p>
          <p className="text-sm">{org.phone}</p>
        </div>
        <div className="flex gap-5 items-center">
          <p className="text-sm">{org.district}</p>
          <p className="text-sm">{org.state}</p>
          <p className="text-sm">{org.zipcode}</p>
          <p className="text-sm">{org.city}</p>
        </div>
      </div> */}
        <div className="mx-12 my-4">
          {org.userId === userId ? (
            <>
              <div className="w-fit flex items-center gap-1 px-2 p-1.5 rounded transition-all duration-300 cursor-pointer hover:bg-slate-200">
                <IoIosAddCircle size={20} className="text-slate-600" />
                <button className="text-sm" onClick={() => setOpen(true)}>
                  Add Members
                </button>
              </div>
              <div>
                {open ? (
                  <>
                    <div>
                      <Input className="w-1/2" />
                    </div>
                  </>
                ) : (
                  <>
                    <div></div>
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <div>
                <p className="text-sm">
                  - See All Members from {org.mosquename}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Members;
