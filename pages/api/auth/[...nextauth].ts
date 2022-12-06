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
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        NaverProvider({
            clientId: process.env.NAVER_ID,
            clientSecret: process.env.NAVER_SECRET,
        }),
        KakaoProvider({
            clientId: process.env.KAKAO_ID,
            clientSecret: process.env.KAKAO_SECRET
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET
        }),
    ]
}

export default NextAuth(authOptions);