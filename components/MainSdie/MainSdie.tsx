import React, { useState } from 'react'
import { MainSideType } from '../../lib/TypeBox'
import { MainData } from "./MainSide_data";

export default function MainSdie(): JSX.Element {
    const [hide, setHide] = useState<boolean>(false);
    const [hover, setHover] = useState<boolean>(false);

    return (
        <React.Fragment>
            <div
                data-dial-init
                className="fixed right-6 bottom-6 group z-50"
                onMouseEnter={() => { setHide(true) }}
                onMouseLeave={() => { setHide(false) }}
            >
                {
                    hide == true ?
                        <>
                            <div id="speed-dial-menu-hover" className="flex flex-col items-center mb-4 space-y-2">
                                {
                                    MainData && MainData.map(function (item: MainSideType, idx: number) {
                                        return (
                                            <React.Fragment key={idx}>
                                                <button
                                                    type="button"
                                                    className="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-full border border-gray-200 hover:text-gray-900 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
                                                    onMouseEnter={() => { setHover(true) }}
                                                    onMouseLeave={() => { setHover(false) }}
                                                >
                                                    <svg
                                                        aria-hidden="true"
                                                        className="mx-auto mt-px w-6 h-6"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d={item.svg} clip-rule="evenodd"></path>
                                                        <path d={item.svg2}></path>
                                                    </svg>
                                                    <div className={`${hover ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                                                        <span className="block absolute right-0 -translate-x-16 top-1/2 mb-px text-sm font-medium text-white rounded-lg -translate-y-1/2 bg-gray-900 dark:bg-gray-700 py-2 px-3 z-50">{item.name}</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="bg-gray-900 dark:bg-gray-700" viewBox="0 0 24 24" strokeWidth={1.5} stroke="bg-gray-900 dark:bg-gray-700" className="absolute right-0 z-40 -translate-x-11 mr-0.5 top-1/2 -translate-y-1/2 w-8">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                        </svg>
                                                    </div>
                                                </button>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </div>
                        </> : null
                }
                <button
                    type="button"
                    data-dial-toggle="speed-dial-menu-hover"
                    data-dial-trigger="hover"
                    aria-controls="speed-dial-menu-hover"
                    aria-expanded="false"
                    className="flex justify-center items-center w-14 h-14 text-white bg-blue-700 rounded-full hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
                >
                    <svg aria-hidden="true" className="w-8 h-8 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                    <span className="sr-only">Open actions menu</span>
                </button>
            </div>
        </React.Fragment>
    )
}