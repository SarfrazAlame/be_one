"use client";
import { ArrowDownNarrowWide } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoAddCircleSharp, IoNotificationsOutline } from "react-icons/io5";
import { CiSearch, CiSquareChevLeft } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaMosque } from "react-icons/fa";
import { BiSolidMessageAltCheck } from "react-icons/bi";

const ListHeader = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  return (
    <div className="p-4 flex flex-col h-screen gap-y-2">
      <div className="flex gap-12 items-center mb-2">
        <div className="hover:bg-gray-200 cursor-pointer flex gap-2 p-1 rounded items-center transition-all duration-500">
          <Image
            src={user?.logo!}
            alt="user"
            width={30}
            height={30}
            className="rounded-full"
          />
          <p>{user?.name}</p>
          <IoMdArrowDropdown />
        </div>
        <div className="flex gap-2 items-center">
          <IoNotificationsOutline
            size={16}
            className="text-slate-500 cursor-pointer h-8 w-8 p-1 hover:bg-gray-200 transition-all duration-500 rounded"
          />
          <CiSquareChevLeft
            size={20}
            className="text-slate-500 cursor-pointer h-8 w-8 p-1 hover:bg-gray-200 transition-all duration-500 rounded"
          />
        </div>
      </div>

      <button
        onClick={() => router.push("/create-community")}
        className="flex items-center gap-2 hover:bg-gray-200 cursor-pointer h-10 rounded px-1"
      >
        <IoAddCircleSharp size={28} className="text-green-600" />
        <p className="text-sm text-green-500">Add Mosque</p>
      </button>
      <div className="flex items-center gap-2 hover:bg-gray-200 cursor-pointer h-10 rounded px-1">
        <CiSearch size={24} className="text-slate-600" />
        <p className="text-sm text-green-700 px-1">Search</p>
      </div>
      <div className="flex items-center gap-2 hover:bg-gray-200 cursor-pointer h-10 rounded px-1">
        <FaMosque size={20} className="text-slate-600" />
        <p className="text-sm text-green-700 px-1">Communities</p>
      </div>
      <div className="flex items-center gap-2 hover:bg-gray-200 cursor-pointer h-10 rounded px-1">
        <HiMiniUserGroup size={20} className="text-slate-600" />
        <p className="text-sm text-green-700 px-1">Committee Members</p>
      </div>

      <div className="flex items-center gap-2 hover:bg-gray-200 cursor-pointer h-10 rounded px-1">
        <BiSolidMessageAltCheck size={20} className="text-slate-600" />
        <p className="text-sm text-green-700 px-1">Message</p>
      </div>

      <div></div>
    </div>
  );
};

export default ListHeader;
