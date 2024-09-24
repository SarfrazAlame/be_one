"use client";
import { OrganizationWithUser } from "@/auth/definition";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Committee = ({ org }: { org: OrganizationWithUser }) => {
  return (
    <>
      <Link
        href={`/committee/${org.id}`}
        className="w-full flex justify-between mt-5 border p-3 rounded-md cursor-pointer transition-all duration-500"
      >
        <div className="w-full flex flex-col gap-y-3">
          <div className="flex items-center gap-4">
            <h1 className="font-semibold text-gray-700">{org.mosquename}</h1>
            <p className="text-sm">{org.name}</p>
            <p className="text-sm">{org.email}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm">{org.district} ,</p>
            <p className="text-sm">{org.state}</p>
            <p className="text-[14px]">{org.zipcode}</p>
            <p className="text-[14px]">{org.city}</p>
            <p className="text-[14px]">{org.phone}</p>
          </div>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <HiOutlineDotsVertical size={20} />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-32 flex flex-col gap-y-2 p-2 rounded border bg-gray-50">
              <DropdownMenuItem className="text-sm text-orange-600">
                Delete
              </DropdownMenuItem>
              <DropdownMenuItem className="text-sm">Edit</DropdownMenuItem>
              <DropdownMenuItem className="text-sm">
                Project Setting
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Link>
    </>
  );
};

export default Committee;
