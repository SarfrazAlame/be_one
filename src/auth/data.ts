import prisma from "@/lib/prisma"
import { cache } from "react"

export const OrganizationByUserId = cache(async (email: string) => {

    try {
        const organization = await prisma.organization.findMany({
            where: {
                email
            },
            include: {
                user: true
            }
        })
        return organization
    } catch (error) {
        return []
    }
})
