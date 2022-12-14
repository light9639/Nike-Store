import React from 'react'
import { RouteType } from '../Type/TypeBox'
import Fade from 'react-reveal/Fade';

export default function Nike_Kids(props: RouteType): JSX.Element {
    return (
        <div className="container mx-auto px-4 -mt-20" style={{ "maxWidth": "98%" }}>
            <Fade><img className='mx-auto max-w-full p-2 md:p-0 sm:max-w-md mb-10' src="/Kids.png" alt="Nike" /></Fade>
            <Fade bottom>
                <p className="font-sans font-light text-lg text-center">더 많은 키즈 신발을 만나보세요. <br />간단한 설문을 통해 아이에게 꼭 맞는 신발을 추천해 드립니다.</p>
                <div className="mt-4 sm:mt-6 text-center ">
                    <a
                        className="inline-block px-5 py-3 rounded-lg shadow-lg bg-black dark:bg-white text-sm text-white dark:text-black uppercase tracking-wider font-semibold sm:text-base cursor-pointer"
                        onClick={() => props.router.push(`/Detail/${7}`)}
                    >제품 추천받기</a>
                </div>
            </Fade>
        </div>
    )
}