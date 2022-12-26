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
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        NaverProvider({
            clientId: process.env.NAVER_ID as string,
            clientSecret: process.env.NAVER_SECRET as string,
        }),
        KakaoProvider({
            clientId: process.env.KAKAO_ID as string,
            clientSecret: process.env.KAKAO_SECRET as string,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID as string,
            clientSecret: process.env.FACEBOOK_SECRET as string,
        }),
    ]
}

export default NextAuth(authOptions);