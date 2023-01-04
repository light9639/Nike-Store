import React, { useState } from "react";
import HeadInfo from "@components/HeadInfo/HeadInfo";
import Fade from 'react-reveal/Fade';
import { RightData, LeftData } from "@data/Contact_data";
import { ContactType } from "@lib/TypeBox";

export default function Contact(): JSX.Element {

    return (
        <React.Fragment>
            <HeadInfo title="Contact Page" contents="Contact Page"></HeadInfo>

            {/* <section className="max-w-screen-xl mx-auto rounded-xl">
                <div className="my-20">
                    <div className="lg:flex lg:items-center lg:-mx-10">
                        <div className="lg:m-10 lg:w-1/2 lg:mx-10 shadow-xl p-16 rounded-3xl dark:bg-gray-900">
                            <Fade bottom cascade>
                                <h1 className="text-3xl font-extrabold">문의하기</h1>
                                <p className="mt-7 text-sm lg:text-base">
                                    Nike 사이트에 오신 것을 환영합니다.
                                    연락을 원하시거나 궁금한 점이 있다면 언제든지 문의 부탁드립니다.
                                </p>
                            </Fade>
                            <hr className="mt-8 border-gray-300" />

                            <form className="mt-8">
                                <div className="-mx-2 md:items-center md:flex">
                                    <div className="flex-1 px-2">
                                        <Fade bottom cascade>
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">이름</label>
                                            <input type="text" placeholder="Lee Dong ho" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </Fade>
                                    </div>

                                    <div className="flex-1 px-2 mt-4 md:mt-0">
                                        <Fade bottom cascade>
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">이메일</label>
                                            <input type="email" placeholder="dong963939@gmail.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </Fade>
                                    </div>
                                </div>

                                <div className="w-full mt-4">
                                    <Fade bottom cascade>
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">메세지</label>
                                        <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-white dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="메세지를 입력하세요."></textarea>
                                    </Fade>
                                </div>

                                <Fade bottom cascade>
                                    <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        보내기
                                    </button>
                                </Fade>
                            </form>
                        </div>

                        <div className="my-28 flex lg:mt-0 flex-col items-center lg:w-1/2 lg:ml-14 lg:-mr-8">
                            <Fade right>
                                <img className="object-cover mx-auto rounded-full lg:block shrink-0 w-72 lg:w-96 h-72 lg:h-96" src="https://raw.githubusercontent.com/light9639/ImgStorage/main/shoestore/index/Contact.jpg" alt="" />
                            </Fade>

                            <div className="mt-6 space-y-8 md:mt-8">
                                <Fade right cascade>
                                    <p className="flex items-start -mx-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>

                                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                                            서울특별시 강남구 역삼1동 테헤란로 152
                                        </span>
                                    </p>

                                    <p className="flex items-start -mx-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>

                                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">080-022-0182</span>
                                    </p>

                                    <p className="flex items-start -mx-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>

                                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">dong963939@gmail.com</span>
                                    </p>
                                </Fade>
                            </div>

                            <div className="mt-6 w-80 md:mt-8">
                                <Fade right cascade>
                                    <h3 className="text-gray-600 dark:text-gray-300 ">Follow us</h3>

                                    <div className="flex mt-4 -mx-1.5 ">
                                        <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="#">
                                            <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                                            </svg>
                                        </a>

                                        <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="#">
                                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
                                                <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                                                <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
                                            </svg>
                                        </a>

                                        <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="#">
                                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z" fill="currentColor" />
                                            </svg>
                                        </a>

                                        <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="#">
                                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z" fill="currentColor" />
                                            </svg>
                                        </a>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="relative z-0 overflow-hidden py-20 lg:pt-40 lg:pb-48">
                <div className="max-w-7xl mx-auto">
                    <div className="-mx-4 flex flex-wrap lg:justify-between">
                        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                            <div className="mb-12 max-w-[570px] lg:mb-0 text-center lg:text-left">
                                <span className="text-primary mb-4 block text-base font-semibold text-gray-900 dark:text-blue-600">
                                    <Fade bottom cascade>Contact Us</Fade>
                                </span>
                                <h2
                                    className="text-dark mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]"
                                >
                                    <Fade bottom cascade>GET IN TOUCH WITH US</Fade>
                                </h2>
                                <Fade bottom cascade>
                                    <p className="text-body-color text-base leading-relaxed">Nike 사이트에 오신 것을 환영합니다.</p>
                                    <p className="text-body-color mb-9 text-base leading-relaxed">연락을 원하시거나 궁금한 점이 있다면 언제든지 문의 부탁드립니다.</p>
                                </Fade>
                                <div className="mb-8 block lg:flex w-full max-w-[370px] mx-auto lg:mx-0">
                                    <Fade>
                                        <div
                                            className="bg-gray-500 dark:bg-gray-900 lg:mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-lg bg-opacity-5 sm:h-[70px] sm:max-w-[70px] text-gray-900 dark:text-blue-600 mx-auto lg:mx-0"
                                        >
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                className="fill-current "
                                            >
                                                <path
                                                    d="M21.8182 24H16.5584C15.3896 24 14.4156 23.0256 14.4156 21.8563V17.5688C14.4156 17.1401 14.0649 16.7893 13.6364 16.7893H10.4026C9.97403 16.7893 9.62338 17.1401 9.62338 17.5688V21.8173C9.62338 22.9866 8.64935 23.961 7.48052 23.961H2.14286C0.974026 23.961 0 22.9866 0 21.8173V8.21437C0 7.62972 0.311688 7.08404 0.818182 6.77223L11.1039 0.263094C11.6494 -0.0876979 12.3896 -0.0876979 12.9351 0.263094L23.2208 6.77223C23.7273 7.08404 24 7.62972 24 8.21437V21.7783C24 23.0256 23.026 24 21.8182 24ZM10.3636 15.4251H13.5974C14.7662 15.4251 15.7403 16.3995 15.7403 17.5688V21.8173C15.7403 22.246 16.0909 22.5968 16.5195 22.5968H21.8182C22.2468 22.5968 22.5974 22.246 22.5974 21.8173V8.25335C22.5974 8.13642 22.5195 8.01949 22.4416 7.94153L12.1948 1.4324C12.0779 1.35445 11.9221 1.35445 11.8442 1.4324L1.55844 7.94153C1.44156 8.01949 1.4026 8.13642 1.4026 8.25335V21.8563C1.4026 22.285 1.75325 22.6358 2.18182 22.6358H7.48052C7.90909 22.6358 8.25974 22.285 8.25974 21.8563V17.5688C8.22078 16.3995 9.19481 15.4251 10.3636 15.4251Z"
                                                />
                                            </svg>
                                        </div>
                                    </Fade>
                                    <div className="w-full mt-3 lg:mt-0">
                                        <Fade bottom cascade>
                                            <h4 className="text-dark mb-1 text-xl font-bold">Our Location</h4>
                                            <p className="text-body-color text-sm lg:text-base tracking-tighter">서울특별시 강남구 역삼1동 테헤란로 152</p>
                                        </Fade>
                                    </div>
                                </div>
                                <div className="mb-8 block lg:flex w-full max-w-[370px] mx-auto lg:mx-0">
                                    <Fade>
                                        <div
                                            className="bg-gray-500 dark:bg-gray-900 lg:mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-lg bg-opacity-5 sm:h-[70px] sm:max-w-[70px] text-gray-900 dark:text-blue-600 mx-auto lg:mx-0"
                                        >
                                            <svg
                                                width="24"
                                                height="26"
                                                viewBox="0 0 24 26"
                                                className="fill-current"
                                            >
                                                <path
                                                    d="M22.6149 15.1386C22.5307 14.1704 21.7308 13.4968 20.7626 13.4968H2.82869C1.86042 13.4968 1.10265 14.2125 0.97636 15.1386L0.092295 23.9793C0.0501967 24.4845 0.21859 25.0317 0.555377 25.4106C0.892163 25.7895 1.39734 26 1.94462 26H21.6887C22.1939 26 22.6991 25.7895 23.078 25.4106C23.4148 25.0317 23.5832 24.5266 23.5411 23.9793L22.6149 15.1386ZM21.9413 24.4424C21.8992 24.4845 21.815 24.5687 21.6466 24.5687H1.94462C1.81833 24.5687 1.69203 24.4845 1.64993 24.4424C1.60783 24.4003 1.52364 24.3161 1.56574 24.1477L2.4498 15.2649C2.4498 15.0544 2.61819 14.9281 2.82869 14.9281H20.8047C21.0152 14.9281 21.1415 15.0544 21.1835 15.2649L22.0676 24.1477C22.0255 24.274 21.9834 24.4003 21.9413 24.4424Z"
                                                />
                                                <path
                                                    d="M11.7965 16.7805C10.1547 16.7805 8.84961 18.0855 8.84961 19.7273C8.84961 21.3692 10.1547 22.6742 11.7965 22.6742C13.4383 22.6742 14.7434 21.3692 14.7434 19.7273C14.7434 18.0855 13.4383 16.7805 11.7965 16.7805ZM11.7965 21.2008C10.9966 21.2008 10.3231 20.5272 10.3231 19.7273C10.3231 18.9275 10.9966 18.2539 11.7965 18.2539C12.5964 18.2539 13.2699 18.9275 13.2699 19.7273C13.2699 20.5272 12.5964 21.2008 11.7965 21.2008Z"
                                                />
                                                <path
                                                    d="M1.10265 7.85562C1.18684 9.70794 2.82868 10.4657 3.67064 10.4657H6.61752C6.65962 10.4657 6.65962 10.4657 6.65962 10.4657C7.92257 10.3815 9.18552 9.53955 9.18552 7.85562V6.84526C10.5748 6.84526 13.7742 6.84526 15.1635 6.84526V7.85562C15.1635 9.53955 16.4264 10.3815 17.6894 10.4657H17.7315H20.6363C21.4782 10.4657 23.1201 9.70794 23.2043 7.85562C23.2043 7.72932 23.2043 7.26624 23.2043 6.84526C23.2043 6.50847 23.2043 6.21378 23.2043 6.17169C23.2043 6.12959 23.2043 6.08749 23.2043 6.08749C23.078 4.90874 22.657 3.94047 21.9413 3.18271L21.8992 3.14061C20.8468 2.17235 19.5838 1.62507 18.6155 1.28828C15.795 0.193726 12.2587 0.193726 12.0903 0.193726C9.6065 0.235824 8.00677 0.446315 5.60716 1.28828C4.681 1.58297 3.41805 2.13025 2.36559 3.09851L2.3235 3.14061C1.60782 3.89838 1.18684 4.86664 1.06055 6.04539C1.06055 6.08749 1.06055 6.12959 1.06055 6.12959C1.06055 6.21378 1.06055 6.46637 1.06055 6.80316C1.10265 7.18204 1.10265 7.68722 1.10265 7.85562ZM3.37595 4.15097C4.21792 3.3932 5.27038 2.93012 6.15444 2.59333C8.34355 1.79346 9.7749 1.62507 12.1745 1.58297C12.3429 1.58297 15.6266 1.62507 18.1525 2.59333C19.0365 2.93012 20.089 3.3511 20.931 4.15097C21.394 4.65615 21.6887 5.32972 21.7729 6.12959C21.7729 6.25588 21.7729 6.46637 21.7729 6.80316C21.7729 7.22414 21.7729 7.68722 21.7729 7.81352C21.7308 8.78178 20.8047 8.99227 20.6784 8.99227H17.7736C17.3526 8.95017 16.679 8.78178 16.679 7.85562V6.12959C16.679 5.7928 16.4685 5.54021 16.1738 5.41392C15.9213 5.32972 8.55405 5.32972 8.30146 5.41392C8.00677 5.49811 7.79628 5.7928 7.79628 6.12959V7.85562C7.79628 8.78178 7.1227 8.95017 6.70172 8.99227H3.79694C3.67064 8.99227 2.74448 8.78178 2.70238 7.81352C2.70238 7.68722 2.70238 7.22414 2.70238 6.80316C2.70238 6.46637 2.70238 6.29798 2.70238 6.17169C2.61818 5.32972 2.91287 4.65615 3.37595 4.15097Z"
                                                />
                                            </svg>
                                        </div>
                                    </Fade>
                                    <div className="w-full mt-3 lg:mt-0">
                                        <Fade bottom cascade>
                                            <h4 className="text-dark mb-1 text-xl font-bold">Phone Number</h4>
                                            <p className="text-body-color text-sm lg:text-base tracking-tighter">080-022-0182</p>
                                        </Fade>
                                    </div>
                                </div>
                                <div className="mb-8 block lg:flex w-full max-w-[370px] mx-auto lg:mx-0">
                                    <Fade>
                                        <div
                                            className="bg-gray-500 dark:bg-gray-900 lg:mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-lg bg-opacity-5 sm:h-[70px] sm:max-w-[70px] text-gray-900 dark:text-blue-600 mx-auto lg:mx-0"
                                        >
                                            <svg
                                                width="28"
                                                height="19"
                                                viewBox="0 0 28 19"
                                                className="fill-current"
                                            >
                                                <path
                                                    d="M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z"
                                                />
                                            </svg>
                                        </div>
                                    </Fade>
                                    <div className="w-full mt-3 lg:mt-0">
                                        <Fade bottom cascade>
                                            <h4 className="text-dark mb-1 text-xl font-bold">Email Address</h4>
                                            <p className="text-body-color text-sm lg:text-base tracking-tighter">dong963939@gmail.com</p>
                                        </Fade>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="relative rounded-lg bg-white dark:bg-gray-900 p-8 shadow-lg sm:p-12">
                                <form>
                                    <div className="mb-6">
                                        <Fade bottom>
                                            <input
                                                type="text"
                                                placeholder="이름을 작성해주세요."
                                                className="dark:placeholder-white dark:border-gray-900 w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                            />
                                        </Fade>
                                    </div>
                                    <div className="mb-6">
                                        <Fade bottom>
                                            <input
                                                type="email"
                                                placeholder="이메일을 작성해주세요."
                                                className="dark:placeholder-white dark:border-gray-900 w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                            />
                                        </Fade>
                                    </div>
                                    <div className="mb-6">
                                        <Fade bottom>
                                            <input
                                                type="text"
                                                placeholder="전화번호를 작성해주세요."
                                                className="dark:placeholder-white dark:border-gray-900 w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                            />
                                        </Fade>
                                    </div>
                                    <div className="mb-6">
                                        <Fade bottom>
                                            <textarea
                                                rows={6}
                                                placeholder="메세지를 작성해주세요."
                                                className="dark:placeholder-white dark:border-gray-900 w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                            ></textarea>
                                        </Fade>
                                    </div>
                                    <div>
                                        <Fade bottom>
                                            <button
                                                type="submit"
                                                className="bg-gray-800 dark:bg-blue-600 w-full rounded p-3 text-white transition hover:bg-opacity-90"
                                            >
                                                보내기
                                            </button>
                                        </Fade>
                                    </div>
                                </form>

                                <div>
                                    <span className="absolute -top-10 -right-9 z-[-1]">
                                        <svg
                                            width="100"
                                            height="100"
                                            viewBox="0 0 100 100"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                                                className="fill-slate-900 dark:fill-blue-600"
                                            />
                                        </svg>
                                    </span>
                                    <span className="absolute -right-10 top-[90px] z-[-1]">
                                        <svg
                                            width="34"
                                            height="134"
                                            viewBox="0 0 34 134"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {
                                                RightData.map(function (item: ContactType, idx: number) {
                                                    return (
                                                        <React.Fragment key={idx}>
                                                            <circle
                                                                cx={item.cx}
                                                                cy={item.cy}
                                                                r={item.r}
                                                                transform={item.transform}
                                                                className="fill-slate-900 dark:fill-blue-600"
                                                            />
                                                        </React.Fragment>
                                                    )
                                                })
                                            }
                                        </svg>
                                    </span>
                                    <span className="absolute -left-7 -bottom-7 z-[-1]">
                                        <svg
                                            width="107"
                                            height="134"
                                            viewBox="0 0 107 134"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {
                                                LeftData.map(function (item: ContactType, idx: number) {
                                                    return (
                                                        <React.Fragment key={idx}>
                                                            <circle
                                                                cx={item.cx}
                                                                cy={item.cy}
                                                                r={item.r}
                                                                transform={item.transform}
                                                                className="fill-slate-900 dark:fill-blue-600"
                                                            />
                                                        </React.Fragment>
                                                    )
                                                })
                                            }
                                        </svg>
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );
}