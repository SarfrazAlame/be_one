import Members from "@/app/_components/Members";
import { MemberByUserId, OrganizationById } from "@/auth/data";
import { OrganizationWithUser } from "@/auth/definition";
import { getUserId } from "@/lib/UserId";
import React from "react";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const org = (await OrganizationById(id)) as OrganizationWithUser;
  const userId = await getUserId();
  const Mems = await MemberByUserId(userId);
  return <Members org={org} userId={userId} mems={Mems} />;
};

export default page;
