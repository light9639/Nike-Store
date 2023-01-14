import React, { useEffect, useState } from 'react'
import HeadInfo from '@components/HeadInfo/HeadInfo'
import { useRouter } from 'next/router';
import { authOptions } from './api/auth/[...nextauth]'
import { unstable_getServerSession } from "next-auth/next"
import Fade from 'react-reveal/Fade';
import Link from 'next/link';
import axios from 'axios';
import { SlideType } from '@lib/ShoeType'
import Loading from './loading';
import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { persistor } from "./_app";
import { RemoveDetailData, Increase, Decrease } from 'features/data/dataSlice';

export default function Cart(): JSX.Element {
    // useState 모음
    const [reduxData, setReduxData] = useState<SlideType[]>([]) // 신발 데이터 정보
    const [shoe, setShoeAll] = useState<SlideType[]>([]) // 신발 데이터 정보
    const [loading, setLoading] = useState<boolean>(true); // 로딩중 정보
    const [totalPrice, setTotalPrice] = useState<string>(''); // 총 금액 3자리마다 ',' 들어간 데이터
    const [priceNum, setPriceNum] = useState<number>(0); // 총 금액 숫자 함수

    // Nike Best Sellers 생성 숫자들
    const Number: number = Math.random()
    const calc: number = Math.ceil(Number * 10)

    // Next.js 라우터 모음
    const router = useRouter()
    const Data_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Shoes.json'

    // redux 함수들
    const state = useAppSelector((state) => state);
    const dispatch = useAppDispatch();
    const StateArray: any = state.data;

    // redux-persist 초기화
    const purge = async () => {
        location.reload();
        await persistor.purge(); // persistStore의 데이터 전부 날림
    };

    // price 값 계산
    function PriceTotal() {
        let Price = 0;
        for (let i = 0; i < StateArray.length; i++) {
            let result = StateArray[i].price.replace(/[^0-9]/g, "");
            let PriceNumber = result.replace(/[^0-9]/g, "");
            let multiplyPrice = PriceNumber * StateArray[i].count
            Price = Price + multiplyPrice;
        }
        setPriceNum(Price)
        let FinalPrice = priceNum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        setTotalPrice(FinalPrice)
    }

    // 배송료 포함 총 결제비용
    const UpPrice = (priceNum + 2500).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    // price 값 계산, 결제비용 실행
    useEffect(() => {
        PriceTotal()
    }, [totalPrice, priceNum, state]);

    // 자료 가져오는 함수
    function getData() {
        axios.get(Data_URL).then((res) => {
            if (calc % 3 == 0) {
                setShoeAll(res.data.Men)
            } else if (calc % 3 == 1) {
                setShoeAll(res.data.Women)
            } else {
                setShoeAll(res.data.Kids)
            }
        })
    }

    // 실행 순간 가져오는 함수들
    useEffect(() => {
        getData();
        axios.get("").then((res) => {
            setLoading(false);
        });
    }, []);

    console.log(StateArray)

    return (
        <React.Fragment>
            <HeadInfo title="Cart Page" contents="Cart Page"></HeadInfo>

            {loading ? <Loading></Loading>
                : <React.Fragment>
                    <div className="container mx-auto my-24 shadow-md">
                        <div className="block lg:flex my-10 p-4 md:p-0">
                            <div className="w-full overflow-x-auto relative sm:rounded-lg">
                                <div className="col-span-2 p-5">
                                    <h1 className="text-xl font-medium ">Shopping Cart</h1>
                                    {
                                        StateArray && StateArray.map(function (item: any, idx: number) {
                                            return (
                                                <React.Fragment key={idx}>
                                                    <div className={`flex justify-between items-center mt-6 pt-6`} >
                                                        <div className="flex items-center" onClick={() => { console.log(item) }}>
                                                            <img src={item.src?.first} className="rounded-3xl max-w-[200px]" alt={item.alt} />
                                                        </div>
                                                        <div className="flex flex-col ml-3">
                                                            <span className="md:text-md font-medium">{item.name}</span>
                                                            <span className="text-xs font-light text-gray-400">{item.info}</span>
                                                            <span className="text-xs font-light text-gray-400">{item.Review}</span>
                                                        </div>
                                                        <div className="flex items-center space-x-3">
                                                            <button
                                                                onClick={() => { dispatch(Decrease(item.index)) }}
                                                                className={`inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${item.count < 1 ? 'cursor-not-allowed' : ''}`}
                                                                type="button"
                                                            >
                                                                <span className="sr-only">Quantity button</span>
                                                                <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                                            </button>
                                                            <div>
                                                                <input
                                                                    className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
                                                                    placeholder={item.count}
                                                                    required 
                                                                />
                                                            </div>
                                                            <button
                                                                onClick={() => { dispatch(Increase(item.index)) }}
                                                                className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                                <span className="sr-only">Quantity button</span>
                                                                <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                                            </button>
                                                        </div>
                                                        <div className="flex justify-center items-center">
                                                            <p className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                                                {item.price}
                                                            </p>
                                                            <p className="py-4 px-6">
                                                                <a
                                                                    onClick={() => { dispatch(RemoveDetailData(idx)) }}
                                                                    href="#void"
                                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                                                >Remove</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                            )
                                        })

                                    }
                                </div>
                            </div>
                            <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5 p-10">
                                <div className="pt-12 md:pt-0 2xl:ps-4">
                                    <h2 className="text-xl font-bold">Order Summary
                                    </h2>
                                    <div className="mt-8">
                                        <div className="flex flex-col space-y-4 ">
                                            <div className="flex space-x-4">
                                                <div className='w-full'>
                                                    <img src="https://raw.githubusercontent.com/light9639/ImgStorage/main/shoestore/Page/Kids/Kids_09.jpg" alt="image"
                                                        className="w-60" />
                                                </div>
                                                <div className='w-full'>
                                                    <h2 className="text-xl font-bold">Title</h2>
                                                    <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                                    <span className="text-red-600">Price</span> $20
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="flex space-x-4">
                                                <div className='w-full'>
                                                    <img src="https://raw.githubusercontent.com/light9639/ImgStorage/main/shoestore/Page/Kids/Kids_09.jpg" alt="image"
                                                        className="w-60" />
                                                </div>
                                                <div className='w-full'>
                                                    <h2 className="text-xl font-bold">Title</h2>
                                                    <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                                    <span className="text-red-600">Price</span> $20
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex p-4 mt-4">
                                        <h2 className="text-xl font-bold">ITEMS 2</h2>
                                    </div>
                                    <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                        총 금액 : <span className="ml-2">{totalPrice}원</span>
                                    </div>
                                    <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                        배송료 : <span className="ml-2">{priceNum > 100000 ? "무료 배송" : (priceNum == 0 ? '0원' : "2,500원")}</span>
                                    </div>
                                    <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                        결제 비용 : <span className="ml-2">{priceNum > 100000 ? totalPrice : (priceNum == 0 ? '0' : UpPrice)}원</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex items-center mb-16">
                        <div className="container m-auto flex flex-wrap items-start">
                            <div className="w-full m-auto">
                                <h1 className="text-3xl lg:text-4xl text-gray-700 dark:text-white font-bold pl-6 text-center 2xl:text-left">
                                    Nike Best Sellers
                                </h1>
                                <div className='flex justify-between mt-7 h-full'>
                                    <div className='w-full flex flex-wrap'>
                                        {
                                            shoe.slice(calc, calc + 4).map(function (item: SlideType, idx: number) {
                                                return (
                                                    <React.Fragment key={idx}>
                                                        <div
                                                            className="w-1/2 xl:w-1/4 px-0 lg:px-2 xl:px-0 mb-16"
                                                            onClick={() => router.push(`/view/${item?.index}`)}
                                                        >
                                                            <div className="rounded-xl m-2 sm:ml-1 dark:hover:shadow-slate-700 transform duration-500">
                                                                <div className='ImgBox hover:opacity-75 hover:shadow-xl dark:hover:opacity-95 dark:hover:shadow-gray-700 transition rounded-3xl'>
                                                                    <Link href={`/view/${item?.index}`}>
                                                                        <Fade>
                                                                            <img src={item?.src} alt={item?.alt} className="w-full max-h- lg:max-h-[450px] xl:max-h-[350px] rounded-3xl object-cover" />
                                                                        </Fade>
                                                                    </Link>
                                                                </div>
                                                                <Fade bottom cascade>
                                                                    <div className="pt-5 px-2 flex flex-col gap-2">

                                                                        <Link href={`/view/${item?.index}`}>
                                                                            <h2 className="tracking-tighter text-lg lg:text-base md:text-lg overflow-ellipsis overflow-hidden whitespace-nowrap -mb-1 md:mb-0 cursor-pointer hover:text-blue-300 transition text-left" title="Best Headphone Ever">
                                                                                {item?.name}
                                                                            </h2>
                                                                        </Link>

                                                                        <div className='tracking-tighter text-left'>
                                                                            <p className='pb-1 md:pb-2 text-base lg:text-sm text-gray-600 dark:text-white'>{item?.info}</p>
                                                                            <span className="text-base 2xl:text-lg relative 2xl:absolute right-0 2xl:right-3 translate-y-0 2xl:-translate-y-[3.85rem]">{item?.price}</span>
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
                                                                            <span className="bg-blue-100 text-blue-800 text-sm font-semibold ml-3 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{item?.Review} Reviews</span>
                                                                        </span>
                                                                        <span className="hidden md:flex md:ml-3 md:pl-3 md:py-2 md:border-l-2 border-gray-200 space-x-2s gap-1 md:gap-3">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            }
        </React.Fragment>
    )
}

// export async function getServerSideProps(context: any) {
//     const session = await unstable_getServerSession(context.req, context.res, authOptions)

//     if ( !session ) {
//         return {
//             redirect: {
//                 destination: '/NotLogin',
//                 permanent: false,
//             },
//         }
//     }

//     return {
//         props: {
//             session,
//         },
//     }
// }