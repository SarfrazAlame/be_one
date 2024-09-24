import prisma from "@/lib/prisma"
import { cache } from "react"

export const UserWithOrganization = cache(async (userId: string) => {
    try {
        const data = await prisma.user.findUnique({
            where: {
                id: userId
            },
            include: {
                organizations: {
                    select: {
                        name: true,
                        email: true,
                        mosquename: true,
                        location: true,
                        city: true,
                        zipcode: true,
                        phone: true,
                        district: true,
                        state: true
                    }
                }
            }
        })

        return data?.organizations.map((org)=>{
            return org
        })
    } catch (error) {
        return []
    }
})
