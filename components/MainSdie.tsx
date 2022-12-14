import React, { useState } from 'react'
import { MainSideType } from '../pages/Type/TypeBox'

const MainData = [
    {
        name: "Share",
        svg: "M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z",
        svg2: ""
    },
    {
        name: "Print",
        svg: "M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z",
        svg2: ""
    },
    {
        name: "Download",
        svg: "M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1.586l-.293-.293a.999.999 0 10-1.414 1.414l2 2a.999.999 0 001.414 0l2-2a.999.999 0 10-1.414-1.414l-.293.293V9z",
        svg2: ""
    },
    {
        name: "Copy",
        svg: "M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z",
        svg2: "M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
    },
]

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

                                                {/* <button
                                                    type="button"
                                                    data-tooltip-target="tooltip-print"
                                                    data-tooltip-placement="left"
                                                    className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
                                                    onMouseEnter={() => { setHover(true) }}
                                                    onMouseLeave={() => { setHover(false) }}
                                                >
                                                    <svg
                                                        aria-hidden="true"
                                                        className="w-6 h-6"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path fill-rule="evenodd" d={item.svg} clip-rule="evenodd">
                                                        </path><path d={item.svg2}></path>
                                                    </svg>
                                                    <span className="block absolute -left-14 top-1/2 mb-px text-sm font-medium -translate-y-1/2">{item.name}</span>
                                                </button> */}
                                                {/* <div
                                                    id="tooltip-print"
                                                    role="tooltip"
                                                    className={`inline-block absolute z-50 py-2 px-3 w-auto text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 tooltip dark:bg-gray-700
                                                    ${hover ? 'visible opacity-100 -translate-x-full' : 'invisible opacity-0'}`}
                                                >
                                                    {item.name}
                                                    <div className="tooltip-arrow" data-popper-arrow></div>
                                                </div> */}
                                            </React.Fragment>
                                        )
                                    })
                                }
                                {/* <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                                    <svg aria-hidden="true" className="-ml-px w-6 h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>
                                    <span className="sr-only">Share</span>
                                </button>
                                <div id="tooltip-share" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 w-auto text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                                    Share
                                    <div className="tooltip-arrow" data-popper-arrow></div>
                                </div>
                                <button type="button" data-tooltip-target="tooltip-print" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                                    <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clip-rule="evenodd"></path></svg>
                                    <span className="sr-only">Print</span>
                                </button>
                                <div id="tooltip-print" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 w-auto text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                                    Print
                                    <div className="tooltip-arrow" data-popper-arrow></div>
                                </div>
                                <button type="button" data-tooltip-target="tooltip-download" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                                    <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1.586l-.293-.293a.999.999 0 10-1.414 1.414l2 2a.999.999 0 001.414 0l2-2a.999.999 0 10-1.414-1.414l-.293.293V9z" fill-rule="evenodd"></path></svg>
                                    <span className="sr-only">Download</span>
                                </button>
                                <div id="tooltip-download" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 w-auto text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                                    Download
                                    <div className="tooltip-arrow" data-popper-arrow></div>
                                </div>
                                <button type="button" data-tooltip-target="tooltip-copy" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-sm dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                                    <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path><path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path></svg>
                                    <span className="sr-only">Copy</span>
                                </button>
                                <div id="tooltip-copy" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 w-auto text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                                    Copy
                                    <div className="tooltip-arrow" data-popper-arrow></div>
                                </div> */}
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