import React from 'react'

export default function Footer(): JSX.Element {
    return (
        <div className='bg-gray-900 w-screen'>
            <footer className="text-white pt-12 pb-8">
                <div className="container overflow-hidden flex flex-col lg:flex-row justify-between mx-auto px-4">
                    <h2 className="block mr-2 w-30 text-2xl font-serif font-bold">
                        Nike Store
                    </h2>
                    <div className="w-3/4 block sm:flex text-sm mt-6 lg:mt-0">
                        <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                            <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">이용안내</li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">검수기준</a></li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">이용정책</a></li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">페널티 정책</a></li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">커뮤니티 가이드라인</a></li>
                        </ul>
                        <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                            <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">고객지원</li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">공지사항</a></li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">서비스 소개</a></li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">쇼룸 안내</a></li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">판매자 방문접수</a></li>
                        </ul>
                        <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                            <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">판매물품</li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">특징</a></li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">가격 안내</a></li>
                            <li><a href="#" className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline">FAQ</a></li>
                        </ul>
                        <div className="text-gray-700 flex flex-col w-full">
                            <div className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide text-left">Follow Us</div>
                            <div className="flex pl-4 justify-start mt-2">
                                <a className="flex items-center text-gray-300 hover:text-white mr-6 no-underline" href="https://www.facebook.com/nike">
                                    <svg viewBox="0 0 24 24" className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" /></svg>
                                </a>
                                <a className="flex items-center text-gray-300 hover:text-white mr-6 no-underline" href="https://twitter.com/nikecom_kr">
                                    <svg viewBox="0 0 24 24" className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" /></svg>
                                </a>
                                <a className="flex items-center text-gray-300 hover:text-white no-underline" href="https://www.youtube.com/user/nike">
                                    <svg className="fill-current w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M11.28 17.6a.604.604 0 0 1-.2.24.43.43 0 0 1-.24.08c-.08 0-.133-.027-.16-.08a.557.557 0 0 1-.04-.24v-2.96h-.72v3.28a1 1 0 0 0 .12.52c.08.133.2.2.36.2.16 0 .307-.053.44-.16.133-.107.28-.24.44-.4v.48H12v-3.92h-.72v2.96zM6.96 14v-.8H9.6v.8h-.88v4.56h-.88V14h-.88zm4.96-4.72c-.107 0-.2-.04-.28-.12a.384.384 0 0 1-.12-.28v-2.4c0-.053.027-.107.08-.16.053-.053.147-.08.28-.08.133 0 .24.027.32.08a.27.27 0 0 1 .12.24v2.32c0 .107-.04.2-.12.28a.384.384 0 0 1-.28.12zm2 8.32c0-.64.027-1.307.08-2 0-.107-.04-.2-.12-.28-.08-.08-.16-.12-.24-.12h-.12l-.24.16v2.4l.24.16.16.08c.107 0 .173-.027.2-.08.027-.053.04-.16.04-.32zm.08-3.04c.213 0 .387.08.52.24.133.16.2.4.2.72v2.24c0 .267-.053.48-.16.64a.422.422 0 0 1-.44.2 2.1 2.1 0 0 1-.48-.12.506.506 0 0 1-.28-.24v.32h-.8V13.2h.8v1.76c.107-.107.213-.2.32-.28a.532.532 0 0 1 .32-.12zm3.92 5.12c.267-.213.427-.907.48-2.08.053-.587.107-1.147.16-1.68 0-.48-.053-1.013-.16-1.6-.107-1.173-.28-1.893-.52-2.16-.24-.267-1.267-.453-3.08-.56l-2.64-.08-2.72.08c-1.813.107-2.84.293-3.08.56-.24.267-.413.987-.52 2.16a16.07 16.07 0 0 0-.08 1.6c0 .533.027 1.093.08 1.68.107 1.173.28 1.88.52 2.12.24.24 1.267.44 3.08.6l2.72.08 2.64-.08c1.813-.16 2.853-.347 3.12-.56v-.08zM8.4 4h-.96l1.12 3.6v2.24h.96v-2.4L10.64 4h-.96l-.56 2.32h-.08L8.4 4zm2.32 2.56V8.8c0 .373.107.667.32.88.213.213.507.32.88.32s.667-.107.88-.32c.213-.213.32-.507.32-.88V6.56c0-.32-.107-.587-.32-.8-.213-.213-.507-.32-.88-.32s-.667.107-.88.32c-.213.213-.32.48-.32.8zm3.12-.96v3.6a1 1 0 0 0 .12.52c.08.133.213.2.4.2.187 0 .36-.04.52-.12.16-.08.32-.2.48-.36v.48h.88V5.6h-.88v3.2a.523.523 0 0 1-.24.24.645.645 0 0 1-.28.08c-.08 0-.133-.013-.16-.04-.027-.027-.04-.093-.04-.2V5.52h-.8v.08zM12 0c2.187 0 4.2.533 6.04 1.6a11.793 11.793 0 0 1 4.36 4.36C23.467 7.8 24 9.813 24 12s-.533 4.2-1.6 6.04a11.793 11.793 0 0 1-4.36 4.36C16.2 23.467 14.187 24 12 24s-4.2-.533-6.04-1.6a11.793 11.793 0 0 1-4.36-4.36C.533 16.2 0 14.187 0 12s.533-4.2 1.6-6.04A11.793 11.793 0 0 1 5.96 1.6C7.8.533 9.813 0 12 0zm4.56 16.08l-.08-.4c0-.16-.027-.28-.08-.36a.27.27 0 0 0-.24-.12.27.27 0 0 0-.24.12c-.053.08-.08.2-.08.36v.4h.72zm-.32-1.52c.32 0 .573.093.76.28.187.187.28.467.28.84v.96h-1.44v.8c0 .16.027.28.08.36.053.08.147.12.28.12.133 0 .227-.04.28-.12.053-.08.08-.227.08-.44v-.16h.72v.24c0 .373-.093.667-.28.88-.187.213-.453.32-.8.32-.347 0-.613-.107-.8-.32-.187-.213-.28-.507-.28-.88v-1.76c0-.32.107-.587.32-.8.213-.213.48-.32.8-.32z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 pt-6 text-gray-600 border-t border-gray-800 flex flex-col md:flex-row justify-center items-center">
                    <div>© 2020 Shoe Store Agency LLC.</div>
                    <div>&nbsp;All rights reserved.</div>
                </div>
            </footer>
        </div>
    )
}