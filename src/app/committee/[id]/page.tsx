import { OrganizationById } from "@/auth/data";
import { OrganizationWithUser } from "@/auth/definition";
import React from "react";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const org = (await OrganizationById(id)) as OrganizationWithUser;
  return (
    <div className="my-4 ">
      <div>
        <h1 className="text-center text-xl font-semibold text-slate-600 font-sans">{org.mosquename}</h1>
      </div>
    </div>
  );
};

export default page;
