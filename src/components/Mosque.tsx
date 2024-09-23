"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { IoMdArrowDropdown } from "react-icons/io";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem } from "./ui/form";

const OrganizationSchema = z.object({
  name: z.string(),
  mosquename: z.string(),
  logo: z.string().optional(),
  location: z.string(),
  address: z.string(),
});

const Mosque = () => {
  const form = useForm<z.infer<typeof OrganizationSchema>>({
    resolver: zodResolver(OrganizationSchema),
    defaultValues: {
      name: "",
      mosquename: "",
      logo: "",
      location: "",
      address: "",
    },
  });

  function onsubmit(data: z.infer<typeof OrganizationSchema>) {
    console.log(data);
  }


  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-semibold text-center text-orange-600">
        Add your mosque here
        <div className="flex items-center justify-center">
          <IoMdArrowDropdown />
        </div>
      </h1>

      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onsubmit)}>
            <FormField
             control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Mosque;
