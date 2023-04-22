import React from 'react'
import ServiceData from "@data/Serivce_data";
import { ServiceType } from "@lib/TypeBox";
import Fade from 'react-reveal/Fade';
import { useRouter } from 'next/router'
import HeadInfo from '@components/HeadInfo'
import type { NextPage } from "next";

const Service: NextPage = () => {
    const router = useRouter()

    return (
        <React.Fragment>
            <HeadInfo title="Nike FAQ Page" contents="Nike FAQ Page" />

            <div className="mx-auto max-w-screen-xl">
                <div className="p-3 xl:p-0">
                    <div className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full px-4">
                                <div className="text-center mx-auto mb-12 lg:mb-20">
                                    <Fade bottom>
                                        <h2 className="font-bold text-3xl md:text-4xl md:text-[40px] text-dark" >
                                            Nike FAQ Page
                                        </h2>
                                        <div className="flex justify-center mx-auto mt-5 md:mt-7">
                                            <span className="inline-block w-40 h-1 bg-gray-900 dark:bg-white rounded-full"></span>
                                            <span className="inline-block w-3 h-1 mx-1 bg-gray-900 dark:bg-white rounded-full"></span>
                                            <span className="inline-block w-1 h-1 bg-gray-900 dark:bg-white rounded-full"></span>
                                        </div>
                                        <p className="text-sm md:text-base text-body-color mx-5 md:mx-0 md:leading-7 mt-5">
                                            원하는 것을 누구보다 빠르게, 새로운 영감으로 매일을 새롭게, 상상만 했던 경험을 현실로. <br className='hidden md:block' />
                                            여러분의 매일을 나이키 스토어에서 체험해 보세요.
                                        </p>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-4">
                            {
                                ServiceData && ServiceData.map(function (item: ServiceType, idx: number) {
                                    return (
                                        <React.Fragment key={item.index}>
                                            <Fade
                                                bottom
                                                duration={(((idx % 3 == 0 ? 0 : idx % 3 == 1 ? 1 : 2) + 1) * 500) + 1000}
                                            >
                                                <div className="w-full md:w-1/2 lg:w-1/3 mx-5 md:m-0 px-4 cursor-pointer" key={idx} onClick={() => router.push(`/Service/${idx}`)}>
                                                    <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white hover:bg-gray-50 dark:bg-slate-900 hover:dark:bg-gray-800 shadow-md hover:shadow-lg mb-8 text-center transition">
                                                        <div className={`w-[70px] h-[70px] flex items-center justify-center rounded-full mb-8 mx-auto bg-gray-900 dark:bg-blue-600`} >
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-white w-8 h-8">
                                                                <path d={item.svg1} />
                                                                <path fillRule="evenodd" d={item.svg2} clipRule="evenodd" />
                                                                <path d={item.svg3} />
                                                            </svg>
                                                        </div>
                                                        <h4 className="font-semibold text-base md:text-xl text-dark mb-3">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-sm md:text-base line-clamp-3">
                                                            {item.content}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Fade>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Service