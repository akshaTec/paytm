import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextRequest } from "next/server";


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name:'Email',
            credentials:{
                username: { label: 'email', type: 'text', placeholder: 'Email' },
                password: { label: 'password', type: 'password', placeholder: 'Password' },
            },
            async authorize(credentials: any) {
            
                return {
                    id: "user1"
                };
            },
        })
    ]
})

export const POST = handler
export const GET = handler


