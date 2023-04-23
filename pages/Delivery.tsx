import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { SlideType, ShoeViewType } from '@lib/ShoeType'
import Link from 'next/link';
import type { NextPage } from "next";
import { initialType, deleteAllExpress } from "features/ExpressSlice";
import HeadInfo from '@components/HeadInfo';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import LoadingPage from './loading';
import axios from 'axios';
import { Delivery_Style } from "../styles/Delivery_Style";

const Delivery: NextPage = () => {
    const [loading, setLoading] = useState<boolean>(true); // 로딩중 정보
    const [check, setCheck] = useState<boolean>(true);
    const ExpressData = useAppSelector((state) => state.Login);
    const List: ShoeViewType[] = ExpressData[0]?.productList;
    const dispatch = useAppDispatch();
    const { data, status } = useSession();
    const router = useRouter();

    const todayTime = (e: number) => {
        let now = new Date();  // 현재 날짜 및 시간
        let todayYear = now.getFullYear() + 1;
        let todayMonth = now.getMonth() + 1;
        let todayDate = now.getDate() + e
        const week = ['일', '월', '화', '수', '목', '금', '토'];
        let dayOfWeek = week[now.getDay()];
        let hours = now.getHours()
        let minutes = now.getMinutes();

        return todayYear + '년 ' + todayMonth + '월 ' + todayDate + '일 ' + dayOfWeek + '요일 '
            + hours + '시 ' + minutes + '분';
    }

    const sleep = (delay: number | undefined) => new Promise(resolve => setTimeout(resolve, delay));
    async function DeleteData() {
        if (confirm('정말 배송을 취소하시겠습니까?')) {
            await sleep(250);
            dispatch(deleteAllExpress());
            alert('배송이 취소되었습니다.');
        } else {
            alert("취소를 누르셨습니다.");
        }
    }

    useEffect(() => {
        axios.get("").then((res) => {
            setLoading(false);
        });
        setTimeout(() => {
            if (status != "authenticated") {
                router.push('/NotLogin')
            }
        }, 2000);
    }, []);

    return (
        <React.Fragment>
            <HeadInfo title="배송 페이지" contents="배송 페이지"></HeadInfo>

            {data?.user == null || loading ? <LoadingPage></LoadingPage>
                :
                <React.Fragment>
                    <section className="items-center pb-16 ">
                        <div>
                            <div className='mt-24 mb-32'>
                                <div className="relative flex flex-col items-center mb-14 md:mb-16">
                                    <h2 className="text-3xl md:text-4xl font-bold leading-tight dark:text-white">
                                        배송 현황
                                    </h2>
                                </div>
                                <div className="card dark:bg-slate-900 border-[3px] border-t-black dark:border-t-white border-b-black dark:border-b-white">
                                    <div className="font-semibold mb-5 text-xl px-[8%] md:text-2xl">
                                        <h2 className='mt-2 mb-7 md:mb-10 text-2xl md:text-2xl'>배송 상품 목록</h2>
                                        {
                                            List?.map((item: ShoeViewType, idx: number) => {
                                                return (
                                                    <React.Fragment key={item.index}>
                                                        <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                                                            <div className="pb-4 md:pb-8 w-full md:w-40 hover:opacity-75">
                                                                <Link href={`/view/${item.index}`}>
                                                                    <img className="w-full" src={item.src.first} alt={item.alt} />
                                                                </Link>
                                                            </div>
                                                            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                                                                <div className="w-full flex flex-col justify-start items-start space-y-14">
                                                                    <Link href={`/view/${item.index}`}>
                                                                        <h3 className="text-xl md:text-lg font-semibold leading-6 md:-mt-1 text-gray-800 line-clamp-1 hover:opacity-75 dark:text-white">{item.name}</h3>
                                                                    </Link>
                                                                    <div className="flex justify-start items-start flex-col space-y-2">
                                                                        <p className="text-sm md:text-xs leading-none text-gray-800">
                                                                            <span className="text-gray-300">Kind : </span> <span className='dark:text-gray-500'>{item.info}</span>
                                                                        </p>
                                                                        <p className="text-sm md:text-xs leading-none text-gray-800">
                                                                            <span className="text-gray-300">Size : </span> <span className='dark:text-gray-500'>{item.size}</span>
                                                                        </p>
                                                                        <p className="text-sm md:text-xs leading-none text-gray-800">
                                                                            <span className="text-gray-300">Gender : </span> <span className='dark:text-gray-500'>{item.Gender}</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex justify-between md:justify-end space-x-8 items-start w-full">
                                                                    <p className="text-base md:text-sm">
                                                                        {Number(item.price).toLocaleString()}원 <span className="text-gray-300 block line-through dark:text-gray-500"> {Number(item.price * 1.1).toLocaleString()}원</span>
                                                                    </p>
                                                                    <p className="text-base md:text-sm text-gray-800 dark:text-white">{item.count}개</p>
                                                                    <p className="text-base md:text-sm">{Number(item.price * item.count).toLocaleString()}원</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="info">
                                        <div className="grid-flow-row">
                                            <div className="grid-cols-7 mb-1 md:mb-0">
                                                <span id="heading" className='font-semibold'>배송예정일</span><br />
                                                {
                                                    List == null
                                                        ? <span id="details" className='mt-1 md:mt-0 text-sm md:text-base'></span>
                                                        : <span id="details" className='mt-1 md:mt-0 text-sm md:text-base'>{todayTime(7).slice(0, 9)} <span>{todayTime(7).slice(9, 12)}</span> <span>{todayTime(7).slice(12, 20)}</span></span>
                                                }
                                            </div>
                                            <div className="grid-cols-5 pull-right">
                                                <span id="heading" className='font-semibold'>배송자 이메일</span><br />
                                                <span id="details" className='text-sm md:text-base'>{ExpressData[0]?.email}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pricing bg-[#ddd3] dark:bg-gray-800">
                                        <div className="grid-flow-col">
                                            <div className="grid-cols-9 font-semibold">
                                                <span id="name">배송지 주소</span>
                                            </div>
                                            <div className="grid-cols-3">
                                                <span id="price" className='text-sm md:text-base'>{ExpressData[0]?.address} {ExpressData[0]?.detailAddress}</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="grid-cols-9 font-semibold">
                                                <span id="name">배송자 전화번호</span>
                                            </div>
                                            <div className="grid-cols-3">
                                                <span id="price" className='text-sm md:text-base'>{ExpressData[0]?.telephone}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="total">
                                        <div className="grid-flow-col">
                                            <div className="grid-cols-9 mb-2 text-sm md:text-base dark:text-gray-100">결제 가격</div>
                                            <div className="grid-cols-3 text-lg md:text-2xl dark:text-white">{ExpressData[0]?.totalPrice}원</div>
                                        </div>
                                    </div>

                                    <div className="tracking border-t border-gray-300 mx-[8%]">
                                        <div className="font-semibold my-5 text-xl md:text-2xl">배송현황</div>
                                    </div>
                                    <div className="progress-track">
                                        <ul id="progressbar">
                                            <li className={`${List ? "active" : ""} `} id="step1">주문확인</li>
                                            <li className={`${List ? "active" : ""} text-left`} id="step2"><span className='hidden md:inline-block'>상품을</span> 입고/검수 중입니다.</li>
                                            <li className={`${List ? "active" : ""} text-right`} id="step3"><span className='hidden md:inline-block'>상품을</span> 배송 중 입니다.</li>
                                            <li className="text-right" id="step4">배송완료</li>
                                        </ul>
                                    </div>
                                    <div className="footer relative mt-10">
                                        <div className='w-full md:w-auto mx-auto text-center'>
                                            {
                                                List == null
                                                    ? <React.Fragment>
                                                        <button
                                                            type='button'
                                                            className='w-full text-sm md:text-base mr-[8%] inline-block px-8 py-3 bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 font-semibold rounded-lg hover:opacity-75 duration-500'
                                                        >
                                                            배송 취소
                                                        </button>
                                                    </React.Fragment>
                                                    : <React.Fragment>
                                                        <button
                                                            type='button'
                                                            onClick={() => { DeleteData(); }}
                                                            className='w-full text-sm md:text-base mr-[8%] inline-block px-8 py-3 bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 font-semibold rounded-lg hover:opacity-75 duration-500'
                                                        >
                                                            배송 취소
                                                        </button>
                                                    </React.Fragment>
                                            }
                                        </div>
                                        <p className="text-xs md:text-sm mt-5 text-center md:text-left dark:text-gray-100">그 외에 궁금하신 사안이 있다면 <Link href="/Contact"><b className='hover:opacity-75'>Contact Us</b></Link> 페이지에서 문의해주세요</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <style jsx>{Delivery_Style}</style>
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default Delivery