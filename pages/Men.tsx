/* eslint-disable @next/next/no-img-element */
import React from 'react'
import HeadInfo from '../components/HeadInfo'

export default function Men() {
    return (
        <>
            <HeadInfo title="Men Product Page" contents="Men Product Page" />

            <div className="flex items-center w-screen min-h-screen py-32">
                <div className="container ml-auto mr-auto flex flex-wrap items-start">
                    <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
                        <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold text-center lg:text-left">
                            Men Best Sellers
                        </h1>
                    </div>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (a, i: number) {
                            return (
                                <>
                                    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mt-16 lg:pl-2 lg:pr-2">
                                        <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300  border border-gray-300">
                                            <figure className="mb-2">
                                                <img src="https://srv-cdn.onedio.com/store/bf2cbc886120f284ef46fd92a48f5fb58c62e6a50fbdf8fa796d057dd0ddc242.png" alt="" className="h-64 ml-auto mr-auto" />
                                            </figure>
                                            <div className="rounded-lg p-4 bg-gray-600 flex flex-col">
                                                <div>
                                                    <h5 className="text-white text-2xl font-bold leading-none">
                                                        iPhone 11 Pro Max
                                                    </h5>
                                                    <span className="text-xs text-gray-400 leading-none">And then there was Pro.</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="text-lg text-white font-light">
                                                        $1099,00
                                                    </div>
                                                    <button className="rounded-full bg-gray-900 text-white hover:bg-white hover:text-gray-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-current m-auto">
                                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                                        </svg>
                                                    </button>
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