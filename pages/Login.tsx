import React, { useEffect, useState } from 'react'
import HeadInfo from '@components/HeadInfo/HeadInfo';
import { signIn, useSession, signOut } from "next-auth/react";
import Loading from './loading';
import { LoginType } from '@lib/TypeBox';
import Fade from 'react-reveal/Fade';
import Slide from '@components/Slide/Slide';
import axios from 'axios';
import { DetailType } from "@lib/TypeBox";
import Link from 'next/link';

const LoginData = [
    {
        name: "google",
        content: "Sign in with Google",
        class: "w-full text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex justify-center items-center dark:focus:ring-[#4285F4]/55 mr-2",
        svg: "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
    },
    {
        name: "github",
        content: "Sign in with Github",
        class: "w-full text-white dark:text-black bg-[#24292F] dark:bg-white hover:bg-[#24292F]/90 dark:hover:bg-white/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex justify-center items-center dark:focus:ring-[#24292F]/55 mr-2",
        svg: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
    },
    {
        name: "naver",
        content: "Sign in with Naver",
        class: "w-full text-white bg-[#19ce60] hover:bg-[#19ce60]/90 focus:ring-4 focus:outline-none focus:ring-[#19ce60]/50 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex justify-center items-center dark:focus:ring-[#19ce60]/55 mr-2",
        svg: "M9 32V480H181.366V255.862L331.358 480H504V32H331.358V255.862L181.366 32H9Z"
    },
    {
        name: "kakao",
        content: "Sign in with Kakao",
        class: "w-full text-white bg-[#FEE500] hover:bg-[#FEE500]/90 focus:ring-4 focus:outline-none focus:ring-[#FEE500]/50 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex justify-center items-center dark:focus:ring-[#FEE500]/55 mr-2",
        svg: "M255.5 48C299.345 48 339.897 56.5332 377.156 73.5996C414.415 90.666 443.871 113.873 465.522 143.22C487.174 172.566 498 204.577 498 239.252C498 273.926 487.174 305.982 465.522 335.42C443.871 364.857 414.46 388.109 377.291 405.175C340.122 422.241 299.525 430.775 255.5 430.775C241.607 430.775 227.262 429.781 212.467 427.795C148.233 472.402 114.042 494.977 109.892 495.518C107.907 496.241 106.012 496.15 104.208 495.248C103.486 494.706 102.945 493.983 102.584 493.08C102.223 492.177 102.043 491.365 102.043 490.642V489.559C103.126 482.515 111.335 453.169 126.672 401.518C91.8486 384.181 64.1974 361.2 43.7185 332.575C23.2395 303.951 13 272.843 13 239.252C13 204.577 23.8259 172.566 45.4777 143.22C67.1295 113.873 96.5849 90.666 133.844 73.5996C171.103 56.5332 211.655 48 255.5 48Z"
    },
    {
        name: "facebook",
        content: "Sign in with facebook",
        class: "w-full text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex justify-center items-center dark:focus:ring-[#3b5998]/55 mr-2",
        svg: "M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
    }
]

