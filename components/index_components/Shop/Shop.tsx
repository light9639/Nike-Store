import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ShoeType } from '@lib/TypeBox'
import axios from 'axios';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';

export default function Shop(): JSX.Element {
    const [shop, setShop] = useState<ShoeType[]>([]);
    const SHOP_API_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Shoes.json';

    useEffect(() => {
        axios.get(SHOP_API_URL).then((res) => {
            setShop(res.data.ShopAll)
        })
    }, []);

    return (
        <React.Fragment>
            <div className="max-w-screen-2xl mt-12 mb-20 mx-auto px-7 sm:px-5 xl:px-10">
                <h2 className='font-semibold text-3xl text-center xl:text-left'>ShopAll</h2>
                <div className="sm:flex flex-wrap -mx-1 lg:-mx-4">
                    {
                        shop && shop.map(function (item: ShoeType, idx: number) {
                            return (
                                <div className="sm:w-1/3 rounded overflow-hidden mx-auto my-8 p-3 text-center" key={idx}>
                                    <Fade big>
                                        <Link href={item.href}>
                                            <Image className="w-full cursor-pointer hover:opacity-75 transition rounded" src={item.img} alt="Sunset in the mountains" width={720} height={840} />
                                        </Link>
                                    </Fade>
                                    <div className="pr-6 py-2">
                                        <Fade bottom cascade>
                                            <Link href={item.href}>
                                                <p className="font-semibold text-2xl sm:text-base lg:text-2xl cursor-pointer hover:opacity-75 transition ">{item.name}</p>
                                            </Link>
                                            <div className="flex justify-center mx-auto">
                                                <span className={`inline-block h-1 bg-gray-900 dark:bg-white rounded-full mt-1 sm:mt-0 lg:mt-1 ${idx == 1 ? 'w-20 sm:w-14 lg:w-20' : 'w-10 sm:w-7 lg:w-10'}`}></span>
                                            </div>
                                            <Link href={item.href}>
                                                <span className="hover:opacity-75 text-base sm:text-sm lg:text-base cursor-pointer line-clamp-1 mt-2 lg:mt-3">{item.text}</span>
                                            </Link>
                                        </Fade>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}