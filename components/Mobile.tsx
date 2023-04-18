import React, { useState } from 'react'
import { ButtonData } from "@lib/TypeBox";

interface MobileType {
    mobile: boolean;
    setMobile: Function;
    ButtonData: ButtonData[]
    setCategorySort: Function;
    setPriceSort: Function;
    setPage: Function;
}

export default function Mobile({ mobile, setMobile, ButtonData, setCategorySort, setPriceSort, setPage }: MobileType): JSX.Element {
    const [category, setCategory] = useState<boolean[]>([false, false, false, false, false]);
    const [priceColor, setPriceColor] = useState<boolean[]>([false, false, false, false, false]);

    // 상품명 추출
    function PressButton(e: number) {
        let copy = [false, false, false, false, false];
        copy[e] = !copy[e];
        setCategory(copy);
    }

    // 가격으로 추출
    function PressPrice(e: number) {
        let copy = [false, false, false, false, false];
        copy[e] = !copy[e];
        setPriceColor(copy);
    }

    // 가격 정렬 함수
    function PriceSort(a: number, b: number, idx: number) {
        setPriceSort({ priceLow: a, priceHigh: b })
        setPage(1)
        PressPrice(idx)
        setMobile(!mobile)
    }

    return (
        <React.Fragment>
            <div
                id="drawer-swipe"
                className={`lg:hidden fixed z-[60] w-full overflow-y-auto bg-white border-t border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-800 duration-1000
                    ${mobile == false
                        ? "bottom-0"
                        : "-bottom-full"}
                `}
            >
                <div
                    className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                    data-drawer-toggle="drawer-swipe"
                    onClick={() => { setMobile(!mobile) }}
                >
                    <span className="absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2 dark:bg-gray-600"></span>
                    <h5 id="drawer-swipe-label" className="inline-flex items-center text-base text-gray-500 dark:text-gray-400"><svg className="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path></svg>Choose Category</h5>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4">
                    {
                        ButtonData.map((item: ButtonData, idx: number) => {
                            return (
                                <React.Fragment key={item.index}>
                                    <div
                                        className={`${category[idx] ? "bg-gray-200 dark:bg-blue-900" : "bg-gray-50 dark:bg-gray-700"} p-4 rounded-lg cursor-pointer hover:opacity-75`}
                                        onClick={() => {
                                            setCategorySort(ButtonData[idx].property)
                                            setPage(1)
                                            PressButton(idx)
                                            setMobile(!mobile)
                                        }}
                                    >
                                        <div className={`${category[idx] ? "bg-gray-100 dark:bg-blue-500" : "bg-gray-200 dark:bg-gray-500"} flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] rounded-full w-18 h-18`}>
                                            <svg className={`${category[idx] ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"} inline w-8 h-8`} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <div className="font-medium text-center text-xs text-gray-500 dark:text-gray-400 line-clamp-1 mt-3">{item.name}</div>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
                <hr />
                <div className="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4">
                    <div
                        onClick={() => { PriceSort(0, 500000, 0) }}
                        className={`${priceColor[0] ? "bg-gray-200 dark:bg-blue-900" : "bg-gray-50 dark:bg-gray-700"} p-4 rounded-lg cursor-pointer hover:opacity-75`}
                    >
                        <div className={`${priceColor[0] ? "bg-gray-100 dark:bg-blue-500" : "bg-gray-200 dark:bg-gray-500"} flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] rounded-full w-18 h-18`}>
                            <svg className={`${priceColor[0] ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"} inline w-8 h-8`} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div className="font-medium text-xs text-center text-gray-500 dark:text-gray-400">전체가격</div>
                    </div>
                    <div
                        onClick={() => { PriceSort(50000, 100000, 1) }}
                        className={`${priceColor[1] ? "bg-gray-200 dark:bg-blue-900" : "bg-gray-50 dark:bg-gray-700"} p-4 rounded-lg cursor-pointer hover:opacity-75`}
                    >
                        <div className={`${priceColor[1] ? "bg-gray-100 dark:bg-blue-500" : "bg-gray-200 dark:bg-gray-500"} flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] rounded-full w-18 h-18`}>
                            <svg className={`${priceColor[1] ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"} inline w-8 h-8`} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div className="font-medium text-xs text-center text-gray-500 dark:text-gray-400">50,000 ~ 100,000원</div>
                    </div>
                    <div
                        onClick={() => { PriceSort(100000, 150000, 2) }}
                        className={`${priceColor[2] ? "bg-gray-200 dark:bg-blue-900" : "bg-gray-50 dark:bg-gray-700"} p-4 rounded-lg cursor-pointer hover:opacity-75`}
                    >
                        <div className={`${priceColor[2] ? "bg-gray-100 dark:bg-blue-500" : "bg-gray-200 dark:bg-gray-500"} flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] rounded-full w-18 h-18`}>
                            <svg className={`${priceColor[2] ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"} inline w-8 h-8`} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div className="font-medium text-xs text-center text-gray-500 dark:text-gray-400">100,000 ~ 150,000원</div>
                    </div>
                    <div
                        onClick={() => { PriceSort(150000, 200000, 3) }}
                        className={`${priceColor[3] ? "bg-gray-200 dark:bg-blue-900" : "bg-gray-50 dark:bg-gray-700"} p-4 rounded-lg cursor-pointer hover:opacity-75`}
                    >
                        <div className={`${priceColor[3] ? "bg-gray-100 dark:bg-blue-500" : "bg-gray-200 dark:bg-gray-500"} flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] rounded-full w-18 h-18`}>
                            <svg className={`${priceColor[3] ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"} inline w-8 h-8`} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div className="font-medium text-xs text-center text-gray-500 dark:text-gray-400">150,000 ~ 200,000원</div>
                    </div>
                    <div
                        onClick={() => { PriceSort(200000, 500000, 4) }}
                        className={`${priceColor[4] ? "bg-gray-200 dark:bg-blue-900" : "bg-gray-50 dark:bg-gray-700"} p-4 rounded-lg cursor-pointer hover:opacity-75`}
                    >
                        <div className={`${priceColor[4] ? "bg-gray-100 dark:bg-blue-500" : "bg-gray-200 dark:bg-gray-500"} flex justify-center items-center p-2 mx-auto mb-2 max-w-[48px] rounded-full w-18 h-18`}>
                            <svg className={`${priceColor[4] ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"} inline w-8 h-8`} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div className="font-medium text-xs text-center text-gray-500 dark:text-gray-400">200,000원 + </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}