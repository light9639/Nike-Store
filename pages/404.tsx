/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import HeadInfo from "@components/HeadInfo";
import React from 'react'
import type { NextPage } from "next";

const PageNotFound: NextPage = () => {
    return (
        <React.Fragment>
            <HeadInfo title="404 Page" contents="404 Page" />

            <section className="flex items-center h-full pt-16 pb-28 dark:bg-black dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="pb-8 font-extrabold text-8xl dark:text-white text-gray-900">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link href="/"><span className="px-8 py-3 font-semibold rounded bg-gray-900 dark:bg-blue-600 text-white cursor-pointer transition hover:opacity-75">Back to homepage</span></Link>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default PageNotFound