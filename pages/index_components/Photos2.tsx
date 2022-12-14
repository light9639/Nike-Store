import React from 'react'
import { RouteType } from '../Type/TypeBox'
import Fade from 'react-reveal/Fade';

export default function Photos2(props: RouteType): JSX.Element {

    return (
        <React.Fragment>
            <div className="py-16">
                <div className="block lg:w-full max-w-screen-2xl m-auto lg:relative">
                    <Fade big>
                        <video autoPlay={true} muted={true} playsInline={true} loop={true} className='max-w-screen-2xl w-full'>
                            <source src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/running-4dfwd-educate-fw22-digital-catlp-masthead-large-d_w5e8xp.mp4" />
                        </video>
                    </Fade>
                </div>
                <div className="px-8 py-6 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:px-12">
                    <div className="max-w-lg m-auto text-center">
                        <Fade bottom>
                            <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl dark:text-white tracking-tighter">
                                아디다스 4DFWD
                            </h1>
                            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl dark:text-white tracking-tighter">
                                스피드 러닝을 위해 태어난 아디다스 4DFWD<br />
                                모든 걸음에 탄력을 더하는 탁월한 반응성으로<br />
                                템포 러닝, 인터벌 러닝, 베이스 러닝, 프로그레션 러닝 등의 다양한 러닝과 함께 즐겨보세요.
                            </p>
                            <div className="mt-4 sm:mt-6">
                                <a className="cursor-pointer Black_border" onClick={() => props.router.push(`/Detail/${5}`)}>더 알아보기</a>
                                <a className="cursor-pointer Black_box" onClick={() => props.router.push(`/Detail/${5}`)}>구매하기</a>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}