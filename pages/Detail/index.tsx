import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HeadInfo from '../../components/HeadInfo/HeadInfo'
import DetailSide from '../../components/DetailSide/DetailSide'
import Loading from '../loading';
import { DetailType } from "../../lib/TypeBox";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
// import Paging from '../../components/Paging';
import Pagination from "../../components/Pagination/Pagination";

export default function DetailMain(): JSX.Element {
    <HeadInfo title="Detail Page" contents="Detail Page" />

    const [list, setList] = useState<DetailType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(3);
    const offset: number = (page - 1) * limit;
    const API_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Detail.json';

    function getData() {
        axios.get(API_URL).then((res) => {
            setList(res.data.Post)
        })
    }

    useEffect(() => {
        getData();
        axios.get("").then((res) => {
            setLoading(false);
        });
        if (localStorage.getItem("Detail_pageNum") != null) {
            setPage(parseInt(`${localStorage.getItem("Detail_pageNum")}`));
        }
    }, []);

    return (
        <React.Fragment>
            {loading ? <Loading></Loading>
                : <React.Fragment>
                    <div className="container mx-auto flex flex-wrap py-6">

                        <section className="w-full lg:w-2/3 flex flex-col items-center px-3">

                            {
                                list.slice(offset, offset + limit).map(function (item: DetailType, idx: number) {
                                    return (
                                        <article className="flex flex-col shadow my-4" key={idx}>
                                            <Link href={`/Detail/${idx}`} className="hover:opacity-75">
                                                <Fade><img src={item?.src} /></Fade>
                                            </Link>

                                            <div className="bg-white dark:bg-slate-900 flex flex-col justify-start p-6">
                                                <Fade bottom>
                                                    <a className="text-blue-700 text-sm font-bold uppercase pb-4">Sports</a>
                                                    <a className="text-3xl font-bold pb-4">{item?.h2}</a>
                                                    <p className="text-sm pb-3">
                                                        이 글은 <a className="font-semibold">Lee dong ho</a>에 의해 {item?.date} 작성되었습니다.
                                                    </p>
                                                    <a className="pb-6">{item.p2}..</a>
                                                    <Link href={`/Detail/${item?.index}`} className="uppercase text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-600 transition">
                                                        Continue Reading <FontAwesomeIcon icon={faArrowRight} />
                                                    </Link>
                                                </Fade>
                                            </div>
                                        </article>
                                    )
                                })
                            }

                            <Pagination
                                total={list.length}
                                limit={limit}
                                page={page}
                                setPage={setPage}
                                Name={"Detail"}
                            />
                            {/* <div className="flex items-center py-8">
                                <button
                                    type='button'
                                    className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center cursor-pointer"
                                >1</button>
                                <button
                                    type='button'
                                    className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center cursor-pointer"
                                >2</button>
                                <button
                                    type='button'
                                    className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center cursor-pointer"
                                >3</button>
                                <button
                                    type='button'
                                    className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center cursor-pointer"
                                >4</button>
                                <span className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i className="fas fa-arrow-right ml-2"></i></span>
                            </div> */}

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
                </React.Fragment>
            }
        </React.Fragment>
    )
}