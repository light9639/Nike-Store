import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ShoeType } from '@lib/TypeBox'
import axios from 'axios';
import Fade from 'react-reveal/Fade';

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
            <div className="max-w-screen-2xl mt-12 mb-20 mx-auto px-7 md:px-5 xl:px-10">
                <h2 className='font-semibold text-3xl text-center xl:text-left'>ShopAll</h2>
                <div className="md:flex flex-wrap -mx-1 lg:-mx-4">
                    {
                        shop && shop.map(function (item: ShoeType, idx: number) {
                            return (
                                <div className="md:w-1/3 rounded overflow-hidden mx-auto my-8 p-3 text-center" key={idx}>
                                    <Fade big>
                                        <Link href={item.href}>
                                            <img className="w-full cursor-pointer hover:opacity-75 transition rounded" src={item.img} alt="Sunset in the mountains" />
                                        </Link>
                                    </Fade>
                                    <div className="pr-6 py-2">
                                        <Fade bottom cascade>
                                            <Link href={item.href}>
                                                <div className="font-semibold text-2xl mb-2 cursor-pointer hover:opacity-75 transition underline underline-offset-8">{item.name}</div>
                                            </Link>
                                            <Link href={item.href}>
                                                <span className="hover:opacity-75 cursor-pointer">{item.text}</span>
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