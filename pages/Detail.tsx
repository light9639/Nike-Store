import React from 'react'

function Detail() {
    return (
        <div>
            <div>
                <div id="progress" className="h-1 bg-white shadow" style={{ "background": "linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)" }}></div>
            </div>

            <div className="text-center mt-28">
                <p className="text-sm md:text-base text-blue-500 font-bold">08 APRIL 2019 <span className="text-gray-900">/</span> GETTING STARTED</p>
                <h1 className="font-bold break-normal text-3xl md:text-5xl">Welcome to Ghostwind CSS</h1>
            </div>

            <div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded" style={{ "backgroundImage": "url('https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/65250/220905_mlp_p6_bg.jpg'); height: 75vh" }}></div>
            <div className="container max-w-5xl mx-auto -mt-32">
                <div className="mx-0 sm:mx-6">
                    <div className="bg-white dark:bg-slate-900 shadow-md rounded-md w-full p-8 mb-28 md:p-24 text-xl md:text-2xl text-gray-800 dark:text-white leading-normal" style={{ "fontFamily": "Georgia,serif" }}>
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
                    </div>
                </div>
            </div>
            {/* <div className="container w-full md:max-w-screen-2xl mx-auto pt-20">

                <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style={{ "fontFamily": "Georgia,serif" }}>
                    <div className="w-full bg-cover bg-center h-32" style={{ "height": "32rem", "backgroundImage": "url(https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/65250/220905_mlp_p6_bg.jpg)" }}>
                        <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                            <div className="text-center">
                                <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl mb-2">Blog Post Title</h1>
                                <ul>
                                    <li className="space-x-2">
                                        <a className="text-white px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-300 hover:text-gray-800 transition duration-300 border border-gray-600" href="#">topic</a>
                                        <a className="text-white px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-300 hover:text-gray-800 transition duration-300 border border-gray-600" href="#">topic</a>
                                        <a className="text-white px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-300 hover:text-gray-800 transition duration-300 border border-gray-600" href="#">topic</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="font-sans">
                        <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">Welcome to Minimal Blog</h1>
                        <p className="text-sm md:text-base font-normal text-gray-600">Published 19 February 2019</p>
                    </div>
                    <p className="py-6">
                        👋 Welcome fellow <a className="text-green-500 no-underline hover:underline" href="https://www.tailwindcss.com">Tailwind CSS</a> and miminal monochrome blog fan. This starter template provides a starting point to create your own minimal monochrome blog using Tailwind CSS and vanilla Javascript.
                    </p>
                    <p className="py-6">The basic blog page layout is available and all using the default Tailwind CSS classes (although there are a few hardcoded style tags). If you are going to use this in your project, you will want to convert the classes into components.</p>
                    <h1 className="py-2 font-sans">Heading 1</h1>
                    <h2 className="py-2 font-sans">Heading 2</h2>
                    <h3 className="py-2 font-sans">Heading 3</h3>
                    <h4 className="py-2 font-sans">Heading 4</h4>
                    <h5 className="py-2 font-sans">Heading 5</h5>
                    <h6 className="py-2 font-sans">Heading 6</h6>
                    <p className="py-6">Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis tortor sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend turpis vel erat bibendum scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla eget sem dictum elementum.</p>
                    <ol>
                        <li className="py-3">Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque tortor semper posuere.</li>
                        <li className="py-3">Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo. Duis auctor ornare mauris, eu accumsan odio viverra in. Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec felis.</li>
                        <li className="py-3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris, tristique in risus ac, tristique rutrum velit. Mauris accumsan tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien suscipit, elementum odio et, consequat tellus.</li>
                    </ol>
                    <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">Example of blockquote - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</blockquote>
                </div>
                <div className="text-base md:text-sm text-gray-500 px-4 py-6">
                    Tags: <a href="#" className="text-base md:text-sm text-green-500 no-underline hover:underline">Link</a> . <a href="#" className="text-base md:text-sm text-green-500 no-underline hover:underline">Link</a>
                </div>
            </div> */}
            {/* <div>
                <div className="w-full bg-cover bg-center h-32" style={{ "height": "32rem", "backgroundImage": "url(https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/65250/220905_mlp_p6_bg.jpg)" }}>
                    <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                        <div className="text-center">
                            <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl mb-2">Blog Post Title</h1>
                            <ul>
                                <li className="space-x-2">
                                    <a className="text-white px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-300 hover:text-gray-800 transition duration-300 border border-gray-600" href="#">topic</a>
                                    <a className="text-white px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-300 hover:text-gray-800 transition duration-300 border border-gray-600" href="#">topic</a>
                                    <a className="text-white px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-300 hover:text-gray-800 transition duration-300 border border-gray-600" href="#">topic</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-6 sm:container xs:container md:w-2/3 md:max-w-4xl mx-auto text-gray-800 text-lg">
                <h2>Section</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quaerat quo officia fugiat provident minima praesentium quibusdam pariatur consequuntur, possimus aperiam optio, quod aut consequatur. Ratione, dolor! Tempore, voluptas ex.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quaerat quo officia fugiat provident minima praesentium quibusdam pariatur consequuntur, possimus aperiam optio, quod aut consequatur. Ratione, dolor! Tempore, voluptas ex.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quaerat quo officia fugiat provident minima praesentium quibusdam pariatur consequuntur, possimus aperiam optio, quod aut consequatur. Ratione, dolor! Tempore, voluptas ex.
                </p>
            </div> */}
        </div>
    )
}

export default Detail