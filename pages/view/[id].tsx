import React, { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import HeadInfo from '@components/HeadInfo/HeadInfo'
import { useRouter } from 'next/router'
import axios from 'axios';
import product from '@data/View_data';
import { signIn, useSession, signOut } from "next-auth/react";
import Modal from '@components/Modal/Modal';
import Loading from '../loading';
import Fade from 'react-reveal/Fade';
import { productColors, productSize } from '@lib/ProductType'
import { ShoeViewType, StarType } from '@lib/ShoeType'

export default function Example(): JSX.Element {
    // useState 모음
    const [selectedColor, setSelectedColor] = useState<productColors>(product.colors[0])
    const [selectedSize, setSelectedSize] = useState<productSize>(product.sizes[2])
    const [Shoe, setShoeAll] = useState<ShoeViewType[]>([])
    const [Show, setShow] = useState<boolean>(false)
    const [number, setNumber] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(true);

    // 라우터 모음
    const router = useRouter()
    const ID: any = router.query.id

    // next-auth 자료
    const { data, status } = useSession();

    // 기타 자료들
    const Data_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Shoes_View.json'
    const reviews = { href: '#void', average: 4, totalCount: 4 }
    const Star: any = Shoe[ID]?.star;

    const DetailShow = () => { setShow(!Show) }
    const chooseNumber = (a: any) => { setNumber(a) }

    function getData() {
        axios.get(Data_URL).then((res) => {
            setShoeAll(res.data.Every)
        })
    }

    function AddCart() {
        setTimeout(() => {
            router.push('/Login')
        }, 750);
    }

    useEffect(() => {
        getData()
        axios.get("").then((res) => {
            setLoading(false);
        });
    }, []);

    return (
        <React.Fragment>
            <HeadInfo title={`${Shoe[ID]?.name} 페이지`} contents={`${Shoe[ID]?.name} 페이지`} />

            {loading ? <Loading></Loading>
                : <React.Fragment>
                    <div className="bg-white dark:bg-black">
                        {
                            Show == true ?
                                <div>
                                    <div
                                        id="modal"
                                        className="fixed top-0 left-0 z-[75] w-screen h-screen bg-black/75 dark:bg-black/85 flex justify-center items-center"
                                    >
                                        <a className="fixed z-[75] top-3 lg:top-6 right-3 lg:right-8 text-white text-5xl font-bold hover:opacity-50 transition" href="#void" onClick={() => { DetailShow() }}>&times;</a>

                                        <TabContent number={number} Shoe={Shoe} ID={ID}></TabContent>

                                        <div className='flex absolute bottom-5 gap-5 justify-center items-center'>
                                            <img
                                                src={Shoe[ID]?.src?.first}
                                                id="modal-img"
                                                className={`max-[480px]:max-h-[50px] max-h-[75px] object-cover rounded cursor-pointer hover:opacity-100 -ml-5 md:ml-0 ${number == 0 ? 'opacity-100' : 'opacity-50'}`}
                                                onClick={() => { chooseNumber(0) }}
                                            />
                                            <img
                                                src={Shoe[ID]?.src?.second}
                                                id="modal-img"
                                                className={`max-[480px]:max-h-[50px] max-h-[75px] object-cover rounded cursor-pointer hover:opacity-100 ${number == 1 ? 'opacity-100' : 'opacity-50'}`}
                                                onClick={() => { chooseNumber(1) }}
                                            />
                                            <img
                                                src={Shoe[ID]?.src?.third}
                                                id="modal-img"
                                                className={`max-[480px]:max-h-[50px] max-h-[75px] object-cover rounded cursor-pointer hover:opacity-100 ${number == 2 ? 'opacity-100' : 'opacity-50'}`}
                                                onClick={() => { chooseNumber(2) }}
                                            />
                                            <img
                                                src={Shoe[ID]?.src?.four}
                                                id="modal-img"
                                                className={`max-[480px]:max-h-[50px] max-h-[75px] object-cover rounded cursor-pointer hover:opacity-100 ${number == 3 ? 'opacity-100' : 'opacity-50'}`}
                                                onClick={() => { chooseNumber(3) }}
                                            />
                                            <img
                                                src={Shoe[ID]?.src?.five}
                                                id="modal-img"
                                                className={`max-[480px]:max-h-[50px] max-h-[75px] object-cover rounded cursor-pointer hover:opacity-100 ${number == 4 ? 'opacity-100' : 'opacity-50'}`}
                                                onClick={() => { chooseNumber(4) }}
                                            />
                                            <img
                                                src={Shoe[ID]?.src?.six}
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
                                        <Fade bottom cascade>
                                            <div className="flex items-center">
                                                <a href="#vid" className="mr-2 text-sm font-medium text-gray-900 dark:text-white" onClick={() => router.push(Shoe[ID]?.href)}>
                                                    {Shoe[ID]?.Gender}
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
                                        </Fade>
                                    </li>
                                    <li>
                                        <Fade bottom cascade>
                                            <div className="flex items-center">
                                                <a href="#void" className="mr-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    {Shoe[ID]?.info}
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
                                        </Fade>
                                    </li>
                                    <li className="text-sm">
                                        <Fade bottom cascade>
                                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 dark:text-white hover:text-gray-600">
                                                {Shoe[ID]?.name}
                                            </a>
                                        </Fade>
                                    </li>
                                </ol>
                            </nav>
                            <div className="mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                                <div className="aspect-w-3 aspect-h-4 w-1/2 md:w-1/3 lg:w-full overflow-hidden rounded-lg inline-block lg:block p-2 lg:p-0 m-0 lg:mb-3 hover:shadow-xl dark:hover:shadow-gray-700 transition">
                                    <img
                                        src={Shoe[ID]?.src?.first}
                                        alt={Shoe[ID]?.alt}
                                        className="h-full w-full object-cover object-center cursor-pointer hover:opacity-75 dark:hover:opacity-90"
                                        onClick={() => { DetailShow(); chooseNumber(0); }}
                                    />
                                </div>
                                <div className="aspect-w-3 aspect-h-4 w-1/2 md:w-1/3 lg:w-full overflow-hidden rounded-lg inline-block lg:block p-2 lg:p-0 m-0 lg:mb-3 hover:shadow-xl dark:hover:shadow-gray-700 transition">
                                    <img
                                        src={Shoe[ID]?.src?.second}
                                        alt={Shoe[ID]?.alt}
                                        className="h-full w-full object-cover object-center cursor-pointer hover:opacity-75 dark:hover:opacity-90"
                                        onClick={() => { DetailShow(); chooseNumber(1); }}
                                    />
                                </div>
                                <div className="aspect-w-3 aspect-h-4 w-1/2 md:w-1/3 lg:w-full overflow-hidden rounded-lg inline-block lg:block p-2 lg:p-0 m-0 lg:mb-3 hover:shadow-xl dark:hover:shadow-gray-700 transition">
                                    <img
                                        src={Shoe[ID]?.src?.third}
                                        alt={Shoe[ID]?.alt}
                                        className="h-full w-full object-cover object-center cursor-pointer hover:opacity-75 dark:hover:opacity-90"
                                        onClick={() => { DetailShow(); chooseNumber(2); }}
                                    />
                                </div>
                                <div className="aspect-w-3 aspect-h-4 w-1/2 md:w-1/3 lg:w-full overflow-hidden rounded-lg inline-block lg:block p-2 lg:p-0 m-0 lg:mb-3 hover:shadow-xl dark:hover:shadow-gray-700 transition">
                                    <img
                                        src={Shoe[ID]?.src?.four}
                                        alt={Shoe[ID]?.alt}
                                        className="h-full w-full object-cover object-center cursor-pointer hover:opacity-75 dark:hover:opacity-90"
                                        onClick={() => { DetailShow(); chooseNumber(3); }}
                                    />
                                </div>
                                <div className="aspect-w-3 aspect-h-4 w-1/2 md:w-1/3 lg:w-full overflow-hidden rounded-lg inline-block lg:block p-2 lg:p-0 m-0 lg:mb-3 hover:shadow-xl dark:hover:shadow-gray-700 transition">
                                    <img
                                        src={Shoe[ID]?.src?.five}
                                        alt={Shoe[ID]?.alt}
                                        className="h-full w-full object-cover object-center cursor-pointer hover:opacity-75 dark:hover:opacity-90"
                                        onClick={() => { DetailShow(); chooseNumber(4); }}
                                    />
                                </div>
                                <div className="aspect-w-3 aspect-h-4 w-1/2 md:w-1/3 lg:w-full overflow-hidden rounded-lg inline-block lg:block p-2 lg:p-0 m-0 lg:mb-3 hover:shadow-xl dark:hover:shadow-gray-700 transition">
                                    <img
                                        src={Shoe[ID]?.src?.six}
                                        alt={Shoe[ID]?.alt}
                                        className="h-full w-full object-cover object-center cursor-pointer hover:opacity-75 dark:hover:opacity-90"
                                        onClick={() => { DetailShow(); chooseNumber(5); }}
                                    />
                                </div>
                            </div>
                            <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 pb-0">
                                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                    <Fade bottom cascade><h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">{Shoe[ID]?.name}</h1></Fade>
                                </div>
                                <div className="mt-4 lg:row-span-3 lg:mt-0">
                                    <h2 className="sr-only">Product information</h2>
                                    <Fade bottom cascade><p className="text-3xl tracking-tight text-gray-900 dark:text-white">{Shoe[ID]?.price}</p></Fade>
                                    <div className="mt-6">
                                        <Fade bottom cascade>
                                            <h3 className="sr-only">Reviews</h3>
                                            <div className="flex items-center">
                                                <div className="flex items-center">
                                                    <span className="flex items-center my-3 md:my-0">
                                                        <svg fill={Shoe[ID]?.star?.first} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5 flex-shrink-0 text-yellow-500" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                        </svg>
                                                        <svg fill={Shoe[ID]?.star?.second} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5 flex-shrink-0 text-yellow-500" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                        </svg>
                                                        <svg fill={Shoe[ID]?.star?.third} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5 flex-shrink-0 text-yellow-500" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                        </svg>
                                                        <svg fill={Shoe[ID]?.star?.four} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5 flex-shrink-0 text-yellow-500" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                        </svg>
                                                        <svg fill={Shoe[ID]?.star?.five} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5 flex-shrink-0 text-yellow-500" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                                                <a href={reviews.href} className="ml-3 text-sm font-semibold text-gray-900 dark:text-blue-600">
                                                    {Shoe[ID]?.Review} reviews
                                                </a>
                                            </div>
                                        </Fade>
                                    </div>
                                    <form className="mt-10">
                                        <div>
                                            <Fade bottom cascade>
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
                                            </Fade>
                                        </div>
                                        <div className="mt-10">
                                            <div className="flex items-center justify-between">
                                                <Fade bottom cascade>
                                                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Size</h3>
                                                    <a href="#void" className="text-sm font-semibold text-gray-900 dark:text-blue-600">
                                                        Size guide
                                                    </a>
                                                </Fade>
                                            </div>
                                            <Fade>
                                                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                                    <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                                                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                                        {
                                                            product.sizes.map((size) => (
                                                                <RadioGroup.Option
                                                                    key={size.name}
                                                                    value={size}
                                                                    disabled={!size.inStock}
                                                                    className={({ active }) =>
                                                                        classNames(
                                                                            size.inStock
                                                                                ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                                                                : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                                                            active ? 'ring-2 ring-gray-500 dark:ring-blue-500' : '',
                                                                            'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
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
                                            </Fade>
                                        </div>
                                        <Fade>
                                            {data?.user ? (
                                                <span
                                                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 dark:bg-blue-600 py-3 px-8 text-base font-medium text-white hover:bg-gray-900 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
                                                    onClick={() => router.push('/Cart')}
                                                >
                                                    카트에 추가
                                                </span>
                                            ) : (
                                                <Modal Name="카트에 추가"></Modal>
                                            )}
                                        </Fade>
                                    </form>
                                </div>
                                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                                    <div>
                                        <h3 className="sr-only">Description</h3>
                                        <div className="space-y-6">
                                            <Fade bottom cascade><p className="text-base text-gray-900 dark:text-white">{product.description}</p></Fade>
                                        </div>
                                    </div>
                                    <div className="mt-10">
                                        <Fade bottom cascade><h3 className="text-sm font-medium text-gray-900 dark:text-white">세탁방법 및 취급시 주의사항</h3></Fade>
                                        <div className="mt-4">
                                            <Fade bottom cascade>
                                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                                    {
                                                        product.highlights.map((highlight) => (
                                                            <li key={highlight} className="text-gray-400 dark:text-white">
                                                                <span className="text-gray-600 dark:text-white">{highlight}</span>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </Fade>
                                        </div>
                                    </div>
                                    <div className="mt-10">
                                        <Fade bottom cascade><h2 className="text-sm font-medium text-gray-900 dark:text-white">품질보증기준</h2></Fade>
                                        <div className="mt-4 space-y-6">
                                            <Fade bottom cascade><p className="text-sm text-gray-600 dark:text-white">{product.details}</p></Fade>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-screen">
                                <div className="my-10 mx-auto max-w-screen-md px-10 py-16">
                                    <div className="flex w-full flex-col">
                                        <div className="flex flex-col sm:flex-row">
                                            <h1 className="max-w-sm text-3xl font-bold text-blue-900">
                                                What people think <br />
                                                about tailwind
                                            </h1>
                                            <div className="my-4 rounded-xl bg-white py-2 px-4 shadow sm:my-0 sm:ml-auto">
                                                <div className="flex h-16 items-center text-2xl font-bold text-blue-900">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    4.7
                                                </div>
                                                <p className="text-sm text-gray-500">Average User Rating</p>
                                            </div>
                                        </div>
                                        <div className="text-gray-700">
                                            <p className="font-medium">Reviews</p>
                                            <ul className="mb-6 mt-2 space-y-2">
                                                <li className="flex items-center text-sm font-medium">
                                                    <span className="w-3">5</span
                                                    ><span className="mr-4 text-yellow-400"
                                                    ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg
                                                        ></span>
                                                    <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                                                        <div className="h-full w-10/12 bg-yellow-400"></div>
                                                    </div>
                                                    <span className="w-3">56</span>
                                                </li>
                                                <li className="flex items-center text-sm font-medium">
                                                    <span className="w-3">4</span
                                                    ><span className="mr-4 text-yellow-400"
                                                    ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg
                                                        ></span>
                                                    <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                                                        <div className="h-full w-8/12 bg-yellow-400"></div>
                                                    </div>
                                                    <span className="w-3">12</span>
                                                </li>
                                                <li className="flex items-center text-sm font-medium">
                                                    <span className="w-3">3</span
                                                    ><span className="mr-4 text-yellow-400"
                                                    ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg
                                                        ></span>
                                                    <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                                                        <div className="h-full w-1/12 bg-yellow-400"></div>
                                                    </div>
                                                    <span className="w-3">4</span>
                                                </li>
                                                <li className="flex items-center text-sm font-medium">
                                                    <span className="w-3">2</span
                                                    ><span className="mr-4 text-yellow-400"
                                                    ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg
                                                        ></span>
                                                    <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                                                        <div className="h-full w-0 bg-yellow-400"></div>
                                                    </div>
                                                    <span className="w-3">0</span>
                                                </li>
                                                <li className="flex items-center text-sm font-medium">
                                                    <span className="w-3">1</span
                                                    ><span className="mr-4 text-yellow-400"
                                                    ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg
                                                        ></span>
                                                    <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                                                        <div className="h-full w-1/12 bg-yellow-400"></div>
                                                    </div>
                                                    <span className="w-3">5</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <button className="w-36 rounded-full bg-blue-900 py-3 text-white font-medium">Write a review</button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-wrap lg:justify-between max-w-screen-xl mx-auto mb-20 p-4 pt-0 lg:p-8 border-t'>

                                <div className='w-full lg:w-1/3 mb-10 lg:mb-0'>
                                    <div className="flex items-center mb-3">
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">4.95 out of 5</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
                                    <div className="flex items-center mt-4">
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">5 star</span>
                                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                            <div className="h-5 bg-yellow-400 rounded" style={{ width: "70%" }}></div>
                                        </div>
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">70%</span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">4 star</span>
                                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                            <div className="h-5 bg-yellow-400 rounded" style={{ width: "17%" }}></div>
                                        </div>
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">17%</span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">3 star</span>
                                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                            <div className="h-5 bg-yellow-400 rounded" style={{ width: "8%" }}></div>
                                        </div>
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">8%</span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">2 star</span>
                                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                            <div className="h-5 bg-yellow-400 rounded" style={{ width: "4%" }}></div>
                                        </div>
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">4%</span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">1 star</span>
                                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                            <div className="h-5 bg-yellow-400 rounded" style={{ width: "1%" }}></div>
                                        </div>
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">1%</span>
                                    </div>
                                </div>

                                <div className='w-full lg:w-2/3 space-y-16'>
                                    {
                                        Array(Star).map(function (item: StarType, idx: number) {
                                            return (
                                                <div key={idx}>
                                                    <div className="flex items-center mb-4 space-x-4">
                                                        <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
                                                        <div className="space-y-1 font-medium dark:text-white">
                                                            <p>Jese Leos <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center mb-1">
                                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                        <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                                                    </div>
                                                    <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time dateTime="2017-03-03 19:00">March 3, 2017</time></p></footer>
                                                    <p className="mb-2 font-light text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
                                                    <p className="mb-3 font-light text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
                                                    <a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
                                                    <aside>
                                                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
                                                        <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                                                            <a href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
                                                            <a href="#" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
                                                        </div>
                                                    </aside>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            }
        </React.Fragment >
    )
}

function TabContent(props: { number: any, Shoe: ShoeViewType[], ID: any }) {
    return [
        <img src={props.Shoe[props.ID]?.src?.first} id="modal-img" className="w-1/2 md:w-auto md:max-w-[700px] md:max-h-[500px] object-cover rounded" />,
        <img src={props.Shoe[props.ID]?.src?.second} id="modal-img" className="w-1/2 md:w-auto md:max-w-[700px] md:max-h-[500px] object-cover rounded" />,
        <img src={props.Shoe[props.ID]?.src?.third} id="modal-img" className="w-1/2 md:w-auto md:max-w-[700px] md:max-h-[500px] object-cover rounded" />,
        <img src={props.Shoe[props.ID]?.src?.four} id="modal-img" className="w-1/2 md:w-auto md:max-w-[700px] md:max-h-[500px] object-cover rounded" />,
        <img src={props.Shoe[props.ID]?.src?.five} id="modal-img" className="w-1/2 md:w-auto md:max-w-[700px] md:max-h-[500px] object-cover rounded" />,
        <img src={props.Shoe[props.ID]?.src?.six} id="modal-img" className="w-1/2 md:w-auto md:max-w-[700px] md:max-h-[500px] object-cover rounded" />
    ][props.number]
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}