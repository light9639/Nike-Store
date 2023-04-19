/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useState } from 'react'
import DarkModeToggleButton from '../DarkModeToggleButton';
import HeaderBanner from "../HeaderBanner";
import { useSession, signOut } from "next-auth/react";
import { HeaderType, HeaderMobileType } from "@lib/HeaderType";
import { First, Second, Recent, Mobile1, Mobile2, Mobile3, Mobile4 } from './Header_data'
import { useRouter } from 'next/router';
import { persistor } from 'pages/_app';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import { changeValue } from 'features/SearchSlice';

export default function Nav(): JSX.Element {
    const [open, setOpen] = useState<boolean>(false);
    const [flyer, setFlyer] = useState<boolean>(false);
    const [flyerTwo, setFlyerTwo] = useState<boolean>(false);
    const [advertise, setAdvertise] = useState<boolean>(true);
    const { data, status } = useSession();

    const state = useAppSelector((state) => state.search.value);
    const dispatch = useAppDispatch();

    const router = useRouter();
    const Path = router.pathname;

    const sleep = (delay: number | undefined) => new Promise(resolve => setTimeout(resolve, delay));
    const purge = async () => {
        location.reload();
        await persistor.purge(); // persistStore의 데이터 전부 날림
    };

    async function LoginAlert() {
        if (router.pathname != '/Login') {
            if (confirm("현재 로그인된 상태가 아닙니다. 로그인 하시겠습니까?")) {
                alert("로그인 페이지로 이동합니다.");
                await sleep(250);
                router.push('/Login')
            } else {
                alert("취소를 누르셨습니다.");
            }
        } else {
            return true
        }
    }

    async function LogOutAlert() {
        if (confirm("정말 로그아웃 하시겠습니까?")) {
            await sleep(250);
            signOut();
            purge();
        } else {
            alert("취소를 누르셨습니다.");
        }
    }

    return (
        <div className='w-screen border-b-2 border-gray-100 dark:border-slate-900 text-left'>

            <HeaderBanner></HeaderBanner>

            <div className="relative bg-white dark:bg-slate-900">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center py-6 lg:justify-start lg:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link href="/">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="w-14 sm:w-20 block dark:hidden"
                                    src="https://raw.githubusercontent.com/light9639/ImgStorage/main/shoestore/index/Logo.png"
                                    alt="reactLogo"
                                />
                                <img
                                    className="w-14 sm:w-20 hidden dark:block"
                                    src="https://raw.githubusercontent.com/light9639/ImgStorage/main/shoestore/index/Logo_Dark.png"
                                    alt="reactLogo"
                                />
                            </Link>
                        </div>
                        <div className="-mr-2 -my-2 lg:hidden">

                            <DarkModeToggleButton></DarkModeToggleButton>

                            <button
                                type="button"
                                className="bg-white dark:bg-slate-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-white hover:text-gray-500 dark:hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="sr-only">Open menu</span>
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                        <nav className="hidden lg:flex gap-10 ">
                            <div className="relative -ml-10">
                                <button
                                    type="button"
                                    className="group bg-white dark:bg-slate-900 rounded-md text-gray-500 dark:text-white inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-blue-500 pb-8'"
                                    onClick={() => (setFlyer(!flyer), setFlyerTwo(false))}
                                >
                                    <span>New Releases</span>
                                    <svg
                                        className={
                                            flyer === true
                                                ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                                                : "transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                        }
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                <div
                                    onMouseLeave={() => setFlyer(false)}
                                    className={
                                        flyer
                                            ? "opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 dark:border dark:border-slate-700 rounded-lg"
                                            : "opacity-0 translate-y-1 absolute -z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                    }
                                >
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="relative grid gap-6 bg-white dark:bg-slate-900 px-5 py-6 sm:gap-8 sm:p-8">
                                            {
                                                First && First.map(function (item: HeaderType, idx: number) {
                                                    return (
                                                        <Link href={item.href} key={idx} className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
                                                            <svg
                                                                className="flex-shrink-0 h-6 w-6 text-gray-900 dark:text-gray-200"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={1.5}
                                                                    d={item.svg}
                                                                />
                                                            </svg>
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900 dark:text-white">
                                                                    {item.p1}
                                                                </p>
                                                                <p className="mt-1 text-sm text-gray-500 dark:text-white">
                                                                    {item.p2}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="px-5 py-5 bg-gray-50 dark:bg-slate-900 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                            <div className="flow-root">
                                                <a
                                                    href="#void"
                                                    className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:hover:bg-slate-700"
                                                >
                                                    <svg
                                                        className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-white"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={1.5}
                                                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={1.5}
                                                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                    <span className="ml-3 dark:text-white">Watch Demo</span>
                                                </a>
                                            </div>
                                            <div className="flow-root">
                                                <a
                                                    href="#void"
                                                    className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:hover:bg-slate-700"
                                                >
                                                    <svg
                                                        className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-white"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={1.5}
                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                        />
                                                    </svg>
                                                    <span className="ml-3 dark:text-white">Contact Sales</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/Men"
                                className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-white"
                            >
                                Men
                            </Link>
                            <Link
                                href="/Women"
                                className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-white"
                            >
                                Women
                            </Link>
                            <Link
                                href="/Kids"
                                className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-white"
                            >
                                Kids
                            </Link>

                            <div className="relative">
                                <button
                                    type="button"
                                    className="group bg-white dark:bg-slate-900 rounded-md text-gray-500 dark:text-white inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-blue-500"
                                    onClick={() => (setFlyerTwo(!flyerTwo), setFlyer(false))}
                                >
                                    <span>Info</span>
                                    <svg
                                        className={
                                            flyerTwo === true
                                                ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 dark:text-white group-hover:text-gray-500 transition ease-out duration-200"
                                                : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                        }
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                {" "}
                                <div
                                    onMouseLeave={() => setFlyerTwo(false)}
                                    className={
                                        flyerTwo
                                            ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 dark:border dark:border-slate-700 rounded-lg"
                                            : " opacity-0 translate-y-1 absolute -z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                    }
                                >
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="relative grid gap-6 bg-white dark:bg-slate-900 px-5 py-6 sm:gap-8 sm:p-8">
                                            {
                                                Second && Second.map(function (item: HeaderType, idx: number) {
                                                    return (
                                                        <Link href={item.href} key={idx} className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
                                                            <svg
                                                                className="flex-shrink-0 h-6 w-6 text-gray-900 dark:text-gray-200"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={1.5}
                                                                    d={item.svg}
                                                                />
                                                            </svg>
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900 dark:text-white">
                                                                    {item.p1}
                                                                </p>
                                                                <p className="mt-1 text-sm text-gray-500 dark:text-white">
                                                                    {item.p2}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="px-5 py-5 bg-gray-50 dark:bg-slate-900 sm:px-8 sm:py-8">
                                            <div>
                                                <h3 className="text-sm tracking-wide font-medium text-gray-500 dark:text-white uppercase">
                                                    Recent Posts
                                                </h3>
                                                <ul className="mt-4 space-y-4">
                                                    {
                                                        Recent && Recent.map(function (item: { href: string, text: string }, idx: number) {
                                                            return (
                                                                <li className="text-base truncate">
                                                                    <Link href={item.href} className="font-medium text-gray-900 dark:text-white hover:text-gray-700">
                                                                        {item.text}
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                            <div className="mt-5 text-sm">
                                                <Link href="/Detail" className="font-medium text-blue-600 hover:text-blue-500">
                                                    View all posts <span aria-hidden="true">→</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
                            <form className="flex items-center mr-2">
                                <label htmlFor="voice-search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    {
                                        Path == "/Search"
                                            ? <React.Fragment>
                                                <input type="text" id="voice-search" disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 xl:hidden block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                <input type="text" id="voice-search" value="" disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 hidden xl:block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="페이지에서 검색해주세요." required />
                                            </React.Fragment>
                                            : <React.Fragment>
                                                <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 xl:hidden block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                <input
                                                    type="text"
                                                    id="voice-search"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 hidden xl:block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Search"
                                                    onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
                                                        if (event.key === 'Enter') {
                                                            dispatch(changeValue((event.target as HTMLInputElement).value));
                                                            router.push('/Search');
                                                        }
                                                    }}
                                                    required
                                                />
                                            </React.Fragment>
                                    }
                                    <button type="button" className="absolute inset-y-0 right-0 hidden xl:flex items-center pr-3">
                                        <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                            </form>
                            <DarkModeToggleButton></DarkModeToggleButton>

                            <Link href="/Login" className="Sign_Box">
                                {data?.user ? (
                                    <span className="line-clamp-1">My Page</span>
                                ) : (
                                    <span className="line-clamp-1">LOGIN</span>
                                )}
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        open
                            ? "fixed flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 z-[65] lg:hidden"
                            : "fixed flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 z-[65] lg:hidden"
                    }
                >
                    <div
                        className={
                            open
                                ? "fixed flex flex-col top-0 left-0 w-64 bg-white dark:bg-gray-900 h-full border-r dark:border-none duration-500 lg:duration-1000 z-[65]"
                                : "fixed flex flex-col top-0 -left-full w-64 bg-white dark:bg-gray-900 h-full border-r dark:border-none duration-[1.5s] lg:duration-[3s] z-[65]"
                        }
                    >
                        <div className="flex justify-center text-gray-900 dark:text-gray-100 lg:justify-start text-xl font-bold pt-3">
                            <Link className="hover:opacity-75 transition" href="/" onClick={() => setOpen(!open)}>Nike Store</Link>
                        </div>
                        <div className="flex flex-col items-center mt-6 -mx-2">
                            {data?.user ? (
                                <React.Fragment>
                                    <Link href="/Login" onClick={() => { setOpen(!open); }}><img className='object-cover w-24 h-24 mx-2 rounded-full cursor-pointer hover:opacity-75 transition' src={`${data?.user?.image}`} alt="profile" /></Link>
                                    <p className='mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200'>{data?.user?.name}</p>
                                    <p className='mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400'>{data?.user?.email}</p>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <Link href="#void" onClick={() => { LoginAlert(); setOpen(!open); }}><img className='bg-gray-100 object-cover w-24 h-24 mx-2 rounded-full cursor-pointer hover:opacity-75 transition' src="https://static.nid.naver.com/images/web/user/default.png?type=s160" alt="" /></Link>
                                    <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">Nike Store</h4>
                                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">Nike@example.com</p>
                                </React.Fragment>
                            )}
                        </div>
                        <form className="flex items-center py-4 mx-2">
                            <label htmlFor="voice-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                </div>
                                {
                                    Path == "/Search"
                                        ? <React.Fragment>
                                            <input type="text" value="" id="voice-search" disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 xl:hidden block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="페이지에서 검색해주세요." required />
                                            <input type="text" id="voice-search" disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 hidden xl:block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                                        </React.Fragment>
                                        : <React.Fragment>
                                            <input
                                                type="text"
                                                id="voice-search"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 xl:hidden block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required
                                                onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
                                                    if (event.key === 'Enter') {
                                                        dispatch(changeValue((event.target as HTMLInputElement).value))
                                                        router.push('/Search')
                                                        setOpen(!open);
                                                    }
                                                }}
                                                placeholder="Search"
                                            />
                                            <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 hidden xl:block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                                        </React.Fragment>
                                }
                                <button type="button" className="absolute inset-y-0 right-0 hidden xl:flex items-center pr-3">
                                    <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                        </form>
                        <div className="overflow-y-auto overflow-x-hidden flex-grow">
                            <ul className="flex flex-col py-4 space-y-1">
                                <li className="px-5">
                                    <div className="flex flex-row items-center h-8">
                                        <p className="text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-200">New Release</p>
                                    </div>
                                </li>
                                {
                                    Mobile1 && Mobile1.map(function (item: HeaderMobileType, idx: number) {
                                        return (
                                            <React.Fragment>
                                                <Link
                                                    href={item.href}
                                                    key={idx}
                                                    onClick={() => setOpen(!open)}
                                                >
                                                    <li>
                                                        <a className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-800 border-l-4 border-transparent hover:border-gray-500 dark:hover:border-blue-500 pr-6 cursor-pointer transition">
                                                            <span className="inline-flex justify-center items-center ml-4">
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={item.svg}></path>
                                                                </svg>
                                                            </span>
                                                            <span className="ml-2 text-sm tracking-wide truncate">{item.p1}</span>
                                                            <span className={`px-2 py-0.5 ml-auto text-xs font-medium tracking-wide rounded-full ${item.class}`}>{item.text}</span>
                                                        </a>
                                                    </li>
                                                </Link>
                                            </React.Fragment>
                                        )
                                    })
                                }
                                <li className="px-5">
                                    <div className="flex flex-row items-center h-8">
                                        <p className="text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-200">All Shoes</p>
                                    </div>
                                </li>
                                {
                                    Mobile2 && Mobile2.map(function (item: HeaderMobileType, idx: number) {
                                        return (
                                            <React.Fragment>
                                                <Link
                                                    href={item.href}
                                                    key={idx}
                                                    onClick={() => setOpen(!open)}
                                                >
                                                    <li>
                                                        <a className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-800 border-l-4 border-transparent hover:border-gray-500 dark:hover:border-blue-500 pr-6 cursor-pointer transition">
                                                            <span className="inline-flex justify-center items-center ml-4">
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={item.svg}></path>
                                                                </svg>
                                                            </span>
                                                            <span className="ml-2 text-sm tracking-wide truncate">{item.p1}</span>
                                                            <span className={`px-2 py-0.5 ml-auto text-xs font-medium tracking-wide rounded-full ${item.class}`}>{item.text}</span>
                                                        </a>
                                                    </li>
                                                </Link>
                                            </React.Fragment>
                                        )
                                    })
                                }
                                <li className="px-5">
                                    <div className="flex flex-row items-center h-8">
                                        <p className="text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-200">Info</p>
                                    </div>
                                </li>
                                {
                                    Mobile3 && Mobile3.map(function (item: HeaderMobileType, idx: number) {
                                        return (
                                            <React.Fragment>
                                                <Link
                                                    href={item.href}
                                                    key={idx}
                                                    onClick={() => setOpen(!open)}
                                                >
                                                    <li>
                                                        <a className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-800 border-l-4 border-transparent hover:border-gray-500 dark:hover:border-blue-500 pr-6 cursor-pointer transition">
                                                            <span className="inline-flex justify-center items-center ml-4">
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={item.svg}></path>
                                                                </svg>
                                                            </span>
                                                            <span className="ml-2 text-sm tracking-wide truncate">{item.p1}</span>
                                                            <span className={`px-2 py-0.5 ml-auto text-xs font-medium tracking-wide rounded-full ${item.class}`}>{item.text}</span>
                                                        </a>
                                                    </li>
                                                </Link>
                                            </React.Fragment>
                                        )
                                    })
                                }
                                <li className="px-5">
                                    <div className="flex flex-row items-center h-8">
                                        <p className="text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-200">Settings</p>
                                    </div>
                                </li>
                                {
                                    Mobile4 && Mobile4.map(function (item: HeaderMobileType, idx: number) {
                                        return (
                                            <React.Fragment>
                                                <Link
                                                    href={item.href}
                                                    key={idx}
                                                    onClick={() => setOpen(!open)}
                                                >
                                                    <li>
                                                        <a className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-800 border-l-4 border-transparent hover:border-gray-500 dark:hover:border-blue-500 pr-6 cursor-pointer transition">
                                                            <span className="inline-flex justify-center items-center ml-4">
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={item.svg}></path>
                                                                </svg>
                                                            </span>
                                                            <span className="ml-2 text-sm tracking-wide truncate">{item.p1}</span>
                                                            <span className={`px-2 py-0.5 ml-auto text-xs font-medium tracking-wide rounded-full ${item.class}`}>{item.text}</span>
                                                        </a>
                                                    </li>
                                                </Link>
                                            </React.Fragment>
                                        )
                                    })
                                }
                                {data?.user ? (
                                    <Link
                                        href="#void"
                                        onClick={() => { LogOutAlert(); setOpen(!open) }}
                                    >
                                        <li>
                                            <a className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-800 border-l-4 border-transparent hover:border-gray-500 dark:hover:border-blue-500 pr-6 cursor-pointer transition">
                                                <span className="inline-flex justify-center items-center ml-4">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                                    </svg>
                                                </span>
                                                <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
                                            </a>
                                        </li>
                                    </Link>
                                ) : (
                                    <Link
                                        href="#void"
                                        onClick={() => { LoginAlert(); setOpen(!open); }}
                                    >
                                        <li>
                                            <a className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer transition">
                                                <span className="inline-flex justify-center items-center ml-4">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                                    </svg>
                                                </span>
                                                <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
                                            </a>
                                        </li>
                                    </Link>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={
                    open
                        ? "fixed top-0 w-screen h-screen bg-black z-[60] lg:hidden duration-700 opacity-80"
                        : "opacity-0"
                }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" aria-hidden="true" className={
                        open
                            ? "fixed top-5 right-4 h-6 w-6 text-white lg:hidden hover:opacity-75 transition cursor-pointer"
                            : "hidden"
                    }
                        onClick={() => setOpen(!open)}
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </div>
            </div>
        </div >
    )
}