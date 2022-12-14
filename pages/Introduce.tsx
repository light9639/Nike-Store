import React from 'react'
import HeadInfo from '../components/HeadInfo'
import Fade from 'react-reveal/Fade';

export default function Introduce(): JSX.Element {

    return (
        <React.Fragment>
            <HeadInfo title="Introduce Page" contents="Introduce Page"></HeadInfo>

                <div>
                    <div id="progress" className="h-1 bg-white shadow hidden" style={{ "background": "linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)" }}></div>
                </div>

                <div className="text-center mt-28">
                    <Fade bottom>
                        <p className="text-sm md:text-base text-blue-500 font-bold">08 APRIL 2019 <span className="text-gray-900">/</span> GETTING STARTED</p>
                    </Fade>
                    <Fade bottom>
                        <h1 className="font-bold break-normal text-3xl md:text-5xl">Welcome to Ghostwind CSS</h1>
                    </Fade>
                </div>

                <div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded relative -z-50" style={{ "height": "75vh" }}>
                    <Fade><img src="/mainBanner01.png" alt="Img" /></Fade>
                </div>
                <div className="container max-w-5xl mx-auto -mt-32">
                    <div className="mx-0 sm:mx-6">
                        <div className="bg-white dark:bg-slate-900 shadow-md rounded-md w-full p-8 mb-28 md:p-24 text-xl md:text-2xl text-gray-800 dark:text-white leading-normal" style={{ "fontFamily": "Georgia,serif" }}>
                            <Fade bottom>
                                <p className="text-2xl md:text-3xl mb-5">
                                    👋 Welcome fellow <a className="text-gray-800 dark:text-white dark:hover:text-blue-500 hover:text-blue-500 no-underline border-b-2 border-blue-500" href="https://www.tailwindcss.com">Tailwind CSS</a> and <a className="text-gray-800 dark:text-white dark:hover:text-blue-500 hover:text-blue-500 no-underline border-b-2 border-blue-500" href="https://www.ghost.org">Ghost</a> fan. This starter template is an attempt to replicate the default Ghost theme <a className="text-gray-800 dark:text-white dark:hover:text-blue-500 hover:text-blue-500 no-underline border-b-2 border-blue-500" href="https://demo.ghost.io/welcome">"Casper"</a> using Tailwind CSS and vanilla Javascript.
                                </p>
                                <p className="py-6">The basic blog page layout is available and all using the default Tailwind CSS classes (although there are a few hardcoded style tags). If you are going to use this in your project, you will want to convert the classes into components.</p>
                                <p className="py-6">Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis tortor sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend turpis vel erat bibendum scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla eget sem dictum elementum.</p>
                                <ol>
                                    <li className="py-3">Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque tortor semper posuere.</li>
                                    <li className="py-3">Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo. Duis auctor ornare mauris, eu accumsan odio viverra in. Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec felis.</li>
                                    <li className="py-3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris, tristique in risus ac, tristique rutrum velit. Mauris accumsan tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien suscipit, elementum odio et, consequat tellus.</li>
                                </ol>
                                <blockquote className="border-l-4 border-blue-500 italic my-8 pl-8 md:pl-12">Example of blockquote - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</blockquote>
                            </Fade>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}