import prisma from "@/lib/prisma"
import { cache } from "react"

export const UserWithOrganization = cache(async (userId: string) => {
    try {
        const data = await prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                organizations: true
            }
        })

        return data?.organizations.map((org) => {
            return org
        })
    } catch (error) {
        return []
    }
})

export const CommunityWithOrganization = cache(async () => {
    try {
        const org = await prisma.organization.findMany({
            include: {
                user: true
            }
        })
        return org
    } catch (error) {
        return []
    }
})

export const OrganizationById = cache(async (organizationId: string) => {
    try {
        const org = await prisma.organization.findUnique({
            where: {
                id: organizationId
            },
            include: {
                user: true
            }
        })
        return org
    } catch (error) {
        return []
    }
})
