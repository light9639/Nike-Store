import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from "next-auth/providers/github";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";

export const authOptions: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET as string,
        }),
        NaverProvider({
            clientId: process.env.NEXT_PUBLIC_NAVER_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_NAVER_SECRET as string,
        }),
        KakaoProvider({
            clientId: process.env.NEXT_PUBLIC_KAKAO_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_KAKAO_SECRET as string,
        }),
        FacebookProvider({
            clientId: process.env.NEXT_PUBLIC_FACEBOOK_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_SECRET as string,
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token, user }: any) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.accessToken = token.accessToken
            session.user.id = token.id

            return session
        }
    }
}

export default NextAuth(authOptions);