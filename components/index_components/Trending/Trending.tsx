import React from 'react';
import { RouteType } from '../../../lib/TypeBox'
import Fade from 'react-reveal/Fade';
import { Trending_style } from './TrendingStyle';

export default function Trending(props: RouteType): JSX.Element {
    return (
        <React.Fragment>
            <section className="section--showcase min-h-full py-20">
                <div className="container mx-auto px-4">
                    <div className="showcase--grid my-20">
                        <Fade big>
                            <div
                                className="showcase--item__big relative bg-cover bg-center bg-no-repeat rounded-lg transition hover:shadow-2xl hover:opacity-95"
                            >
                                <div className="showcase--item__overlay absolute  flex h-full w-full items-end p-8">
                                    <h1 className="text-white font-serif font-regular text-4xl text-center">Nike Dunk Shoes</h1>
                                </div>
                            </div>
                        </Fade>
                        <Fade big>
                            <div
                                className="showcase--item__big2 relative bg-cover bg-center bg-no-repeat rounded-lg transition hover:shadow-2xl hover:opacity-95"
                            >
                                <div className="showcase--item__overlay absolute flex h-full w-full items-end p-8">
                                    <h1 className="text-white font-serif font-regular text-4xl text-center">ACG Collection</h1>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <Fade bottom>
                        <h2 className="text-center font-serif text-4xl text-black mb-4 dark:text-white">NEW ARRIVAL PLATFORMS</h2>
                        <p className="text-lg text-center">가을에 어울리는 차분한 컬러로 새롭게 출시된 <br /> 플랫폼 제품을 만나보세요.</p>
                        <div className="mt-4 sm:mt-6 text-center ">
                            <a className="cursor-pointer Black_border" onClick={() => props.router.push(`/Detail/${6}`)}>더 알아보기</a>
                            <a className="cursor-pointer Black_box" onClick={() => props.router.push(`/Detail/${6}`)}>구매하기</a>
                        </div>
                    </Fade>
                </div>
            </section>
            <style jsx>{Trending_style}</style>
        </React.Fragment>
    )
}