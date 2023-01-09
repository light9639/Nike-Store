import React from 'react'
import { useRouter } from 'next/router'
import HeadInfo from "@components/HeadInfo/HeadInfo";

export default function ServiceDetail(): JSX.Element {
    const router = useRouter()
    const ID: any = router.query.id

    return (
        <React.Fragment>
            <HeadInfo title={`Nike Service Page ${ID}`} contents={`Nike Service Page ${ID}`} />

            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-12 mx-auto">
                    <h1 className="text-3xl font-semibold text-center text-gray-800 lg:text-4xl dark:text-white">Have any Questions?</h1>

                    <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
                        <div className="lg:mx-12">
                            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Table of Content</h1>

                            <div className="mt-4 space-y-4 lg:mt-8">
                                <a href="#void" className="block text-blue-500 dark:text-blue-400 hover:underline">General</a>
                                <a href="#void" className="block text-gray-500 dark:text-gray-300 hover:underline">Trust & Safety</a>
                                <a href="#void" className="block text-gray-500 dark:text-gray-300 hover:underline">Services</a>
                                <a href="#void" className="block text-gray-500 dark:text-gray-300 hover:underline">Billing</a>
                                <a href="#void" className="block text-gray-500 dark:text-gray-300 hover:underline">Office Cleaning</a>
                            </div>
                        </div>

                        <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                            <div>
                                <button className="flex items-center focus:outline-none">
                                    <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>

                                    <h1 className="mx-4 text-xl text-gray-700 dark:text-white">How i can play for my appoinment ?</h1>
                                </button>

                                <div className="flex mt-8 md:mx-10">
                                    <span className="border border-blue-500"></span>

                                    <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
                                    </p>
                                </div>
                            </div>

                            <hr className="my-8 border-gray-200 dark:border-gray-700" />

                            <div>
                                <button className="flex items-center focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                    </svg>

                                    <h1 className="mx-4 text-xl text-gray-700 dark:text-white">What can i expect at my first consultation ?</h1>
                                </button>
                            </div>

                            <hr className="my-8 border-gray-200 dark:border-gray-700" />

                            <div>
                                <button className="flex items-center focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                    </svg>

                                    <h1 className="mx-4 text-xl text-gray-700 dark:text-white">What are your opening house ?</h1>
                                </button>
                            </div>

                            <hr className="my-8 border-gray-200 dark:border-gray-700" />

                            <div>
                                <button className="flex items-center focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                    </svg>

                                    <h1 className="mx-4 text-xl text-gray-700 dark:text-white">Do i need a referral ?</h1>
                                </button>
                            </div>

                            <hr className="my-8 border-gray-200 dark:border-gray-700" />

                            <div>
                                <button className="flex items-center focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                    </svg>

                                    <h1 className="mx-4 text-xl text-gray-700 dark:text-white">Is the cost of the appoinment covered by private health insurance ?</h1>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='max-w-screen-lg mx-auto h-full py-24'>

                <div className='text-center pb-10'>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
                    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                    <a href="#void" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Learn more
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>

                <div>

                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        <li className="mb-10 ml-6">
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Application UI v2.0.0 <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span></h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                            <a href="#void" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download ZIP</a>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                        </li>
                        <li className="ml-6">
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                        </li>
                    </ol>

                </div>

                <div className='pb-10'>
                    <p className="mb-3 font-light text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                    <div className="grid grid-cols-1 md:gap-6 md:grid-cols-2">
                        <p className="mb-3 font-light text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                        <blockquote className="mb-3">
                            <p className="text-xl italic font-semibold text-gray-900 dark:text-white">" Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application. "</p>
                        </blockquote>
                    </div>
                    <p className="mb-3 font-light text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
                </div>

                <div className='pb-10'>
                    <ul className="space-y-4 list-disc list-inside text-gray-500 dark:text-gray-400">
                        <li>
                            List item one
                            <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside">
                                <li>You might feel like you are being really "organized" o</li>
                                <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
                                <li>Nesting tons of folders in your source code is also not helpful.</li>
                            </ol>
                        </li>
                        <li>
                            List item two
                            <ul className="pl-5 mt-2 space-y-1 list-decimal list-inside">
                                <li>I'm not sure if we'll bother styling more than two levels deep.</li>
                                <li>Two is already too much, three is guaranteed to be a bad idea.</li>
                                <li>If you nest four levels deep you belong in prison.</li>
                            </ul>
                        </li>
                        <li>
                            List item three
                            <ul className="pl-5 mt-2 space-y-1 list-decimal list-inside">
                                <li>Again please don't nest lists if you want</li>
                                <li>Nobody wants to look at this.</li>
                                <li>I'm upset that we even have to bother styling this.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className='text-center pb-10'>
                    <p className="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                    <div className="inline-flex justify-center items-center w-full">
                        <hr className="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                        <span className="absolute left-1/2 px-3 font-medium text-gray-900 bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900">or</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil.</p>
                </div>


                <div className='pb-10'>
                    <h2 className="text-4xl font-extrabold dark:text-white">Payments tool for companies</h2>
                    <p className="my-4 text-lg text-gray-500">Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.</p>
                    <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
                    <a href="#void" className="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline">
                        Read more
                        <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>


                <div className='pb-10'>
                    <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                        <div className="flex flex-col pb-3">
                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email address</dt>
                            <dd className="text-lg font-semibold">yourname@flowbite.com</dd>
                        </div>
                        <div className="flex flex-col py-3">
                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Home address</dt>
                            <dd className="text-lg font-semibold">92 Miles Drive, Newark, NJ 07103, California, USA</dd>
                        </div>
                        <div className="flex flex-col pt-3">
                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone number</dt>
                            <dd className="text-lg font-semibold">+00 123 456 789 / +12 345 678</dd>
                        </div>
                    </dl>
                </div>

                <div>
                    <div data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
                        <h2>
                            <button type="button" className="flex items-center justify-between w-full p-5 font-bold text-left text-gray-900 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 text-base md:text-lg" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                                <span className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span className='line-clamp-1'>회원가입은 어떻게 하나요?</span>
                                </span>
                                <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div>
                            <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                <div className='md:ml-7'>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400 font-semibold text-sm md:text-base">1. 오프라인 매장에서 회원등록 및 마일리지 카드를 발급받으신 분</p>
                                    <p className="text-gray-500 dark:text-gray-400 md:ml-6 tracking-tighter leading-7 my-3 md:my-4 text-xs md:text-base">
                                        나이키 홈페이지 회원가입 페이지에서 실명확인 후<br />
                                        회원등록 카드에 기입한 정보 외 나머지 정보를 입력해주세요.<br />
                                        회원가입 시 매장에서 발급받은 카드번호를 등록하면 가입 이후<br />
                                        구매 이력과 마일리지를 조회할 수 있습니다.<br />
                                    </p>
                                    <p className="my-2 text-gray-500 dark:text-gray-400 font-semibold text-sm md:text-base">2. 오프라인 매장에서 회원등록 한 내역이 없으신 분</p>
                                    <p className="text-gray-500 dark:text-gray-400 md:ml-6 tracking-tighter leading-7 md:mt-4 text-xs md:text-base">
                                        나이키 홈페이지 회원가입 페이지에서 실명확인 후 회원가입이 가능합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h2>
                            <button type="button" className="flex items-center justify-between w-full p-5 font-bold text-left text-gray-900 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 text-base md:text-lg" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
                                <span className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span className='line-clamp-1'>회원의 혜택은 무엇인가요?</span>
                                </span>
                                <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div>
                            <div className="p-5 font-light border border-b-0 border-gray-200  dark:border-gray-700 dark:bg-gray-900">
                                <ol className="mb-2 text-gray-500 dark:text-gray-400 list-decimal ml-3 md:ml-10 tracking-tighter leading-7 text-xs md:text-base">
                                    <li className="text-gray-500 dark:text-gray-400">모든 회원 서비스의 자유로운 이용과 혜택을 받으실 수 있습니다.</li>
                                    <li className="text-gray-500 dark:text-gray-400">신상품 및 다양한 이벤트와 행사 정보를 받아보실 수 있습니다.</li>
                                    <li className="text-gray-500 dark:text-gray-400">다양한 이벤트 및 행사에 우선적으로 참가하실 수 있는 권한을 드립니다.</li>
                                    <li className="text-gray-500 dark:text-gray-400">My NB에서는 회원님만을 위한 상세정보 조회 및 맞춤 서비스를 편리하게 제공받으실 수 있습니다.</li>
                                    <li className="text-gray-500 dark:text-gray-400">오프라인 매장에서 회원등록 카드를 발급 받으셨을 경우, 온/오프 구매 마일리지를 통합하여 적립 및 사용하실 수 있습니다.</li>
                                </ol>
                            </div>
                        </div>
                        <h2>
                            <button type="button" className="flex items-center justify-between w-full p-5 font-bold text-left text-gray-900 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 text-base md:text-lg" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
                                <span className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span className='line-clamp-1'>ID와 비밀번호를 잊어버렸어요</span>
                                </span>
                                <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div>
                            <div className="p-5 font-light border border-b-0 border-gray-200  dark:border-gray-700 dark:bg-gray-900">
                                <p className="mb-2 text-gray-500 dark:text-gray-400 md:ml-6 tracking-tighter leading-7 text-xs md:text-base">
                                    아이디와 비밀번호를 잊어버렸을 경우 ID 찾기 / PW 찾기 페이지에서 실명확인을 거친 후<br />
                                    가입 시 입력하신 e-mail 주소 또는 휴대전화번호로 ID 또는 임시비밀번호를 수신 받으실 수 있습니다.<br />
                                    임시 비밀번호로 접속하신 이후에는 즉시 새로운 비밀번호로 변경하시길 바랍니다.<br />
                                </p>
                            </div>
                        </div>
                        <h2>
                            <button type="button" className="flex items-center justify-between w-full p-5 font-bold text-left text-gray-900 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 text-base md:text-lg" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
                                <span className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span className='line-clamp-1'>A/S 기간은 어느정도 걸리나요?</span>
                                </span>
                                <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div>
                            <div className="p-5 font-light border border-b-0 border-gray-200  dark:border-gray-700 dark:bg-gray-900">
                                <p className="mb-2 text-gray-500 dark:text-gray-400 md:ml-6 tracking-tighter leading-7 text-xs md:text-base">
                                    7일 이내를 원칙으로 합니다.<br />
                                    다만, 원부자재 수급이 불가능한 제품은 어려움이 있어 수선기간이 지연되고 있습니다.<br />
                                    고객상담실에서 전화 안내 후 고객님과 협의 하에 진행하고 있습니다.<br />
                                </p>
                            </div>
                        </div>
                        <h2>
                            <button type="button" className="flex items-center justify-between w-full p-5 font-bold text-left text-gray-900 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 text-base md:text-lg" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
                                <span className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span className='line-clamp-1'>신발세탁은 어떻게 해야하나요?</span>
                                </span>
                                <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div>
                            <div className="p-5 font-light border border-b-0 border-gray-200  dark:border-gray-700 dark:bg-gray-900">
                                <div className='md:ml-7'>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400 font-semibold text-sm md:text-base">오프라인 매장에서 회원등록 및 마일리지 카드를 발급받으신 분</p>
                                    <p className="text-gray-500 dark:text-gray-400 md:ml-6 tracking-tighter my-4 leading-7 text-xs md:text-base">
                                        메쉬 원단은 전문세제를 사용, 가벼운 물세탁이 가능하나 <br className='hidden md:block' />
                                        스웨이드 소재의 제품은 물이나 불에 약하므로 가볍게 솔로 먼지를 제거해주는 정도의 손질법이 요망됩니다. <br className='hidden md:block' />
                                        스웨이드는 빈티지 느낌의 제품으로 신을수록 구제 느낌의 멋스러움이 특징인 소재로 <br className='hidden md:block' />
                                        깨끗하게 세탁해서 착화할 수 있는 신발은 아닙니다. <br className='hidden md:block' />
                                    </p>
                                    <p className="my-2 text-gray-500 dark:text-gray-400 font-semibold text-sm md:text-base">스웨이드(섀미) 손질법</p>
                                    <p className="text-gray-500 dark:text-gray-400 md:ml-6 tracking-tighter mt-4 leading-7 text-xs md:text-base">
                                        섀미같은 잔털이 있는 가죽은 구두약 등 약품을 바르지 않고 구두솔로 한 방향으로만 쓸어내리면 깨끗하게 정리됩니다. <br className='hidden md:block' />
                                        더러움이 심한 경우에는 전문 슈즈샴푸나 보통의 머리샴푸를 물에 조금 풀어 부드러운 솔에 적신 다음 <br className='hidden md:block' />
                                        가죽 부위만 다시 한 방향으로 부드럽게 쓸어내리면서 표면을 적셔 닦습니다. <br className='hidden md:block' />
                                        그리고 신문지로 안을 채운 다음 바람이 잘 통하는 그늘에서 말립니다. <br className='hidden md:block' />
                                        단, 표면을 적신다고 신발 전체를 물에 담그면 스웨이드 소재 특성 상 원상태로 복구가 불가능합니다. <br className='hidden md:block' />
                                        <br className='block md:hidden' /><br />
                                        비가 여러 날 계속 올 때는 가급적 신발을 갈아 신는 것이 좋습니다. <br className='hidden md:block' />
                                        섀미류는 비에 젖으면 가죽의 부드러운 특성이 없어지므로 심하게 젖지 않도록 주의해주시기 바랍니다. <br className='hidden md:block' />
                                        비에 젖은 가죽신발은 기름기가 빠져 표면이 딱딱해지고 마르면서 모양이 변하거나 <br className='hidden md:block' />
                                        발에서 난 땀 등으로 표면에 염분이 하얗게 나타날 수 있습니다. <br className='hidden md:block' />
                                        많이 젖은 경우에는 흙먼지를 촉촉한 천으로 잘 닦아낸 후 신발 안 쪽에 마른 신문지를 뭉쳐 넣어 <br className='hidden md:block' />
                                        형태를 유지하면서 통풍이 잘 되는 그늘에 말리고, 마른 다음에는 전용 왁스로 닦아줍니다. <br className='hidden md:block' />
                                        말릴 때 헤어드라이기 등을 사용하는 것은 절대 금해주시기 바랍니다. <br className='hidden md:block' />
                                        젖은 가죽제품을 강제로 빨리 말리면 형태가 뒤틀릴 우려가 있습니다. <br className='hidden md:block' />
                                        <br className='block md:hidden' /><br />
                                        땀이나 물에 젖기 쉬운 운동화는 세균 탈취 스프레이나 커피 찌꺼기 등을 이용하면 쉽게 냄새를 제거할 수 있습니다. <br className='hidden md:block' />
                                        천에 커피 찌꺼기나 녹차잎을 싸서 신발 안에 넣어두어도 좋습니다. <br className='hidden md:block' />
                                        다만 커피의 수분을 완전히 빼지 않으면 얼룩이 생기므로 주의해주시기 바랍니다. <br className='hidden md:block' />
                                        집에 돌아온 다음 신발을 벗을 때 마른 천 등으로 한번씩 닦아주는 습관을 들이는 것도 중요합니다. <br className='hidden md:block' />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h2>
                            <button type="button" className="flex items-center justify-between w-full p-5 font-bold text-left text-gray-900 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 rounded-b-xl text-base md:text-lg" data-accordion-target="#accordion-color-body-3" aria-expanded="false" aria-controls="accordion-color-body-3">
                                <span className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span className='line-clamp-1'>제품을 환불받고 싶습니다. 환불규정은 어떻게 되나요?</span>
                                </span>
                                <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div>
                            <div className="p-5 font-light border border-t-0 border-gray-200  dark:border-gray-700 dark:bg-gray-900 rounded-b-xl">
                                <div className='md:ml-7'>
                                    <p className="my-2 text-gray-500 dark:text-gray-400 font-semibold text-sm md:text-base line-clamp-1">소비자 피해보상 규정에 근거한 제품 환불 규정은 다음과 같습니다.</p>
                                    <ol className="mb-2 text-gray-500 dark:text-gray-400 list-decimal ml-3 md:ml-10 tracking-tighter leading-7">
                                        <li className="text-gray-500 dark:text-gray-400 text-xs md:text-base mt-3 mb-1">구입 후 7일 이내 고객변심에 의해서도 환불이 가능합니다.</li>
                                        <li className="text-gray-500 dark:text-gray-400 text-xs md:text-base">단, 착용 또는 착화하지 않은 제품으로 재판매가 가능해야하며, 환불 시에는 구입처에서만 환불이 가능합니다.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-white dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-md sm:text-center">
                            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Sign up for our newsletter</h2>
                            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
                            <form action="#">
                                <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                    <div className="relative w-full">
                                        <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                        </div>
                                        <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" />
                                    </div>
                                    <div>
                                        <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                                    </div>
                                </div>
                                <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#void" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
                            </form>
                        </div>
                    </div>
                </section>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2>
                                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
                                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">The 400 Blows</h2>
                                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                    </div>
                </section>


                <section className="bg-white dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Blog</h2>
                            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
                        </div>
                        <div className="grid gap-8 lg:grid-cols-2">
                            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex justify-between items-center mb-5 text-gray-500">
                                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                        <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                        Tutorial
                                    </span>
                                    <span className="text-sm">14 days ago</span>
                                </div>
                                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#void">How to quickly deploy a static website</a></h2>
                                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-4">
                                        <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                                        <span className="font-medium dark:text-white">
                                            Jese Leos
                                        </span>
                                    </div>
                                    <a href="#void" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                        Read more
                                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </article>
                            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex justify-between items-center mb-5 text-gray-500">
                                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                        <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                                        Article
                                    </span>
                                    <span className="text-sm">14 days ago</span>
                                </div>
                                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#void">Our first project with React</a></h2>
                                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-4">
                                        <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />
                                        <span className="font-medium dark:text-white">
                                            Bonnie Green
                                        </span>
                                    </div>
                                    <a href="#void" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                        Read more
                                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}