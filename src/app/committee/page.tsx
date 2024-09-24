import { usePathname } from "next/navigation";
import React from "react";
import Committee from "../_components/Committee";
import { CommunityWithOrganization } from "@/auth/data";

const page = async () => {
  const organizations = await CommunityWithOrganization();
  return (
    <div className="h-screen w-full py-4 px-12">
      <p className="text-center text-xl font-semibold text-orange-600">
        Communities and Organizations 
      </p>
      {organizations.map((org) => (
        <Committee key={org.id} org={org} />
      ))}
    </div>
  );
};

export default page;
