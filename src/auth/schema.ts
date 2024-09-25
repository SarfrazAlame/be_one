import { z } from "zod";

export const OrganizationSchema = z.object({
    name: z.string().min(3),
    email:z.string(),
    mosquename: z.string(),
    logo: z.string().optional(),
    location: z.string(),
    city: z.string(),
    zipcode: z.string(),
    phone: z.string(),
    district: z.string(),
    state: z.string(),
  });

export const MemberSchema = z.object({
  name: z.string(),
  price: z.number(),
});