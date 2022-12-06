import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { DetailType } from "../pages/Type/TypeBox";

export default function DetailSide(): JSX.Element {
    const [list, setList] = useState<any>([]);
    const DETAIL_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Detail.json'

    useEffect(() => {
        axios.get(DETAIL_URL).then((res) => {
            setList(res.data.Post)
        })
    }, []);

    return (
        <>
            <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
                <div className="w-full bg-white dark:bg-slate-900 shadow flex flex-col my-4 p-6">
                    <p className="text-xl font-semibold pb-5">About Us</p>
                    <p className="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
                    <Link href="/About">
                        <a className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                            Get to know us
                        </a>
                    </Link>
                </div>
                <div className="w-full bg-white dark:bg-slate-900 shadow flex flex-col my-4 p-6">
                    <p className="text-xl font-semibold pb-5">Instagram</p>
                    <div className="grid grid-cols-3 gap-3">
                        {
                            list.map(function (item: DetailType, idx: number) {
                                return (
                                    <Link href={"/Detail/" + idx}>
                                        <img className="hover:opacity-75" src={item?.src} />
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <a href="#" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
                        <i className="fab fa-instagram mr-2"></i> Follow @Dongho
                    </a>
                </div>
            </aside>
        </>
    )
}