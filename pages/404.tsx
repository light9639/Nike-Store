import Link from "next/link";
import HeadInfo from "../components/HeadInfo";
export default function PageNotFound() {
    return (
        <>
            <HeadInfo title="404 Page" contents="404 Page" />

            <section className="flex pt-32 md:pt-24 flex-col items-center justify-center text-gray-600 body-font">
                <div className="mx-auto flex px-5 pb-32 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-9xl text-8xl -mt-16 mb-8 md:mb-12 font-semibold text-orange-600">
                            404
                        </h1>
                        <p className="mb-8 md:mb-10 leading-relaxed text-gray-900 font-medium text-2xl lg:text-3xl">
                            죄송합니다, 현재 페이지를 찾을 수 없습니다.
                            <br className="hidden lg:inline-block" />
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
                        <img src="/img/Shoe.jpg" alt="Shoe" />
                    </div>
                </div>
            </section>
        </>
    );
}
