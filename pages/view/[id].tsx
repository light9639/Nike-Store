/* eslint-disable @next/next/no-img-element */
import React from 'react'
import HeadInfo from '../../components/HeadInfo'

export default function About() {
    return (
        <>
            <HeadInfo title="제품 상세페이지" contents="제품 상세페이지" />

            <section className="text-gray-700 dark:text-white body-font overflow-hidden">
                <div className="container px-5 py-36 md:py-40 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img src="https://images.stockx.com/Nike-Epic-React-Flyknit-2-White-Pink-Foam-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1603481985" alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-700 dark:text-white tracking-widest">Outdoor</h2>
                            <h1 className="text-gray-900 text-4xl title-font font-bold mb-1 dark:text-white">Solar Art</h1>
                            <div className="flex mb-4">
                                <span className="title-font font-medium text-2xl text-gray-900 dark:text-white">$58.00</span>
                            </div>
                            <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis ipsa ipsum quae quia quos saepe totam? Aliquam deleniti mollitia reiciendis totam! Ad blanditiis dolorum et molestias praesentium saepe voluptates.</p>
                            <div className="flex border-t border-gray-300 mt-5 pt-5">
                                <button type="submit" className="bg-gray-800 duration-200 focus:outline-none focus:shadow-outline font-medium h-12 hover:bg-gray-900 inline-flex items-center justify-center px-6 text-white tracking-wide transition w-full">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
