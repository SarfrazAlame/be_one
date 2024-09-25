'use server'
import { getUserId } from "@/lib/UserId"
import { revalidatePath } from "next/cache"
import { z } from "zod"
import prisma from "@/lib/prisma"
import { MemberSchema, OrganizationSchema } from "./schema"
import { redirect } from "next/navigation"

export const CreateOrganization = async (data: z.infer<typeof OrganizationSchema>) => {
    const userId = await getUserId()

    const validatedData = OrganizationSchema.safeParse(data);

    if (!validatedData.success) {
        return {
            errors: validatedData.error.flatten().fieldErrors,
            message: 'Missing Fields. failed to create post'
        }
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
    } catch (error) {
        console.log(error)
    }
    revalidatePath("/committee")
    redirect('/committee')
}

export const AddMember = async (data: z.infer<typeof MemberSchema>) => {
    const userId = await getUserId()
    const validatedData = MemberSchema.safeParse(data);

    if (!validatedData.success) {
        return {
            errors: validatedData.error.flatten().fieldErrors,
            message: 'Missing Fields. failed to create post'
        }
    }

    const { name, price } = validatedData.data

    try {
        await prisma.member.create({
            data: {
                name: name,
                price: price,
                user: {
                    connect: {
                        id: userId
                    }
                }
            },
        })
        revalidatePath("/committee")
    } catch (error) {
        return []
    }
}