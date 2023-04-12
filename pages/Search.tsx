import React, { useEffect, useState } from 'react'
import HeadInfo from '@components/HeadInfo'
import axios from 'axios';
import { DetailType } from '@lib/TypeBox'
import { ShoeViewType } from '@lib/ShoeType'
import { motion } from "framer-motion";

export default function Search(): JSX.Element {
    const [search, setSearch] = useState<string>('')
    const [every, setEvery] = useState<ShoeViewType[]>([]);
    const [detail, setDetail] = useState<DetailType[]>([]);
    const Every_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Shoes_View.json'
    const Detail_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Detail.json'

    // const [search, setSearch] = useState("");
    const [lists, setLists] = useState([]);
    // const router = useRouter();
    /*pagination*/
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPosts, setCurrentPosts] = useState([]);
    const postsPerPage = 10;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    // useEffect(() => {
    //     const userData = async () => {
    //         await axios
    //             .get(common.baseURL + "user")
    //             .then((res) => {
    //                 setLists(res.data.patientList)
    //                 setCurrentPosts(res.data.patientList.slice(indexOfFirstPost, indexOfLastPost))
    //                 setCurrentPage(1)
    //             });
    //     };
    //     userData();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // useEffect(() => {
    //     setCurrentPosts(lists.slice(indexOfFirstPost, indexOfLastPost))
    // }, [indexOfFirstPost, indexOfLastPost, lists])

    // const onSearch = (e) => {
    //     e.preventDefault();
    //     if (search === null || search === '') {
    //         axios.get(common.baseURL + "user")
    //             .then((res) => {
    //                 setLists(res.data.userList)
    //                 setCurrentPosts(res.data.userist.slice(indexOfFirstPost, indexOfLastPost))
    //             });
    //     } else {
    //         const filterData = lists.filter((row) => row.userId.includes(search))
    //         setLists(filterData)
    //         setCurrentPosts(filterData.slice(indexOfFirstPost, indexOfLastPost))
    //         setCurrentPage(1)
    //     }
    //     setSearch('')
    // }

    // const onChangeSearch = (e: { preventDefault: () => void; target: { value: React.SetStateAction<string>; }; }) => {
    //     e.preventDefault();
    //     setSearch(e.target.value);
    // };

    // const inputChange = (e: { target: { value: any; }; }) => {
    //     const { value } = e.target
    //     setSearch(value)
    // }

    // useEffect(() => {
    //     setEvery(
    //         every.filter(item => item.name.toUpperCase().indexOf(search) !== -1)
    //     )
    // }, [search])

    function getEvery() {
        axios.get(Every_URL).then((res) => {
            setEvery(res.data.Every)
        })
    }

    function getDetail() {
        axios.get(Detail_URL).then((res) => {
            setDetail(res.data.Post)
        })
    }

    useEffect(() => {
        getEvery()
        getDetail()
    }, []);

    return (
        <React.Fragment>
            <HeadInfo title="Map Page" contents="Map Page"></HeadInfo>

            <div className='max-w-screen-2xl mx-auto my-20'>

                <h1 className="text-3xl lg:text-4xl text-gray-700 dark:text-white font-bold text-center mt-20">Nike Search Page</h1>

                {/* <form onSubmit={e => onSearch(e)} className='max-w-3xl mx-auto my-10'> */}
                <form className='max-w-3xl mx-auto my-10'>
                    <label htmlFor="" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        {/* <input
                            placeholder="Search Mockups, Logos..."
                            onChange={inputChange}
                            value={inputText}
                        /> */}
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={search}
                            placeholder="아이디를 검색하세요."
                            // onChange={onChangeSearch}
                            required
                        />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>

                <div className="max-w-screen-xl mx-auto p-5 mb-4 bg-gray-50 rounded-xl border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                    {/* <p className="text-xl font-semibold text-gray-900 dark:text-white text-center">Search All Shoes</p> */}
                    <ol className="mt-5 divide-y divider-gray-200 dark:divide-gray-700 grid grid-cols-3">
                        {
                            every.slice(0, 12).map(function (item: ShoeViewType, idx: number) {
                                return (
                                    <li>
                                        <a href={`/view/${item.index}`} className="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <img className="mr-3 mb-3 w-40 h-40 object-cover rounded-md sm:mb-0" src={item.src.first} alt={item.alt} />
                                            <div className="text-gray-600 dark:text-gray-400">
                                                <p className="text-lg font-semibold">{item.name}</p>
                                                <p className="text-sm font-normal mt-1">{item.info}</p>
                                                <p className="text-sm font-normal mt-1">{item.price}</p>
                                                <span className="flex items-center mt-2">
                                                    <svg fill={item.star.first} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill={item.star.second} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill={item.star.third} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill={item.star.four} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg fill={item.star.five} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                </span>
                                                <span className="inline-flex bg-blue-100 text-blue-800 text-xs font-semibold mt-3 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{item.Review} Reviews</span>
                                                {/* <span className="inline-flex items-center text-sm font-normal text-gray-500 dark:text-gray-400 mt-2">
                                                    <svg aria-hidden="true" className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"></path><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path></svg>
                                                    Private
                                                </span> */}
                                            </div>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
                {/* <div className="max-w-screen-xl mx-auto p-5 bg-gray-50 rounded-xl border border-gray-100 dark:bg-gray-800 dark:border-gray-700 ">
                    <time className="text-lg font-semibold text-gray-900 dark:text-white">January 12th, 2022</time>
                    <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
                        {
                            detail.slice(0, 3).map(function (item: DetailType, idx: number) {
                                return (
                                    <li>
                                        <a href={`/Detail/${item.index - 1}`} className="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <img className="mr-3 mb-3 w-24 rounded-md sm:mb-0" src={item.src2} alt={item.alt} />
                                            <div className="text-gray-600 dark:text-gray-400">
                                                <p className="text-base font-normal">{item.h2}</p>
                                                <p className="text-sm font-normal">{item.p1}</p>
                                                <p className="text-sm font-normal">{item.p2}</p>
                                                <p className="text-sm font-normal">{item.date}</p>
                                                <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                                                    <svg aria-hidden="true" className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"></path><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path></svg>
                                                    Private
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div> */}
            </div>
        </React.Fragment>
    )
}