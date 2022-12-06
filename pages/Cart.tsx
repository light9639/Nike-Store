import React from 'react'
import HeadInfo from '../components/HeadInfo'
import { useRouter } from 'next/router';
import { authOptions } from './api/auth/[...nextauth]'
import { unstable_getServerSession } from "next-auth/next"

export default function Cart(): JSX.Element {
    const router = useRouter()

    return (
        <>
            <HeadInfo title="Cart Page" contents="Cart Page"></HeadInfo>

            <div className="container mx-auto my-24 shadow-md">
                <div className="block lg:flex my-10 p-4 md:p-0">
                    <div className="w-full overflow-x-auto relative sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
                                    [1, 2, 3].map(function (a, i) {
                                        return (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td className="p-4 w-32">
                                                    <img src="https://flowbite.com/docs/images/products/apple-watch.png" alt="Apple Watch" />
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
                                                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    {/* <div className="w-full md:w-3/4 bg-white dark:bg-slate-900 px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">3 Items</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 dark:text-white text-xs uppercase w-2/5">Product Details</h3>
                            <h3 className="font-semibold text-center text-gray-600 dark:text-white text-xs uppercase w-1/5">Quantity</h3>
                            <h3 className="font-semibold text-center text-gray-600 dark:text-white text-xs uppercase w-1/5">Price</h3>
                            <h3 className="font-semibold text-center text-gray-600 dark:text-white text-xs uppercase w-1/5">Total</h3>
                        </div>

                        {
                            [1, 2, 3, 4, 5, 6, 7].map(function (a, i: number) {
                                return (
                                    <>
                                        <div className="flex items-center hover:bg-gray-100 dark:hover:bg-slate-700 -mx-8 px-6 py-5" key={i}>
                                            <div className="flex w-2/5">
                                                <div className="w-20">
                                                    <img className="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt="" />
                                                </div>
                                                <div className="flex flex-col justify-between ml-4 flex-grow">
                                                    <span className="font-bold text-sm">Iphone 6S</span>
                                                    <span className="text-red-500 text-xs">Apple</span>
                                                    <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                                                </div>
                                            </div>
                                            <div className="flex justify-center w-1/5">
                                                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                </svg>

                                                <input className="mx-2 border text-center w-8" type="text" value="1" />

                                                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                                </svg>
                                            </div>
                                            <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
                                            <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
                                        </div>
                                    </>
                                )
                            })
                        }

                        <a href="#void" className="flex font-semibold text-blue-600 text-sm mt-10" onClick={() => router.push(`/`)}>
                            <svg className="fill-current mr-2 text-blue-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                            Continue Shopping
                        </a>
                    </div> */}

                    <div id="summary" className="w-full lg:w-1/3 mt-16 md:mt-0 px-8 py-10 dark:bg-slate-900">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Items 3</span>
                            <span className="font-semibold text-sm">590$</span>
                        </div>
                        <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                            <select className="block p-2 text-gray-600 w-full text-sm">
                                <option>Standard shipping - $10.00</option>
                            </select>
                        </div>
                        <div className="py-10">
                            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>$600</span>
                            </div>
                            <button className="bg-blue-500 font-semibold hover:bg-blue-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context: any) {
    const session = await unstable_getServerSession(context.req, context.res, authOptions)

    if (!session) {
        return {
            redirect: {
                destination: '/Login',
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