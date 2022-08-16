import Head from "next/head";
import Link from "next/link";
import Animation from "../components/animation/Animation";
import Layout from "../components/LayOut";

export default function PageNotFound() {
    return (
        <>
            <Layout>
                <Head>
                    <title>404 Page</title>
                    <meta name="description" content="404 Page" />
                </Head>
                <section className="flex pt-14 md:pt-14 flex-col items-center justify-center text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-6xl text-5xl mb-6 font-semibold text-gray-900">
                                404
                            </h1>
                            <p className="mb-7 leading-relaxed text-gray-900 font-medium text-1xl lg:text-2xl">
                                죄송합니다, 현재 페이지를 찾을 수 없습니다.
                                <br className="hidden lg:inline-block"/>
                                다른 페이지로 이동하시기 바랍니다.
                            </p>
                            <div className="flex justify-center">
                                <Link href="/">
                                    <a href="#" className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700">
                                        홈페이지로 이동하기
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6">
                            <Animation />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
