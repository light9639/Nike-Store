/* eslint-disable @next/next/no-img-element */
import { faStar, faHeart, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import HeadInfo from '../components/HeadInfo'

export default function Kids() {
    return (
        <>
            <HeadInfo title="Kids Product Page" contents="Kids Product Page" />

            <div className="flex items-center lg:w-screen min-h-screen my-16">
                <div className="container m-auto flex flex-wrap items-start">
                    <div className="w-full pl-5 lg:pl-2 mb-6 mt-4">
                        <h1 className="text-3xl lg:text-4xl text-gray-700 dark:text-white font-extrabold text-center">
                            Kids Best Sellers
                        </h1>
                    </div>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (a, i: number) {
                            return (
                                <>
                                    <div className="w-full md:w-1/2 lg:w-1/3 pl-0 md:pl-5 lg:pl-2 mt-16 pr-5 lg:pr-2">
                                        <div className="rounded-xl ml-3 hover:shadow-2xl transform hover:scale-105 duration-500">
                                            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ae2d0f59-8954-498c-aa2a-d6ee1a550fb5/air-force-1-premium-big-kids-shoes-wJCwFb.png" alt="product" className="w-full h-full object-cover" />
                                            <div className="dark:bg-slate-800 p-5 flex flex-col gap-2">
                                                {/* <div className="flex items-center gap-2">
                                                    <span className="px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-slate-600">stock ready</span>
                                                    <span className="px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-slate-600">official store</span>
                                                </div> */}

                                                <h2 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap" title="Best Headphone Ever">
                                                    Best Headphone Ever
                                                </h2>

                                                <div>
                                                    <span className="text-xl font-bold">$ 159.99</span>
                                                    {/* <div className="flex items-center mt-1 gap-2">
                                                        <span className="text-sm line-through opacity-50">$ 199.99</span>
                                                        <span className="bg-green-400 px-2 py-0.5 rounded-md text-xs text-white">Save %20</span>
                                                    </div> */}
                                                </div>

                                                {/* <span className="flex items-center mt-1">
                                                    <FontAwesomeIcon icon={faStar} className="w-5 text-yellow-400" />
                                                    <FontAwesomeIcon icon={faStar} className="w-5 text-yellow-400" />
                                                    <FontAwesomeIcon icon={faStar} className="w-5 text-yellow-400" />
                                                    <FontAwesomeIcon icon={faStar} className="w-5 text-yellow-400" />
                                                    <FontAwesomeIcon icon={faStar} className="w-5 text-gray-600" />
                                                    <span className="text-xs ml-2 text-gray-500">20k reviews</span>
                                                </span> */}


                                                <div className="mt-5 flex gap-2">
                                                    <button className="bg-red-500 px-6 py-2 text-white rounded-md hover:bg-red-400 font-medium tracking-wider">Add to Cart</button>
                                                    <button className="flex flex-grow items-center rounded-md bg-gray-300 hover:bg-gray-400 dark:bg-slate-600 dark:hover:bg-slate-400"><FontAwesomeIcon icon={faHeart} className="w-6 m-auto" /></button>
                                                    <button className="flex flex-grow items-center rounded-md bg-gray-300 hover:bg-gray-400 dark:bg-slate-600 dark:hover:bg-slate-400"><FontAwesomeIcon icon={faEye} className="w-6 m-auto" /></button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}