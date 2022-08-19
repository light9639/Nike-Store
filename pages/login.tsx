import React from 'react'
import HeadInfo from '../components/HeadInfo';

export default function login() {
    return (
        <>
            <HeadInfo title="로그인 페이지" contents="로그인 페이지" />

            <div className='py-36 md:py-40'>
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900 leading-9">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-sm text-center text-gray-600 leading-5 max-w">
                        Or
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                            create a new account
                        </a>
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                        <form>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 leading-5">
                                    Email address
                                </label>

                                <div className="mt-1 rounded-md shadow-sm">
                                    <input id="email" name="email" type="email" required autoFocus className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 " />
                                </div>

                            </div>

                            <div className="mt-6">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 leading-5">
                                    Password
                                </label>

                                <div className="mt-1 rounded-md shadow-sm">
                                    <input id="password" type="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 " />
                                </div>

                            </div>

                            <div className="flex items-center justify-between mt-6">
                                <div className="flex items-center">
                                    <input id="remember" type="checkbox" className="form-checkbox w-4 h-4 text-indigo-600 transition duration-150 ease-in-out" />
                                    <label htmlFor="remember" className="block ml-2 text-sm text-gray-900 leading-5">
                                        Remember
                                    </label>
                                </div>

                                <div className="text-sm leading-5">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div className="mt-6">
                                <span className="block w-full rounded-md shadow-sm">
                                    <button type="submit" className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                        Sign in
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}