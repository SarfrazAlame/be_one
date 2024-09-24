import { getServerSession, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        // CredentialsProvider({
        //     name:"Credentials",
        //     credentials: {
        //         name: { label: "Name", type: "Name", placeholder: "Name" },
        //         email: { label: "Email", type: "email", placeholder: "john.doe@example.com" },
        //         password: { label: "Password", type: "password", placeholder: "Password" },
        //     },
        //     async authorize(credentials) {
        //         if(!credentials || !credentials.email || !credentials.password){
        //             return null
        //         }
        //         const user = await prisma?.user.findUnique({
        //             where: {
        //                 email: credentials.email,
        //             },
        //         })
        //         if(!user){
        //             const newUser = await prisma?.user.create({
        //                 data: {
        //                     name: credentials.name,
        //                     email: credentials.email,
        //                     password: credentials.password,
        //                 },
        //             })
        //         }else{

        //         }
        //     }
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    session: {
        strategy: "jwt",
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    callbacks: {
        async session({ session, token }) {
            if (session) {
                session.user.id = token.id
                session.user.email = token.email;
                session.user.name = token.name
                session.user.logo = token.logo
            }
            return session
        },
        async jwt({ token, user }) {
            if (token && user) {
                token.id = user.id
                token.name = user.name
                token.email = user.email
                token.logo = user.image
            }
            return token
        },
    },
}


export const getAuthOptions = () => getServerSession(authOptions)