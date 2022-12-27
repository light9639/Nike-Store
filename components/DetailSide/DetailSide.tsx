import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { DetailType } from "../../lib/TypeBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function DetailSide(): JSX.Element {
    const [list, setList] = useState<DetailType[]>([]);
    const DETAIL_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Detail.json'

    useEffect(() => {
        axios.get(DETAIL_URL).then((res) => {
            setList(res.data.Post)
        })
    }, []);

    return (
        <React.Fragment>
            <aside className="w-full lg:w-1/3 flex flex-col items-center px-3">
                <div className="w-full bg-white dark:bg-slate-900 shadow flex flex-col my-4 p-6 text-center lg:text-left">
                    <p className="text-xl font-semibold pb-5">About Us</p>
                    <p className="pb-2">NIKE, 주식회사는 나이키, 조던, 컨버스 브랜드로 구성된 팀으로, 지속적인 영향력을 남기고자 하는 목표를 위해 활동하고 있습니다.</p>
                    <Link href="/About" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                        Get to know us
                    </Link>
                </div>
                <div className="w-full bg-white dark:bg-slate-900 shadow flex flex-col my-4 p-6">
                    <p className="text-xl font-semibold pb-5">Instagram</p>
                    <div className="grid grid-cols-3 gap-3">
                        {
                            list && list.map(function (item: DetailType, idx: number) {
                                return (
                                    <Link href={"/Detail/" + idx}>
                                        <img className="hover:opacity-75 cursor-pointer" src={item?.src2} />
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <a href="#void" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
                        <FontAwesomeIcon icon={faGithub} className="mr-2" /> Follow @Dongho
                    </a>
                </div>
            </aside>
        </React.Fragment>
    )
}