/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback, use } from 'react'
import HeadInfo from '@components/HeadInfo'
import Dropdowns from "@components/Dropdowns";
import axios from 'axios';
import { SlideType } from '@lib/ShoeType';
import Loading from './loading';
import SideBar from '@components/SideBar';
import Fade from 'react-reveal/Fade';
import Pagination from "@components/Pagination";
import Mobile from '@components/Mobile';
import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from "next";
import { ButtonData } from "@lib/TypeBox";
import { GetStaticProps } from 'next'

interface MenType {
    ButtonData: ButtonData[];
    MenData: SlideType[];
}

const Men: NextPage<MenType> = ({ ButtonData, MenData }) => {
    // useState 모음
    const [data, setData] = useState<SlideType[]>([]); // 데이터 저장된 곳
    const [copy, setCopy] = useState<SlideType[]>([]); // 데이터 카피
    const [side, setSide] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(15);
    const [mobile, setMobile] = useState<boolean>(true);

    // 필터 버튼 useState 모음
    const [categorySort, setCategorySort] = useState("");
    const [priceSort, setPriceSort] = useState({ priceLow: 0, priceHigh: 500000 });

    // pagination 계산
    const offset: number = (page - 1) * limit;

    // 기타 자료들
    const LocalPage = localStorage.getItem("Men_pageNum");
    const LocalState = localStorage.getItem("Men_StateInLocal");

    // 검색 조건
    const filtered = data.filter((Search) => {
        return Search.info.toLowerCase().includes(categorySort.toLowerCase())
            && Search.price >= priceSort.priceLow
            && Search.price <= priceSort.priceHigh;
    });

    // 신발 데이터 가져오기
    function getData() {
        try {
            if (JSON.parse(LocalState || '{}').length != 40) {
                setData(MenData);
            }
            else if (JSON.parse(LocalState || '{}') == '') {
                setData(MenData);
                setCopy(MenData);
            }
            else if (LocalState) {
                setData(JSON.parse(LocalState));
            }
            else {
                setData(MenData);
                setCopy(MenData);
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
            <HeadInfo title="Men Product Page" contents="Men Product Page" />

            {loading ? <Loading></Loading>
                : <React.Fragment>
                    <div className="flex items-center justify-center lg:w-screen my-16">
                        <div className="container mx-auto flex flex-wrap w-screen items-start xl:px-8">
                            <div className="w-full pl-0 lg:pl-2 mb-0 lg:mb-4 mt-4 m-auto text-center">
                                <h1 className="text-3xl lg:text-4xl text-gray-700 dark:text-white font-bold float-none lg:float-left">
                                    Men Best Sellers
                                </h1>

                                <div className='inline-flex lg:flex items-center mx-auto mt-6 lg:mt-0 lg:float-right lg:mr-5'>
                                    <a
                                        className='flex justify-between items-center text-sm mr-5 cursor-pointer hover:opacity-50'
                                        onClick={() => {
                                            setSide(!side);
                                            setMobile(!mobile);
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-3">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                                        </svg>
                                        필터 표시
                                    </a>
                                    <Dropdowns data={data} setData={setData} Name={"Men"} copy={copy}></Dropdowns>
                                </div>
                            </div>

                            <div className='flex justify-between mt-10 w-full h-full'>

                                <SideBar
                                    side={side}
                                    Name={"Men"}
                                    ButtonData={ButtonData}
                                    setCategorySort={setCategorySort}
                                    setPriceSort={setPriceSort}
                                    setPage={setPage}
                                ></SideBar>

                                <div className={side ? "lg:w-[calc(100%_-_16rem)] duration-[1.25s]" : "w-full"}>
                                    <div className='w-full flex flex-wrap '>
                                        {
                                            filtered && filtered.slice(offset, offset + limit).map(function (item: SlideType, idx: number) {
                                                return (
                                                    <React.Fragment key={idx}>

                                                        <div
                                                            className="w-1/2 lg:w-1/3 pl-0 md:pl-5 lg:pl-2 mb-16 lg:pr-2"
                                                        >
                                                            <div className="rounded-xl m-2 sm:ml-1 dark:hover:shadow-slate-700 transform duration-500">
                                                                <div className='ImgBox hover:opacity-75 hover:shadow-xl dark:hover:opacity-95 dark:hover:shadow-gray-700 transition rounded-3xl'>
                                                                    <Link href={`/view/${item.index}`}>
                                                                        <Fade>
                                                                            <Image src={item.src} alt={item.alt} className="w-full h-full object-cover rounded-3xl" width={592} height={592} />
                                                                        </Fade>
                                                                    </Link>
                                                                </div>
                                                                <Fade bottom cascade>
                                                                    <div className="pt-5 px-2 flex flex-col gap-2">

                                                                        <Link href={`/view/${item.index}`}>
                                                                            <h2 className="tracking-tighter text-base md:text-lg overflow-ellipsis overflow-hidden whitespace-nowrap -mb-1 md:mb-0 cursor-pointer hover:text-blue-300 transition" title="Best Headphone Ever">
                                                                                {item.name}
                                                                            </h2>
                                                                        </Link>

                                                                        <div className='tracking-tighter'>
                                                                            <p className='pb-1 md:pb-2 text-sm text-gray-600 dark:text-white'>{item.info}</p>
                                                                            <span
                                                                                className={`${side != true ? 'text-base md:text-lg relative xl:absolute right-0 xl:right-3 translate-y-0 xl:-translate-y-16' : 'xl:absolute xl:-translate-y-16 xl:mt-0.5 xl:right-0'}`}
                                                                            >{(item.price).toLocaleString()}원</span>
                                                                        </div>

                                                                    </div>
                                                                    <div className={`block md:flex pl-2 pb-2 ${side ? "md:flex-wrap" : ""}`}>
                                                                        <span className="flex items-center my-3 md:my-0">
                                                                            <svg fill={item.star.first} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                                            </svg>
                                                                            <svg fill={item.star.second} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                                            </svg>
                                                                            <svg fill={item.star.third} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                                            </svg>
                                                                            <svg fill={item.star.four} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                                            </svg>
                                                                            <svg fill={item.star.five} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                                            </svg>
                                                                            <span className="bg-blue-100 text-blue-800 text-sm font-semibold ml-3 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{item.Review} Reviews</span>
                                                                        </span>
                                                                        <span className={`hidden md:flex md:ml-3 md:pl-3 md:py-2 md:border-l-2 border-gray-200 space-x-2s gap-1 md:gap-3
                                                                                ${side ? 'md:hidden' : ''}
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
                                        {
                                            filtered.length == 0
                                                ? <React.Fragment>
                                                    <div className="flex flex-col items-center justify-center px-16 md:px-5 mx-auto mt-10 lg:mt-52">
                                                        <div className="max-w-md text-center">
                                                            <h2 className="pb-8 font-extrabold text-7xl md:text-8xl dark:text-white text-gray-900">
                                                                Sorry
                                                            </h2>
                                                            <p className="text-xl font-semibold md:text-3xl">존재하는 상품이 없습니다.</p>
                                                            <p className="mt-4 mb-8 text-sm md:text-base dark:text-gray-400">선택하신 카테고리의 제품이 존재하지 않습니다. 원래대로 돌아가려면 전체보기를 눌러주세요</p>
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                                : null
                                        }
                                    </div>

                                    <Pagination
                                        total={filtered.length}
                                        limit={limit}
                                        page={page}
                                        setPage={setPage}
                                        Name={"Men"}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>

                    <Mobile
                        mobile={mobile}
                        setMobile={setMobile}
                        ButtonData={ButtonData}
                        setCategorySort={setCategorySort}
                        setPriceSort={setPriceSort}
                        setPage={setPage}
                    ></Mobile>

                </React.Fragment>
            }
        </React.Fragment>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    // 변수명
    const BUTTON_API_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/SideBar_data.json';
    const Men_API_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Shoes.json';

    const response1 = await axios.get(BUTTON_API_URL);
    const response2 = await axios.get(Men_API_URL);

    const data1 = response1.data;
    const data2 = response2.data;

    return {
        props: {
            ButtonData: data1.MenData,
            MenData: data2.Men,
        },
        revalidate: 20,
    };
}

export default Men;