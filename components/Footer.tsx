import Link from 'next/link'
import React from 'react'

export default function Footer(): JSX.Element {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto max-w-screen-2xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-12">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="flex justify-center text-gray-900 dark:text-gray-100 md:justify-start text-2xl font-bold">
                            <Link href="/" className='hover:opacity-75 transition'>Nike Store</Link>
                        </div>
                        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-600 dark:text-gray-200 md:mx-0 md:max-w-xs md:text-left">
                            Nike 사이트에 오신 것을 환영합니다.
                            연락을 원하시거나 궁금한 점이 있다면 언제든지 문의 부탁드립니다.
                        </p>
                        <ul className="mt-8 flex justify-center gap-6 md:justify-start md:gap-8">
                            <li>
                                <a
                                    href="https://www.facebook.com/nike"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 dark:text-gray-300 transition hover:text-gray-700/75 dark:hover:text-gray-300/75"
                                >
                                    <span className="sr-only">Facebook</span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/nike/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 dark:text-gray-300 transition hover:text-gray-700/75 dark:hover:text-gray-300/75"
                                >
                                    <span className="sr-only">Instagram</span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/nikecom_kr"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 dark:text-gray-300 transition hover:text-gray-700/75 dark:hover:text-gray-300/75"
                                >
                                    <span className="sr-only">Twitter</span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://dribbble.com/tags/nike"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 dark:text-gray-300 transition hover:text-gray-700/75 dark:hover:text-gray-300/75"
                                >
                                    <span className="sr-only">Dribbble</span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/user/nike"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 dark:text-gray-300 transition hover:text-gray-700/75 dark:hover:text-gray-300/75"
                                >
                                    <span className="sr-only">YouTube</span>
                                    <svg
                                        className="h-6 w-6 mt-px"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid gap-8 grid-cols-2 md:grid-cols-4 lg:col-span-2">
                        <div className="text-center md:text-left">
                            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">이용안내</p>
                            <nav className="mt-7">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <Link href="/Service" className="text-gray-700 dark:text-gray-300 transition hover:text-gray-700/75 dark:hover:text-gray-300/75">
                                            검수기준
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Service" className="text-gray-700 dark:text-gray-300 transition hover:text-gray-700/75 dark:hover:text-gray-300/75">
                                            이용정책
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Service" className="text-gray-700 dark:text-gray-300 transition hover:text-gray-700/75 dark:hover:text-gray-300/75">
                                            페널티 정책
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Service" className="text-gray-700 dark:text-gray-300 transition hover:text-gray-700/75 dark:hover:text-gray-300/75">
                                            커뮤니티 가이드라인
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">고객지원</p>
                            <nav className="mt-7">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <Link href="/Service" className="text-gray-700 dark:text-gray-300 transition hover:text-gray-700/75 dark:hover:text-gray-300/75">
                                            공지사항
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Service" className="text-gray-700 dark:text-gray-300 transition hover:text-gray-700/75 dark:hover:text-gray-300/75">
                                            서비스 소개
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Service" className="text-gray-700 dark:text-gray-300 transition hover:text-gray-700/75 dark:hover:text-gray-300/75">
                                            쇼룸 안내
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Service" className="text-gray-700 dark:text-gray-300 transition hover:text-gray-700/75 dark:hover:text-gray-300/75">
                                            판매자 방문접수
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">판매물품</p>
                            <nav className="mt-7">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <Link href="/Service" className="text-gray-700 dark:text-gray-300 transition hover:text-gray-700/75 dark:hover:text-gray-300/75">
                                            특징
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Service" className="text-gray-700 dark:text-gray-300 transition hover:text-gray-700/75 dark:hover:text-gray-300/75">
                                            가격 안내
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Service" className="group flex ml-0.5 gap-1.5 justify-center md:justify-start">
                                            <span className="text-gray-700 dark:text-gray-200 transition group-hover:text-gray-700/75 dark:group-hover:text-gray-200/75">
                                                FAQ
                                            </span>
                                            <span className="relative -mr-2 flex h-2 w-2">
                                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-400 opacity-75"></span>
                                                <span className="relative inline-flex h-2 w-2 rounded-full bg-gray-500"></span>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="text-center md:text-left">
                            <Link href="/Contact" className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-gray-900/75 transition">Contact Us</Link>
                            <ul className="mt-7 space-y-4 text-sm">
                                <li className="flex items-center justify-center gap-1.5 md:justify-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0 text-gray-900 dark:text-gray-200"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="ml-2 text-gray-700 dark:text-gray-200">dong963939@gmail.com</span>
                                </li>
                                <li className="flex items-center justify-center gap-1.5 md:justify-start -ml-7 md:ml-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0 text-gray-900 dark:text-gray-200"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    <span className="ml-2 text-gray-700 dark:text-gray-200">080-022-0182</span>
                                </li>
                                <li className="flex items-start justify-center gap-1.5 md:justify-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0 text-gray-900 dark:text-gray-200"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <span className="ml-2 -mt-0.5 not-italic text-gray-700 dark:text-gray-200 line-clamp-1 md:line-clamp-2">
                                        서울특별시 강남구 역삼1동 테헤란로 152
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-200 pt-6">
                    <div className="text-center sm:flex sm:justify-between sm:text-left">
                        <p className="text-sm text-gray-500 dark:text-gray-300">
                            <span className="block sm:inline">All rights reserved.</span>
                        </p>
                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-100 sm:order-first sm:mt-0">
                            &copy; 2022 Nike Store
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    )
}