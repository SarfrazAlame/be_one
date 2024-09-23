import { OrganizationSchema } from "@/components/Mosque"
import { getUserId } from "@/lib/utils"
import { z } from "zod"

export const CreateOrganization = async (data: z.infer<typeof OrganizationSchema>) => {
    const userId = await getUserId()

    const validatedData = OrganizationSchema.safeParse(data)

    if (!validatedData.success) {
        throw new Error("Invalid data")
    }

    const { name, mosquename, location, city, zipcode, phone, district, state } = validatedData.data

    try {
        await prisma?.organization.create({
            data: {
                name,
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
        return []
    }
}