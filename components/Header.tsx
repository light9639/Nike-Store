/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useState } from 'react'
import DarkModeToggleButton from './DarkModeToggleButton';
import HeaderBanner from "./HeaderBanner";
import { useSession } from "next-auth/react";
import { HeaderType, HeaderMobileType } from "../pages/Type/TypeBox";
import { First, Second, Recent, Mobile, MobileText } from '../data/Header_data'

export default function Nav(): JSX.Element {
    const [open, setOpen] = useState<boolean>(false);
    const [flyer, setFlyer] = useState<boolean>(false);
    const [flyerTwo, setFlyerTwo] = useState<boolean>(false);
    const [advertise, setAdvertise] = useState<boolean>(true);
    const { data, status } = useSession();

    return (
        <div className='w-screen border-b-2 border-gray-100 dark:border-slate-900 text-left'>

            <HeaderBanner></HeaderBanner>

            <div className="relative bg-white dark:bg-slate-900">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center py-6 lg:justify-start lg:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link href="/">
                                <a href="">
                                    <span className="sr-only">Workflow</span>
                                    <img
                                        className="h-8 w-auto sm:h-10"
                                        src='/S_logo.png'
                                        alt="reactLogo"
                                    />
                                </a>
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
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                        <nav className="hidden lg:flex space-x-10">
                            <div className="relative">
                                <button
                                    type="button"
                                    className="group bg-white dark:bg-slate-900 rounded-md text-gray-500 dark:text-white inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 pb-8'"
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
                                                First.map(function (item: HeaderType, idx: number) {
                                                    return (
                                                        <Link href={item.href} key={idx}>
                                                            <a
                                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700"
                                                            >
                                                                <svg
                                                                    className="flex-shrink-0 h-6 w-6 text-blue-600"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
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
                                                            </a>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="px-5 py-5 bg-gray-50 dark:bg-slate-900 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                            <div className="flow-root">
                                                <a
                                                    href="#"
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
                                                            strokeWidth={2}
                                                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                    <span className="ml-3 dark:text-white">Watch Demo</span>
                                                </a>
                                            </div>
                                            <div className="flow-root">
                                                <a
                                                    href="#"
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
                                                            strokeWidth={2}
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
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                Men
                            </Link>
                            <Link
                                href="/Women"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                Women
                            </Link>
                            <Link
                                href="/Kids"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                Kids
                            </Link>

                            <div className="relative">
                                <button
                                    type="button"
                                    className="group bg-white dark:bg-slate-900 rounded-md text-gray-500 dark:text-white inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    onClick={() => (setFlyerTwo(!flyerTwo), setFlyer(false))}
                                >
                                    <span>Sale</span>
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
                                                Second.map(function (item: HeaderType, idx: number) {
                                                    return (
                                                        <Link href={item.href} key={idx}>
                                                            <a
                                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700"
                                                            >
                                                                <svg
                                                                    className="flex-shrink-0 h-6 w-6 text-blue-600"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
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
                                                            </a>
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
                                                        Recent.map(function (item: {href: string, text: string}, idx: number) {
                                                            return (
                                                                <li className="text-base truncate">
                                                                    <Link href={item.href}>
                                                                        <a
                                                                            className="font-medium text-gray-900 dark:text-white hover:text-gray-700"
                                                                        >
                                                                            {item.text}
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                            <div className="mt-5 text-sm">
                                                <Link href="/Detail">
                                                    <a
                                                        className="font-medium text-blue-600 hover:text-blue-500"
                                                    >
                                                        View all posts <span aria-hidden="true">→</span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">

                            <DarkModeToggleButton></DarkModeToggleButton>

                            <Link href="/Login">
                                <a
                                    href="#"
                                    className="Sign_Box"
                                >
                                    {data?.user ? (
                                        <>My Page</>
                                    ) : (
                                        <>LOGIN</>
                                    )}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className={
                        open
                            ? "mobile opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transform origin-top-right lg:hidden z-10"
                            : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden -z-10"
                    }
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-slate-900 divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Link href="/">
                                        <img
                                            className="h-8 w-auto cursor-pointer hover:opacity-75"
                                            src="/S_logo.png"
                                            alt="Workflow"
                                        />
                                    </Link>
                                </div>
                                <div className="-mr-2">
                                    <button
                                        type="button"
                                        className="bg-white dark:bg-slate-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <span className="sr-only">Close menu</span>
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
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {
                                        Mobile.map(function (item: HeaderMobileType, idx: number) {
                                            return (
                                                <Link href={item.href} key={idx}>
                                                    <a
                                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-slate-700"
                                                    >
                                                        <svg
                                                            className="flex-shrink-0 h-6 w-6 text-blue-600"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d={item.svg}
                                                            />
                                                        </svg>
                                                        <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">
                                                            {item.p1}
                                                        </span>
                                                    </a>
                                                </Link>
                                            )
                                        })
                                    }
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                {
                                    MobileText.map(function (item: { text: string }, idx: number) {
                                        return (
                                            <a
                                                href="#"
                                                className="text-base font-medium text-gray-900 dark:text-white hover:text-gray-700"
                                                key={idx}
                                            >
                                                {item.text}
                                            </a>
                                        )
                                    })
                                }
                            </div>
                            <div>
                            </div>
                            <div>
                                <Link href="/Login">
                                    <a
                                        href="#"
                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                                    >
                                        {data?.user ? (
                                            <>My Page</>
                                        ) : (
                                            <>LOGIN</>
                                        )}
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}