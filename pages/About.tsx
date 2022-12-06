import React from "react";
import { AboutType } from './Type/TypeBox';
import AboutData from "../data/About_data";

export default function About(): JSX.Element {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 dark:text-white">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">NIKE, Inc. is a team comprised of the Nike, Jordan and Converse brands driven by a shared purpose to leave an enduring impact.</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://media.about.nike.com/images/71fbb222-326e-4bc3-8e4a-f0fbad0fc1fb/nike-inc-swoosh-jordan-converse-logos.jpg?fm=jpg&q=80&fit=max&crop=%2C%2C%2C&w=4000&w=3840" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
                        With a global footprint, culture of innovation and team-first mentality, we take action to create a future of continual progress for athletes, sport and our world.</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-4 shadow-lg rounded-md dark:bg-slate-900">
                        {
                            AboutData.map(function (item: AboutType, idx: number) {
                                return (
                                    <div className="m-4 flex justify-center flex-col items-center" key={idx}>
                                        <img className="block rounded" src={item.src} alt={item.p1} />
                                        <p className="font-medium text-xl leading-7 text-gray-800 dark:text-white mt-3 text-center line-clamp-1">{item.p1}</p>
                                        <p className="text-sm leading-6 text-gray-800 dark:text-white text-center mt-1 line-clamp-1">{item.p2}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};