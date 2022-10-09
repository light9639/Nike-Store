import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import HeadInfo from '../../components/HeadInfo'
import ShoeAll from "../data/Shoes_View.json";
import { useRouter } from 'next/router'

const product = {
    name: 'Men',
    price: '150,000원',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Shoes', href: '#' },
    ],
    images: [
        {
            src: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0fd4ce0b-1657-4a31-b670-3d925774c2a3/air-jordan-1-mid-shoes-PCCmCV.png',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0e7fc8f3-76b7-4631-b147-4dad4b1ff241/air-jordan-1-mid-shoes-PCCmCV.png',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0d62111e-2e0d-4490-b247-54404cf3fbb3/air-jordan-1-mid-shoes-PCCmCV.png',
            alt: 'Model wearing plain white basic tee.',
        },
        {
            src: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f11f19a2-1af6-460c-a346-54cc71d2cb1d/air-jordan-1-mid-shoes-PCCmCV.png',
            alt: 'Model wearing plain white basic tee.',
        },
        {
            src: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8808183b-8ab7-4876-a231-24f429ca18a9/air-jordan-1-mid-shoes-PCCmCV.png',
            alt: 'Model wearing plain white basic tee.',
        },
        {
            src: 'https://static.nike.com/a/videos/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,so_1.55/adc356bd-8925-41e5-a297-e3b8f1db0973/air-jordan-1-mid-shoes-PCCmCV.jpg',
            alt: 'Two each of gray, #181515, and black shirts laying flat.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: '230', inStock: false },
        { name: '235', inStock: true },
        { name: '240', inStock: true },
        { name: '245', inStock: true },
        { name: '250', inStock: true },
        { name: '255', inStock: true },
        { name: '260', inStock: true },
        { name: '265', inStock: true },
        { name: '270', inStock: true },
        { name: '275', inStock: true },
        { name: '280', inStock: true },
        { name: '285', inStock: true },
    ],
    description:
        '스포츠는 건강을 지키며, 내면을 밝혀주고, 우리를 하나로 이어줍니다. 나이키는 스포츠를 통해 세상을 바꿀 수있다고 믿습니다. 세계무대를 빛내는 스포츠 선수에서, 평범한 사람들의 일상에 이르기까지, 우리는 최상의 테크놀로지로 최상의 퍼포먼스를 선사합니다. 러닝에서 바스켓볼, 축구, 피트니스까지. 나이키와 함께 새로운 나의 모습을 만나보세요. 가끔은 도시를 벗어나 아웃도어를 즐기고, 요가를 통해 공동체와 하나가 되어보세요. 3-스트라이프의 헤리티지는 문화로까지 이어집니다. 스포츠는 물론, 음악과 일상의 스트릿까지 말이죠. 휘슬이 울리기 직전의 출발선으로부터, 질주의 순간, 마지막 결승선까지. 나이키는 모두를 위한 브랜드입니다. 스포츠와 당신의 삶, 그리고 세상을 바꿉니다.',
    highlights: [
        '에어솔: 신발의 에어백은 신발 본체와 일체형으로 제작, 교체나 때움 등의 수리가 불가능하여 외력에 의해 에어가 손상된 경우는 보상 처리되지 않습니다.',
        '신발에 기름이 접촉하지 않도록 신경 써주시기 바랍니다.',
        '천연 가죽이나 천은 물기 및 마찰에 의해 색깔이 변할 가능성이 있습니다.',
        '젖은 노면 혹은 미끄러지기 쉬운 장소에서는 주의 바랍니다.',
        '염분(바닷물)이 있는 곳에서 착용하시면 제품이 쉽게 부식됩니다.',
        '고온 다습한 장소에 장시간 방치를 삼가 바랍니다.',
        '천연 가죽 신발은 신발 고정대나 신문지 등으로 형태를 고정하여 보관할 것을 권합니다.',
    ],
    details:
        `품질보증기간: 섬유 및 일반 소재-구입 후 6개월 / 가죽소재-구입 후 1년
        유통중 손상되었거나 품질에 이상이 있는 제품에 한하여 소비자피해보상규정 에 의거 보상하여 드립니다.
        단, 제품에 부착되어 있는 사용방법 및 취급시주의사항에 따라 제품을 관리해 주시고, 소비자 부주의로 인한 품질 이상 및 변형에 대해서는 책임을 지지 않습니다.`,
}
const reviews = { href: '#', average: 4, totalCount: 4 }

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    <HeadInfo title="제품 상세페이지" contents="제품 상세페이지" />
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])
    const [Shoe, setShoeAll] = React.useState(ShoeAll)
    const router = useRouter()
    const pid = router.query
    const ID: any = pid.id

    return (
        <div className="bg-white dark:bg-black ">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">

                        <li>
                            <div className="flex items-center">
                                <a href="#void" className="mr-2 text-sm font-medium text-gray-900 dark:text-white" onClick={() => router.push(Shoe.Every[ID].href)}>
                                    {Shoe.Every[ID].Gender}
                                </a>
                                <svg
                                    width={16}
                                    height={20}
                                    viewBox="0 0 16 20"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    className="h-5 w-4 text-gray-300"
                                >
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <a href="#void" className="mr-2 text-sm font-medium text-gray-900 dark:text-white">
                                    {Shoe.Every[ID].info}
                                </a>
                                <svg
                                    width={16}
                                    height={20}
                                    viewBox="0 0 16 20"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    className="h-5 w-4 text-gray-300"
                                >
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                            </div>
                        </li>

                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 dark:text-white hover:text-gray-600">
                                {Shoe.Every[ID].name}
                            </a>
                        </li>
                    </ol>
                </nav>

                {/* Image gallery */}
                <div className="mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    {
                        product.images.map((a, i: number) => (
                            <div className="aspect-w-3 aspect-h-4 w-1/2 md:w-1/3 lg:w-full overflow-hidden rounded-lg inline-block lg:block p-2 lg:p-0 m-0 lg:mb-3" key={i}>
                                <img
                                    src={product.images[i].src}
                                    alt={product.images[i].alt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        ))
                    }
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">{Shoe.Every[ID].name}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900 dark:text-white">{Shoe.Every[ID].price}</p>

                        {/* Reviews */}
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {/* {
                                        [0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                className={classNames(
                                                    reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                                                    'h-5 w-5 flex-shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                        ))
                                    } */}
                                    <span className="flex items-center my-3 md:my-0">
                                        <svg fill={Shoe.Every[ID].star.first} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5 flex-shrink-0 text-yellow-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill={Shoe.Every[ID].star.second} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5 flex-shrink-0 text-yellow-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill={Shoe.Every[ID].star.third} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5 flex-shrink-0 text-yellow-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill={Shoe.Every[ID].star.four} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5 flex-shrink-0 text-yellow-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <svg fill={Shoe.Every[ID].star.five} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5 flex-shrink-0 text-yellow-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        {/* <span className="bg-blue-100 text-blue-800 text-sm font-semibold ml-3 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{Shoe.Every[ID].Review} Reviews</span> */}
                                    </span>
                                </div>
                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    {Shoe.Every[ID].Review} reviews
                                </a>
                            </div>
                        </div>

                        <form className="mt-10">
                            {/* Colors */}
                            <div>
                                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Color</h3>

                                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                                    <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                                    <div className="flex items-center space-x-3">
                                        {
                                            product.colors.map((color) => (
                                                <RadioGroup.Option
                                                    key={color.name}
                                                    value={color}
                                                    className={({ active, checked }) =>
                                                        classNames(
                                                            color.selectedClass,
                                                            active && checked ? 'ring ring-offset-1' : '',
                                                            !active && checked ? 'ring-2' : '',
                                                            '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                                        )
                                                    }
                                                >
                                                    <RadioGroup.Label as="span" className="sr-only">
                                                        {' '}
                                                        {color.name}{' '}
                                                    </RadioGroup.Label>
                                                    <span
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            color.class,
                                                            'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                                        )}
                                                    />
                                                </RadioGroup.Option>
                                            ))
                                        }
                                    </div>
                                </RadioGroup>
                            </div>

                            {/* Sizes */}
                            <div className="mt-10">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Size</h3>
                                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        Size guide
                                    </a>
                                </div>

                                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                    <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                        {
                                            product.sizes.map((size) => (
                                                <RadioGroup.Option
                                                    key={size.name}
                                                    value={size}
                                                    disabled={!size.inStock}
                                                    className={({ active }) =>
                                                        classNames(
                                                            size.inStock
                                                                ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                                                : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                                            active ? 'ring-2 ring-indigo-500' : '',
                                                            'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                                        )
                                                    }
                                                >
                                                    {({ active, checked }) => (
                                                        <>
                                                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                                            {size.inStock ? (
                                                                <span
                                                                    className={classNames(
                                                                        active ? 'border' : 'border-2',
                                                                        checked ? 'border-indigo-500' : 'border-transparent',
                                                                        'pointer-events-none absolute -inset-px rounded-md'
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <span
                                                                    aria-hidden="true"
                                                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                                >
                                                                    <svg
                                                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                        viewBox="0 0 100 100"
                                                                        preserveAspectRatio="none"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                                    </svg>
                                                                </span>
                                                            )}
                                                        </>
                                                    )}
                                                </RadioGroup.Option>
                                            ))
                                        }
                                    </div>
                                </RadioGroup>
                            </div>

                            <button
                                type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={() => router.push('/Cart')}
                            >
                                카트에 추가
                            </button>
                        </form>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900 dark:text-white">{product.description}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900 dark:text-white">세탁방법 및 취급시 주의사항</h3>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    {
                                        product.highlights.map((highlight) => (
                                            <li key={highlight} className="text-gray-400 dark:text-white">
                                                <span className="text-gray-600 dark:text-white">{highlight}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900 dark:text-white">품질보증기준</h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600 dark:text-white">{product.details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}