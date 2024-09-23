import type { User, Session } from "next-auth"
import type { JWT } from "next-auth/jwt"

declare module "next-auth/jwt" {
    interface JWT {
        id: string,
        logo: string | null | undefined
    }
}

declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            email: string | null | undefined,
            name: string | null | undefined,
            logo: string | null | undefined
        }
    }
}
