import React, { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import HeadInfo from '@components/HeadInfo'
import { useRouter } from 'next/router'
import axios from 'axios';
import { product, ReviewData1, ReviewData2 } from '@data/View_data';
import { signIn, useSession, signOut } from "next-auth/react";
import Modal from '@components/Modal';
import Loading from '../loading';
import { ReviewType } from '@lib/TypeBox'
import { productColors, productSize } from '@lib/ProductType'
import { ShoeViewType, StarType } from '@lib/ShoeType'
import Image from 'next/image';
import { useAppDispatch } from 'app/hooks';
import { addDetailData } from 'features/DataSlice';
import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from 'next'

interface PageType {
    postData: { Every: ShoeViewType[]; };
    paramsID: number;
}

const View: NextPage<PageType> = ({ postData, paramsID }) => {
    const [selectedColor, setSelectedColor] = useState<productColors>(product.colors[0])
    const [selectedSize, setSelectedSize] = useState<productSize>(product.sizes[2])
    const [Show, setShow] = useState<boolean>(false)
    const [number, setNumber] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(true);
    const [buttonSize, setButtonSize] = useState<string>("240");

    // 리덕스 함수
    const dispatch = useAppDispatch();

    // 라우터 모음
    const router = useRouter()

    // 가져온 데이터
    const FetchData = postData.Every[paramsID];

    // next-auth 자료
    const { data, status } = useSession();

    // 기타 자료들
    const reviews = { href: '#void', average: 4, totalCount: 4 }

    // 모달 함수들
    const DetailShow = () => { setShow(!Show) }
    const chooseNumber = (a: number) => { setNumber(a) }

    // 담기 버튼 클릭 후 로그인 페이지로 이동
    function AddCart() {
        setTimeout(() => {
            router.push('/Login')
        }, 750);
    }

    useEffect(() => {
        axios.get("").then((res) => {
            setLoading(false);
        });
        FetchData.size = "240"
    }, []);

    return (
        <React.Fragment>
            <HeadInfo title={`${FetchData.name} 페이지`} contents={`${FetchData.name} 페이지`} />

            {loading
                ? <Loading></Loading>
                : <React.Fragment>
                    {
                        Show == true ?
                            <div>
                                <div
                                    id="modal"
                                    className="fixed top-0 left-0 z-[75] w-screen h-screen bg-black/75 dark:bg-black/85 flex justify-center items-center"
                                >
                                    <a className="fixed z-[75] top-3 lg:top-6 right-3 lg:right-8 text-white text-5xl font-bold hover:opacity-50 transition" href="#void" onClick={() => { DetailShow() }}>&times;</a>
                                    <TabContent number={number} FetchData={FetchData}></TabContent>
                                    <div className='flex absolute bottom-5 gap-5 justify-center items-center'>
                                        <img
                                            src={FetchData.src.first}
                                            alt={FetchData.alt}
                                            id="modal-img"
                                            className={`max-[480px]:max-h-[50px] max-h-[75px] object-cover rounded cursor-pointer hover:opacity-100 -ml-5 md:ml-0 ${number == 0 ? 'opacity-100' : 'opacity-50'}`}
                                            onClick={() => { chooseNumber(0) }}
                                        />
                                        <img
                                            src={FetchData.src.second}
                                            alt={FetchData.alt}
                                            id="modal-img"
                                            className={`max-[480px]:max-h-[50px] max-h-[75px] object-cover rounded cursor-pointer hover:opacity-100 ${number == 1 ? 'opacity-100' : 'opacity-50'}`}
                                            onClick={() => { chooseNumber(1) }}
                                        />
                                        <img
                                            src={FetchData.src.third}
                                            alt={FetchData.alt}
                                            id="modal-img"
                                            className={`max-[480px]:max-h-[50px] max-h-[75px] object-cover rounded cursor-pointer hover:opacity-100 ${number == 2 ? 'opacity-100' : 'opacity-50'}`}
                                            onClick={() => { chooseNumber(2) }}
                                        />
                                        <img
                                            src={FetchData.src.four}
                                            alt={FetchData.alt}
                                            id="modal-img"
                                            className={`max-[480px]:max-h-[50px] max-h-[75px] object-cover rounded cursor-pointer hover:opacity-100 ${number == 3 ? 'opacity-100' : 'opacity-50'}`}
                                            onClick={() => { chooseNumber(3) }}
                                        />
                                        <img
                                            src={FetchData.src.five}
                                            alt={FetchData.alt}
                                            id="modal-img"
                                            className={`max-[480px]:max-h-[50px] max-h-[75px] object-cover rounded cursor-pointer hover:opacity-100 ${number == 4 ? 'opacity-100' : 'opacity-50'}`}
                                            onClick={() => { chooseNumber(4) }}
                                        />
                                        <img
                                            src={FetchData.src.six}
                                            alt={FetchData.alt}
                                            id="modal-img"
                                            className={`max-[480px]:max-h-[50px] max-h-[75px] object-cover rounded cursor-pointer hover:opacity-100 ${number == 5 ? 'opacity-100' : 'opacity-50'}`}
                                            onClick={() => { chooseNumber(5) }}
                                        />
                                    </div>
                                    <a
                                        className="fixed z-[75] top-1/2 left-1.5 lg:left-1.5 text-white hover:text-black dark:hover:text-white transition bg-slate-900 hover:bg-white dark:hover:bg-blue-600 rounded-full"
                                        href="#void"
                                        onClick={() => {
                                            if (number > 0) {
                                                chooseNumber(number - 1)
                                            } else {
                                                chooseNumber(5)
                                            }
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="p-2 lg:p-3 w-10 lg:w-12 h-10 lg:h-12">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                        </svg>
                                    </a>
                                    <a
                                        className="fixed z-[75] top-1/2 right-1.5 lg:right-1.5 text-white hover:text-black dark:hover:text-white transition bg-slate-900 hover:bg-white dark:hover:bg-blue-600 rounded-full"
                                        href="#void"
                                        onClick={() => {
                                            if (number < 5) {
                                                chooseNumber(number + 1)
                                            } else {
                                                chooseNumber(0)
                                            }
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="p-2 lg:p-3 w-10 lg:w-12 h-10 lg:h-12">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            : null
                    }
                    <div className="pt-6">
                        <nav aria-label="Breadcrumb">
                            <ol role="list" className="mx-auto flex max-w-2xl space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                <li>
                                    <div className="flex items-center">
                                        <a href="#vid" className="mr-2 text-sm font-medium text-gray-900 dark:text-white" onClick={() => router.push(FetchData.href)}>
                                            {FetchData.Gender}
                                        </a>
                                        <svg
                                            width={16}
                                            height={20}
                                            viewBox="0 0 16 20"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            className="h-5 w-4 text-gray-300"
                                        >
                                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <a href="#void" className="mr-2 text-sm font-medium text-gray-900 dark:text-white">
                                            {FetchData.info}
                                        </a>
                                        <svg
                                            width={16}
                                            height={20}
                                            viewBox="0 0 16 20"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            className="h-5 w-4 text-gray-300"
                                        >
                                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                        </svg>
                                    </div>
                                </li>
                                <li className="text-sm">
                                    <a href={product.href} aria-current="page" className="font-medium text-gray-500 dark:text-white hover:text-gray-600">
                                        {FetchData.name}
                                    </a>
                                </li>
                            </ol>
                        </nav>
                        <div className="mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                            <div className="aspect-w-3 aspect-h-4 w-1/2 md:w-1/3 lg:w-full overflow-hidden rounded-lg inline-block lg:block p-2 lg:p-0 m-0 lg:mb-3 hover:shadow-xl dark:hover:shadow-gray-700 transition">
                                <Image
                                    src={FetchData.src.first}
                                    alt={FetchData.alt}
                                    className="h-full w-full object-cover object-center cursor-pointer hover:opacity-75 dark:hover:opacity-90"
                                    onClick={() => { DetailShow(); chooseNumber(0); }}
                                    width={864}
                                    height={1080}
                                />
                            </div>
                            <div className="aspect-w-3 aspect-h-4 w-1/2 md:w-1/3 lg:w-full overflow-hidden rounded-lg inline-block lg:block p-2 lg:p-0 m-0 lg:mb-3 hover:shadow-xl dark:hover:shadow-gray-700 transition">
                                <Image
                                    src={FetchData.src.second}
                                    alt={FetchData.alt}
                                    className="h-full w-full object-cover object-center cursor-pointer hover:opacity-75 dark:hover:opacity-90"
                                    onClick={() => { DetailShow(); chooseNumber(1); }}
                                    width={864}
                                    height={1080}
                                />
                            </div>
                            <div className="aspect-w-3 aspect-h-4 w-1/2 md:w-1/3 lg:w-full overflow-hidden rounded-lg inline-block lg:block p-2 lg:p-0 m-0 lg:mb-3 hover:shadow-xl dark:hover:shadow-gray-700 transition">
                                <Image
                                    src={FetchData.src.third}
                                    alt={FetchData.alt}
                                    className="h-full w-full object-cover object-center cursor-pointer hover:opacity-75 dark:hover:opacity-90"
                                    onClick={() => { DetailShow(); chooseNumber(2); }}
                                    width={864}
                                    height={1080}
                                />
                            </div>
                            <div className="aspect-w-3 aspect-h-4 w-1/2 md:w-1/3 lg:w-full overflow-hidden rounded-lg inline-block lg:block p-2 lg:p-0 m-0 lg:mb-3 hover:shadow-xl dark:hover:shadow-gray-700 transition">
                                <Image
                                    src={FetchData.src.four}
                                    alt={FetchData.alt}
                                    className="h-full w-full object-cover object-center cursor-pointer hover:opacity-75 dark:hover:opacity-90"
                                    onClick={() => { DetailShow(); chooseNumber(3); }}
                                    width={864}
                                    height={1080}
                                />
                            </div>
                            <div className="aspect-w-3 aspect-h-4 w-1/2 md:w-1/3 lg:w-full overflow-hidden rounded-lg inline-block lg:block p-2 lg:p-0 m-0 lg:mb-3 hover:shadow-xl dark:hover:shadow-gray-700 transition">
                                <Image
                                    src={FetchData.src.five}
                                    alt={FetchData.alt}
                                    className="h-full w-full object-cover object-center cursor-pointer hover:opacity-75 dark:hover:opacity-90"
                                    onClick={() => { DetailShow(); chooseNumber(4); }}
                                    width={864}
                                    height={1080}
                                />
                            </div>
                            <div className="aspect-w-3 aspect-h-4 w-1/2 md:w-1/3 lg:w-full overflow-hidden rounded-lg inline-block lg:block p-2 lg:p-0 m-0 lg:mb-3 hover:shadow-xl dark:hover:shadow-gray-700 transition">
                                <Image
                                    src={FetchData.src.six}
                                    alt={FetchData.alt}
                                    className="h-full w-full object-cover object-center cursor-pointer hover:opacity-75 dark:hover:opacity-90"
                                    onClick={() => { DetailShow(); chooseNumber(5); }}
                                    width={864}
                                    height={1080}
                                />
                            </div>
                        </div>
                        <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 pb-0">
                            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">{FetchData.name}</h1>
                            </div>
                            <div className="mt-4 lg:row-span-3 lg:mt-0">
                                <p className="text-3xl tracking-tight text-gray-900 dark:text-white">{Number(FetchData.price).toLocaleString()}원</p>
                                <div className="mt-6">
                                    <h3 className="sr-only">Reviews</h3>
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            <span className="flex items-center my-3 md:my-0">
                                                <svg fill={FetchData.star.first} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={`h-5 w-5 flex-shrink-0 ${FetchData.star.first == "currentColor" ? "text-yellow-500" : "stroke-yellow-400 dark:stroke-none dark:fill-white"}`} viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill={FetchData.star.second} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={`h-5 w-5 flex-shrink-0 ${FetchData.star.second == "currentColor" ? "text-yellow-500" : "stroke-yellow-400 dark:stroke-none dark:fill-white"}`} viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill={FetchData.star.third} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={`h-5 w-5 flex-shrink-0 ${FetchData.star.third == "currentColor" ? "text-yellow-500" : "stroke-yellow-400 dark:stroke-none dark:fill-white"}`} viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill={FetchData.star.four} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={`h-5 w-5 flex-shrink-0 ${FetchData.star.four == "currentColor" ? "text-yellow-500" : "stroke-yellow-400 dark:stroke-none dark:fill-white"}`} viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill={FetchData.star.five} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={`h-5 w-5 flex-shrink-0 ${FetchData.star.five == "currentColor" ? "text-yellow-500" : "stroke-yellow-400 dark:stroke-none dark:fill-white"}`} viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <p className="sr-only">{reviews.average} out of 5 stars</p>
                                        <a href={reviews.href} className="ml-3 text-sm font-semibold text-gray-900 dark:text-blue-600">
                                            {FetchData.Review} reviews
                                        </a>
                                    </div>
                                </div>
                                <form className="mt-10">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900 dark:text-white">Color</h3>
                                        <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                                            <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                                            <div className="flex items-center space-x-3">
                                                {
                                                    product.colors.map((color) => (
                                                        <RadioGroup.Option
                                                            key={color.name}
                                                            value={color}
                                                            disabled={!color.inStock}
                                                            className={({ active, checked }) =>
                                                                classNames(
                                                                    color.selectedClass,
                                                                    active && checked ? 'ring ring-offset-1' : '',
                                                                    !active && checked ? 'ring-2' : '',
                                                                    '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none',
                                                                    color.inStock ?
                                                                        '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                                                        : ' -m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-not-allowed focus:outline-none'
                                                                )
                                                            }
                                                        >
                                                            <RadioGroup.Label as="span" className="sr-only">
                                                                {' '}
                                                                {color.name}{' '}
                                                            </RadioGroup.Label>
                                                            <span
                                                                aria-hidden="true"
                                                                className={classNames(
                                                                    color.class,
                                                                    'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                                                )}
                                                            />
                                                            <span
                                                                aria-hidden="true"
                                                                className="bg-white opacity-50 pointer-events-none absolute -inset-px border-2 border-gray-200 rounded-full overflow-hidden"
                                                            >
                                                                <svg
                                                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                    viewBox="0 0 100 100"
                                                                    preserveAspectRatio="none"
                                                                    stroke="currentColor"
                                                                >
                                                                    <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                                </svg>
                                                            </span>
                                                        </RadioGroup.Option>
                                                    ))
                                                }
                                            </div>
                                        </RadioGroup>
                                    </div>
                                    <div className="mt-10">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-sm font-medium text-gray-900 dark:text-white">Size</h3>
                                            <span className="text-sm font-semibold text-gray-900 dark:text-blue-600">
                                                Size guide
                                            </span>
                                        </div>
                                        <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                            <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                                            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                                {
                                                    product.sizes.map((size) => (
                                                        <RadioGroup.Option
                                                            key={size.name}
                                                            value={size}
                                                            onClick={() => {
                                                                FetchData.size = size.name
                                                            }}
                                                            disabled={!size.inStock}
                                                            className={({ active }) =>
                                                                classNames(
                                                                    size.inStock
                                                                        ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                                                        : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                                                    active ? 'ring-2 ring-gray-500 dark:ring-blue-500' : '',
                                                                    'group relative border rounded-md px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 py-6'
                                                                )
                                                            }
                                                        >
                                                            {({ active, checked }) => (
                                                                <>
                                                                    <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                                                    {size.inStock ? (
                                                                        <span
                                                                            className={classNames(
                                                                                active ? 'border' : 'border-2',
                                                                                checked ? 'border-gray-500 dark:border-blue-500' : 'border-transparent',
                                                                                'pointer-events-none absolute -inset-px rounded-md'
                                                                            )}
                                                                            aria-hidden="true"
                                                                        />
                                                                    ) : (
                                                                        <span
                                                                            aria-hidden="true"
                                                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                                        >
                                                                            <svg
                                                                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                                viewBox="0 0 100 100"
                                                                                preserveAspectRatio="none"
                                                                                stroke="currentColor"
                                                                            >
                                                                                <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                                            </svg>
                                                                        </span>
                                                                    )}
                                                                </>
                                                            )}
                                                        </RadioGroup.Option>
                                                    ))
                                                }
                                            </div>
                                        </RadioGroup>
                                    </div>
                                    {data?.user ? (
                                        <span
                                            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 dark:bg-blue-600 py-3 px-8 text-base font-medium text-white hover:bg-gray-900 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-blue-500 focus:ring-offset-2 cursor-pointer hover:opacity-75 duration-500"
                                            onClick={() => {
                                                router.push('/Cart');
                                                dispatch(addDetailData(FetchData));
                                            }}
                                        >
                                            카트에 추가
                                        </span>
                                    ) : (
                                        <Modal Name="카트에 추가"></Modal>
                                    )}
                                </form>
                            </div>
                            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                                <div>
                                    <h3 className="sr-only">Description</h3>
                                    <div className="space-y-6">
                                        <p className="text-base text-gray-900 dark:text-white">{product.description}</p>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">세탁방법 및 취급시 주의사항</h3>
                                    <div className="mt-4">
                                        <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                            {
                                                product.highlights.map((highlight) => (
                                                    <li key={highlight} className="text-gray-600 dark:text-white">
                                                        {highlight}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <h2 className="text-sm font-medium text-gray-900 dark:text-white">품질보증기준</h2>
                                    <ul className="list-disc mt-4 pl-4 space-y-1">
                                        <li className="text-sm text-gray-600 dark:text-white">{product.details1}</li>
                                        <li className="text-sm text-gray-600 dark:text-white">{product.details2}</li>
                                        <li className="text-sm text-gray-600 dark:text-white">{product.details3}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-wrap lg:justify-between max-w-screen-xl mx-auto mb-20 px-4 pt-8 md:p-8 border-t'>
                            <div className='w-full lg:w-1/3 mb-10 lg:mb-0'>
                                <div className="flex items-center mb-3">
                                    <svg aria-hidden="true" className={`w-5 h-5 ${FetchData.star.first == "currentColor" ? "text-yellow-400" : "stroke-yellow-400 dark:stroke-none text-white"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    <svg aria-hidden="true" className={`w-5 h-5 ${FetchData.star.second == "currentColor" ? "text-yellow-400" : "stroke-yellow-400 dark:stroke-none text-white"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    <svg aria-hidden="true" className={`w-5 h-5 ${FetchData.star.third == "currentColor" ? "text-yellow-400" : "stroke-yellow-400 dark:stroke-none text-white"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    <svg aria-hidden="true" className={`w-5 h-5 ${FetchData.star.four == "currentColor" ? "text-yellow-400" : "stroke-yellow-400 dark:stroke-none text-white"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    <svg aria-hidden="true" className={`w-5 h-5 ${FetchData.star.five == "currentColor" ? "text-yellow-400" : "stroke-yellow-400 dark:stroke-none text-white"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">{FetchData.Review} out of 5</p>
                                </div>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">2 global ratings</p>
                                <div className="flex items-center mt-4">
                                    <span className="text-sm font-medium text-gray-600 dark:text-blue-500">5 star</span>
                                    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                        <div className={`h-5 bg-yellow-400 rounded ${FetchData.Review == 5 ? 'w-full' : 'w-0'}`}></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-600 dark:text-blue-500">{FetchData.Review == 5 ? '100%' : '0%'}</span>
                                </div>
                                <div className="flex items-center mt-4">
                                    <span className="text-sm font-medium text-gray-600 dark:text-blue-500">4 star</span>
                                    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                        <div className={`h-5 bg-yellow-400 rounded ${FetchData.Review == 4 ? 'w-full' : 'w-0'}`}></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-600 dark:text-blue-500">{FetchData.Review == 4 ? '100%' : '0%'}</span>
                                </div>
                                <div className="flex items-center mt-4">
                                    <span className="text-sm font-medium text-gray-600 dark:text-blue-500">3 star</span>
                                    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                        <div className={`h-5 bg-yellow-400 rounded ${FetchData.Review == 3 ? 'w-full' : 'w-0'}`}></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-600 dark:text-blue-500">{FetchData.Review == 3 ? '100%' : '0%'}</span>
                                </div>
                                <div className="flex items-center mt-4">
                                    <span className="text-sm font-medium text-gray-600 dark:text-blue-500">2 star</span>
                                    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                        <div className={`h-5 bg-yellow-400 rounded ${FetchData.Review == 2 ? 'w-full' : 'w-0'}`}></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-600 dark:text-blue-500">{FetchData.Review == 2 ? '100%' : '0%'}</span>
                                </div>
                                <div className="flex items-center mt-4">
                                    <span className="text-sm font-medium text-gray-600 dark:text-blue-500">1 star</span>
                                    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                        <div className={`h-5 bg-yellow-400 rounded ${FetchData.Review == 1 ? 'w-full' : 'w-0'}`}></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-600 dark:text-blue-500">{FetchData.Review == 1 ? '100%' : '0%'}</span>
                                </div>
                            </div>

                            <div className='w-full lg:w-2/3 space-y-16'>
                                {
                                    FetchData.Review >= 3 ?
                                        ReviewData1.map(function (item: ReviewType, idx: number) {
                                            return (
                                                <div key={idx}>
                                                    <div className="flex items-center mb-4 space-x-4">
                                                        <img className="w-10 h-10 rounded-full" src={item.img} alt="Img" />
                                                        <div className="space-y-1 font-medium dark:text-white">
                                                            <p className='text-sm md:text-base'>{item.Name} <span className="block text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-0.5">{item.Join}</span></p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center mb-1">
                                                        <svg aria-hidden="true" className={`w-5 h-5 ${FetchData.star.first == "currentColor" ? "text-yellow-400" : "stroke-yellow-400 dark:stroke-none text-white"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                        <svg aria-hidden="true" className={`w-5 h-5 ${FetchData.star.second == "currentColor" ? "text-yellow-400" : "stroke-yellow-400 dark:stroke-none text-white"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                        <svg aria-hidden="true" className={`w-5 h-5 ${FetchData.star.third == "currentColor" ? "text-yellow-400" : "stroke-yellow-400 dark:stroke-none text-white"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                        <svg aria-hidden="true" className={`w-5 h-5 ${FetchData.star.four == "currentColor" ? "text-yellow-400" : "stroke-yellow-400 dark:stroke-none text-white"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                        <svg aria-hidden="true" className={`w-5 h-5 ${FetchData.star.five == "currentColor" ? "text-yellow-400" : "stroke-yellow-400 dark:stroke-none text-white"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                        <h3 className="ml-2 text-xs md:text-sm font-semibold text-gray-900 dark:text-white">{item.Others}</h3>
                                                    </div>
                                                    <div className='ml-0.5'>
                                                        <p className="mb-5 text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2">{item.WriteDate}</p>
                                                        <p className="mb-2 text-sm md:text-base font-light text-gray-500 dark:text-gray-400">{item.Reviews1}</p>
                                                        <p className="mb-3 text-sm md:text-base font-light text-gray-500 dark:text-gray-400">{item.Reviews2}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        : ReviewData2.map(function (item: ReviewType, idx: number) {
                                            return (
                                                <div key={idx}>
                                                    <div className="flex items-center mb-4 space-x-4">
                                                        <img className="w-10 h-10 rounded-full" src={item.img} alt="" />
                                                        <div className="space-y-1 font-medium dark:text-white">
                                                            <p className='text-sm md:text-base'>{item.Name} <span className="block text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-0.5">{item.Join}</span></p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center mb-1">
                                                        <svg aria-hidden="true" className={`w-5 h-5 ${FetchData.star.first == "currentColor" ? "text-yellow-400" : "stroke-yellow-400 dark:stroke-none text-white"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                        <svg aria-hidden="true" className={`w-5 h-5 ${FetchData.star.second == "currentColor" ? "text-yellow-400" : "stroke-yellow-400 dark:stroke-none text-white"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                        <svg aria-hidden="true" className={`w-5 h-5 ${FetchData.star.third == "currentColor" ? "text-yellow-400" : "stroke-yellow-400 dark:stroke-none text-white"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                        <svg aria-hidden="true" className={`w-5 h-5 ${FetchData.star.four == "currentColor" ? "text-yellow-400" : "stroke-yellow-400 dark:stroke-none text-white"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                        <svg aria-hidden="true" className={`w-5 h-5 ${FetchData.star.five == "currentColor" ? "text-yellow-400" : "stroke-yellow-400 dark:stroke-none text-white"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                        <h3 className="ml-2 text-xs md:text-sm font-semibold text-gray-900 dark:text-white">{item.Others}</h3>
                                                    </div>
                                                    <div className='ml-0.5'>
                                                        <p className="mb-5 text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2">{item.WriteDate}</p>
                                                        <p className="mb-2 text-sm md:text-base font-light text-gray-500 dark:text-gray-400">{item.Reviews1}</p>
                                                        <p className="mb-3 text-sm md:text-base font-light text-gray-500 dark:text-gray-400">{item.Reviews2}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                }
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            }
        </React.Fragment >
    )
}

interface TabType {
    number: number;
    FetchData: ShoeViewType;
}

function TabContent({ number, FetchData }: TabType) {
    return [
        <img src={FetchData.src.first} id="modal-img" className="w-1/2 md:w-auto md:max-w-[700px] md:max-h-[500px] object-cover rounded" />,
        <img src={FetchData.src.second} id="modal-img" className="w-1/2 md:w-auto md:max-w-[700px] md:max-h-[500px] object-cover rounded" />,
        <img src={FetchData.src.third} id="modal-img" className="w-1/2 md:w-auto md:max-w-[700px] md:max-h-[500px] object-cover rounded" />,
        <img src={FetchData.src.four} id="modal-img" className="w-1/2 md:w-auto md:max-w-[700px] md:max-h-[500px] object-cover rounded" />,
        <img src={FetchData.src.five} id="modal-img" className="w-1/2 md:w-auto md:max-w-[700px] md:max-h-[500px] object-cover rounded" />,
        <img src={FetchData.src.six} id="modal-img" className="w-1/2 md:w-auto md:max-w-[700px] md:max-h-[500px] object-cover rounded" />
    ][number]
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export const getStaticPaths: GetStaticPaths = async () => {
    const Data_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Shoes_View.json'
    const res = await fetch(Data_URL);
    const allPostsData = await res.json();

    const paths = allPostsData.Every.map((post: ShoeViewType) => ({
        params: {
            id: post.index.toString(),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

interface paramsType {
    params: { id: number }
}

export async function getStaticProps({ params }: paramsType) {
    // 각 페이지별 id
    const paramsID = params.id

    // 데이터 받아오기
    const Data_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Shoes_View.json'
    const res = await fetch(Data_URL);
    const postData = await res.json();

    return {
        props: {
            postData,
            paramsID,
        },
    };
}

export default View