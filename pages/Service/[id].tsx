import React from 'react'
import { useRouter } from 'next/router'
import HeadInfo from "@components/HeadInfo/HeadInfo";

export default function ServiceDetail(): JSX.Element {
    const router = useRouter()
    const ID: any = router.query.id

    return (
        <React.Fragment>
            <HeadInfo title={`Nike Service Page ${ID}`} contents={`Nike Service Page ${ID}`} />

            <div className='max-w-screen-lg mx-auto h-full py-24'>

                <div className='mx-auto text-center mb-32'>
                    <h2 className="text-4xl font-extrabold dark:text-white">문의하기</h2>
                    <div className="flex justify-center mx-auto mt-3 mb-14">
                        <span className="inline-block w-24 h-1 bg-gray-900 dark:bg-white rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-gray-900 dark:bg-white rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-gray-900 dark:bg-white rounded-full"></span>
                    </div>
                    <div className='flex justify-between flex-wrap text-center mx-auto'>
                        <a href='#void' className='w-1/4'>
                            <img alt="제품 및 주문" src="https://www.nike.com/assets/experience/dotcom-member/gethelpfe-webshell/_next/static/images/phone.png" className="mx-auto mb-5" />
                            <span className='block text-lg font-semibold leading-8'>제품 및 주문</span>
                            <span className='block text-base leading-7'>080-022-0182</span>
                            <span className='block text-base leading-7'>9:00~20:00</span>
                            <span className='block text-base leading-7'>월요일~일요일</span>
                        </a>
                        <a href='/Cart' className='w-1/4'>
                            <img alt="제품 및 주문" src="https://www.nike.com/assets/experience/dotcom-member/gethelpfe-webshell/_next/static/images/chat.png" className="mx-auto mb-5" />
                            <span className='block text-lg font-semibold leading-8'>제품 및 주문</span>
                            <span className='block text-base leading-7'>나이키와 채팅하기</span>
                            <span className='block text-base leading-7'>9:00~20:00</span>
                            <span className='block text-base leading-7'>월요일~일요일</span>
                        </a>
                        <a href='#void' className='w-1/4'>
                            <img alt="제품 및 주문" src="https://www.nike.com/assets/experience/dotcom-member/gethelpfe-webshell/_next/static/images/phone.png" className="mx-auto mb-5" />
                            <span className='block text-lg font-semibold leading-8'>A/S 서비스</span>
                            <span className='block text-base leading-7'>080-022-0182</span>
                            <span className='block text-base leading-7'>9:00~12:00, 13:00~18:00</span>
                            <span className='block text-base leading-7'>월요일~금요일(공휴일 제외)</span>
                        </a>
                        <a href='/Maps' className='w-1/4'>
                            <img alt="매장 찾기" src="https://www.nike.com/assets/experience/dotcom-member/gethelpfe-webshell/_next/static/images/store.png" className="mx-auto mb-5" />
                            <span className='block text-lg font-semibold leading-8'>매장 찾기</span>
                            <span className='block text-base leading-7'>가까운 나이키 리테일 매장 찾기</span>
                            <span className='block text-base leading-7'>00:00~24:00</span>
                            <span className='block text-base leading-7'>월요일~일요일</span>
                        </a>
                    </div>
                </div>

                <div>
                    <h2 className="text-4xl font-extrabold dark:text-white text-center">빠른 지원</h2>
                    <div className="flex justify-center mx-auto mt-3 mb-14">
                        <span className="inline-block w-28 h-1 bg-gray-900 dark:bg-white rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-gray-900 dark:bg-white rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-gray-900 dark:bg-white rounded-full"></span>
                    </div>
                    <div data-active-classes="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-white">
                        <h2>
                            <button type="button" className="flex items-center justify-between w-full p-5 font-bold text-left text-gray-900 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 text-base md:text-lg" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                                <span className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span className='line-clamp-1'>회원가입은 어떻게 하나요?</span>
                                </span>
                                <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div>
                            <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                <div className='md:ml-7'>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400 font-semibold text-sm md:text-base">1. 오프라인 매장에서 회원등록 및 마일리지 카드를 발급받으신 분</p>
                                    <p className="text-gray-500 dark:text-gray-400 md:ml-6 tracking-tighter leading-7 my-3 md:my-4 text-xs md:text-base">
                                        나이키 홈페이지 회원가입 페이지에서 실명확인 후<br />
                                        회원등록 카드에 기입한 정보 외 나머지 정보를 입력해주세요.<br />
                                        회원가입 시 매장에서 발급받은 카드번호를 등록하면 가입 이후<br />
                                        구매 이력과 마일리지를 조회할 수 있습니다.<br />
                                    </p>
                                    <p className="my-2 text-gray-500 dark:text-gray-400 font-semibold text-sm md:text-base">2. 오프라인 매장에서 회원등록 한 내역이 없으신 분</p>
                                    <p className="text-gray-500 dark:text-gray-400 md:ml-6 tracking-tighter leading-7 md:mt-4 text-xs md:text-base">
                                        나이키 홈페이지 회원가입 페이지에서 실명확인 후 회원가입이 가능합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h2>
                            <button type="button" className="flex items-center justify-between w-full p-5 font-bold text-left text-gray-900 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 text-base md:text-lg" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
                                <span className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span className='line-clamp-1'>회원의 혜택은 무엇인가요?</span>
                                </span>
                                <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div>
                            <div className="p-5 font-light border border-b-0 border-gray-200  dark:border-gray-700 dark:bg-gray-900">
                                <ol className="mb-2 text-gray-500 dark:text-gray-400 list-decimal ml-3 md:ml-10 tracking-tighter leading-7 text-xs md:text-base">
                                    <li className="text-gray-500 dark:text-gray-400">모든 회원 서비스의 자유로운 이용과 혜택을 받으실 수 있습니다.</li>
                                    <li className="text-gray-500 dark:text-gray-400">신상품 및 다양한 이벤트와 행사 정보를 받아보실 수 있습니다.</li>
                                    <li className="text-gray-500 dark:text-gray-400">다양한 이벤트 및 행사에 우선적으로 참가하실 수 있는 권한을 드립니다.</li>
                                    <li className="text-gray-500 dark:text-gray-400">My NB에서는 회원님만을 위한 상세정보 조회 및 맞춤 서비스를 편리하게 제공받으실 수 있습니다.</li>
                                    <li className="text-gray-500 dark:text-gray-400">오프라인 매장에서 회원등록 카드를 발급 받으셨을 경우, 온/오프 구매 마일리지를 통합하여 적립 및 사용하실 수 있습니다.</li>
                                </ol>
                            </div>
                        </div>
                        <h2>
                            <button type="button" className="flex items-center justify-between w-full p-5 font-bold text-left text-gray-900 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 text-base md:text-lg" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
                                <span className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span className='line-clamp-1'>ID와 비밀번호를 잊어버렸어요</span>
                                </span>
                                <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </h2>
                        <div>
                            <div className="p-5 font-light border border-b-0 border-gray-200  dark:border-gray-700 dark:bg-gray-900">
                                <p className="mb-2 text-gray-500 dark:text-gray-400 md:ml-6 tracking-tighter leading-7 text-xs md:text-base">
                                    아이디와 비밀번호를 잊어버렸을 경우 ID 찾기 / PW 찾기 페이지에서 실명확인을 거친 후<br />
                                    가입 시 입력하신 e-mail 주소 또는 휴대전화번호로 ID 또는 임시비밀번호를 수신 받으실 수 있습니다.<br />
                                    임시 비밀번호로 접속하신 이후에는 즉시 새로운 비밀번호로 변경하시길 바랍니다.<br />
                                </p>
                            </div>
                        </div>
                        <h2>
                            <button type="button" className="flex items-center justify-between w-full p-5 font-bold text-left text-gray-900 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 text-base md:text-lg" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
                                <span className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span className='line-clamp-1'>A/S 기간은 어느정도 걸리나요?</span>
                                </span>
                                <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div>
                            <div className="p-5 font-light border border-b-0 border-gray-200  dark:border-gray-700 dark:bg-gray-900">
                                <p className="mb-2 text-gray-500 dark:text-gray-400 md:ml-6 tracking-tighter leading-7 text-xs md:text-base">
                                    7일 이내를 원칙으로 합니다.<br />
                                    다만, 원부자재 수급이 불가능한 제품은 어려움이 있어 수선기간이 지연되고 있습니다.<br />
                                    고객상담실에서 전화 안내 후 고객님과 협의 하에 진행하고 있습니다.<br />
                                </p>
                            </div>
                        </div>
                        <h2>
                            <button type="button" className="flex items-center justify-between w-full p-5 font-bold text-left text-gray-900 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 text-base md:text-lg" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
                                <span className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span className='line-clamp-1'>신발세탁은 어떻게 해야하나요?</span>
                                </span>
                                <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div>
                            <div className="p-5 font-light border border-b-0 border-gray-200  dark:border-gray-700 dark:bg-gray-900">
                                <div className='md:ml-7'>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400 font-semibold text-sm md:text-base">오프라인 매장에서 회원등록 및 마일리지 카드를 발급받으신 분</p>
                                    <p className="text-gray-500 dark:text-gray-400 md:ml-6 tracking-tighter my-4 leading-7 text-xs md:text-base">
                                        메쉬 원단은 전문세제를 사용, 가벼운 물세탁이 가능하나 <br className='hidden md:block' />
                                        스웨이드 소재의 제품은 물이나 불에 약하므로 가볍게 솔로 먼지를 제거해주는 정도의 손질법이 요망됩니다. <br className='hidden md:block' />
                                        스웨이드는 빈티지 느낌의 제품으로 신을수록 구제 느낌의 멋스러움이 특징인 소재로 <br className='hidden md:block' />
                                        깨끗하게 세탁해서 착화할 수 있는 신발은 아닙니다. <br className='hidden md:block' />
                                    </p>
                                    <p className="my-2 text-gray-500 dark:text-gray-400 font-semibold text-sm md:text-base">스웨이드(섀미) 손질법</p>
                                    <p className="text-gray-500 dark:text-gray-400 md:ml-6 tracking-tighter mt-4 leading-7 text-xs md:text-base">
                                        섀미같은 잔털이 있는 가죽은 구두약 등 약품을 바르지 않고 구두솔로 한 방향으로만 쓸어내리면 깨끗하게 정리됩니다. <br className='hidden md:block' />
                                        더러움이 심한 경우에는 전문 슈즈샴푸나 보통의 머리샴푸를 물에 조금 풀어 부드러운 솔에 적신 다음 <br className='hidden md:block' />
                                        가죽 부위만 다시 한 방향으로 부드럽게 쓸어내리면서 표면을 적셔 닦습니다. <br className='hidden md:block' />
                                        그리고 신문지로 안을 채운 다음 바람이 잘 통하는 그늘에서 말립니다. <br className='hidden md:block' />
                                        단, 표면을 적신다고 신발 전체를 물에 담그면 스웨이드 소재 특성 상 원상태로 복구가 불가능합니다. <br className='hidden md:block' />
                                        <br className='block md:hidden' /><br />
                                        비가 여러 날 계속 올 때는 가급적 신발을 갈아 신는 것이 좋습니다. <br className='hidden md:block' />
                                        섀미류는 비에 젖으면 가죽의 부드러운 특성이 없어지므로 심하게 젖지 않도록 주의해주시기 바랍니다. <br className='hidden md:block' />
                                        비에 젖은 가죽신발은 기름기가 빠져 표면이 딱딱해지고 마르면서 모양이 변하거나 <br className='hidden md:block' />
                                        발에서 난 땀 등으로 표면에 염분이 하얗게 나타날 수 있습니다. <br className='hidden md:block' />
                                        많이 젖은 경우에는 흙먼지를 촉촉한 천으로 잘 닦아낸 후 신발 안 쪽에 마른 신문지를 뭉쳐 넣어 <br className='hidden md:block' />
                                        형태를 유지하면서 통풍이 잘 되는 그늘에 말리고, 마른 다음에는 전용 왁스로 닦아줍니다. <br className='hidden md:block' />
                                        말릴 때 헤어드라이기 등을 사용하는 것은 절대 금해주시기 바랍니다. <br className='hidden md:block' />
                                        젖은 가죽제품을 강제로 빨리 말리면 형태가 뒤틀릴 우려가 있습니다. <br className='hidden md:block' />
                                        <br className='block md:hidden' /><br />
                                        땀이나 물에 젖기 쉬운 운동화는 세균 탈취 스프레이나 커피 찌꺼기 등을 이용하면 쉽게 냄새를 제거할 수 있습니다. <br className='hidden md:block' />
                                        천에 커피 찌꺼기나 녹차잎을 싸서 신발 안에 넣어두어도 좋습니다. <br className='hidden md:block' />
                                        다만 커피의 수분을 완전히 빼지 않으면 얼룩이 생기므로 주의해주시기 바랍니다. <br className='hidden md:block' />
                                        집에 돌아온 다음 신발을 벗을 때 마른 천 등으로 한번씩 닦아주는 습관을 들이는 것도 중요합니다. <br className='hidden md:block' />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h2>
                            <button type="button" className="flex items-center justify-between w-full p-5 font-bold text-left text-gray-900 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-b-xl text-base md:text-lg" data-accordion-target="#accordion-color-body-3" aria-expanded="false" aria-controls="accordion-color-body-3">
                                <span className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span className='line-clamp-1'>제품을 환불받고 싶습니다. 환불규정은 어떻게 되나요?</span>
                                </span>
                                <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div>
                            <div className="p-5 font-light border border-t-0 border-gray-200  dark:border-gray-700 dark:bg-gray-900 rounded-b-xl">
                                <div className='md:ml-7'>
                                    <p className="my-2 text-gray-500 dark:text-gray-400 font-semibold text-sm md:text-base line-clamp-1">소비자 피해보상 규정에 근거한 제품 환불 규정은 다음과 같습니다.</p>
                                    <ol className="mb-2 text-gray-500 dark:text-gray-400 list-decimal ml-3 md:ml-10 tracking-tighter leading-7">
                                        <li className="text-gray-500 dark:text-gray-400 text-xs md:text-base mt-3 mb-1">구입 후 7일 이내 고객변심에 의해서도 환불이 가능합니다.</li>
                                        <li className="text-gray-500 dark:text-gray-400 text-xs md:text-base">단, 착용 또는 착화하지 않은 제품으로 재판매가 가능해야하며, 환불 시에는 구입처에서만 환불이 가능합니다.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}