/* eslint-disable @next/next/no-img-element */
import { faStar, faHeart, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import HeadInfo from '../components/HeadInfo'

export default function Men() {
    const [span, setSpan] = React.useState(['신상품순', '가격 높은 순', '가격 낮은 순', '리뷰 많은 순']);

    return (
        <>
            <HeadInfo title="Men Product Page" contents="Men Product Page" />

            <div className="flex items-center lg:w-screen min-h-screen my-16">
                <div className="container m-auto flex flex-wrap items-start">
                    <div className="w-full pl-0 lg:pl-2 mb-0 lg:mb-4 mt-4 m-auto text-center">
                        <h1 className="text-3xl lg:text-4xl text-gray-700 dark:text-white font-bold float-none lg:float-left">
                            Men Best Sellers
                        </h1>
                        <div className='mt-8 lg:mt-3 float-none lg:float-right'>
                            {
                                span.map(function (a: string, i: number) {
                                    return (
                                        <span className='px-2 py-2 sm:px-4 sm:py-3 bg-gray-300 m-1 text-slate-900 rounded text-xs lg:text-base'><a href='#void'>{a}</a></span>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (a, i: number) {
                            return (
                                <>
                                    <div className="w-1/2 lg:w-1/3 pl-0 md:pl-5 lg:pl-2 mt-16 pr-5 lg:pr-2">
                                        <div className="rounded-xl ml-3 sm:ml-1 hover:shadow-2xl dark:hover:shadow-slate-700 transform hover:scale-105 duration-500">
                                            <img src="https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/554724-079/9d7da413-fb6f-4f27-b1a6-c7684f899e3f_primary.jpg?browse" alt="product" className="w-full h-full object-cover" />
                                            <div className=" pt-5 px-2 flex flex-col gap-2">

                                                <h2 className="tracking-tighter text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap" title="Best Headphone Ever">
                                                    Best Headphone Ever
                                                </h2>

                                                <div className='tracking-tighter'>
                                                    <p className='pb-2'>남성 신발</p>
                                                    <span className="text-xl relative xl:absolute right-0 xl:right-3 translate-y-0 xl:-translate-y-16 mt-0 xl:-mt-1">$ 159.99</span>
                                                </div>

                                            </div>
                                            <div className="block md:flex pl-2 pb-2">
                                                <span className="flex items-center my-3 md:my-0">
                                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <span className="text-gray-600 dark:text-white ml-3">4 Reviews</span>
                                                </span>
                                                <span className="flex md:ml-3 md:pl-3 md:py-2 md:border-l-2 border-gray-200 space-x-2s gap-1 md:gap-3">
                                                    <a href='https://ko-kr.facebook.com/' className="text-gray-500 dark:text-white transition hover:text-blue-600 dark:hover:text-blue-600">
                                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                        </svg>
                                                    </a>
                                                    <a href='https://twitter.com/home' className="text-gray-500 dark:text-white transition hover:text-blue-600 dark:hover:text-blue-600">
                                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                        </svg>
                                                    </a>
                                                    <a href='https://www.kakaocorp.com/page/service/service/KakaoTalk' className="text-gray-500 dark:text-white transition hover:text-blue-600 dark:hover:text-blue-600">
                                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                        </svg>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                    <span className="px-8 py-3 font-semibold rounded bg-blue-600 text-white cursor-pointer transition hover:opacity-75 mx-auto mt-14">더보기</span>
                </div>
            </div>
        </>
    )
}