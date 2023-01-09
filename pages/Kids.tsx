/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import HeadInfo from '@components/HeadInfo/HeadInfo'
import Dropdowns from "@components/Dropdowns/Dropdowns";
import { useRouter } from 'next/router';
import axios from 'axios';
import { SlideType } from '@lib/ShoeType';
import Loading from './loading';
import SideBar from '@components/SideBar/SideBar';
import Fade from 'react-reveal/Fade';
import Pagination from "@components/Pagination/Pagination";
import Mobile from '@components/Mobile/Mobile';
import Link from 'next/link';
import Image from 'next/image';

export default function Kids(): JSX.Element {
    // useState 모음
    const [data, setData] = useState<SlideType[]>([]); // 데이터 저장된 곳
    const [copy, setCopy] = useState<SlideType[]>([]); // 데이터 카피
    const [side, setSide] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(15);
    const [mobile, setMobile] = useState<boolean>(true);
    const [ScrollY, setScrollY] = useState<number>(0); // window 의 pageYOffset값을 저장
    const [ScrollActive, setScrollActive] = useState<boolean>(false);
    const offset: number = (page - 1) * limit;

    // 라우터 모음
    const router = useRouter()

    // 기타 자료들
    const BUTTON_API_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Data.json';
    const Kids_API_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Shoes.json';

    // 로컬 스토리지 변수
    const LocalPage = localStorage.getItem("Kids_pageNum");
    const LocalState: any = localStorage.getItem("Kids_StateInLocal");

    // 신발 데이터 가져오기
    async function getData() {
        try {
            const response = await axios.get(Kids_API_URL);
            if (JSON.parse(LocalState) == '') {
                setData(response.data.Kids);
                setCopy(response.data.Kids);
            }
            else if (LocalState) {
                setData(JSON.parse(LocalState));
            }
            else {
                setData(response.data.Kids);
                setCopy(response.data.Kids);
            }
        } catch (error) {
            console.error(error);
        }
    }

    // 시작 시에만 함수 실행되도록 설정
    useEffect(() => {
        getData();
        axios.get("").then((res) => {
            setLoading(false);
        });
        if (LocalPage) {
            setPage(JSON.parse(LocalPage));
        }
    }, []);

    return (
        <React.Fragment>
            <HeadInfo title="Kids Product Page" contents="Kids Product Page" />

            {loading ? <Loading></Loading>
                : <React.Fragment>
                    <div className="flex items-center lg:w-screen min-h-screen my-16">
                        <div className="container m-auto flex flex-wrap items-start">
                            <div className="w-full pl-0 lg:pl-2 mb-0 lg:mb-4 mt-4 m-auto text-center">
                                <h1 className="text-3xl lg:text-4xl text-gray-700 dark:text-white font-bold float-none lg:float-left">
                                    Kids Best Sellers
                                </h1>
                                <div className='inline-flex lg:flex items-center mx-auto mt-8 lg:mt-0 lg:float-right'>
                                    <a
                                        className='flex justify-between items-center text-sm mr-5 cursor-pointer hover:opacity-50'
                                        onClick={() => { setSide(!side); setMobile(!mobile); }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-3">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                                        </svg>
                                        필터 표시
                                    </a>
                                    <Dropdowns data={data} setData={setData} Name={"Kids"} copy={copy}></Dropdowns>
                                </div>
                            </div>
                            <div className='flex justify-between mt-10 h-full'>

                                <SideBar
                                    side={side}
                                    Name={"Kids"}
                                    ScrollY={ScrollY}
                                    ScrollActive={ScrollActive}
                                    setScrollY={setScrollY}
                                    setScrollActive={setScrollActive}
                                ></SideBar>

                                <div className={side && ScrollActive ? "lg:w-[calc(100%_-_16rem)]" : "w-full"}>
                                    <div className='w-full flex flex-wrap '>
                                        {
                                            data && data.slice(offset, offset + limit).map(function (item: SlideType, idx: number) {
                                                return (
                                                    <React.Fragment key={idx}>
                                                        <div
                                                            className="w-1/2 lg:w-1/3 pl-0 md:pl-5 lg:pl-2 mb-16 lg:pr-2"
                                                        >
                                                            <div className="rounded-xl m-2 sm:ml-1 dark:hover:shadow-slate-700 transform duration-500">
                                                                <div className='ImgBox hover:opacity-75 hover:shadow-xl dark:hover:opacity-95 dark:hover:shadow-gray-700 transition rounded-3xl'>
                                                                    <Link href={`/view/${item?.index}`}>
                                                                        <Fade>
                                                                            <Image src={item?.src} alt={item?.alt} className="w-full h-full object-cover rounded-3xl" width={592} height={592} />
                                                                        </Fade>
                                                                    </Link>
                                                                </div>
                                                                <Fade bottom>
                                                                    <div className=" pt-5 px-2 flex flex-col gap-2">

                                                                        <Link href={`/view/${item?.index}`}>
                                                                            <h2 className="tracking-tighter text-base md:text-lg overflow-ellipsis overflow-hidden whitespace-nowrap -mb-1 md:mb-0  cursor-pointer hover:text-purple-300 transition" title="Best Headphone Ever">
                                                                                {item?.name}
                                                                            </h2>
                                                                        </Link>

                                                                        <div className='tracking-tighter'>
                                                                            <p className='pb-1 md:pb-2 text-sm text-gray-600 dark:text-white'>{item?.info}</p>
                                                                            <span
                                                                                className={`${side != true ? 'text-base md:text-lg relative xl:absolute right-0 xl:right-3 translate-y-0 xl:-translate-y-16' : 'xl:absolute xl:-translate-y-16 xl:mt-0.5 xl:right-0'}`}
                                                                            >{item?.price}</span>
                                                                        </div>

                                                                    </div>
                                                                    <div className="block md:flex pl-2 pb-2">
                                                                        <span className="flex items-center my-3 md:my-0">
                                                                            <svg fill={item?.star?.first} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                                            </svg>
                                                                            <svg fill={item?.star?.second} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                                            </svg>
                                                                            <svg fill={item?.star?.third} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                                            </svg>
                                                                            <svg fill={item?.star?.four} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                                            </svg>
                                                                            <svg fill={item?.star?.five} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                                            </svg>
                                                                            <span className="bg-purple-100 text-purple-800 text-sm font-semibold ml-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">{item?.Review} Reviews</span>
                                                                        </span>
                                                                        <span className={`hidden md:flex md:ml-3 md:pl-3 md:py-2 md:border-l-2 border-gray-200 space-x-2s gap-1 md:gap-3
                                                                            ${side ? 'md:hidden': ''}
                                                                        `}>
                                                                            <a href='https://ko-kr.facebook.com/' className="text-gray-500 dark:text-white transition hover:text-blue-600 dark:hover:text-blue-600">
                                                                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                                                </svg>
                                                                            </a>
                                                                            <a href='https://twitter.com/home' className="text-gray-500 dark:text-white transition hover:text-blue-600 dark:hover:text-blue-600">
                                                                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                                                </svg>
                                                                            </a>
                                                                            <a href='https://www.kakaocorp.com/page/service/service/KakaoTalk' className="text-gray-500 dark:text-white transition hover:text-blue-600 dark:hover:text-blue-600">
                                                                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                                                </svg>
                                                                            </a>
                                                                        </span>
                                                                    </div>
                                                                </Fade>
                                                            </div>
                                                        </div>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </div>

                                    <Pagination
                                        total={data.length}
                                        limit={limit}
                                        page={page}
                                        setPage={setPage}
                                        Name={"Kids"}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>

                    <Mobile mobile={mobile} setMobile={setMobile}></Mobile>

                </React.Fragment>}
        </React.Fragment>
    )
}