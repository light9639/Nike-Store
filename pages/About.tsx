import React from "react";
import { AboutType } from '../lib/TypeBox';
import AboutData from "../data/About_data";
import Fade from 'react-reveal/Fade';

export default function About(): JSX.Element {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center items-center">
                    <Fade bottom>
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-6 dark:text-white">About Us</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 dark:text-white text-center">NIKE, 주식회사는 나이키, 조던, 컨버스 브랜드로 구성된 팀으로,<br className="hidden xl:block" /> 지속적인 영향력을 남기고자 하는 목표를 위해 활동하고 있습니다.</p>
                    </Fade>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <Fade right><img className="w-full h-full" src="https://media.about.nike.com/images/71fbb222-326e-4bc3-8e4a-f0fbad0fc1fb/nike-inc-swoosh-jordan-converse-logos.jpg?fm=jpg&q=80&fit=max&crop=%2C%2C%2C&w=4000&w=3840" alt="A group of People" /></Fade>
                </div>
            </div>

            {/* <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center items-center">
                    <Fade bottom>
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-6">Our Story</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 dark:text-white text-center">
                            세계적인 발자취와 혁신 문화 및 팀 우선 정신으로 우리는 선수,<br /> 스포츠 및 세계를 위한 지속적인 발전의 미래를 만들기 위해<br /> 노력하고 있습니다.
                        </p>
                    </Fade>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-4 shadow-lg rounded-md dark:bg-slate-900">
                        {
                            AboutData && AboutData.map(function (item: AboutType, idx: number) {
                                return (
                                    <div className="m-4 flex justify-center flex-col items-center" key={idx}>
                                        <Fade bottom><img className="block rounded" src={item.src} alt={item.p1} /></Fade>
                                        <Fade bottom>
                                            <p className="font-medium text-xl leading-7 text-gray-800 dark:text-white mt-3 text-center line-clamp-1">{item.p1}</p>
                                            <p className="text-sm leading-6 text-gray-800 dark:text-white text-center mt-1 line-clamp-1">{item.p2}</p>
                                        </Fade>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div> */}
            <section className="2xl:container 2xl:mx-auto bg-white dark:bg-gray-900 py-12">

                <div className="container px-6 py-8 mx-auto">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our Team</h2>

                    <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {
                            AboutData && AboutData.map(function (item: AboutType, idx: number) {
                                return (
                                    <div className="w-full max-w-xs text-center" key={idx}>
                                        <img className="object-cover object-center w-full h-64 mx-auto rounded-lg" src={item.src} alt={item.p1} />

                                        <div className="mt-2">
                                            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">{item.p1}</h3>
                                            <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">{item.p2}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </div>
    );
};