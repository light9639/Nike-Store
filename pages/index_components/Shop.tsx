import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RouteType, ShoeType } from '../Type/TypeBox'
// import Shoes from '../../data/Shoes.json';
import axios from 'axios';

export default function Shop(): JSX.Element {
    const [shop, setShop] = useState([]);
    const SHOP_API_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Shoes.json';
    
    useEffect(() => {
        axios.get(SHOP_API_URL).then((res: any) => {
            setShop(res.data.ShopAll)
        })
    }, []);

    return (
        <>
            <div className="max-w-screen-2xl mt-12 mb-20 mx-auto px-7 md:px-5 xl:px-10">
                <h2 className='font-semibold text-3xl text-center xl:text-left'>ShopAll</h2>
                <div className="md:flex flex-wrap -mx-1 lg:-mx-4">
                    {
                        shop.map(function (a: ShoeType, i: number) {
                            return (
                                <div className="md:w-1/3 rounded overflow-hidden mx-auto my-8 p-3 text-center" key={i}>
                                    <Link href={a.href}>
                                        <img className="w-full cursor-pointer hover:opacity-75 transition" src={a.img} alt="Sunset in the mountains" />
                                    </Link>
                                    <div className="pr-6 py-2">
                                        <Link href={a.href}>
                                            <div className="font-semibold text-2xl mb-2 cursor-pointer hover:opacity-75 transition underline underline-offset-8">{a.name}</div>
                                        </Link>
                                        <Link href={a.href}>
                                            <span className="hover:opacity-75 cursor-pointer">{a.text}</span>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}