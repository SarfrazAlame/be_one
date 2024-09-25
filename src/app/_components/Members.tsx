"use client";

import { OrganizationWithUser } from "@/auth/definition";
import { MemberSchema } from "@/auth/schema";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { useForm } from "react-hook-form";
import { IoIosAddCircle } from "react-icons/io";
import { z } from "zod";

const Members = ({
  org,
  userId,
}: {
  org: OrganizationWithUser;
  userId: string;
}) => {
  const [open, setOpen] = React.useState(false);

  const form = useForm<z.infer<typeof MemberSchema>>({
    resolver: zodResolver(MemberSchema),
    defaultValues: {
      name: "",
      price: 0,
    },
  });

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
                    <Form {...form}>
                      <form className="mx-3 relative">
                        <FormField
                          name="name"
                          control={form.control}
                          render={({ field }) => (
                            <FormItem className="mb-2  flex items-center gap-2">
                              <FormLabel className="text-[13px] text-slate-500">
                                Name :{" "}
                              </FormLabel>
                              <Input
                                {...field}
                                placeholder="Name"
                                className="placeholder:text-[13px] sm:w-96 w-[96vw] hover:ring-0 focus-visible:ring-1 h-12 border-none"
                              />
                            </FormItem>
                          )}
                        />
                        <FormField
                          name="price"
                          control={form.control}
                          render={({ field }) => (
                            <FormItem className="mb-2 flex items-center gap-2">
                              <FormLabel className="text-[13px] text-slate-500">
                                Price :{" "}
                              </FormLabel>
                              <Input
                                {...field}
                                placeholder="Price"
                                className="placeholder:text-[13px] sm:w-96 w-[96vw] hover:ring-0 focus-visible:ring-1 h-12 border-none mx-1"
                              />
                            </FormItem>
                          )}
                        />
                        <Button className="absolute right-20 my-1">Add</Button>
                      </form>
                    </Form>
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
