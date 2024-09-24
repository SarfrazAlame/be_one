'use server'
import { getUserId } from "@/lib/UserId"
import { revalidatePath } from "next/cache"
import { z } from "zod"
import prisma from "@/lib/prisma"
import { OrganizationSchema } from "./schema"

export const CreateOrganization = async (data: z.infer<typeof OrganizationSchema>) => {
    const userId = await getUserId()

    const validatedData = OrganizationSchema.safeParse(data);

    if (!validatedData.success || !userId) {
        throw new Error("Invalid data")
    }

    const { name, email, mosquename, location, city, zipcode, phone, district, state } = validatedData.data

    try {
        await prisma.organization.create({
            data: {
                name,
                email,
                mosquename,
                location,
                city,
                zipcode,
                phone,
                district,
                state,
                user: {
                    connect: {
                        id: userId
                    }
                }
            }
        })
        revalidatePath("/create-community")
    } catch (error) {
        console.log(error)
    }
}

