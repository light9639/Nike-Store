import React from "react";
import { AboutType } from '@lib/TypeBox';
import AboutData from "@data/About_data";
import Fade from 'react-reveal/Fade';
import HeadInfo from "@components/HeadInfo";
import type { NextPage } from "next";

const About: NextPage = () => {
    return (
        <React.Fragment>
            <HeadInfo title="About Page" contents="About Page"></HeadInfo>

            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div>
                    <div className="container px-6 py-10 lg:px-16 lg:py-10 mx-auto">
                        <Fade>
                            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white text-center">Welcome To Nike Page</h1>

                            <div className="mt-2 text-center">
                                <span className="inline-block w-28 md:w-40 h-1 bg-gray-900 dark:bg-white rounded-full"></span>
                                <span className="inline-block w-3 h-1 ml-1 bg-gray-900 dark:bg-white rounded-full"></span>
                                <span className="inline-block w-1 h-1 ml-1 bg-gray-900 dark:bg-white rounded-full"></span>
                            </div>
                        </Fade>

                        <div className="mt-8 xl:mt-12 flex items-center flex-col-reverse lg:flex-row">
                            <Fade>
                                <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-10 md:grid-cols-2">
                                    <div className="space-y-3 text-center lg:text-left">
                                        <span className="inline-block p-3 text-gray-500 bg-gray-100 rounded-xl dark:text-white dark:bg-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                                        </span>

                                        <h1 className="text-xl md:text-2xl font-semibold text-gray-700 capitalize dark:text-white">지속 가능한 미래.</h1>

                                        <p className="text-sm md:text-base text-gray-500 dark:text-gray-300">
                                            일부 나이키 매장에서는 여러분이 나이키와 함께 'MOVE TO ZERO'에 동참할 수 있도록 지속 가능한 서비스를 제공하고 있습니다. 제로 탄소와 제로 폐기물을 위해서는 반드시 함께 움직여야 합니다.
                                        </p>
                                    </div>

                                    <div className="space-y-3 text-center lg:text-left">
                                        <span className="inline-block p-3 text-gray-500 bg-gray-100 rounded-xl dark:text-white dark:bg-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"></path><path d="M10 20c5.5-2.5.8-6.4 3-10"></path><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path></svg>
                                        </span>

                                        <h1 className="text-xl md:text-2xl font-semibold text-gray-700 capitalize dark:text-white">새 생명을 불어넣는 일.</h1>

                                        <p className="text-sm md:text-base text-gray-500 dark:text-gray-300">
                                            나이키는 지난 수십 년간 지속 가능성의 한계를 넘는 혁신을 해왔습니다. 하지만 같은 방법으로는 우리의 최종 목적지에 도달할 수 없기에, 과학적 상상력을 사실로 만들기 위한 나이키의 플레이북은 진화하고 있습니다.
                                        </p>
                                    </div>

                                    <div className="space-y-3 text-center lg:text-left">
                                        <span className="inline-block p-3 text-gray-500 bg-gray-100 rounded-xl dark:text-white dark:bg-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16.5 9.4 7.55 4.24"></path><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" y1="22" x2="12" y2="12"></line></svg>
                                        </span>

                                        <h1 className="text-xl md:text-2xl font-semibold text-gray-700 capitalize dark:text-white">너만을 위한 특별한 나이키</h1>

                                        <p className="text-sm md:text-base text-gray-500 dark:text-gray-300">
                                            너만을 위한 특별한 나이키. 원하는 것을 누구보다 빠르게, 새로운 영감으로 매일을 새롭게, 상상만 했던 경험을 현실로. 여러분의 매일을 나이키 앱에서 바꿔 보세요.
                                        </p>
                                    </div>

                                    <div className="space-y-3 text-center lg:text-left">
                                        <span className="inline-block p-3 text-gray-500 bg-gray-100 rounded-xl dark:text-white dark:bg-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.8 11.3 2 22l10.7-3.79"></path><path d="M4 3h.01"></path><path d="M22 8h.01"></path><path d="M15 2h.01"></path><path d="M22 20h.01"></path><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"></path><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"></path><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7"></path><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"></path></svg>
                                        </span>

                                        <h1 className="text-xl md:text-2xl font-semibold text-gray-700 capitalize dark:text-white">시작을 만들다.</h1>

                                        <p className="text-sm md:text-base text-gray-500 dark:text-gray-300">
                                            새로운 드라이 핏 ADV 기술을 적용한 2023 나이키 축구 국가대표팀 저지를 가장 먼저 만나 보세요. 나이키 앱을 다운로드하고 축구를 관심사로 설정해 보세요.
                                        </p>
                                    </div>
                                </div>
                            </Fade>

                            <div className="flex mb-12 lg:mb-0 lg:w-1/2 lg:justify-end">
                                <Fade><img className="w-[22rem] h-[22rem] object-cover xl:w-[32rem] xl:h-[32rem] rounded-full" src="https://wallpapers.com/images/featured/g2tprt4w49a0ps3t.jpg" alt="NikeImg" /></Fade>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="2xl:container 2xl:mx-auto mt-24 lg:mt-36 mb-36">
                    <Fade>
                        <h2 className="text-center font-semibold text-gray-800 capitalize text-3xl md:text-4xl dark:text-white">Our Team</h2>
                        <div className="flex justify-center mx-auto mt-4 lg:mt-6">
                            <span className="inline-block w-28 lg:w-40 h-1 bg-gray-900 dark:bg-white rounded-full"></span>
                            <span className="inline-block w-3 h-1 mx-1 bg-gray-900 dark:bg-white rounded-full"></span>
                            <span className="inline-block w-1 h-1 bg-gray-900 dark:bg-white rounded-full"></span>
                        </div>
                    </Fade>
                    <Fade>
                        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300 text-sm md:text-base px-5 lg:px-0">
                            나이키의 팀원들을 소개합니다. 현재 나이키에서 원하는 제품라인 구성을 기획하고 관리하는 업무를 하고 있으며, 시장의 트렌드는 어떠한지, 지금 소비자들이 좋아하는 제품은 무엇인지, 재고 상황은 어떠한지 등을 분석하고 있습니다.
                        </p>
                    </Fade>
                    <div className="grid gap-6 m-6 lg:mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            AboutData && AboutData.map(function (item: AboutType, idx: number) {
                                return (
                                    <div key={item.index}>
                                        <Fade bottom cascade duration={(((idx % 3 == 0 ? 0 : idx % 3 == 1 ? 1 : 2) + 1) * 500) + 1000}>
                                            <div className="w-full lg:max-w-full text-left p-5 lg:p-8 rounded-lg mt-2 ">
                                                <img className="object-cover object-center w-full mx-auto rounded-3xl" src={item.src} alt={item.p1} />
                                                <div className="mt-4">
                                                    <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1 text-center">
                                                        {item.p1}
                                                    </h3>
                                                    <span className="text-gray-500 dark:text-gray-400 line-clamp-1 text-center">{item.p2}</span>
                                                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 line-clamp-2 text-center text-sm lg:text-base">나이키에서 업무를 맡아 소비자의 니즈를 정확히 캐치하고, 빠르게 전달할 수 있도록 관리하고 있습니다. </p>
                                                    <ul className="flex justify-center space-x-4 sm:mt-0">
                                                        <li>
                                                            <a href="#void" className="text-gray-500 hover:text-gray-900 dark:text-gray-300">
                                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#void" className="text-gray-500 hover:text-gray-900 dark:text-gray-300">
                                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#void" className="text-gray-500 hover:text-gray-900 dark:text-gray-300">
                                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#void" className="text-gray-500 hover:text-gray-900 dark:text-gray-300">
                                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Fade>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

            </div>
        </React.Fragment>
    );
};

export default About