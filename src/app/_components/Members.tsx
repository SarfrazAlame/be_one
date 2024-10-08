"use client";

import { AddMember } from "@/auth/action";
import { OrganizationWithUser } from "@/auth/definition";
import { MemberSchema } from "@/auth/schema";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Member } from "@prisma/client";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoIosAddCircle } from "react-icons/io";
import { z } from "zod";
import { ArrowBigLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import LocalMembers from "./LocalMembers";

const Members = ({
  org,
  userId,
  mems,
}: {
  org: OrganizationWithUser;
  userId: string;
  mems: Member[];
}) => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof MemberSchema>>({
    resolver: zodResolver(MemberSchema),
    defaultValues: {
      name: "",
      price: "",
    },
  });

  async function onsubmit(data: z.infer<typeof MemberSchema>) {
    try {
      await AddMember(data);
      toast.success("Member added");
      setOpen(false);
      form.reset();
    } catch (error) {
      console.log(error);
      toast.error("Member not added");
    }
  }

  const totalePrice = mems.map((mem) => {
    let a = 0;
    a = a + Number(mem.price);
    return a;
  });

  let sum = 0;
  for (let i = 0; i < totalePrice.length; i++) {
    sum = sum + totalePrice[i];
  }

  return (
    <div className="my-4 w-full flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-4">
        <ArrowBigLeft
          onClick={() => router.back()}
          className="text-slate-600 cursor-pointer"
        />
        <h1 className="text-center text-xl font-semibold text-slate-600 font-sans">
          {org?.mosquename} Committee
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
      <div className="mx-12 my-4 w-full">
        {org?.userId === userId && (
          <>
            <div className="lg:w-4/5 sm:flex items-center justify-between gap-4 ">
              <div className="w-fit flex items-center gap-1 px-2 p-1.5 rounded transition-all duration-300 cursor-pointer hover:bg-slate-200">
                <button
                  className="text-sm flex items-center gap-1"
                  onClick={() => setOpen(true)}
                >
                  <IoIosAddCircle size={24} className="text-slate-600" />
                  Add Members
                </button>
              </div>
              <div className="flex gap-10">
                <p className="text-md font-[500] text-slate-500">
                  Total Members {mems.length}{" "}
                </p>
                <p className="text-md font-[500] text-slate-500">
                  Total price {sum}Rs
                </p>
              </div>
            </div>
            <div className="w-full">
              {open && (
                <>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onsubmit)}
                      className="mx-3 relative lg:w-1/3"
                    >
                      <FormField
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem className="mb-2  flex items-center gap-2 w-full">
                            <FormLabel className="text-[13px] text-slate-500">
                              Name
                            </FormLabel>
                            <Input
                              {...field}
                              placeholder="Name"
                              className="placeholder:text-[13px] sm:w-full lg:w-72 hover:ring-0 focus-visible:ring-1 h-12 border-none"
                            />
                          </FormItem>
                        )}
                      />
                      <FormField
                        name="price"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem className="mb-2 flex items-center gap-2 w-full">
                            <FormLabel className="text-[13px] text-slate-500">
                              Price
                            </FormLabel>
                            <Input
                              {...field}
                              placeholder="Price"
                              className="placeholder:text-[13px] sm:w-full lg:w-72 hover:ring-0 focus-visible:ring-1 h-12 border-none mx-1"
                            />
                          </FormItem>
                        )}
                      />
                      <div className="flex absolute right-20 my-1 -mx-2 gap-3">
                        <Button
                          variant={"outline"}
                          onClick={() => {
                            setOpen(false);
                            form.reset();
                          }}
                        >
                          Cancel
                        </Button>
                        <Button type="submit" className=" bg-gray-800">
                          Add
                        </Button>
                      </div>
                    </form>
                  </Form>
                </>
              )}
            </div>
          </>
        )}

        <div className="mt-10 mx-3">
          <LocalMembers mems={mems} />
        </div>
      </div>
    </div>
  );
};

export default Members;
