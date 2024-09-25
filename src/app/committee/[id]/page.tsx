import Members from "@/app/_components/Members";
import { OrganizationById } from "@/auth/data";
import { OrganizationWithUser } from "@/auth/definition";
import { getUserId } from "@/lib/UserId";
import React from "react";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const org = (await OrganizationById(id)) as OrganizationWithUser;
  const userId = await getUserId();
  return (
    <div>
      <Members org={org} userId={userId} />
    </div>
  );
};

export default page;
