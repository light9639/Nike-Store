import React from 'react';
import { useTheme } from 'next-themes'

export default function DarkModeToggleButton(): JSX.Element {
    const { theme, setTheme } = useTheme()

    return (
        <React.Fragment>
            <button
                className="
                inline-flex items-center py-1.5 px-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200
                toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500
                dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700
                "
                type='button'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {/* 라이트 모드 */}
                <span className='dark:hidden'>
                    <span className="w-8 h-8 rounded-full flex items-center justify-center transition duration-500">
                        <svg width="24" height="24" fill="none" aria-hidden="true" className="flex-none transition duration-500 transform text-black opacity-100 scale-100">
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

                {/* 다크 모드 */}
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
        </React.Fragment>
    );
}
