import Link from 'next/link'
import { status, Res } from './TypeBox'

function Error({ statusCode }: status) {
    return (
        <>
            <section className="flex items-center h-full pt-16 pb-28 dark:bg-black dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-white">
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
        </>
    )
}

Error.getInitialProps = ({ res, err }: Res) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error