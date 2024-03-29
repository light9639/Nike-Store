import React, { useEffect, useState } from 'react'
import HeadInfo from '@components/HeadInfo'
import axios from 'axios';
import { DetailType } from '@lib/TypeBox'
import { ShoeViewType, SlideType } from '@lib/ShoeType'
import { motion } from "framer-motion";
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import type { NextPage } from "next";
import { useAppDispatch, useAppSelector } from '@app/hooks';
import { changeValue } from 'features/SearchSlice';
import { GetStaticProps } from 'next'

interface PropsType {
    Men: SlideType[];
    Women: SlideType[];
    Kids: SlideType[];
}

const Search: NextPage<PropsType> = ({ Men, Women, Kids }) => {
    const [shoeList, setShoeList] = useState<SlideType[]>([]);

    const state = useAppSelector((state) => state.search.value);
    const dispatch = useAppDispatch();

    function getData() {
        setShoeList([...Men, ...Women, ...Kids]);
    }

    const filtered = shoeList.filter((Search) => {
        return Search.name.toLowerCase().includes(state.toLowerCase());
    });

    useEffect(() => {
        getData()
    }, []);

    return (
        <React.Fragment>
            <HeadInfo title="Search Page" contents="Search Page"></HeadInfo>

            <div className='max-w-screen-2xl mx-auto my-20'>
                <Fade>
                    <h1 className="text-3xl lg:text-4xl text-gray-700 dark:text-white font-bold text-center mt-20">Nike Search Page</h1>
                </Fade>
                <Fade>
                    <form className='max-w-3xl my-10 mx-6 md:mx-auto w-auto md:w-[98%] lg:w-full'>
                        <label htmlFor="" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full py-3 md:py-4 pl-10 pr-4 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="원하시는 제품명을 입력해주세요."
                                required
                                value={state}
                                onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
                                    dispatch(changeValue((event.target as HTMLInputElement).value))
                                }}
                                onChange={(event) => {
                                    dispatch(changeValue(event.target.value))
                                }}
                            />
                            <input type="text" style={{ display: "none" }} />
                            <button type="button" className="text-gray-100 absolute right-0 bottom-0 bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-full border border-gray-300 dark:border-blue-600 text-sm py-3 md:p-4 w-24 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                </Fade>
                <div className="max-w-screen-xl mx-auto p-5 mb-4">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                        {
                            filtered.map(function (item: SlideType, idx: number) {
                                return (
                                    <Fade duration={500} key={item.index}>
                                        <div className="bg-white shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700 my-5 mx-auto md:mx-3 max-w-sm relative overflow-hidden">
                                            <div className='pb-5'>
                                                <img className="rounded-lg" src={item.src} alt={item.alt} />
                                            </div>
                                            <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
                                            <div className="px-8 pb-5">
                                                <h3 className="text-gray-900 font-semibold text-lg tracking-tight dark:text-white">{item.name}</h3>
                                                <span className='text-gray-500 text-xs leading-6'>{item.info}</span>
                                                <div className="flex items-center mt-1 mb-4">
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
                                                <div className="flex items-center justify-between">
                                                    <span className="text-lg font-bold text-gray-900 dark:text-white">{(item.price).toLocaleString()}원</span>
                                                    <Link href={`/view/${item.index}`}
                                                        className="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                    >
                                                        구매하기
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Fade>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const ShoeList_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Shoes.json'
    const res = await fetch(ShoeList_URL);
    const data = await res.json();

    return {
        props: {
            Men: data.Men,
            Women: data.Women,
            Kids: data.Kids,
        },
        revalidate: 20,
    };
}

export default Search;