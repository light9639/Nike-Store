import { MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';

export default function Example() {
    const [advertise, setAdvertise] = useState<boolean>(true);

    return (
        <div className="bg-blue-600">
            {
                advertise == true ?
                <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex w-0 flex-1 items-center">
                            <span className="flex rounded-lg bg-blue-800 p-2">
                                <MegaphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                                <p className="ml-3 truncate font-medium text-white">
                                <span className="inline text-sm md:text-base">배송료가 10만원 이상일 경우 배송료는 무료입니다.</span>
                            </p>
                        </div>
                        {/* <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                            <a
                                href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm hover:bg-blue-50"
                            >
                                확인하기
                            </a>
                        </div> */}
                        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                            <button
                                type="button"
                                className="-mr-1 flex rounded-md p-2 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                                onClick={() => {
                                    setAdvertise(!advertise)
                                }}
                            >
                                <span className="sr-only">Dismiss</span>
                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                    </div>
                    : null
            }
        </div>
    )
}