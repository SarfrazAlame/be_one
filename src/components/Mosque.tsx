"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { IoMdArrowDropdown } from "react-icons/io";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { CreateOrganization } from "@/auth/action";
import { OrganizationSchema } from "@/auth/schema";
import { MoveLeft } from "lucide-react";

const Mosque = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  const form = useForm<z.infer<typeof OrganizationSchema>>({
    resolver: zodResolver(OrganizationSchema),
    defaultValues: {
      name: user?.name || "",
      mosquename: "",
      location: "",
      city: "",
      zipcode: "",
      phone: "",
      district: "",
      state: "",
    },
  });

  async function onsubmit(data: z.infer<typeof OrganizationSchema>) {
    try {
      await CreateOrganization(data);
      toast.success("Organization created successfully");
      router.push("/committee");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="text-xl lg:mt-12 mt-2 font-semibold flex justify-center gap-20  text-orange-600">
        <MoveLeft onClick={()=>router.back()} className="cursor-pointer " />
        Add your mosque here
        <div className="flex items-center justify-center">
          <IoMdArrowDropdown />
        </div>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onsubmit)}
          className="md:my-10 w-full flex flex-col items-center gap-y-3"
        >
          <div className="lg:flex gap-4">
            <div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="mb-2">
                    <FormLabel>Your Name</FormLabel>
                    <Input
                      {...field}
                      placeholder="Your Name"
                      className="sm:w-96 w-[96vw] hover:ring-0 focus-visible:ring-1 h-12 border-none"
                    />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mosquename"
                render={({ field }) => (
                  <FormItem className="mb-2">
                    <FormLabel>Mosque Name</FormLabel>
                    <Input
                      {...field}
                      placeholder="Mosque Name"
                      className="sm:w-96 w-[96vw] hover:ring-0 focus-visible:ring-1 h-12 border-none"
                    />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="mb-2">
                    <FormLabel>City</FormLabel>
                    <Input
                      {...field}
                      placeholder="city"
                      className="sm:w-96 w-[96vw]  hover:ring-0 focus-visible:ring-1 h-12 border-none"
                    />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="mb-2">
                    <FormLabel>Phone</FormLabel>
                    <Input
                      {...field}
                      placeholder="phone"
                      className="sm:w-96 w-[96vw]  hover:ring-0 focus-visible:ring-1 h-12 border-none"
                    />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="district"
                render={({ field }) => (
                  <FormItem className="mb-2">
                    <FormLabel>Discrict</FormLabel>
                    <Input
                      {...field}
                      placeholder="Discrict"
                      className="sm:w-96 w-[96vw]  hover:ring-0 focus-visible:ring-1 h-12 border-none"
                    />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="mb-2">
                    <FormLabel>State</FormLabel>
                    <Input
                      {...field}
                      placeholder="state"
                      className="sm:w-96 w-[96vw]  hover:ring-0 focus-visible:ring-1 h-12 border-none"
                    />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="zipcode"
            render={({ field }) => (
              <FormItem className="mb-2">
                <FormLabel>Zip Code</FormLabel>
                <Input
                  {...field}
                  placeholder="zip code"
                  className="sm:w-96 w-[96vw]  hover:ring-0 focus-visible:ring-1 h-12 border-none"
                />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            variant={"outline"}
            className="sm:w-96 w-[96vw] mt-6 hover:bg-gray-700 hover:text-gray-100 h-12"
          >
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default Mosque;
