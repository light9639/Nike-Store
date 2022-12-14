import Link from 'next/link'
import React from 'react'
import HeadInfo from '../components/HeadInfo'
import { status, Res } from './Type/TypeBox'

export default function Error({ statusCode }: status): JSX.Element {
    <HeadInfo title="Error Page" contents="Error Page"></HeadInfo>

    return (
        <React.Fragment>
            <section className="flex items-center h-full pt-16 pb-28 dark:bg-black dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="pb-8 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry,
                            {statusCode
                                ? ` ${statusCode} Server Error`
                                : "Client Error"}
                        </p>
                        <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link href="/"><span className="px-8 py-3 font-semibold rounded bg-blue-600 text-white cursor-pointer transition hover:opacity-75">Back to homepage</span></Link>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

Error.getInitialProps = ({ res, err }: Res) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}