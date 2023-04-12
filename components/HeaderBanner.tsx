import { MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';

export default function Example(): JSX.Element {
    const [advertise, setAdvertise] = useState<boolean>(true);

    return (
        <div className="bg-gray-900 dark:bg-black">
            {
                advertise == true ?
                    <div className="mx-auto max-w-[1550px] py-3 px-3 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap items-center justify-between">
                            <div className="flex w-0 flex-1 items-center">
                                <span className="flex rounded-lg bg-gray-700 dark:bg-gray-900 p-2">
                                    <MegaphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </span>
                                <p className="ml-3 truncate font-medium text-white">
                                    <span className="inline text-sm md:text-base">구매금액이 10만원 이상일 경우 배송료는 무료입니다.</span>
                                </p>
                            </div>
                            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                                <button
                                    type="button"
                                    className="-mr-1 flex rounded-md p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
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