import React, { Fragment, SetStateAction, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { SlideType } from '../../lib/TypeBox';

export default function Example(props: { data: any, setData: any, Name: string, copy: any }): JSX.Element {

    // 변수 모음
    const newBest = [...props.data];
    const New = [...newBest];

    // 이름 오름차순 정렬
    function NameUpFilter() {
        New.sort(function (a: { name: any }, b: { name: any }) {
            return a.name.localeCompare(b.name);
        });
        props.setData(New);
    }

    // 이름 내림차순 정렬
    function NameDownFilter() {
        New.sort(function (a: { name: any }, b: { name: any }) {
            return b.name.localeCompare(a.name);
        });
        props.setData(New);
    }

    // 가격 낮은 순 정렬
    function LowPriceFilter() {
        New.sort(function (a: { price: any; }, b: { price: any; }) {
            return parseFloat(a.price) - parseFloat(b.price);
        })
        props.setData(New);
    }

    // 가격 높은 순 정렬
    function HighPriceFilter() {
        New.sort(function (a: { price: any; }, b: { price: any; }) {
            return parseFloat(b.price) - parseFloat(a.price);
        })
        props.setData(New);
    }

    // 리뷰 많은 순 정렬
    function StarHighFilter() {
        New.sort(function (a: { Review: any; }, b: { Review: any; }) {
            return parseFloat(b.Review) - parseFloat(a.Review);
        })
        props.setData(New);
    }

    // 리뷰 적은 순 정렬
    function StarLowFilter() {
        New.sort(function (a: { Review: any; }, b: { Review: any; }) {
            return parseFloat(a.Review) - parseFloat(b.Review);
        })
        props.setData(New);
    }

    // 신상품순 정렬
    function NewFilter() {
        New.sort(function (a: { index: any; }, b: { index: any; }) {
            return parseFloat(a.index) - parseFloat(b.index);
        })
        props.setData(New);
    }

    // 원상복귀
    function OriginFilter() {
        // const data = localStorage.setItem(`${props.Name}_StateInLocal`, props.NewData);
        props.setData(props.copy);
    }

    // 클릭시 찾기
    function findName(children: string) {
        props.setData(
            props.data.filter((item: { info: string | string[]; }) => item.info.indexOf(children) !== -1)
        );
    }

    // 로컬 저장
    // function saveLocal() {
    //     localStorage.setItem(`${props.Name}_StateInLocal`, JSON.stringify(props.data));
    // };

    useEffect(() => {
        localStorage.setItem(`${props.Name}_StateInLocal`, JSON.stringify(props.data));
    }, [props.data]);

    useEffect(() => {
        const data = localStorage.getItem(`${props.Name}_StateInLocal`);
        if (data) {
            props.setData(JSON.parse(data));
        }
    }, []);

    return (
        <Menu as="div" className="relative inline-block text-left ml-1">
            <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                    선택 옵션
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm cursor-pointer'
                                    )}
                                    onClick={() => { OriginFilter(); }}
                                >
                                    원본 되돌리기
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm cursor-pointer'
                                    )}
                                    onClick={() => { NewFilter(); }}
                                >
                                    신상품순
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm cursor-pointer'
                                    )}
                                    // onClick={NameUpFilter}
                                    onClick={() => { NameUpFilter(); }}
                                >
                                    이름 오름차순
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm cursor-pointer'
                                    )}
                                    // onClick={NameDownFilter}
                                    onClick={() => { NameDownFilter(); }}
                                >
                                    이름 내림차순
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm cursor-pointer'
                                    )}
                                    // onClick={HighPriceFilter}
                                    onClick={() => { HighPriceFilter(); }}
                                >
                                    가격 높은 순
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm cursor-pointer'
                                    )}
                                    // onClick={LowPriceFilter}
                                    onClick={() => { LowPriceFilter(); }}
                                >
                                    가격 낮은 순
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm cursor-pointer'
                                    )}
                                    // onClick={StarHighFilter}
                                    onClick={() => { StarHighFilter(); }}
                                >
                                    리뷰 많은 순
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm cursor-pointer'
                                    )}
                                    // onClick={StarLowFilter}
                                    onClick={() => { StarLowFilter(); }}
                                >
                                    리뷰 적은 순
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}