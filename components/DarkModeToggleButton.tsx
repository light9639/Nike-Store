import { useTheme } from 'next-themes'

export default function DarkModeToggleButton() {

    // theme : 현재 값 가져오기 getter
    // setTheme : 현재 값 바꾸기 setter
    const { theme, setTheme } = useTheme()

    return (
        <>
            {/* <span
                className='mr-7'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >

                <button className="dark:hidden relative inline-flex items-center py-2 px-2.5 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none text-red focus-visible:ring-sky-600 hover:bg-gray-200" id="headlessui-switch-5" role="switch" type="button" aria-checked="false" data-headlessui-state="">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"></path>
                    </svg>

                    <svg width="24" height="24" fill="none" aria-hidden="true" className="transform transition-transform scale-0 duration-500">
                        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg>
                    <svg width="24" height="24" fill="none" aria-hidden="true" className="ml-3.5 transform transition-transform scale-100 duration-300">
                        <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg>
                    <span className="absolute top-0.5 left-0.5 bg-white w-8 h-8 rounded-full flex items-center justify-center transition duration-500 transform">
                        <svg width="24" height="24" fill="none" aria-hidden="true" className="flex-none transition duration-500 transform text-sky-500 opacity-100 scale-100">
                            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                            <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg>
                        <svg width="24" height="24" fill="none" aria-hidden="true" className="flex-none -ml-6 transition duration-500 transform text-slate-700 opacity-0 scale-0">
                            <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg>
                    </span>
                </button>

                <button className="hidden dark:inline-flex relative items-center py-2 px-2.5 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none text-white focus-visible:ring-slate-500 hover:bg-gray-700" id="headlessui-switch-5" role="switch" type="button" aria-checked="true" data-headlessui-state="checked">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6144 14.6145C19.787 14.8653 18.9093 15.0001 18 15.0001C13.0294 15.0001 9 10.9707 9 6.00013C9 5.09088 9.13484 4.21311 9.3856 3.38574C5.69007 4.50583 3 7.93883 3 12.0001C3 16.9707 7.02944 21.0001 12 21.0001C16.0613 21.0001 19.4943 18.3101 20.6144 14.6145Z" fill="currentColor"></path>
                    </svg>

                    <span className="sr-only"></span>
                    <svg width="24" height="24" fill="none" aria-hidden="true" className="transform transition-transform scale-100 duration-300">
                        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg>
                    <svg width="24" height="24" fill="none" aria-hidden="true" className="ml-3.5 transform transition-transform scale-0 duration-500">
                        <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg>
                    <span className="absolute top-0.5 left-0.5 bg-white w-8 h-8 rounded-full flex items-center justify-center transition duration-500 transform translate-x-[2.625rem]">
                        <svg width="24" height="24" fill="none" aria-hidden="true" className="flex-none transition duration-500 transform text-sky-500 opacity-0 scale-0">
                            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                            <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg>
                        <svg width="24" height="24" fill="none" aria-hidden="true" className="flex-none -ml-6 transition duration-500 transform text-slate-700 opacity-100 scale-100">
                            <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg>
                    </span>
                </button>
            </span> */}
            {/* inline-flex items-center
            rounded-lg text-base mr-2
            py-1.5 px-2
            focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 focus:outline-none
            bg-white dark:bg-gray-800
            border-2
            hover:opacity-75 */}
            <button
                className="
                inline-flex items-center py-1.5 px-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200
                toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500
                dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700
                "
                type='button'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                <span className='dark:hidden'>
                    <span className="w-8 h-8 rounded-full flex items-center justify-center transition duration-500">
                        <svg width="24" height="24" fill="none" aria-hidden="true" className="flex-none transition duration-500 transform text-blue-500 opacity-100 scale-100">
                            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                            <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg>
                        <svg width="24" height="24" fill="none" aria-hidden="true" className="flex-none -ml-6 transition duration-500 transform text-slate-700 opacity-0 scale-0">
                            <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg>
                    </span>
                </span>

                <span className='hidden dark:inline'>
                    <span className="w-8 h-8 rounded flex items-center justify-center transition duration-500">
                        <svg width="24" height="24" fill="none" aria-hidden="true" className="flex-none transition duration-500 transform text-blue-500 opacity-0 scale-0">
                            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                            <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg>
                        <svg width="24" height="24" fill="none" aria-hidden="true" className="flex-none -ml-6 transition duration-500 transform text-blue-500 opacity-100 scale-100">
                            <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg>
                    </span>
                </span>

            </button>
        </>
    );
}
