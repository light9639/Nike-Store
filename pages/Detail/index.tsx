import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HeadInfo from '@components/HeadInfo'
import DetailSide from '@components/DetailSide'
import Loading from '../LoadingPage';
import { DetailType } from "@lib/TypeBox";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
import Pagination from "@components/Pagination";
import Image from 'next/image';
import type { NextPage } from "next";

interface DetailPageType {
    DetailData: DetailType[];
}

const DetailMain: NextPage<DetailPageType> = ({ DetailData }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(3);
    const offset: number = (page - 1) * limit;

    useEffect(() => {
        axios.get("").then((res) => {
            setLoading(false);
        });
        if (localStorage.getItem("Detail_pageNum") != null) {
            setPage(parseInt(`${localStorage.getItem("Detail_pageNum")}`));
        }
    }, []);

    return (
        <React.Fragment>
            <HeadInfo title="Detail Page" contents="Detail Page" />

            {loading ? <Loading></Loading>
                : <React.Fragment>
                    <div className="container mx-auto flex flex-wrap py-6">

                        <section className="w-full lg:w-2/3 flex flex-col items-center px-3">

                            {
                                DetailData.slice(offset, offset + limit).map(function (item: DetailType, idx: number) {
                                    return (
                                        <article className="flex flex-col shadow my-4 w-full" key={item.index}>
                                            <Link href={`/Detail/${item.index - 1}`} className="hover:opacity-75 w-full max-h-[520px] h-full overflow-hidden">
                                                <Fade><Image src={item.src} alt={item.alt} width={1443} height={750} className="w-full" /></Fade>
                                            </Link>

                                            <div className="bg-white dark:bg-slate-900 flex flex-col justify-start p-6">
                                                <Fade bottom duration={750}>
                                                    <a className="text-gray-900 dark:text-blue-700 text-sm font-bold uppercase pb-4">Sports</a>
                                                </Fade>
                                                <Fade bottom duration={900}>
                                                    <a className="text-[1.75rem] md:text-3xl font-bold pb-4">{item.h2}</a>
                                                </Fade>
                                                <Fade bottom duration={1050}>
                                                    <p className="text-sm pb-3">
                                                        이 글은 <a className="font-semibold">Lee dong ho</a>에 의해 {item.date} 작성되었습니다.
                                                    </p>
                                                </Fade>
                                                <Fade bottom duration={1200}>
                                                    <a className="pb-6">{item.p2}..</a>
                                                </Fade>
                                                <Fade bottom duration={1350}>
                                                    <Link href={`/Detail/${item.index}`} className="uppercase text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-600 transition flex">
                                                        Continue Reading <FontAwesomeIcon icon={faArrowRight} className="w-3.5 ml-2 mt-0.5" />
                                                    </Link>
                                                </Fade>
                                            </div>
                                        </article>
                                    )
                                })
                            }

                            <Pagination
                                total={DetailData.length}
                                limit={limit}
                                page={page}
                                setPage={setPage}
                                Name={"Detail"}
                            />

                        </section>

                        <DetailSide></DetailSide>

                    </div>
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export async function getStaticProps() {
    const API_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Detail.json';
    const response = await axios.get(API_URL);
    const data = response.data.Post;

    return {
        props: {
            DetailData: data,
        },
        revalidate: 20,
    };
}

export default DetailMain