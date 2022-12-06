import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HeadInfo from '../../components/HeadInfo'
import DetailSide from '../../components/DetailSide'
import Loading from '../loading';
import { DetailType } from "../Type/TypeBox";
import Link from 'next/link';

export default function DetailMain(): JSX.Element {
    <HeadInfo title="Detail Page" contents="Detail Page" />
    
    const [list, setList] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const API_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Detail.json';

    function getData() {
        axios.get(API_URL).then((res: any) => {
            setList(res.data.Post.slice(0, 3))
        })
    }

    useEffect(() => {
        getData();
        axios.get("").then((res) => {
            setLoading(false);
        });
    }, []);

    return (
        <>
            {loading ? <Loading></Loading>
                : <>
                    <div className="container mx-auto flex flex-wrap py-6">

                        <section className="w-full md:w-2/3 flex flex-col items-center px-3">

                            {
                                list.map(function (item: DetailType, idx: number) {
                                    return (
                                        <article className="flex flex-col shadow my-4">
                                            <Link href={`/Detail/${idx}`}>
                                                <a className="hover:opacity-75">
                                                    <img src={item?.src} />
                                                </a>
                                            </Link>

                                                <div className="bg-white dark:bg-slate-900 flex flex-col justify-start p-6">
                                                    <a className="text-blue-700 text-sm font-bold uppercase pb-4">Sports</a>
                                                    <a className="text-3xl font-bold pb-4">{item?.h2}</a>
                                                    <p className="text-sm pb-3">
                                                        이 글은 <a className="font-semibold">Lee dong ho</a>에 의해 {item?.date} 작성되었습니다.
                                                    </p>
                                                    <a className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                                                    <Link href={`/Detail/${item?.index}`}>
                                                        <a className="uppercase text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-600 transition">
                                                            Continue Reading <i className="fas fa-arrow-right"></i>
                                                        </a>
                                                    </Link>
                                                </div>
                                        </article>
                                    )
                                })
                            }

                            {/* <article className="flex flex-col shadow my-4">
                            <a href="#" className="hover:opacity-75">
                                <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=2" />
                            </a>
                            <div className="bg-white  dark:bg-slate-900 flex flex-col justify-start p-6">
                                <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Automotive, Finance</a>
                                <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                                <p className="text-sm pb-3">
                                    By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on January 12th, 2020
                                </p>
                                <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                                <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </article>

                        <article className="flex flex-col shadow my-4">
                            <a href="#" className="hover:opacity-75">
                                <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=3" />
                            </a>
                            <div className="bg-white dark:bg-slate-900 flex flex-col justify-start p-6">
                                <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Sports</a>
                                <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                                <p className="text-sm pb-3">
                                    By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on October 22nd, 2019
                                </p>
                                <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                                <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </article> */}

                            <div className="flex items-center py-8">
                                <button 
                                    type='button' 
                                    className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center cursor-pointer"
                                    // onClick={getData1} 
                                >1</button>
                                <button 
                                    type='button' 
                                    className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center cursor-pointer"
                                    // onClick={getData2} 
                                >2</button>
                                <button 
                                    type='button' 
                                    className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center cursor-pointer"
                                    // onClick={getData3} 
                                >3</button>
                                <button 
                                    type='button' 
                                    className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center cursor-pointer"
                                    // onClick={getData4} 
                                >4</button>
                                {/* <span className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i className="fas fa-arrow-right ml-2"></i></span> */}
                            </div>

                        </section>

                        <DetailSide></DetailSide>

                        {/* <aside className="w-full md:w-1/3 flex flex-col items-center px-3">

                        <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                            <p className="text-xl font-semibold pb-5">About Us</p>
                            <p className="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
                            <a href="#" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                                Get to know us
                            </a>
                        </div>

                        <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                            <p className="text-xl font-semibold pb-5">Instagram</p>
                            <div className="grid grid-cols-3 gap-3">
                                <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1" />
                                <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2" />
                                <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3" />
                                <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4" />
                                <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5" />
                                <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6" />
                                <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=7" />
                                <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=8" />
                                <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=9" />
                            </div>
                            <a href="#" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
                                <i className="fab fa-instagram mr-2"></i> Follow @dgrzyb
                            </a>
                        </div>

                    </aside> */}

                    </div>
                </>}
        </>
    )
}