import { OrganizationById } from "@/auth/data";
import { OrganizationWithUser } from "@/auth/definition";
import { getUserId } from "@/lib/UserId";
import React from "react";
import { IoIosAddCircle } from "react-icons/io";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const org = (await OrganizationById(id)) as OrganizationWithUser;
  const userId = await getUserId();
  return (
    <div className="my-4 ">
      <div>
        <h1 className="text-center text-xl font-semibold text-slate-600 font-sans">
          {org.mosquename}
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
            <div className="flex items-center gap-1 cursor-pointer">
              <IoIosAddCircle size={20} className="text-slate-600" />
              <h1 className="text-sm">Add Members</h1>
            </div>
          </>
        ) : (
          <>
            <div>
              <p className="text-sm"> -  See All Members from {org.mosquename}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default page;
