import React, { useEffect } from "react";
import HeadInfo from "@components/HeadInfo";
import Link from "next/link";
import { useRouter } from 'next/router'
import type { NextPage } from "next";

const NotLogin: NextPage = () => {
    const router = useRouter()

    return (
        <React.Fragment>
            <HeadInfo title="Not Login" contents="Not Login" />

            <section className="flex items-center h-full pt-16 pb-28 dark:bg-black dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="pb-8 font-extrabold text-8xl dark:text-white text-gray-900">
                            Sorry
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">You have been logged out.</p>
                        <p className="mt-4 mb-8 dark:text-gray-400">Please Go to the Login Page...</p>
                        <Link href="/Login"><span className="px-8 py-3 font-semibold rounded bg-gray-900 dark:bg-blue-600 text-white cursor-pointer transition hover:opacity-75">Go to Login Page</span></Link>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default NotLogin;