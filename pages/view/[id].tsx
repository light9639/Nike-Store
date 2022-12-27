import React, { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import HeadInfo from '../../components/HeadInfo/HeadInfo'
import { useRouter } from 'next/router'
import axios from 'axios';
import product from '../../data/View_data';
import { signIn, useSession, signOut } from "next-auth/react";
import Modal from '../../components/Modal/Modal';
import Loading from '../loading';
import { productColors, productSize } from '../../lib/ProductType'
import { ShoeViewType } from '../../lib/ShoeType'

export default function Example(): JSX.Element {
    <HeadInfo title="제품 상세페이지" contents="제품 상세페이지" />

    // useState 모음
    const [selectedColor, setSelectedColor] = useState<productColors>(product.colors[0])
    const [selectedSize, setSelectedSize] = useState<productSize>(product.sizes[2])
    const [Shoe, setShoeAll] = useState<ShoeViewType[]>([])
    const [Show, setShow] = useState<boolean>(false)
    const [number, setNumber] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(true);
    const [list, setList] = useState(["first", "second", "third", "four", "five", "six"]);

    // 라우터 모음
    const router = useRouter()
    const ID: any = router.query.id

    // next-auth 자료
    const { data, status } = useSession();

    // 기타 자료들
    const Data_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Shoes_View.json'
    const reviews = { href: '#void', average: 4, totalCount: 4 }

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
                                        <a className="fixed z-90 top-3 lg:top-6 right-3 lg:right-8 text-white text-5xl font-bold hover:opacity-50 transition" href="#void" onClick={() => { DetailShow() }}>&times;</a>

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
                                            className="fixed z-90 top-1/2 left-1.5 lg:left-1.5 text-black hover:text-white transition bg-white hover:bg-blue-600 rounded-full"
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
                                            className="fixed z-90 top-1/2 right-1.5 lg:right-1.5 text-black hover:text-white transition bg-white hover:bg-blue-600 rounded-full"
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
                                    </li>
                                    <li>
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
                                    </li>
                                    <li className="text-sm">
                                        <a href={product.href} aria-current="page" className="font-medium text-gray-500 dark:text-white hover:text-gray-600">
                                            {Shoe[ID]?.name}
                                        </a>
                                    </li>
                                </ol>
                            </nav>
                            <div className="mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                                <div className="aspect-w-3 aspect-h-4 w-1/2 md:w-1/3 lg:w-full overflow-hidden rounded-lg inline-block lg:block p-2 lg:p-0 m-0 lg:mb-3">
                                    <img
                                        src={Shoe[ID]?.src?.first}
                                        alt={Shoe[ID]?.alt}
                                        className="h-full w-full object-cover object-center cursor-pointer hover:opacity-75"
                                        onClick={() => {DetailShow(); chooseNumber(0);}}
                                    />
                                </div>
                                <div className="aspect-w-3 aspect-h-4 w-1/2 md:w-1/3 lg:w-full overflow-hidden rounded-lg inline-block lg:block p-2 lg:p-0 m-0 lg:mb-3">
                                    <img
                                        src={Shoe[ID]?.src?.second}
                                        alt={Shoe[ID]?.alt}
                                        className="h-full w-full object-cover object-center cursor-pointer hover:opacity-75"
                                        onClick={() => {DetailShow(); chooseNumber(1);}}
                                    />
                                </div>
                                <div className="aspect-w-3 aspect-h-4 w-1/2 md:w-1/3 lg:w-full overflow-hidden rounded-lg inline-block lg:block p-2 lg:p-0 m-0 lg:mb-3">
                                    <img
                                        src={Shoe[ID]?.src?.third}
                                        alt={Shoe[ID]?.alt}
                                        className="h-full w-full object-cover object-center cursor-pointer hover:opacity-75"
                                        onClick={() => {DetailShow(); chooseNumber(2);}}
                                    />
                                </div>
                                <div className="aspect-w-3 aspect-h-4 w-1/2 md:w-1/3 lg:w-full overflow-hidden rounded-lg inline-block lg:block p-2 lg:p-0 m-0 lg:mb-3">
                                    <img
                                        src={Shoe[ID]?.src?.four}
                                        alt={Shoe[ID]?.alt}
                                        className="h-full w-full object-cover object-center cursor-pointer hover:opacity-75"
                                        onClick={() => {DetailShow(); chooseNumber(3);}}
                                    />
                                </div>
                                <div className="aspect-w-3 aspect-h-4 w-1/2 md:w-1/3 lg:w-full overflow-hidden rounded-lg inline-block lg:block p-2 lg:p-0 m-0 lg:mb-3">
                                    <img
                                        src={Shoe[ID]?.src?.five}
                                        alt={Shoe[ID]?.alt}
                                        className="h-full w-full object-cover object-center cursor-pointer hover:opacity-75"
                                        onClick={() => {DetailShow(); chooseNumber(4);}}
                                    />
                                </div>
                                <div className="aspect-w-3 aspect-h-4 w-1/2 md:w-1/3 lg:w-full overflow-hidden rounded-lg inline-block lg:block p-2 lg:p-0 m-0 lg:mb-3">
                                    <img
                                        src={Shoe[ID]?.src?.six}
                                        alt={Shoe[ID]?.alt}
                                        className="h-full w-full object-cover object-center cursor-pointer hover:opacity-75"
                                        onClick={() => {DetailShow(); chooseNumber(5);}}
                                    />
                                </div>
                            </div>
                            <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24">
                                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">{Shoe[ID]?.name}</h1>
                                </div>
                                <div className="mt-4 lg:row-span-3 lg:mt-0">
                                    <h2 className="sr-only">Product information</h2>
                                    <p className="text-3xl tracking-tight text-gray-900 dark:text-white">{Shoe[ID]?.price}</p>
                                    <div className="mt-6">
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
                                            <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                {Shoe[ID]?.Review} reviews
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
                                                <a href="#void" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                                                    Size guide
                                                </a>
                                            </div>
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
                                                                        active ? 'ring-2 ring-indigo-500' : '',
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
                                                                                    checked ? 'border-indigo-500' : 'border-transparent',
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
                                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 py-3 px-8 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
                                                onClick={() => router.push('/Cart')}
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
                                                        <li key={highlight} className="text-gray-400 dark:text-white">
                                                            <span className="text-gray-600 dark:text-white">{highlight}</span>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-10">
                                        <h2 className="text-sm font-medium text-gray-900 dark:text-white">품질보증기준</h2>
                                        <div className="mt-4 space-y-6">
                                            <p className="text-sm text-gray-600 dark:text-white">{product.details}</p>
                                        </div>
                                    </div>
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