export default function Login(): JSX.Element {
    const [list, setList] = useState<DetailType[]>([]);
    const { data, status } = useSession();
    const DETAIL_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Detail.json'

    useEffect(() => {
        axios.get(DETAIL_URL).then((res) => {
            setList(res.data.Post)
            console.log(res.data.Post)
        });
    }, []);

    if (status === 'loading') return <Loading></Loading>

    return (
        <React.Fragment>
            <HeadInfo title="login page" contents="login page" />

            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-2 lg:pt-28 lg:pb-32">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <Fade bottom><img className="w-40 block dark:hidden" src="https://raw.githubusercontent.com/light9639/ImgStorage/main/shoestore/index/Nike_Logo.png" alt="logo" /></Fade>
                    <Fade bottom><img className="w-40 hidden dark:block" src="https://raw.githubusercontent.com/light9639/ImgStorage/main/shoestore/index/Nike_Logo_Dark.png" alt="logo" /></Fade>
                </a>
                <div className="w-full bg-white rounded-xl shadow-2xl dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        {data?.user ? (
                            <React.Fragment>
                                {/* <div>
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                        <Fade bottom>My Page</Fade>
                                    </h1>
                                    <form className="space-y-4 md:space-y-6" action="">
                                        <div className='text-center'>
                                            <Fade><img className='mx-auto h-full my-5 rounded-md' src={`${data?.user?.image}`} alt="profile" /></Fade>
                                            <Fade bottom><p className='mb-2'>환영합니다 <span className='font-semibold'>{data?.user?.name}</span>님</p></Fade>
                                            <Fade bottom>
                                                <button
                                                    onClick={() => signOut()}
                                                    type="button"
                                                    className="text-white bg-black dark:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-5 "
                                                >
                                                    Logout
                                                </button>
                                            </Fade>
                                        </div>
                                    </form>
                                </div> */}
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Fade bottom>
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                        Sign in to your account
                                    </h1>
                                </Fade>

                                <form className="space-y-4 md:space-y-6 pt-5" action="#">
                                    <Fade bottom>
                                        {
                                            LoginData && LoginData.map(function (item: LoginType, idx: number) {
                                                return (
                                                    <React.Fragment>
                                                        <button
                                                            type="button"
                                                            className={item.class}
                                                            onClick={() => signIn(`${item.name}`)}
                                                            key={idx}
                                                        >
                                                            <svg className="mr-2 -ml-1 w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                                                <path fill="currentColor" d={item.svg}></path>
                                                            </svg>
                                                            <Fade bottom>
                                                                {item.content}
                                                            </Fade>
                                                        </button>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </Fade>
                                </form>
                                <div className="pt-6 space-y-4 text-gray-600 dark:text-gray-200 text-center">
                                    <Fade bottom cascade>
                                        <p className="text-xs">By proceeding, you agree to our <a href="#" className="underline">Terms of Use</a> and confirm you have read our <a href="#" className="underline">Privacy and Cookie Statement</a>.</p>
                                        <p className="text-xs">This site is protected by reCAPTCHA and the <a href="#" className="underline">Google Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a> apply.</p>
                                    </Fade>
                                </div>

                            </React.Fragment>
                        )}
                    </div>
                </div>
            </div>

            {/* <section className="relative block h-500-px">
                <div className="absolute top-0 w-full h-full bg-center bg-cover">
                    <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                </div>
                <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0px)" }}>
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </section> */}
            {data?.user ? (
                <section className="relative py-16 bg-blueGray-200">
                    <div className="max-w-screen-xl mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-900 w-full mb-6 shadow-xl dark:shadow-gray-900 rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            <img alt="Logo" src={`${data?.user?.image}`} className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="py-6 px-3 mt-32 sm:mt-0">
                                            <button className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                                Connect
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span><span className="text-sm text-blueGray-400">Friends</span>
                                            </div>
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span className="text-sm text-blueGray-400">Photos</span>
                                            </div>
                                            <div className="lg:mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span className="text-sm text-blueGray-400">Comments</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-12">
                                    <img alt="Logo" src={`${data?.user?.image}`} className="shadow-xl rounded-full h-auto align-middle mx-auto mb-10 border-none max-w-[200px] w-full" />
                                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                                        {data?.user?.name}
                                    </h3>
                                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                        {data?.user?.email}
                                    </div>
                                    <div className="mb-2 text-blueGray-600 mt-10">
                                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Solution Manager - Creative Tim Officer
                                    </div>
                                    <div className="mb-2 text-blueGray-600">
                                        <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>University of Computer Science
                                    </div>
                                </div>
                                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                                An artist of considerable range, Jenna the name taken by
                                                Melbourne-raised, Brooklyn-based Nick Murphy writes,
                                                performs and records all of his own music, giving it a
                                                warm, intimate feel with a solid groove structure. An
                                                artist of considerable range.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                null
            )}

            {data?.user ? (
                <section className="mb-28 lg:-mt-6">
                    <div className="container px-6 py-10 mx-auto">
                        <div className="text-center">
                            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">추천 글 목록</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
                            {
                                list && list.slice(0, 3).map(function (item: DetailType, idx: number) {
                                    return (
                                        <React.Fragment key={idx}>
                                            <div className="shadow-lg dark:bg-gray-900 p-3 rounded-xl text-center lg:text-left">
                                                <div className="relative">
                                                    <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={item.src} alt="" />

                                                    <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                                                        <img className="object-cover object-center w-10 h-10 rounded-full" src="https://avatars.githubusercontent.com/u/95972251?v=4" alt="" />

                                                        <div className="mx-4">
                                                            <h1 className="text-sm text-gray-700 dark:text-gray-200">Lee Dong ho</h1>
                                                            <p className="text-sm text-gray-500 dark:text-gray-400">Creative Director</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                                                    {item.h2}
                                                </h1>

                                                <hr className="w-32 my-4 lg:my-6 text-blue-500 mx-auto lg:mx-0" />

                                                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                                                    {item.p1} {item.p2}
                                                </p>

                                                <Link href={`/Detail/${item.index - 1}`} className="inline-block text-white bg-black dark:bg-blue-600 font-medium  rounded-lg text-sm px-5 py-3 mt-5">자세히 보기</Link>
                                            </div>

                                        </React.Fragment>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            ) : (
                null
            )}

        </React.Fragment >
    )
}