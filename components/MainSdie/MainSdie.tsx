import React, { useState } from 'react'
import { MainSideType } from '@lib/TypeBox'
import { MainData } from "./MainSide_data";
import { useRouter } from 'next/router'

export default function MainSide(): JSX.Element {
    const [number, setNumber] = useState<number>(0);
    const [hide, setHide] = useState<boolean>(false);
    const [hover, setHover] = useState<boolean>(false);
    const router = useRouter();

    return (
        <React.Fragment>
            <div
                className="fixed right-6 bottom-6 group z-50 "
                onMouseEnter={() => { setHide(true); setHover(true); }}
                onMouseLeave={() => { setHide(false); setHover(false); }}
            >
                {
                    hide == true
                        ? <React.Fragment>
                            <div id="speed-dial-menu-hover" className="flex flex-col items-center mb-4 space-y-2">
                                {
                                    MainData && MainData.map(function (item: MainSideType, idx: number) {
                                        return (
                                            <React.Fragment key={item.index}>
                                                <button
                                                    type="button"
                                                    className="relative w-[45px] lg:w-[52px] h-[45px] lg:h-[52px] text-black bg-white rounded-full border border-gray-200 hover:text-gray-700 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
                                                    onClick={() => router.push(`${item.href}`)}
                                                >
                                                    <svg
                                                        className={
                                                            item.name == 'Login'
                                                                ? "mx-auto w-7 h-7"
                                                                : "mx-auto w-6 h-6"
                                                        }
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path fill-rule="evenodd" d={item.svg} clip-rule="evenodd"></path>
                                                    </svg>
                                                    <div
                                                        className={`${hover ? 'visible opacity-100' : 'invisible opacity-0'}`}
                                                    // aria-current={setNumber}
                                                    >
                                                        <span className="block absolute right-0 -translate-x-16 top-1/2 mb-px text-sm font-medium text-black dark:text-white rounded-lg -translate-y-1/2 bg-white dark:bg-gray-700 py-2 px-3 z-50 shadow-sm">{item.name}</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="absolute right-0 z-40 -translate-x-11 mr-0.5 top-1/2 -translate-y-1/2 w-8 fill-white dark:fill-gray-700">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                        </svg>
                                                    </div>
                                                </button>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </div>
                        </React.Fragment>
                        : null
                }
                <button
                    type="button"
                    className="flex justify-center items-center w-[50px] lg:w-[56px] h-[50px] lg:h-[56px] text-white bg-black rounded-full hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-900"
                >
                    <svg aria-hidden="true" className="w-8 h-8 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                    <span className="sr-only">Open actions menu</span>
                </button>
            </div>
        </React.Fragment>
    )
}