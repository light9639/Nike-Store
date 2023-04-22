import React, { useEffect, useState } from 'react'
import HeadInfo from '@components/HeadInfo'
import { useRouter } from 'next/router';
import { authOptions } from './api/auth/[...nextauth]'
import { unstable_getServerSession } from "next-auth/next"
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Fade from 'react-reveal/Fade';
import Link from 'next/link';
import axios from 'axios';
import { SlideType, ShoeViewType } from '@lib/ShoeType'
import LoadingPage from './loading';
import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { persistor } from "./_app";
import { RemoveDetailData, Increase, Decrease, ChangeZero, RemoveAllData } from 'features/DataSlice';
import { addExpress, deleteExpress, deleteAllExpress } from "features/ExpressSlice";
import { EnvelopeIcon, PhoneIcon, UserCircleIcon, HomeIcon, TruckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";

const Cart: NextPage = () => {
    // useState 모음
    const [reduxData, setReduxData] = useState<SlideType[]>([]) // 신발 데이터 정보
    const [shoe, setShoeAll] = useState<SlideType[]>([]) // 신발 데이터 정보
    const [loading, setLoading] = useState<boolean>(true); // 로딩중 정보
    const [totalPrice, setTotalPrice] = useState<string>(''); // 총 금액 3자리마다 ',' 들어간 데이터
    const [priceNum, setPriceNum] = useState<number>(0); // 총 금액 숫자 함수

    // redux 배송정보
    const [addList, setAddList] = useState<(string | number)[]>([]);
    const [id, setID] = useState<number>(0);
    const [email, setEmail] = useState<string>("");
    const [telephone, setTelephone] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [detailAddress, setDetailAddress] = useState<string>("");
    const cityList = ["서울", "부산", "대구", "경기도", "강원도"];
    const [city, setCity] = useState<string>("서울");
    const [productList, setProductList] = useState<ShoeViewType[]>([]);
    const [checkCart, setCheckCart] = useState<boolean>(false);

    // Nike Best Sellers 생성 숫자들
    const Number: number = Math.random()
    const calc: number = Math.ceil(Number * 10)

    // Next.js 라우터 모음
    const router = useRouter()
    const Data_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Shoes.json'

    // 로그인 여부
    const { data, status } = useSession();

    // redux 함수들
    const CartList = useAppSelector((state) => state.data);
    const userList = useAppSelector((state) => state.Login);
    const dispatch = useAppDispatch();

    // 겹치는 항목 제거하는 필터
    const MyCartList = CartList.filter((item, i) => {
        return (
            CartList.findIndex((item2, j) => {
                return (item.index === item2.index);
            }) === i
        );
    });

    // redux-persist 초기화
    const purge = async () => {
        location.reload();
        await persistor.purge(); // persistStore의 데이터 전부 날림
    };

    // price 값 계산
    function PriceTotal() {
        let Price = 0;
        for (let i = 0; i < CartList.length; i++) {
            let result = CartList[i].price;
            let PriceNumber = result;
            let multiplyPrice = PriceNumber * CartList[i].count
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
    }, [totalPrice, priceNum, CartList]);

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
        setTimeout(() => {
            if (status != "authenticated") {
                router.push('/NotLogin')
            }
        }, 2000);
    }, []);

    // form에 입력한 데이터 전송
    async function sendExpress(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        dispatch(deleteAllExpress())

        // 배송 정보에 넣기
        dispatch(
            addExpress({
                id: userList.length + 1,
                email,
                telephone,
                name,
                address,
                detailAddress,
                city,
                productList: CartList,
                totalPrice: priceNum > 100000 ? totalPrice : (priceNum == 0 ? '0' : UpPrice),
            })
        );

        // 카트 자료 삭제
        dispatch(RemoveAllData());

        alert('배송접수가 완료되었습니다.')

        e.target.reset()

        setTimeout(() => {
            router.push('/Delivery')
        }, 1000)
    }

    // myCart 체크
    function isEmptyArr() {
        if (Array.isArray(MyCartList) && MyCartList.length === 0) {
            return setCheckCart(true);
        }

        return setCheckCart(false);
    }

    useEffect(() => {
        isEmptyArr()
    }, [MyCartList]);

    return (
        <React.Fragment>
            <HeadInfo title="Cart Page" contents="Cart Page"></HeadInfo>

            {data?.user == null || loading ? <LoadingPage></LoadingPage>
                : <React.Fragment>
                    <div className="container mx-auto mt-16 mb-24 md:my-24">
                        <div className="block lg:flex mb-10 md:my-10 p-4 md:p-0 mx-0 xl:mx-8">
                            <div className="w-full shadow-md overflow-x-auto relative rounded-xl p-10 mr-10 dark:bg-gray-900">
                                <div className="col-span-2">
                                    <h1 className="text-center lg:text-left text-xl lg:text-lg font-semibold">쇼핑 카트</h1>
                                    {
                                        MyCartList && MyCartList.map(function (item: ShoeViewType, idx: number) {
                                            return (
                                                <React.Fragment key={item.index}>
                                                    <div className="flow-root">
                                                        <ul className="">
                                                            <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                                                                <div className="shrink-0">
                                                                    <img className="w-80 h-80 mx-auto sm:h-28 sm:w-28 max-w-full rounded-lg object-cover" src={item.src.first} alt={item.alt} />
                                                                </div>
                                                                <div className="relative flex flex-1 flex-col justify-between w-full xs:w-[19rem] md:w-full mx-auto">
                                                                    <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                                                        <div className="pr-8 sm:pr-5">
                                                                            <p className="text-lg font-semibold text-gray-900 dark:text-white">{item.name}</p>
                                                                            <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">{item.info}</p>
                                                                            <p className='mx-0 mt-1.5 mb-0 text-xs text-gray-400'>사이즈 : {item.size}</p>
                                                                            <div className="sm:absolute flex bottom-0 py-2 items-center">
                                                                                <svg className="w-4 h-4 text-yellow-300" fill={item.star.first} viewBox="0 0 20 20" stroke-width="2" stroke="currentColor"
                                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                                    <path
                                                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                                                    </path>
                                                                                </svg>
                                                                                <svg className="w-4 h-4 text-yellow-300" fill={item.star.second} viewBox="0 0 20 20" stroke-width="2" stroke="currentColor"
                                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                                    <path
                                                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                                                    </path>
                                                                                </svg>
                                                                                <svg className="w-4 h-4 text-yellow-300" fill={item.star.third} viewBox="0 0 20 20" stroke-width="2" stroke="currentColor"
                                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                                    <path
                                                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                                                    </path>
                                                                                </svg>
                                                                                <svg className="w-4 h-4 text-yellow-300" fill={item.star.four} viewBox="0 0 20 20" stroke-width="2" stroke="currentColor"
                                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                                    <path
                                                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                                                    </path>
                                                                                </svg>
                                                                                <svg className="w-4 h-4 text-yellow-300" fill={item.star.five} viewBox="0 0 20 20" stroke-width="2" stroke="currentColor"
                                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                                    <path
                                                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                                                    </path>
                                                                                </svg>
                                                                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2.5">{item.Review}.0</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="mt-2 flex items-center justify-between sm:mt-0 sm:items-start sm:justify-end">
                                                                            <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right dark:text-white">{item.price.toLocaleString()}원</p>
                                                                            <div className="sm:order-1">
                                                                                <div className="mx-auto flex h-7 items-center text-gray-600 border border-gray-200 dark:bg-gray-100 rounded-md">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        fill="none"
                                                                                        viewBox="0 0 24 24"
                                                                                        strokeWidth={2}
                                                                                        stroke="currentColor"
                                                                                        className="w-6 h-6 ml-2 cursor-pointer hover:stroke-blue-500 transition"
                                                                                        onClick={() => { dispatch(Decrease(item.index)) }}
                                                                                    >
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                                                                    </svg>
                                                                                    <span
                                                                                        className="flex w-full items-center justify-center mx-0.5 text-sm uppercase transition select-none"
                                                                                    >{item.count}</span>
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        fill="none"
                                                                                        viewBox="0 0 24 24"
                                                                                        strokeWidth={2}
                                                                                        stroke="currentColor"
                                                                                        className="w-6 h-6 mr-2 cursor-pointer hover:stroke-blue-500 transition"
                                                                                        onClick={() => { dispatch(Increase(item.index)) }}
                                                                                    >
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                                                    </svg>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>

                                                                        </div>
                                                                    </div>

                                                                    <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                                                        <button
                                                                            type="button"
                                                                            className="flex rounded p-2 text-center text-gray-500 dark:text-white dark:hover:text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                                                                            onClick={() => { dispatch(RemoveDetailData(idx)) }}
                                                                        >
                                                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" className=""></path>
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col w-full lg:w-3/5 p-10 pt-0 md:pt-10 shadow-md rounded-xl dark:bg-gray-900 mt-10 md:mt-0">
                                <div className="pt-12 md:pt-0 2xl:ps-4">
                                    <div className="max-w-4xl">
                                        <form
                                            name="checkoutForm"
                                            onSubmit={sendExpress}
                                        >
                                            <h3 className="text-lg font-bold mb-3">배송자 정보</h3>
                                            <div className="relative mb-4">
                                                <label className="block text-gray-700 dark:text-white text-sm font-semibold mb-2" htmlFor="email">
                                                    이메일
                                                </label>
                                                <input
                                                    className="appearance-none border rounded-lg w-full py-3 pl-9 text-gray-700 dark:text-white leading-tight border-gray-300 focus:outline-none focus:shadow-outline placeholder-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                    id="email"
                                                    type="email"
                                                    placeholder="이메일을 입력해주세요"
                                                    required
                                                    onChange={(event) => {
                                                        setEmail(event.target.value);
                                                    }}
                                                />
                                                <div className="absolute inset-y-0 left-0 flex items-center px-2 py-1 mt-7">
                                                    <EnvelopeIcon className="w-5 h-5 text-gray-700 dark:text-gray-400" />
                                                </div>
                                            </div>
                                            <div className="relative mb-10">
                                                <label className="block text-gray-700 dark:text-white text-sm font-semibold mb-2" htmlFor="email">
                                                    전화번호
                                                </label>
                                                <input
                                                    className="appearance-none border rounded-lg w-full py-3 pl-9 text-gray-700 dark:text-white leading-tight border-gray-300 focus:outline-none focus:shadow-outline placeholder-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                    id="phone"
                                                    type="text"
                                                    placeholder="전화번호를 입력해주세요"
                                                    required
                                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                        event.target.value = event.target.value
                                                            .replace(/[^0-9]/g, '')
                                                            .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g, "$1-$2-$3");
                                                        setTelephone(event.target.value);
                                                    }}
                                                    maxLength={14}
                                                />
                                                <div className="absolute inset-y-0 left-0 flex items-center px-2 py-1 mt-7">
                                                    <PhoneIcon className="w-5 h-5 text-gray-700 dark:text-gray-400" />
                                                </div>
                                            </div>

                                            <h3 className="text-lg font-bold mt-2 mb-3">배송지</h3>
                                            <div className="relative mb-4">
                                                <label className="block text-gray-700 dark:text-white text-sm font-semibold mb-2" htmlFor="name">
                                                    이름
                                                </label>
                                                <input
                                                    className="appearance-none border rounded-lg w-full py-3 pl-9 text-gray-700 dark:text-white leading-tight border-gray-300 focus:outline-none focus:shadow-outline placeholder-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                    id="name"
                                                    type="text"
                                                    placeholder="이름을 입력해주세요"
                                                    required
                                                    onChange={(event) => {
                                                        setName(event.target.value);
                                                    }}
                                                />
                                                <div className="absolute inset-y-0 left-0 flex items-center px-2 py-1 mt-7">
                                                    <UserCircleIcon className="w-5 h-5 text-gray-700 dark:text-gray-400" />
                                                </div>
                                            </div>
                                            <div className="relative mb-4">
                                                <label className="block text-gray-700 dark:text-white text-sm font-semibold mb-2" htmlFor="address">
                                                    주소
                                                </label>
                                                <input
                                                    className="appearance-none border rounded-lg w-full py-3 pl-9 text-gray-700 dark:text-white leading-tight border-gray-300 focus:outline-none focus:shadow-outline placeholder-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                    id="address"
                                                    type="text"
                                                    placeholder="주소를 입력해주세요"
                                                    required
                                                    onChange={(event) => {
                                                        setAddress(event.target.value);
                                                    }}
                                                />
                                                <div className="absolute inset-y-0 left-0 flex items-center px-2 py-1 mt-7">
                                                    <HomeIcon className="w-5 h-5 text-gray-700 dark:text-gray-400" />
                                                </div>
                                            </div>
                                            <div className="relative mb-4">
                                                <label className="block text-gray-700 dark:text-white text-sm font-semibold mb-2" htmlFor="city">
                                                    배송주소
                                                </label>
                                                <input
                                                    className="appearance-none border rounded-lg w-full py-3 pl-9 text-gray-700 dark:text-white leading-tight border-gray-300 focus:outline-none focus:shadow-outline placeholder-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
                                                    id="city"
                                                    type="text"
                                                    placeholder="배송지를 입력해주세요"
                                                    required
                                                    onChange={(event) => {
                                                        setDetailAddress(event.target.value);
                                                    }}
                                                />
                                                <div className="absolute inset-y-0 left-0 flex items-center px-2 py-1 mt-7">
                                                    <TruckIcon className="w-5 h-5 text-gray-700 dark:text-gray-400" />
                                                </div>
                                            </div>
                                            <div className="flex mb-4">
                                                <div className="relative flex-1">
                                                    <label className="block text-gray-700 dark:text-white text-sm font-semibold mb-2" htmlFor="country">배송도시</label>
                                                    <select
                                                        className="appearance-none border rounded-lg w-full py-3 pl-9 text-gray-700 dark:text-gray-400 leading-tight border-gray-300 focus:outline-none focus:shadow-outline placeholder-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                        id="country"
                                                        required
                                                        onChange={(event) => {
                                                            setCity(event.target.value);
                                                        }}
                                                    >
                                                        {cityList.map((item: string) => (
                                                            <option value={item} key={item}>
                                                                {item}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <div className="absolute inset-y-0 left-0 flex items-center px-2 py-1 mt-5">
                                                        <TruckIcon className="w-5 h-5 text-gray-500 dark:text-gray-400   mt-2" />
                                                    </div>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 py-1 mt-7">
                                                        <ChevronDownIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex py-4 pl-1 mt-4">
                                                <h2 className="text-xl font-bold">ITEMS 2</h2>
                                            </div>
                                            <div className="flex items-center w-full py-4 text-base font-semibold border-b border-gray-300 lg:py-5 lg:pl-1 text-heading last:border-b-0 last:text-base last:pb-0">
                                                총 금액 : <span className="ml-2">{totalPrice}원</span>
                                            </div>
                                            <div className="flex items-center w-full py-4 text-base font-semibold border-b border-gray-300 lg:py-5 lg:pl-1 text-heading last:border-b-0 last:text-base last:pb-0">
                                                배송료 : <span className="ml-2">{priceNum > 100000 ? "무료 배송" : (priceNum == 0 ? '0원' : "2,500원")}</span>
                                            </div>
                                            <div className="flex items-center w-full py-4 text-base font-semibold border-b border-gray-300 lg:py-5 lg:pl-1 text-heading last:border-b-0 last:text-base last:pb-0">
                                                결제 비용 : <span className="ml-2">{priceNum > 100000 ? totalPrice : (priceNum == 0 ? '0' : UpPrice)}원</span>
                                            </div>
                                            <div className="mt-8">
                                                {
                                                    checkCart == false
                                                        ? <React.Fragment>
                                                            <button
                                                                className="block w-full px-8 py-3 bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 font-semibold rounded-lg hover:opacity-75 duration-500"
                                                                type="submit"
                                                            >
                                                                결제하기
                                                            </button>
                                                        </React.Fragment>
                                                        : <React.Fragment>
                                                            <button
                                                                className="block w-full px-8 py-3 bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 font-semibold rounded-lg hover:opacity-75 duration-500"
                                                                type="button"
                                                                onClick={() => { alert('배송상품을 선택해주세요.') }}
                                                            >
                                                                결제하기
                                                            </button>
                                                        </React.Fragment>
                                                }
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mb-16 xl:mx-8">
                        <div className="container mx-auto flex flex-wrap items-start">
                            <div className="w-full m-auto">
                                <h1 className="text-3xl lg:text-4xl text-gray-700 dark:text-white font-bold pl-2 text-center 2xl:text-left">
                                    Nike Best Sellers
                                </h1>
                                <div className='flex justify-between mt-7 h-full'>
                                    <div className='w-full flex flex-wrap'>
                                        {
                                            shoe.slice(calc, calc + 4).map(function (item: SlideType, idx: number) {
                                                return (
                                                    <React.Fragment key={item.index}>
                                                        <div
                                                            className="w-1/2 xl:w-1/4 px-0 lg:px-2 xl:px-0 mb-16"
                                                            onClick={() => router.push(`/view/${item.index}`)}
                                                        >
                                                            <div className="rounded-xl m-2 sm:ml-1 dark:hover:shadow-slate-700 transform duration-500">
                                                                <div className='ImgBox hover:opacity-75 hover:shadow-xl dark:hover:opacity-95 dark:hover:shadow-gray-700 transition rounded-3xl'>
                                                                    <Link href={`/view/${item.index}`}>
                                                                        <Fade>
                                                                            <img src={item.src} alt={item.alt} className="w-full max-h- lg:max-h-[450px] xl:max-h-[350px] rounded-3xl object-cover" />
                                                                        </Fade>
                                                                    </Link>
                                                                </div>
                                                                <Fade bottom cascade>
                                                                    <div className="pt-5 px-2 flex flex-col gap-2">

                                                                        <Link href={`/view/${item.index}`}>
                                                                            <h2 className="tracking-tighter text-lg lg:text-base md:text-lg overflow-ellipsis overflow-hidden whitespace-nowrap -mb-1 md:mb-0 cursor-pointer hover:text-blue-300 transition text-left" title="Best Headphone Ever">
                                                                                {item.name}
                                                                            </h2>
                                                                        </Link>

                                                                        <div className='tracking-tighter text-left'>
                                                                            <p className='pb-1 md:pb-2 text-base lg:text-sm text-gray-600 dark:text-white'>{item.info}</p>
                                                                            <span className="text-base 2xl:text-lg relative 2xl:absolute right-0 2xl:right-3 translate-y-0 2xl:-translate-y-[3.85rem]">{item.price.toLocaleString()}원</span>
                                                                        </div>

                                                                    </div>
                                                                    <div className="block md:flex pl-2 pb-2">
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
                </React.Fragment >
            }
        </React.Fragment >
    )
}

export default Cart