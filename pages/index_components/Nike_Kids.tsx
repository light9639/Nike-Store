import React from 'react'
import { RouteType } from '../api/TypeBox'

function Nike_Kids(props: RouteType): JSX.Element {
    return (
        <div className="container mx-auto px-4 -mt-20" style={{ "maxWidth": "98%" }}>
            <img className='mx-auto max-w-full p-2 md:p-0 sm:max-w-md mb-10' src="/Kids.png" alt="Nike" />
            {/* <img className='mx-auto max-w-md mb-10' src="https://static-breeze.nike.co.kr/kr/ko_kr/https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/65250/220121_kids_p12_bg.jpg" alt="Nike" /> */}
            <p className="font-sans font-light text-lg text-center">더 많은 키즈 신발을 만나보세요. <br />간단한 설문을 통해 아이에게 꼭 맞는 신발을 추천해 드립니다.</p>
            <div className="mt-4 sm:mt-6 text-center ">
                <a
                    href="#"
                    className="inline-block px-5 py-3 rounded-lg shadow-lg bg-black dark:bg-white text-sm text-white dark:text-black uppercase tracking-wider font-semibold sm:text-base"
                    onClick={() => props.router.push(`/Detail/${7}`)}
                >제품 추천받기</a>
            </div>
        </div>
    )
}

export default Nike_Kids