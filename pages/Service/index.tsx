import React from 'react'
import ServiceData from "../../data/Serivce_data";
import { ServiceType } from "../../lib/TypeBox";
import Fade from 'react-reveal/Fade';
import { useRouter } from 'next/router'
import HeadInfo from '../../components/HeadInfo/HeadInfo'

function Service() {
    <HeadInfo title="Nike Service Page" contents="Nike Service Page" />

    const router = useRouter()

    return (
        <div className="mx-auto max-w-screen-xl">
            <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                                <Fade bottom>
                                    <span className="font-semibold text-lg text-primary mb-2 block">
                                        Our Services
                                    </span>
                                    <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4" >
                                        What We Offer
                                    </h2>
                                    <p className="text-base text-body-color">
                                        There are many variations of passages of Lorem Ipsum available
                                        but the majority have suffered alteration in some form.
                                    </p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <Fade bottom>
                            {
                                ServiceData && ServiceData.map(function (item: ServiceType, idx: number) {
                                    return (
                                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 cursor-pointer" key={idx} onClick={() => router.push(`/Service/${idx}`)}>
                                            <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white dark:bg-slate-900 shadow-md hover:shadow-lg mb-8 text-center">
                                                <div className={`w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-full mb-8 mx-auto ${item.color}`} >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-white w-8 h-8">
                                                        <path d={item.svg1} />
                                                        <path fillRule="evenodd" d={item.svg2} clipRule="evenodd" />
                                                        <path d={item.svg3} />
                                                    </svg>
                                                </div>
                                                <h4 className="font-semibold text-xl text-dark mb-3">
                                                    {item.title}
                                                </h4>
                                                <p className="text-body-color">
                                                    {item.content}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Fade>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Service