/* eslint-disable @next/next/no-img-element */
import { faStar, faHeart, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import HeadInfo from '../components/HeadInfo'

export default function Women() {
    return (
        <>
            <HeadInfo title="Women Product Page" contents="Women Product Page" />

            <div className="flex items-center lg:w-screen min-h-screen my-16">
                <div className="container m-auto flex flex-wrap items-start">
                    <div className="w-full pl-5 lg:pl-2 mb-6 mt-4">
                        <h1 className="text-3xl lg:text-4xl text-gray-700 dark:text-white font-extrabold text-center">
                            Women Best Sellers
                        </h1>
                    </div>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (a, i: number) {
                            return (
                                <>
                                    {/* <div className="w-full md:w-1/2 lg:w-1/4 pl-0 md:pl-5 lg:pl-2 mt-16 pr-5 lg:pr-2 z-50">
                                        <div className="bg-white max-w-full md:max-w-xs rounded-lg overflow-hidden shadow-xl ml-8 hover:shadow-2xl transform hover:scale-105 duration-500">
                                            <img className="w-full" src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" alt="Trainers" />
                                            <div className="py-4 px-6">
                                                <div className="font-bold text-xl">Nike Trainers</div>
                                                <p className="text-gray-700 mt-2">I'm the description for some trainers</p>
                                            </div>
                                            <div className="py-0 px-6">
                                                <span className="text-xl font-bold">$ 159.99</span>
                                                <div className="flex items-center mt-1 gap-2">
                                                    <span className="text-sm line-through opacity-50">$ 199.99</span>
                                                    <span className="bg-green-400 px-2 py-0.5 rounded-md text-xs text-white">Save %20</span>
                                                </div>
                                            </div>
                                            <div className="py-0 px-6">
                                                <span className="flex items-center mt-1">
                                                    <span className="fa fa-star text-yellow-400"></span>
                                                    <span className="fa fa-star text-yellow-400"></span>
                                                    <span className="fa fa-star text-yellow-400"></span>
                                                    <span className="fa fa-star text-yellow-400"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="text-xs ml-2 text-gray-500">20k reviews</span>
                                                </span>
                                            </div>
                                            <div className="py-4 px-6">
                                                <button className="bg-blue-600 px-3 py-2 outline-none rounded text-white">Click me</button>
                                                <button className="fa fa-solid fa-heart flex flex-grow items-center rounded-md bg-gray-300 hover:bg-gray-400"></button>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="w-1/2 lg:w-1/3 pl-0 md:pl-5 lg:pl-2 mt-16 pr-5 lg:pr-2">
                                        <div className="rounded-xl ml-3 hover:shadow-2xl transform hover:scale-105 duration-500">
                                            <img src="https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/FD5088-200/a118b1fd-5aac-4812-b3bc-8363591757cd_primary.jpg?browse" alt="product" className="w-full h-full object-cover" />
                                            <div className="dark:bg-slate-800 p-5 flex flex-col gap-2">
                                                {/* <div className="flex items-center gap-2">
                                                    <span className="px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-slate-600">stock ready</span>
                                                    <span className="px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-slate-600">official store</span>
                                                </div> */}

                                                <h2 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap" title="Best Headphone Ever">
                                                    Best Headphone Ever
                                                </h2>

                                                <div className=''>
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


                                                {/* <div className="mt-5 flex gap-2">
                                                    <button className="bg-pink-500 px-6 py-2 text-white rounded-md hover:bg-pink-400 font-medium tracking-wider">Add to Cart</button>
                                                    <button className="flex flex-grow items-center rounded-md bg-gray-300 hover:bg-gray-400 dark:bg-slate-600 dark:hover:bg-slate-400"><FontAwesomeIcon icon={faHeart} className="w-6 m-auto" /></button>
                                                    <button className="flex flex-grow items-center rounded-md bg-gray-300 hover:bg-gray-400 dark:bg-slate-600 dark:hover:bg-slate-400"><FontAwesomeIcon icon={faEye} className="w-6 m-auto" /></button>
                                                </div> */}

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