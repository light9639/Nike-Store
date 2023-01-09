import React, { useEffect, useState } from 'react'
import HeadInfo from '@components/HeadInfo/HeadInfo'
import { useRouter } from 'next/router';
import { authOptions } from './api/auth/[...nextauth]'
import { unstable_getServerSession } from "next-auth/next"
import Fade from 'react-reveal/Fade';
import Link from 'next/link';
import axios from 'axios';
import { SlideType } from '@lib/ShoeType'
import Loading from './loading';

export default function Cart(): JSX.Element {
    const [shoe, setShoeAll] = useState<SlideType[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const Number: number = Math.random()
    const calc: number = Math.ceil(Number * 10)
    const router = useRouter()
    const Data_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Shoes.json'

    function getData() {
        axios.get(Data_URL).then((res) => {
            if (calc % 3 == 0) {
                setShoeAll(res.data.Men)
            } else if (calc % 3 == 1) {
                setShoeAll(res.data.Women)
            } else {
                setShoeAll(res.data.Kids)
            }
        })
    }

    useEffect(() => {
        getData();
        axios.get("").then((res) => {
            setLoading(false);
        });
    }, []);

    return (
        <React.Fragment>
            <HeadInfo title="Cart Page" contents="Cart Page"></HeadInfo>

            {loading ? <Loading></Loading>
                : <React.Fragment>
                    <div className="container mx-auto my-24 shadow-md">
                        <div className="block lg:flex my-10 p-4 md:p-0">
                            <div className="w-full overflow-x-auto relative sm:rounded-lg">
                                {/* <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="py-3 px-6">
                                                <span className="sr-only">Image</span>
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                Product
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                Qty
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                Price
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            [1, 2, 3].map(function (item, idx: number) {
                                                return (
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
                                                        <td className="lg:p-2 w-40">
                                                            <img src="https://raw.githubusercontent.com/light9639/ImgStorage/main/shoestore/Page/Kids/Kids_09.jpg" alt="Apple Watch" className='w-full' />
                                                        </td>
                                                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                                            Apple Watch
                                                        </td>
                                                        <td className="py-4 px-6">
                                                            <div className="flex items-center space-x-3">
                                                                <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                                    <span className="sr-only">Quantity button</span>
                                                                    <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                                                </button>
                                                                <div>
                                                                    <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                                                                </div>
                                                                <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                                    <span className="sr-only">Quantity button</span>
                                                                    <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                                            $599
                                                        </td>
                                                        <td className="py-4 px-6">
                                                            <a href="#void" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table> */}
                                <div className="col-span-2 p-5">
                                    <h1 className="text-xl font-medium ">Shopping Cart</h1>
                                    {
                                        [1, 2, 3].map(function (item, idx: number) {
                                            return (
                                                <div className="flex justify-between items-center mt-6 pt-6">
                                                    <div className="flex  items-center">
                                                        <img src="https://raw.githubusercontent.com/light9639/ImgStorage/main/shoestore/Page/Kids/Kids_09.jpg" className="rounded-3xl max-w-[200px]" />
                                                    </div>
                                                    <div className="flex flex-col ml-3">
                                                        <span className="md:text-md font-medium">Chicken momo</span>
                                                        <span className="text-xs font-light text-gray-400">#41551</span>
                                                    </div>
                                                    <div className="flex items-center space-x-3">
                                                        <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                            <span className="sr-only">Quantity button</span>
                                                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                                        </button>
                                                        <div>
                                                            <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                                                        </div>
                                                        <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                            <span className="sr-only">Quantity button</span>
                                                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                                        </button>
                                                    </div>
                                                    <div className="flex justify-center items-center">
                                                        <p className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                                            $599
                                                        </p>
                                                        <p className="py-4 px-6">
                                                            <a href="#void" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        })

                                    }
                                </div>
                            </div>
                            <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5 p-10">
                                <div className="pt-12 md:pt-0 2xl:ps-4">
                                    <h2 className="text-xl font-bold">Order Summary
                                    </h2>
                                    <div className="mt-8">
                                        <div className="flex flex-col space-y-4 ">
                                            <div className="flex space-x-4">
                                                <div className='w-full'>
                                                    <img src="https://raw.githubusercontent.com/light9639/ImgStorage/main/shoestore/Page/Kids/Kids_09.jpg" alt="image"
                                                        className="w-60" />
                                                </div>
                                                <div className='w-full'>
                                                    <h2 className="text-xl font-bold">Title</h2>
                                                    <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                                    <span className="text-red-600">Price</span> $20
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="flex space-x-4">
                                                <div className='w-full'>
                                                    <img src="https://raw.githubusercontent.com/light9639/ImgStorage/main/shoestore/Page/Kids/Kids_09.jpg" alt="image"
                                                        className="w-60" />
                                                </div>
                                                <div className='w-full'>
                                                    <h2 className="text-xl font-bold">Title</h2>
                                                    <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                                    <span className="text-red-600">Price</span> $20
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex p-4 mt-4">
                                        <h2 className="text-xl font-bold">ITEMS 2</h2>
                                    </div>
                                    <div
                                        className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                        Subtotal<span className="ml-2">$40.00</span></div>
                                    <div
                                        className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                        Shipping Tax<span className="ml-2">$10</span></div>
                                    <div
                                        className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                        Total<span className="ml-2">$50.00</span></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5 shadow-2xl p-10">
                        <div className="pt-12 md:pt-0 2xl:ps-4">
                            <h2 className="text-xl font-bold">Order Summary
                            </h2>
                            <div className="mt-8">
                                <div className="flex flex-col space-y-4 ">
                                    <div className="flex space-x-4">
                                        <div className='w-full'>
                                            <img src="https://raw.githubusercontent.com/light9639/ImgStorage/main/shoestore/Page/Kids/Kids_09.jpg" alt="image"
                                                className="w-60" />
                                        </div>
                                        <div className='w-full'>
                                            <h2 className="text-xl font-bold">Title</h2>
                                            <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                            <span className="text-red-600">Price</span> $20
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex space-x-4">
                                        <div className='w-full'>
                                            <img src="https://raw.githubusercontent.com/light9639/ImgStorage/main/shoestore/Page/Kids/Kids_09.jpg" alt="image"
                                                className="w-60" />
                                        </div>
                                        <div className='w-full'>
                                            <h2 className="text-xl font-bold">Title</h2>
                                            <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                            <span className="text-red-600">Price</span> $20
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex p-4 mt-4">
                                <h2 className="text-xl font-bold">ITEMS 2</h2>
                            </div>
                            <div
                                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Subtotal<span className="ml-2">$40.00</span></div>
                            <div
                                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Shipping Tax<span className="ml-2">$10</span></div>
                            <div
                                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Total<span className="ml-2">$50.00</span></div>
                        </div>
                    </div> */}
                    {/* <div className="container relative mx-auto w-full bg-white">
                        <div className="flex min-h-screen justify-between">
                            <div className="col-span-full py-6 px-4 sm:py-12 lg:w-1/2 lg:py-24">
                                <div className="mx-auto w-full max-w-lg">
                                    <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">Secure Checkout<span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span></h1>
                                    <form action="" className="mt-10 flex flex-col space-y-4">
                                        <div><label htmlFor="email" className="text-xs font-semibold text-gray-500">Email</label><input type="email" id="email" name="email" placeholder="john.capler@fang.com" className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
                                        <div className="relative"><label htmlFor="card-number" className="text-xs font-semibold text-gray-500">Card number</label><input type="text" id="card-number" name="card-number" placeholder="1234-5678-XXXX-XXXX" className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /><img src="/images/uQUFIfCYVYcLK0qVJF5Yw.png" alt="" className="absolute bottom-3 right-3 max-h-4" /></div>
                                        <div>
                                            <p className="text-xs font-semibold text-gray-500">Expiration date</p>
                                            <div className="mr-6 flex flex-wrap">
                                                <div className="my-1">
                                                    <label htmlFor="month" className="sr-only">Select expiration month</label>
                                                    <select name="month" id="month" className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500">
                                                        <option value="">Month</option>
                                                    </select>
                                                </div>
                                                <div className="my-1 ml-3 mr-6">
                                                    <label htmlFor="year" className="sr-only">Select expiration year</label>
                                                    <select name="year" id="year" className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500">
                                                        <option value="">Year</option>
                                                    </select>
                                                </div>
                                                <div className="relative my-1"><label htmlFor="security-code" className="sr-only">Security code</label><input type="text" id="security-code" name="security-code" placeholder="Security code" className="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
                                            </div>
                                        </div>
                                        <div><label htmlFor="card-name" className="sr-only">Card name</label><input type="text" id="card-name" name="card-name" placeholder="Name on the card" className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
                                    </form>
                                    <p className="mt-10 text-center text-sm font-semibold text-gray-500">By placing this order you agree to the <a href="#void" className="whitespace-nowrap text-teal-400 underline hover:text-teal-600">Terms and Conditions</a></p>
                                    <button type="submit" className="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg">Place Order</button>
                                </div>
                            </div>
                            <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:w-1/2 lg:py-24">
                                <h2 className="sr-only">Order summary</h2>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="absolute inset-0 h-full w-full object-cover" />
                                    <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95"></div>
                                </div>
                                <div className="relative">
                                    <ul className="space-y-5">
                                <li className="flex justify-between">
                                    <div className="inline-flex">
                                        <img src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhhaXIlMjBkcnllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="max-h-16" />
                                        <div className="ml-3">
                                            <p className="text-base font-semibold text-white">Nano Titanium Hair Dryer</p>
                                            <p className="text-sm font-medium text-white text-opacity-80">Pdf, doc Kindle</p>
                                        </div>
                                    </div>
                                    <p className="text-sm font-semibold text-white">$260.00</p>
                                </li>
                                <li className="flex justify-between">
                                    <div className="inline-flex">
                                        <img src="https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhhaXIlMjBkcnllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="max-h-16" />
                                        <div className="ml-3">
                                            <p className="text-base font-semibold text-white">Luisia H35</p>
                                            <p className="text-sm font-medium text-white text-opacity-80">Hair Dryer</p>
                                        </div>
                                    </div>
                                    <p className="text-sm font-semibold text-white">$350.00</p>
                                </li>
                            </ul>
                                    <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
                                    <div className="space-y-2">
                                        <p className="flex justify-between text-lg font-bold text-white"><span>Total price:</span><span>$510.00</span></p>
                                        <p className="flex justify-between text-sm font-medium text-white"><span>Vat: 10%</span><span>$55.00</span></p>
                                    </div>
                                </div>
                                <div className="relative mt-10 text-white">
                                    <h3 className="mb-5 text-lg font-bold">Support</h3>
                                    <p className="text-sm font-semibold">+01 653 235 211 <span className="font-light">(International)</span></p>
                                    <p className="mt-1 text-sm font-semibold">support@nanohair.com <span className="font-light">(Email)</span></p>
                                    <p className="mt-2 text-xs font-medium">Call us now for payment related issues</p>
                                </div>
                                <div className="relative mt-10 flex">
                                    <p className="flex flex-col"><span className="text-sm font-bold text-white">Money Back Guarantee</span><span className="text-xs font-medium text-white">within 30 days of purchase</span></p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="flex items-center mb-16">
                        <div className="container m-auto flex flex-wrap items-start">
                            <div className="w-full m-auto">
                                <h1 className="text-3xl lg:text-4xl text-gray-700 dark:text-white font-bold pl-6 text-center 2xl:text-left">
                                    Nike Best Sellers
                                </h1>
                                <div className='flex justify-between mt-7 h-full'>
                                    <div className='w-full flex flex-wrap'>
                                        {
                                            shoe.slice(calc, calc + 4).map(function (item: SlideType, idx: number) {
                                                return (
                                                    <React.Fragment key={idx}>
                                                        <div
                                                            className="w-1/2 xl:w-1/4 px-0 lg:px-2 xl:px-0 mb-16"
                                                            onClick={() => router.push(`/view/${item?.index}`)}
                                                        >
                                                            <div className="rounded-xl m-2 sm:ml-1 dark:hover:shadow-slate-700 transform duration-500">
                                                                <div className='ImgBox hover:opacity-75 hover:shadow-xl dark:hover:opacity-95 dark:hover:shadow-gray-700 transition rounded-3xl'>
                                                                    <Link href={`/view/${item?.index}`}>
                                                                        <Fade>
                                                                            <img src={item?.src} alt={item?.alt} className="w-full max-h- lg:max-h-[450px] xl:max-h-[350px] rounded-3xl object-cover" />
                                                                        </Fade>
                                                                    </Link>
                                                                </div>
                                                                <Fade bottom cascade>
                                                                    <div className="pt-5 px-2 flex flex-col gap-2">

                                                                        <Link href={`/view/${item?.index}`}>
                                                                            <h2 className="tracking-tighter text-lg lg:text-base md:text-lg overflow-ellipsis overflow-hidden whitespace-nowrap -mb-1 md:mb-0 cursor-pointer hover:text-blue-300 transition text-left" title="Best Headphone Ever">
                                                                                {item?.name}
                                                                            </h2>
                                                                        </Link>

                                                                        <div className='tracking-tighter text-left'>
                                                                            <p className='pb-1 md:pb-2 text-base lg:text-sm text-gray-600 dark:text-white'>{item?.info}</p>
                                                                            <span className="text-base 2xl:text-lg relative 2xl:absolute right-0 2xl:right-3 translate-y-0 2xl:-translate-y-[3.85rem]">{item?.price}</span>
                                                                        </div>

                                                                    </div>
                                                                    <div className="block md:flex pl-2 pb-2">
                                                                        <span className="flex items-center my-3 md:my-0">
                                                                            <svg fill={item?.star?.first} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                                            </svg>
                                                                            <svg fill={item?.star?.second} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                                            </svg>
                                                                            <svg fill={item?.star?.third} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                                            </svg>
                                                                            <svg fill={item?.star?.four} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                                            </svg>
                                                                            <svg fill={item?.star?.five} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                                            </svg>
                                                                            <span className="bg-blue-100 text-blue-800 text-sm font-semibold ml-3 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{item?.Review} Reviews</span>
                                                                        </span>
                                                                        <span className="hidden md:flex md:ml-3 md:pl-3 md:py-2 md:border-l-2 border-gray-200 space-x-2s gap-1 md:gap-3">
                                                                            <a href='https://ko-kr.facebook.com/' className="text-gray-500 dark:text-white transition hover:text-blue-600 dark:hover:text-blue-600">
                                                                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                                                </svg>
                                                                            </a>
                                                                            <a href='https://twitter.com/home' className="text-gray-500 dark:text-white transition hover:text-blue-600 dark:hover:text-blue-600">
                                                                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                                                </svg>
                                                                            </a>
                                                                            <a href='https://www.kakaocorp.com/page/service/service/KakaoTalk' className="text-gray-500 dark:text-white transition hover:text-blue-600 dark:hover:text-blue-600">
                                                                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                                                </svg>
                                                                            </a>
                                                                        </span>
                                                                    </div>
                                                                </Fade>
                                                            </div>
                                                        </div>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export async function getServerSideProps(context: any) {
    const session = await unstable_getServerSession(context.req, context.res, authOptions)

    if ( !session ) {
        return {
            redirect: {
                destination: '/NotLogin',
                permanent: false,
            },
        }
    }

    return {
        props: {
            session,
        },
    }
}