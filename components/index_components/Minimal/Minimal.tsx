import React from 'react';
import { RouteType } from '../../../lib/TypeBox'
import Fade from 'react-reveal/Fade';
import { Minimal_style } from "./MinimalStyle";

export default function Minimal(props: RouteType): JSX.Element {
    return (
        <React.Fragment>
            <section className="section--showcase min-h-full py-20">
                <div className="container mx-auto px-4">
                    <div className="showcase--grid my-20">
                        <Fade left>
                            <div
                                className="showcase--item__big relative bg-cover bg-center bg-no-repeat rounded-lg transition hover:shadow-2xl hover:opacity-95"
                                onClick={() => props.router.push(`/Detail/${8}`)}
                            >
                                <div className="showcase--item__overlay absolute flex h-full w-full items-end p-8 rounded-lg cursor-pointer">
                                    <h1 className="text-white font-serif font-regular text-4xl text-center">Nike Soccer Shoes</h1>
                                </div>
                            </div>
                        </Fade>
                        <Fade right>
                            <div
                                className="showcase--item__small_top relative bg-cover bg-center bg-no-repeat rounded-lg transition hover:shadow-2xl hover:opacity-95"
                                onClick={() => props.router.push(`/Detail/${9}`)}
                            >
                                <div className="showcase--item__overlay absolute  flex h-full w-full items-end p-8 rounded-lg cursor-pointer">
                                    <h1 className="text-white font-serif font-regular text-4xl text-center">Nike Running Shoes</h1>
                                </div>
                            </div>
                        </Fade>
                        <Fade right>
                            <div
                                className="showcase--item__small_bottom relative bg-cover bg-center bg-no-repeat rounded-lg transition hover:shadow-2xl hover:opacity-90"
                                onClick={() => props.router.push(`/Detail/${10}`)}
                            >
                                <div className="showcase--item__overlay absolute flex h-full w-full items-end p-8 rounded-lg cursor-pointer">
                                    <h1 className="text-white font-serif font-regular text-4xl text-center">Nike Minimal Shoes</h1>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
            <style jsx>{Minimal_style}</style>
        </React.Fragment>
    )
}