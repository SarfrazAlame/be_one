import type { organization, User } from "@prisma/client";

export type OrganizationWithUser = organization & {
    user:User
}