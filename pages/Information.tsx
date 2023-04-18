import React from 'react'
import HeadInfo from '@components/HeadInfo'
import Fade from 'react-reveal/Fade';
import type { NextPage } from "next";

const information: NextPage = () => {
    return (
        <React.Fragment>
            <HeadInfo title="Information Page" contents="Information Page"></HeadInfo>

            <div className='max-w-5xl mx-auto my-20 space-y-5 tracking-tighter px-5 sm:px-10 xl:p-0'>
                <Fade><h1 className='text-3xl md:text-4xl font-bold'>구매 이용약관</h1></Fade>
                <br />
                <Fade><h2 className='text-xl font-bold'>제1장 총칙</h2></Fade>
                <div className='space-y-3'>
                    <div className='space-y-3'>
                        <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제1조 (목적)</h3></Fade>
                        <Fade>
                            <ul className='list-disc ml-5'>
                                <li className='text-sm dark:text-gray-300'>이 이용약관(이하 약관 또는 이용계약)은 나이키코리아(유) (이하 회사)가 운영하는 웹사이트 및 모바일 페이지 등(이하 사이트)에서 제공하는 인터넷 관련 서비스, 회사가 운영하는 공식 매장의 운영 및 회원제 서비스(이하 서비스)를 이용함에 있어 회사와 이용자의 권리•의무 및 책임 사항을 규정함을 목적으로 합니다.</li>
                            </ul>
                        </Fade>
                    </div>
                </div>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제2조 (용어의 정의)</h3></Fade>
                    <Fade><p className='text-gray-600 dark:text-gray-200 font-semibold text-sm'>본 약관에서 정하는 용어의 정의는 다음과 같습니다.</p></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>사이트란 회사가 컴퓨터, 이동통신 등의 각종 유무선 장치를 포함하는 정보통신설비를 이용하여 상품이나 서비스를 이용자에게 제공할 수 있도록 설정한 가상공간을 말하며, 회사가 운영하고 있는 사이트의 현황은 아래와 같습니다. (2022. 10. 기준)</li>
                            <li className='text-sm dark:text-gray-300'>https://www.nike.com/kr</li>
                            <li className='text-sm dark:text-gray-300'>Nike mobile application (Nike App)</li>
                            <li className='text-sm dark:text-gray-300'>Confirmed mobile application (Confirmed App)</li>
                            <li className='text-sm dark:text-gray-300'>향후 회사에서 공지하고 운영하는 웹사이트 및 모바일 앱 등</li>
                        </ul>
                    </Fade>
                    <Fade><p className='text-gray-600 dark:text-gray-200 font-semibold text-sm'>이용자란 사이트에 접속하거나 회사가 직접 운영하거나 제휴 된 공식 매장에 방문하여 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</p></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>회원이라 함은 회사에 개인정보 및 기타정보를 제공하여 회원등록을 한 자로서, 회사가 제공하는 정보(상품 및 서비스, 마케팅 정보 등)를 지속적으로 제공받으며, 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.</li>
                            <li className='text-sm dark:text-gray-300'>비회원이라 함은 회원으로 가입하지 않고 회사가 제공하는 서비스를 이용하는 자를 말합니다.</li>
                            <li className='text-sm dark:text-gray-300'>개인정보란 생존하는 개인에 관한 정보로서 성명, 주민등록번호 등의 사항에 의하여 특정 개인을 식별할 수 있는 정보(당해 정보만으로는 특정 개인을 인식할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함)를 말합니다.</li>
                            <li className='text-sm dark:text-gray-300'>아이디란 사이트를 이용하기 위해 회원이 선택한 회원 소유의 이메일주소로 회사가 아이디 운영 정책에 따라 본인확인 절차 등을 거쳐 승인한 영문, 숫자, 특수문자 등의 조합을 말합니다. 회사는 이메일주소가 아닌 아이디를 사용하여 가입한 회원이 이메일주소로 아이디를 설정할 수 있도록 아이디 변경을 위한 조치를 할 수 있습니다.</li>
                            <li className='text-sm dark:text-gray-300'>비밀번호란 회원의 동일성 확인을 위하여 회원 스스로가 설정하여 회사에 등록된 영문, 숫자 및 특수기호 등의 조합을 말합니다. 회사는 회원 보호 및 안정적인 사이트 운영 등의 목적으로 비밀번호 작성 규칙을 운영하고 보다 강화된 수단 등을 요구할 수 있으며 회원은 비밀번호 작성 규칙을 준수해야 합니다.</li>
                            <li className='text-sm dark:text-gray-300'>회원등급이란 회사가 제공하는 서비스를 이용한 결과에 따라 일정한 기준에 의하여 회사가 회원에게 부여하는 등급을 말합니다.</li>
                            <li className='text-sm dark:text-gray-300'>게시글이란 이용자가 서비스를 이용함에 있어 사이트에 게시한 글, 사진, 동영상 및 각종 파일과 링크 등의 게재물을 말합니다.</li>
                            <li className='text-sm dark:text-gray-300'>상품평이란 게시글 중 상품 구매 후 해당 상품에 대한 종합적인 평가를 기록한 글, 이미지 등의 게재물을 말합니다. 회사는 회사 및 회사의 본사 기타 계열회사가 운영하는 사이트 또는 제휴한 사이트, 홍보채널 등에서의 상품의 판촉, 홍보 등을 위해 상품평을 복제, 배포, 전송, 전시할 수 있으며 본질적인 내용에 변경을 가하지 않는 범위 내에서 수정, 편집할 수 있습니다.</li>
                            <li className='text-sm dark:text-gray-300'>포인트 란 회원이 상품을 구매할 때나, 회사가 제공하는 서비스를 이용할 때 회사가 제공하는 적립금을 의미하며, 환금 불가능한 회사 전용의 재산적 가치가 없는 사이버 데이터를 말합니다.</li>
                            <li className='text-sm dark:text-gray-300'>서비스란 제4조에 정한 바 대로 회사가 사이트 및 매장 등을 통하여 이용자를 위하여 유료 또는 무료로 제공하는 행위 또는 그 행위의 대상인 유•무형의 물건 자체를 의미합니다.</li>
                        </ul>
                    </Fade>
                    <Fade><p className='text-gray-600 dark:text-gray-200 font-semibold text-sm'>개별계약이란 이용자가 회사의 특정 상품이나 용역의 구매를 신청하고 회사가 이에 대해 승낙하는 것을 말합니다.</p></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>
                                HYPE 상품이란 일반 상품과는 달리 특정 회원에게 Confirmed App 등 지정된 특정 플랫폼을 통해 회사가 정한 조건에 따라 한정판 상품을 구매할 수 있는 기회를 부여하는 상품을 의미합니다.<br />
                                2이 약관에서 사용하는 용어의 정의는 제1항에서 정하는 것을 제외하고는 관계법령 및 서비스 별 안내에서 정하는 바에 의합니다.
                            </li>
                        </ul>
                    </Fade>
                </div>

                <Fade><h2 className='text-xl font-bold'>제3조 (약관의 명시 효력 및 변경)</h2></Fade>
                <div className='space-y-3'>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>이 약관은 이용자들이 알 수 있도록 회사의 서비스가 제공되는 사이트의 첫 화면에 게시하거나 기타의 방법으로 회원에게 공지함으로써 효력이 발생합니다. 단, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사는 전자상거래등에서의소비자보호에관한법률, 약관의규제등에관한법률, 전자거래기본법, 전자서명법, 개인정보 보호법, 정보통신망이용촉진등에관한법률, 소비자보호법, 표시광고의 공정화에 관한 법률 등 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있으며, 회사가 약관을 변경하는 경우에는 적용일자 및 변경사유를 명시하여 그 적용일자 7일 전부터 사이트에 공지합니다. 단, 이용자에게 불리한 약관의 변경인 경우에는 30일 이전에 전체 공지(사이트 내 팝업창, 공지사항 페이지 내 또는 오프라인 매장 공지 등 회사가 정한 방법)로써 공지를 하며, 공지 시 개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다.</li>
                            <li className='text-sm dark:text-gray-300'>전 2항에도 불구하고 이용자가 정기적으로 회사가 운영하는 사이트 또는 매장 등에 방문하여 회사의 서비스를 이용하는 경우 약관의 변경에 동의하는 것으로 봅니다. 변경된 약관에 대한 정보를 알지 못하여 발생하는 회원 또는 이용자의 피해에 대하여 회사는 책임을 부담하지 않습니다.</li>
                        </ul>
                    </Fade>
                </div>

                <Fade><h2 className='text-xl font-bold'>제2장 서비스의 이용</h2></Fade>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제4조 (서비스의 제공)</h3></Fade>
                    <Fade><p className='text-gray-600 dark:text-gray-200 font-semibold text-sm'>회사는 다음과 같은 서비스를 제공합니다.</p></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <Fade>
                                <ul className='list-disc'>
                                    <li className='text-sm dark:text-gray-300'>쇼핑관련 정보 제공 서비스</li>
                                    <li className='text-sm dark:text-gray-300'>회원 커뮤니티 운영 서비스</li>
                                    <li className='text-sm dark:text-gray-300'>사이트 또는 매장에서 상품 또는 용역에 대한 정보의 제공 및 구매 계약 체결</li>
                                    <li className='text-sm dark:text-gray-300'>이용자가 사이트 또는 매장에서 구매 신청한 상품 또는 용역의 인도, 배송</li>
                                    <li className='text-sm dark:text-gray-300'>기타 사이트가 정하는 이용자에게 유용한 부가 서비스</li>
                                </ul>
                            </Fade>
                            <Fade>
                                <ul className='list-disc'>
                                    <li className='text-sm dark:text-gray-300'>회사는 회원 또는 이용자가 사용하는 서비스에 대해 일정량의 사용료를 청구 할 수 있습니다.</li>
                                    <li className='text-sm dark:text-gray-300'>사이트를 통한 서비스 이용은 회사의 업무상 기술상 특별한 지장이 없는 경우 연중 무휴, 1일 24시간을 원칙으로 합니다. 단, 회사는 매장 환경에 따른 운영시간의 지정 및 운용이나, 천재지변 또는 전기공급 중단 등의 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제 됩니다. 또한 이용자의 귀책사유로 인한 서비스 이용의 장애에 대해 회사는 일체 책임을 지지 않습니다.</li>
                                    <li className='text-sm dark:text-gray-300'>회사는 이용자가 서비스를 이용하여 기대하는 손익이나 서비스를 통하여 획득한 자료 등으로 인한 손해에 관하여 책임을 지지 않습니다.</li>
                                    <li className='text-sm dark:text-gray-300'>또한 회사는 이용자가 서비스에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여 책임을 지지 않습니다.</li>
                                    <li className='text-sm dark:text-gray-300'>회사는 서비스의 운용과 관련하여 사이트 화면, 홈페이지, 매장, 전자우편 등에 광고를 게재할 수 있습니다.</li>
                                    <li className='text-sm dark:text-gray-300'>회사는 광고업무와 관련하여 회원 전체 또는 일부의 개인정보에 관한 통계자료를 작성하여 이를 사용할 수 있고, 사이트를 통한 서비스 제공을 위해 회원의 컴퓨터, 기타 장치에 쿠키 등을 전송하거나 쿠키 등을 수집, 이용할 수 있습니다. 이 경우 회원은 쿠키 등의 수신, 수집 및 이용 등을 거부하거나 쿠키의 수신, 수집 및 이용 등에 대하여 경고하도록 회원이 사용하는 컴퓨터, 기타 장치의 브라우저 등의 설정을 변경할 수 있습니다. 이 외의 개인정보 보호에 관해서는 관련법령 및 회사의 개인정보처리방침에 준합니다.</li>
                                </ul>
                            </Fade>
                        </ul>
                    </Fade>
                </div>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제5조 (서비스의 중단)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>회사는 컴퓨터 등 정보통신설비의 보수 점검 교체 및 고장, 통신의 두절, 매장환경 변경, 천재지변 등의 사유가 발생한 경우에는 서비스 제공을 일시적으로 중단할 수 있습니다.</li>
                            <li className='text-sm dark:text-gray-300'>본 조 제1항에 의한 서비스 중단의 경우 회사는 제8조에 정한 방법으로 이용자에게 통지할 수 있습니다.</li>
                        </ul>
                    </Fade>
                </div>

                <Fade><h2 className='text-xl font-bold'>제3장 회원가입계약</h2></Fade>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제6조 (회원가입)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>만 14 세 이상의 자라면 누구나(국내 거주 외국인 포함) 사이트가 정한 가입 양식에 따라 이 약관에 동의한다는 의사 표시를 함으로써 회원가입을 신청합니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사는 본 조 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각호에 해당하지 않는 한 회원으로 등록합니다.</li>
                            <li className='text-sm dark:text-gray-300'>만 1세 미만의 자가 법정대리인(부모 등)의 동의 없이 이용신청을 하는 경우</li>
                            <li className='text-sm dark:text-gray-300'>등 록내 용 에 허위, 기재누락, 오기가 있는 경우</li>
                            <li className='text-sm dark:text-gray-300'>다른 사람의 명의를 이용하여 신청하는 경우</li >
                            <li className='text-sm dark:text-gray-300'>회원 으로 등록하는 것이 사이트의 기술상 또는 업무 수행상 현저히 지장이 있다고 판단하는 경우</li>
                            <li className='text-sm dark:text-gray-300'>이 약관에 의하여 회원 자격을 상실한 적이 있는 것으로 관련 법령에 근거하여 회사가 확인한 경우.단, 회사가 재가입을 승낙한 경우를 제외</li>
                            <li className='text-sm dark:text-gray-300'>기타 신청자의 귀책 사유로 이용 승낙이 곤란한 경우</li>
                            <li className='text-sm dark:text-gray-300'>회원가입계약의 성립시기는 회사의 승낙이 회원에게 도달한 시점으로 합니다.</li>
                            <li className='text-sm dark:text-gray-300'>회원 개인정보관리화면을 통해 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다.회원가입 신청 시 기재한 등록사항의 변경이 있는 경우, 즉시 변경사항을 온라인에서 최신의 정보로 수정하여야 합니다.단, 이름, 아이디 등 기술적, 관리적으로 변경이 불가능한 정보는 수정할 수 없습니다.</li>
                            <li className='text-sm dark:text-gray-300'>회원은 아이디(이메일 주소로 설정한 경우 이메일주소, 이하 같음), 비밀번호 등을 적절하게 관리할 책임을 부담합니다.회사의 귀책없이 회원 본인이 직접 수정하지 않거 나 잘못 기재한 정보로 인하여 발생하는 손해는 당해 회원이 부담하며, 회사는 이에 대하여 아무런 책임을 지지 않습니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사는 회원의 개인정보를 서비스를 제공하기 위한 목적 이외의 용도로 사용하거나 이용자의 동의 없이 제3자에게 제공하지 않습니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사는 회원의 개인정보를 보호하기 위한 정책을 수립하고 개인정보관리 책임자를 지정하여 이를 게시합니다.</li>
                            <li className='text-sm dark:text-gray-300'>기타 회원의 개인정보 수집, 이용, 보유, 제공, 처리 등에 관한 사항은 관련 법령 및 개인정보 처리방침에 따릅니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사는 회원의 동일성 확인, 본인의 진의여부 확인, 법정대리인 동의 필요 여부의 확인 등을 목적으로 기간통신사업자, 본인신용정보관리회사 등을 통한 본인 확인을 요구할 수 있습니다.본인 확인 요청에 응하지 않거나 본인 확인이 되지 않는 경우 회사는 회원가입 신청을 거부할 수 있습니다.</li>
                        </ul>
                    </Fade>
                </div>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제7조(회원 탈퇴 및 자격상실)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>회원은 회사에 언제든지 탈퇴(즉, 이용계약 해지)를 요청할 수 있으며 회사가 탈 퇴요청 접수일(회원의 동일성 확인 및 본인의 진의여부를 확인하기 위한 아이디 검증 절차를 완료한 시점을 의미)로부터 정당한 사유가 없는 한 5일이내에 회원 탈퇴 처리 절차를 완료함으로써 본 이용계약은 해지됩니다.</li>
                            <li className='text-sm dark:text-gray-300'>단, 회원은 이용계약 해지 의사를 통지하기 전에 현재 진행중인 모든 상품의 거래를 완료하나 철회 또는 취소하여야 하며, 거래의 철회 또는 취소로 인한 불이익은 회원 본인이 부담하여야 합니다.또한, 회원 회사에 대한 채무를 전부 이행(마이너스 포인트의 상환, 구입한 재화 대금 지급 등) 하지 아니한 경우 회원이 당해 채무를 전부 이행할 때까지 회사는 회원 탈퇴 처리를 유보함으로써 회원의 이용계약 해지를 제한할 수 있습니다.</li>
                            <li className='text-sm dark:text-gray-300'>회원탈퇴로 인해 발생한 불이익에 대한 책임은 회원 본인이 져야 하며, 이용계약이 해지되면 회사는 회원에게 부가적으 제공한 각종 혜택이 별도 고지없이 회수할 수 있습니다.</li>
                            <li className='text-sm dark:text-gray-300'>회원의 의사로 이용계약을 해지한 후 사이트의 재가입을 희망할 경우 회사는 회사의 자산을 보호하기 위한 목적(이용자가 회원 재가입, 임의 해지 등을 반복적으로 행함으로써 회사가 제공하는 각종 쿠폰, 이벤트 혜택 등의 경제상의 이익을 불•편법으로 수취하거나 이 과정에서 명의도용 등의 행위 우려가 있는 것으로 회사가 판단한 경우 등)으로 회원의 재가입을 제한할 수 있습니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사는 전자상거래등에서의소비자보호에관한법률 등 관련 법률에 의해 거래기록을 보존해야 할 필요가 있는 경우에는 회원의 거래기록(거래의 주체를 식별하기 위한 최소한의 개인정보를 포함)를 다음 각호에 정한 기간 동안 보유합니다.</li>
                            <li className='text-sm dark:text-gray-300'>표시·광고에 관한 기록: 6개월</li>
                            <li className='text-sm dark:text-gray-300'>계약 또는 청약철회 등에 관한 기록: 5년</li>
                            <li className='text-sm dark:text-gray-300'>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
                            <li className='text-sm dark:text-gray-300'>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
                            <li className='text-sm dark:text-gray-300'>회원이 다음 각 호의 사유에 해당하는 경우, 회사는 회원자격 및 등급을 즉시 조정, 상실(이용계약 및 / 또는 개별계약 해지 포함) 시키거나 사이트 이용을 제한할 수 있고, 제한 기간은 회사가 정할 수 있습니다.</li >
                            <li className='text-sm dark:text-gray-300'>회원/비회원 등록 신청 시에 허위 내용 및 다른 사람의 명의를 허락 없이 이용하여 등록한 경우</li>
                            <li className='text-sm dark:text-gray-300'>사이트에 제공되는 정보를 변경하는 등 사이트의 운영을 방해한 경우</li>
                            <li className='text-sm dark:text-gray-300'>다른 회원의 아이디(ID 또는 이메일주소)를 부정 사용하거나, 다른 회원의 식별정보(아이디, CI, 이메일주소, 휴대전화번호 등)와 중첩된 식별정보를 사용하여 회사의 요청에도 불 구하고 본인 확인 절차를 해태 하는 경우. (단, 본 조 제4항에 따라 보존이 필요한 정보가 있는 경우 해당 회원의 개인정보, 거래기록 등을 일정기간 보유 합니다.)</li>
                            <li className='text-sm dark:text-gray-300'>범죄행위를 목적으로 하거나 기타 범죄행위와 관련된 행위</li>
                            <li className='text-sm dark:text-gray-300'>선량한 풍속, 기타 사회질서를 해하는 행위</li>
                            <li className='text-sm dark:text-gray-300'>타인의 명예를 훼손하거나 모욕하는 행위</li>
                            <li className='text-sm dark:text-gray-300'>타인의 지적재산권 등의 권리를 침해하는 행위</li>
                            <li className='text-sm dark:text-gray-300'> 해 킹 행위 또는 컴퓨터 바이러스, 악성 프로그램의 유포 등  정보통신설비 및 전산망의 안전을 위협하는 행위</li>
                            <li className='text-sm dark:text-gray-300'>타인의 의사에 반하여 광고성 정보 등 일정한 내용을 지속적으로 전송하는 행위</li>
                            <li className='text-sm dark:text-gray-300'> 서 비 스의 안전적인 운영에 지장을 주거나 줄 우려가 있는 일체의 행위</li>
                            <li className='text-sm dark:text-gray-300'>사이트를 이용하여 법령과 이 약관이 금지하는 행위를 하는 경우</li>
                            <li className='text-sm dark:text-gray-300'>개인정보 보호법이 정한 1년간 계속적으로 이용실적(로그인 및 구매실적)이 없는 경우</li>
                        </ul>
                    </Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>영업 방해, 상품 재판매, 다른 이용자의 구매기회 박탈 등을 목적으로 진의 없이 제품을 구매(예를 들어, 특정 인기 상품의 재고 선점 후 제3자와의 재판매약정 성립 시에만 상품 구매를 확정)하거나 구매한 제품을 반복적으로 환불, 하자 없는 제품의 반품 요청 또는 수선 의뢰, 또는 회사의 사전 허락없이 자동화된 수단(매크로 프로그램 등) 이나 제3자를 이용하여 상품을 구매하거나 구매 기회를 취득, 기타 상품, 포인트 및 쿠폰 정보 조작 등 회사의 원활한 영업 및 운영 정책에 지장을 초래하거나 다른 이용자의 권리를 침해하는 행위</li>
                            <li className='text-sm dark:text-gray-300'>멤버십 포인트 및 쿠폰, 기타 회원의 혜택을 부정하게 사용하는 경우</li>
                            <li className='text-sm dark:text-gray-300'>기타 관계법령 및 본 약관상의 제반 규정을 위반하는 경우</li>
                            <li className='text-sm dark:text-gray-300'>회사는 본 조 제5항에 해당되는 경우 이용계약을 해지 할 수 있습니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사가 이용계약을 해지하는 경우, 회사는 회원등록을 말소하며 회원에게 전자우편, 전화, 팩스 등 회사가 선택한 방법(이하 통지방법)을 통하여 해지사유를 밝혀 해지의사를 통지합니다.이용계약은 회사의 해지의사를 회원에게 통지한 시점에 종료됩니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사가 이용계약을 해지하더라도, 이용계약 해지 이전에 회사와 회원 간에 이미 체결된 개별계약의 완결에 관해서는 이 약관이 계속 적용될 수 있습니다.단, 회사는 회원에게 부가적으로 제공한 각종 혜택을 회수할 수 있습니다.</li>
                        </ul>
                    </Fade>
                </div>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제8조(회원에 대한 통지)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>회사가 회원에 대한 통지를 하는 경우, 회원이 정하거나 사이트 이용에 사용한 방법(email, SMS, 카카오톡 등)으로 통지방법을 삼을 수 있습니다.단, 통지는 국문을 원칙으로 합니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사는 7일 이상의 기간 동안 사이트에 공지사항을 게시함으로써 개별 통지에 갈음할 수 있습니다</li>
                        </ul>
                    </Fade>
                </div>

                <Fade><h2 className='text-xl font-bold'>제4장 개별계약</h2></Fade>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제9조(구매신청)</h3></Fade>
                    <Fade><p className='text-gray-600 dark:text-gray-200 font-semibold text-sm'>이용자는 이하의 방법에 의하여 구매를 신청합니다.</p></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <Fade>
                                <ul className='list-disc ml-5'>
                                    <li className='text-sm dark:text-gray-300'>사이트에서 구매 신청하는 경우 다음의 절차에 의하여야 합니다.</li>
                                    <li className='text-sm dark:text-gray-300'>재화 또는 용역의 선택</li>
                                    <li className='text-sm dark:text-gray-300'>주문자 정보 및 배달지역 정보 입력</li>
                                    <li className='text-sm dark:text-gray-300'>결제방법의 선택</li >
                                    <li className='text-sm dark:text-gray-300'>결제 버튼을 클릭</li>
                                </ul>
                            </Fade>
                            <Fade>
                                <ul className='list-disc ml-5'>
                                    <li className='text-sm dark:text-gray-300'>매장에서 구매 신청하는 경우 다음의 절차에 의하여야 합니다.</li>
                                    <li className='text-sm dark:text-gray-300'>재화 또는 용역의 선택</li>
                                    <li className='text-sm dark:text-gray-300'>결제방법의 선택 및 결제</li>
                                </ul>
                            </Fade>
                        </ul>
                    </Fade>
                </div>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제9조의 1 (HYPE 상품 구매관련 특약)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>참가자격: 원칙적으로 회사는 회원으로 가입한 만 14세 이상의 자에게 HYPE 상품을 구매할 수 있는 기회를 동등하게 부여 합니다. 단, 회사가 특정 회원/회원군을 대상으로 HYPE 상품 구매기회를 부여하기로 정한 경우라면 HYPE 상품을 구매할 수 있는 자격이 제한될 수 있습니다.</li>
                            <li className='text-sm dark:text-gray-300'>거래조건: HYPE 상 품을 구매할 수 있는 기간 및 구매 조건은 회사가 HYPE 상품 판매 페이지 등을 통해 개별적으로 기재하거나 광고, 홍보한 내용에 따릅니다.</li>
                        </ul>
                    </Fade>
                </div>
                <div className='ml-5 space-y-3'>
                    <div className='space-y-3'>
                        <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>참가방식</h3></Fade>
                        <Fade>
                            <ul className='list-disc ml-5'>
                                <li className='text-sm dark:text-gray-300'>iOS 또는 안드로이드 기반의 휴대전화 사용 및 Confirmed App 설치</li>
                                <li className='text-sm dark:text-gray-300'>회원 계정 생성 및 로그인</li>
                                <li className='text-sm dark:text-gray-300'>위치정보 사용 동의 및 문자메시지 또는 인앱 메시지 수신기능 활성화</li>
                                <li className='text-sm dark:text-gray-300'>HYPE 품 판매기간 내 참가를 위한 정보 입력(일부 결제 등 포함)</li>
                            </ul>
                        </Fade>
                    </div>

                    <div className='space-y-3'>
                        <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>참가규칙</h3></Fade>
                        <Fade>
                            <ul className='list-disc ml-5'>
                                <li className='text-sm dark:text-gray-300'>HYPE 상품 판매기간 중 1인 1족 구매 원칙이 적용되며, 구매 가능수량은 HYPE 상품 판매 페이지 등을 통해 공지됩니다.</li>
                                <li className='text-sm dark:text-gray-300'>HYPE 상품 판매기간 동안에만 참가 신청 및 접수가 가능합니다.</li>
                                <li className='text-sm dark:text-gray-300'>참가 진행을 위해 통신사에서 부과하는 데이터 사용료가 발생할 수 있습니다.</li>
                                <li className='text-sm dark:text-gray-300'>회사는 언제든지 참가 신청이 적절한지 검증할 수 있으며, 참가 신청은 참가 접수가 완료된 것을 의미하지 않습니다.</li>
                            </ul>
                        </Fade>
                    </div>

                    <div className='space-y-3'>
                        <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>당첨자 선정</h3></Fade>
                        <Fade>
                            <ul className='list-disc ml-5'>
                                <li className='text-sm dark:text-gray-300'>HYPE 상품 판매기간 종료 후 회사는 선착순 또는 무작위 등의 방식으로 당첨자를 선정합니다.</li>
                                <li className='text-sm dark:text-gray-300'>만약, 회사가 무작위 선정 방식으로 당첨자를 선정하는 경우 나이키클럽 레벨이 높은 회원에게 가산점이 부여될 수 있습니다. 그러나, 나이키클럽 레벨이 높다는 것이 당첨자로 반드시 선정된다는 것을 보장하지는 않습니다.</li>
                                <li className='text-sm dark:text-gray-300'>HYPE 상품 판매 페이지 등을 통해 당첨자 선정 방식이 공지됩니다.</li>
                                <li className='text-sm dark:text-gray-300'>본 조의 내용과 이 약관, HYPE 상품 판매 페이지, 기타 약정에도 불구하고, HYPE 상품 판매의 특성 상 한정된 시간 내에 다수 회원의 참가 신청, 주문 접수, 결제 등이 이루어 지므로, 상품 판매가 진행되는 과정에서 처리 결과가 변동될 수 있습니다. 만약, 카드사 등으로부터 결제 승인이 이루어졌다고 하더라도 곧바로 최종적으로 당첨자로 선정되거나 상품 구매가 완료가 된 것을 의미하지 않으며, 최종 당첨자 선정 및 상품 구매가 완료되지 않은 경우에는 결제 승인이 취소됩니다. 최종 당첨자 선정 여부 및 상품 구매 확정 사실은 오직 회사에서 참가자에게 발송하는 주문 확정 이메일을 통해서만 확인하실 수 있습니다.(즉, 카드사, PG사 등에서 별도 발송하는 이메일, 문자메시지 등은 최종 당첨자 선정 및 상품 구매 완료를 의미하지 않습니다)</li>
                            </ul>
                        </Fade>
                    </div>

                    <div className='space-y-3'>
                        <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>결제 및 배송</h3></Fade>
                        <Fade><p className='text-gray-600 dark:text-gray-200 font-semibold text-sm'>무작위 선정 방식</p></Fade>
                        <Fade>
                            <ul className='list-disc ml-5'>
                                <li className='text-sm dark:text-gray-300'>무작위 선정 방식으로 당첨자가 선정된 경우, 회사는 당첨자가 참가신청 시 기입한 이메일주소로 당첨 사실이 고지합니다.</li>
                                <li className='text-sm dark:text-gray-300'>회사는 참가신청 시 약정한 방식에 따라 HYPE 상품 구매금액(부가세 등 관련 세금 및 배송료 등 포함)을 자동으로 결제합니다.</li>
                            </ul>
                        </Fade>
                    </div>

                    <div className='space-y-3'>
                        <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>선착순 방식</h3></Fade>
                        <Fade>
                            <ul className='list-disc ml-5'>
                                <li className='text-sm dark:text-gray-300'>선착순 방식으로 당첨자가 선정된 경우, 상품 결제가 가능한 시점(런칭)부터 가능한 한 신속하게 장바구니에 담긴 HYPE 상품의 결제를 완료해야 당첨 확률을 높일 수 있습니다.</li>
                                <li className='text-sm dark:text-gray-300'>회사는 당첨자가 장바구니에 담긴 어떠한 HYPE 상품도 상품 결제가 가능(런칭)하기 전 또는 이후의 시점에 구매할 수 있는 것을 보장하지 않습니다.</li>
                                <li className='text-sm dark:text-gray-300'>회사는 앱 내 타이머 및 당첨자가 참가신청 시 기입한 이메일 주소를 통해 상품 결제가 가능한 시점(런칭)을 안내합니다.</li>
                                <li className='text-sm dark:text-gray-300'>구매가능 수량제한: 회사는 한정된 수량의 HYPE 상품을 구매할 기회를 제공할 뿐이므로, 참가자가 HYPE 상품 판매 페이지 등을 통해 공지한 1인 1족 구매 등 참가규칙을 준수하고, 가용재고가 남아 있는 경우에만 제품을 구매할 수 있습니다. HYPE 상품은 환불 및 반품 요청할 수 있으나, 환불 및 반품과 관련된 내용은 이 약관에서 정한 바에 따릅니다.</li>
                                <li className='text-sm dark:text-gray-300'>회사는 언제든지 본 HYPE 상품 구매관련 특약의 전부 또는 일부를 변경, 수정, 유예 또는 취소할 수 있습니다.</li>
                                <li className='text-sm dark:text-gray-300'>회사는 자신의 전적인 판단 하에 다음 각호 중 어느 하나에 해당하는 참가자 등이 있다고 보는 경우, 관련자의 참가자격을 박탈하거나 참가신청을 거부할 수 있습니다.</li>
                                <li className='text-sm dark:text-gray-300'>무단으로 HYPE 판매에 참가하여 회사에게 피해를 끼치거나, 정당한 HYPE 상품 판매 절차를 훼손하는 경우</li>
                                <li className='text-sm dark:text-gray-300'>다른 참가자 또는 회사의 직원, 대리인 등을 성가시게 하거나, 학대, 위협 또는 괴롭히는 경우</li>
                                <li className='text-sm dark:text-gray-300'>전 2호에 해당하는 행위를 시도하거나 시도할 의사를 가진 경우</li>
                                <li className='text-sm dark:text-gray-300'>대리인 등을 사용하거나, 자동화된 장치, 프로그램 또는 기타 수단을 사용하여 HYPE 판매에 참가하는 것이 금지되며, 회사는 자신의 전적인 판단 하에 대리인 등을 사용하거나 자동화된 장치, 프로그램 또는 기타 수단을 사용하여 참가 신청을 한 경우, 본인 또는 타인의 결제수단을 이용하여 여러 차례 결제를 시도하거나 유효하지 않은 결제수단을 사용하는 등 범죄 예방, 공정한 행사 운영 등의 목적으로 관련자의 참가자격을 박탈하거나 참가신청을 거부할 수 있습니다.</li>
                                <li className='text-sm dark:text-gray-300'>본 조에서 정하지 않은 사항은 이 약관 또는 회사가 HYPE 상품 판매 페이지 등을 통해 기재한 내용에 따릅니다. 다만, 본 조의 내용과 이 약관, 기타 다른 약정이 상충하는 경우 본 조가 우선합니다.</li>
                            </ul>
                        </Fade>
                    </div>

                </div>
                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제9조의 2 (사전 주문 관련 특약)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>사전 주문 방식의 운영: 회사는 Confirmed App을 통해 사전 주문 당시 상품 재고를 보유하고 있지는 않지만 향후 재고가 입고될 가능성이 있는 HYPE 상품 및 기타 상품 등(이하 대상 제품)을 회원이 사전에 주문할 수 있는 주문 방식(이하 사전 주문)을 운영할 수 있습니다.</li>
                            <li className='text-sm dark:text-gray-300'>사전 주문 및 구매확정 기간: 사전 주문을 위한 기간은 두 가지로 구 분됩니다. 사전 주문 기간은 참가자가 사전 주문에 참여할 수 있는 기간을 의미하고, 구매확정 기간은 회사가 주문을 확정하여 상품 결제, 배송 등을 진행하는 기간을 의미합니다.</li>
                            <li className='text-sm dark:text-gray-300'>참가 방식</li>
                            <li className='text-sm dark:text-gray-300'>iOS 또는 안드로이드 기반의 휴대전화 사용 및 Confirmed App 설치</li>
                            <li className='text-sm dark:text-gray-300'>회원 계정 생성 및 로그인</li>
                            <li className='text-sm dark:text-gray-300'>위치보 사용 동의 및 문자메시지 또는 인앱 메시지 또는 앱 푸시 수신기능 활성화</li>
                            <li className='text-sm dark:text-gray-300'>사전 주문 기간 및 구매확정 기간 내 사전 주문 참가를 위한 정보 입력(일부 결제 등 포함)</li>
                        </ul>
                    </Fade>
                </div>

                <div className='ml-5'>
                    <div className='space-y-3'>
                        <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>참가 규칙</h3></Fade>
                        <div className='space-y-3'>
                            <Fade><p className='text-gray-600 dark:text-gray-200 font-semibold text-sm'>사전 주문(Pre-order)</p></Fade>
                            <Fade>
                                <ul className='list-disc ml-5'>
                                    <li className='text-sm dark:text-gray-300'>참가자는대상 제품이 사전 주문이 가능한 경우에 한하여 사전 주문을 요청할 수 있습니다.</li>
                                    <li className='text-sm dark:text-gray-300'>사전 주문을 위해 필요한 모든 정보는 사전 주문 기간이 종료되기 전까지 제출되어야 하며 회사가 수신할 수 있어야 합니다.</li>
                                    <li className='text-sm dark:text-gray-300'>회사는 사전 주문과 관련된 모든 정보(참가자, 주문 정보, 결제 방식 등)를 언제든지 검증할 수 있습니다. 참가자는 잘못되거나 부정확한 정보가 포함되지 않도록 관리할 책임을 부담합니다.</li>
                                    <li className='text-sm dark:text-gray-300'>참가자가 관련 정보를  제출하는 것이 참가신청을 완료한 것을 의미하지 않으며, 사전 주문을 완료하는 것이 대상 제품을 구매할 수 있는 자격을 자동적으로 취득하는 것을 의미하지 않습니다.</li>
                                    <li className='text-sm dark:text-gray-300'>회사는 사전 주문 완료 후에는 어떠한 정보(예: 제품 종류, 사이즈)의 변경/수정을 허용하지 않습니다.</li>
                                    <li className='text-sm dark:text-gray-300'>참가자가 본인 또는 타인의 계정을 사용하는지 여부와 관계없이 사전 주문 시 입력된 정보(예: 계정,  배송지, 결제수단)와 동일한 정보가 포함된 사전 주문, 대기자 등록 등이 발생하거나, 자동화된 장치, 프로그램을 사용하는 등 부정한 방식이 사용된 경우, 사전 주문 요청이 거부될 수 있습니다.</li>
                                    <li className='text-sm dark:text-gray-300'>참가자는사전 주문 기간 동안 언제든지 사전 주문 신청을 철회할 수 있으나, 사전 주문 철회 시 사전 주문자 리스트 상 후순위 참가자 보다 순위가 뒤처지게 됩니다.</li>
                                    <li className='text-sm dark:text-gray-300'>회사는 사전 주문 완료 시 별도 고지를 하지 않으나, 참가자는 Confirmed App 앱 내 회원 정보 - 문 내역에서 사전 주문 내역을 확인할 수 있습니다.</li>
                                </ul>
                            </Fade>
                        </div>
                    </div>

                    <div className='space-y-3 mt-3'>
                        <Fade><p className='text-gray-600 dark:text-gray-200 font-semibold text-sm'>대기자 명단(Waitlist)</p></Fade>
                        <Fade>
                            <ul className='list-disc ml-5'>
                                <Fade>
                                    <ul className='list-disc ml-5'>
                                        <li className='text-sm dark:text-gray-300'>참가자가 사전 주문을 철회하였으나 사전 주문이 가능한대상 제품 중 특 정  제품이나 사이즈의 가용 재고가 확보되지 않은 경우 대기자 명단에 등록을 할 수 있으며, 회사는 사전 주문이 완료되었으나 가용 재고가 확보되지 않는 등의 사유 발생 시 직권으로 참가자를 대기자 명단에 등록할 수 있습니다.</li>
                                        <li className='text-sm dark:text-gray-300'>대기자 명단 등록 시Confirmed App 내에서 대기자 등록이 완료되었다는 화면을 직접 확인한 경우에만 대기자 명단 등록 절차가 완료됩니다. 단, 회사가 참가자를 대기자 명단에 직권 등록하는 경우에는 참가자의 대기자 명단 등록 절차가 요구되진 않습니다.</li>
                                        <li className='text-sm dark:text-gray-300'>대기자 명단 등록을 위해 필요한 모든 정보는사전 주문 기간이 종료되기 전에 제출되어야 하며 회사가 수신할 수 있어야 합니다. 대기자는 대기자 명단 등록 시 정확한 정보를 제출할 책임이 있습니다. 회사가 직권으로 대기자 명단에 등록한 경우 사전 주문 시 제출한 정보로 이를 갈음합니다.</li>
                                        <li className='text-sm dark:text-gray-300'>회사는 대기자가 대기자 명단에 등록된 이후에는 어떠한 정보(예: 제품 종류, 사이즈)의 변경/수정을 허용하지 않습니다.</li>
                                        <li className='text-sm dark:text-gray-300'>대기자 명단 등록을 완료하는 것이대상 제품을 구매할 수 있는 자격을 자동적으로 취득하는 것을 의미하지 않습니다.</li>
                                        <li className='text-sm dark:text-gray-300'>대 기 자가 본인 또는 타인의 계정을 사용하는지 여부와 관계없이 대기자 등록 시 입력된 정보(예: 계정, 배송지, 결제수단)와 동일한 정보가 포함된 사전 주문, 대기자 등록 등이 발생하거나, 자동화된 장치, 프로그램을 사용하는 등 부정한 방식이 사용된 경우, 대기자 명단 등록이 거부될 수 있습니다.</li>
                                        <li className='text-sm dark:text-gray-300'>대기자는사전 주문 기간 동안 언제든지 대기자 명단 등록을 철회할 수 있습니다.</li>
                                        <li className='text-sm dark:text-gray-300'>회사는 참가자 또는 대기자의 자격이 변경(대기자 명단 또는 사전 주문 명단으로 이동) 되는 경우 인앱 메시지 또는 앱푸시 등으로 관련 사실을 고지할 수 있으며, 대기자는 Confirmed App 앱 내 회원 정보 - 주문 내역에서 대기자 명단 등록 내역을 확인할 수 있습니다.</li>
                                        <li className='text-sm dark:text-gray-300'>구매자 확정:회사는사전 주문 기간 완료 후 사전 주문자 리스트 및 대기자 명단에서 선 착 순으로(즉, 사전 주문 또는 대기자 명단 등록을 완료한 순서를 기준으로 함) 구매자를 자동으로 확정합니다. 단, 결제 진행 단계에서 결제 오류, 카드사 승인 거절 등의 사유발생 시 구매자 확정 여부가 변동될 수 있습니다.(아래 7. 참고)</li>
                                        ※주의: 대상 제품의 구매를 원하지 않는 참가자 또는 대기자는 사전 주문 기간 종료 전까지 사전 주문 또는 대기자 명단 등록을 철회해야 합니다.
                                    </ul>
                                </Fade>
                            </ul>
                        </Fade>
                    </div>

                    <div className='space-y-3'>
                        <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>결제 및 배송</h3></Fade>
                        <Fade>
                            <ul className='list-disc ml-5'>
                                <li className='text-sm dark:text-gray-300'>참가자는 사전 주문 신청 또는 대기자 명단 등록 시 대상 제품을 구매하기 위한 청약을 한 것으로 보며, 회사가 해당 청약을 승낙(구매 확정)하는 경우에만 구매계약이 자동적으로 성립됩니다.</li>
                                <li className='text-sm dark:text-gray-300'>참가자 또는 대기자가 구매자로 확정된 경우 회사는 인앱 메시지 또는 앱 푸시를 통해 구매확정 사실을 고지하며, 사전 주문 신청 또는 대기자 명단 등록 시 약정한 방식에 따라 대상 제품 구매금액(부가세 등 관련 세금 및 배송료 등 포함)을 자동으로 결제합니다.</li>
                                <li className='text-sm dark:text-gray-300'>회사는 결제  완료 시 사전 주문 신청 또는 대기자 명단 등록 시 기입한 이메일주소로 주문 내역을 고지하며,(즉, 주문 확정 이메일 발송) 기 설정한 배송주소로 대상 제품을 배송합니다.</li>
                                <li className='text-sm dark:text-gray-300'>구매자는 주문 내역을 사이트 내 주문내역에서 확인할 수 있습니다.(즉, 사전 주문 내역 등이 자동적으로 일반 주문 내역으로 이전 됨)</li>
                                <li className='text-sm dark:text-gray-300'>구매확정 후 결제가 진행되는 과정에서 결제 오류, 카드사 승인 거절(예: 유효기간 만료, 잔액 부족, 카드번호 변경) 등의 사유발생 시 구매자 확정 여부가 변동될 수 있습니다. 만약, 카드사 등으로부터 결제 승인이 이루어졌다고 하더라도 곧바로 최종적으로 당첨자로 선정되거나 상품 구매가 완료가 된 것을 의미하지 않으며, 최종 당첨자 선정 및 상품 구매가 완료되지 않은 경우에는 결제 승인이 취소됩니다. 최종 당첨자 선정 여부 및 상품 구매 확정 사실은 오직 회사에서 참가자에게 발송하는 주문 확정 이메일을 통해서만 확인하실 수 있습니다.(즉, 카드사, PG사 등에서 별도 발송하는 이메일, 문자메시지 등은 최종 당첨자 선정 및 상품 구매 완료를 의미하지 않습니다)</li>
                                <li className='text-sm dark:text-gray-300'>회 사는 별도의 고지 없이 구매확정 기간을 연기하거나 사전 주문을 취소할 권한을 보유하며, 언제든지 본 사전 주문 관련 특약의 전부 또는 일부를 변경, 수정, 유예 또는 취소할 수 있습니다.</li>
                                <li className='text-sm dark:text-gray-300'>본 조에서 정하지 않은 사항은 이 약관 또는 회사가 사전 주문 신청 또는 대기자 등록 신청 페이지 등을 통해 기재한 내용에 따릅니다. 다만, 본 조의 내용과 이 약관, 기타 다른 약정이 상충하는 경우 본 조가 우선합니다.</li>
                            </ul>
                        </Fade>
                    </div>
                </div>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제10조  (개별 계약의 성립)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>회사는 제9조 및 제9조의 1에 따른 구매신청에 대하여 승낙할 수 있습니다. 단, 아래 각 호의 어느 하나에 해당되는 경우는 그 예외로 합니다.</li>
                            <li className='text-sm dark:text-gray-300'>이용자의 신청 내용에 허위, 기재누락, 오기가 있는 경우</li>
                            <li className='text-sm dark:text-gray-300'>기타 구매 신청에 승낙하는 것이 사이트 기술상 또는 업무 수행상 현저히 지장이 있다고 판단하는 경우</li>
                            <li className='text-sm dark:text-gray-300'>회사의 승낙이 제11조 제1항의 수신확인 통지형태로 이용자에게 도달한 시점에 구매계약이 성립한 것으로 봅니다. 단, 매장 구매신청 시 결제완료 시 구매계약이 성립한 것으로 봅니다.</li>
                            <li className='text-sm dark:text-gray-300'>미성년자의 구매 시 법정 대리인이 해당 계약에 대하여 동의를 하지 아니하면, 미성년자 본인 또는 법정대리인이 그 계약을 취소할 수 있습니다. 미성년자의 거래에 관한 상세한 사항은 관련 법령이 정한 바에 의합니다.</li>
                        </ul>
                    </Fade>
                </div>

                <Fade><h2 className='text-xl font-bold'>제5장 대금결제</h2></Fade>
                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제11 조 (수신확인통지)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>회사는 사이트를 통한 이용자의 구매 신청이 있는 경우 이용자에게 통지방법으로 수신확인통지를 합니다.</li>
                            <li className='text-sm dark:text-gray-300'>신확인통지를 받은 이용자는 구매신청 의사표시와 불일치 등이 있는 경우 수신확인통지를 받은 후 즉시 구매신청변경 또는 취소를 요청할 수 있습니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사는 배송 전 이용자의 구매신청 변경 또는 취소 요청이 있는 경우 즉시 그요청사항을 처리합니다.</li>
                        </ul>
                    </Fade>
                </div>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제12조 (대금결제방법)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>상품 또는 용역의 구매에 대한 결제는 다음의 방법에 의합니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사가 승인하는 신용카드에 의한 결제</li>
                            <li className='text-sm dark:text-gray-300'>회사가 승인하는 쿠폰 사용에 의한 결제</li>
                            <li className='text-sm dark:text-gray-300'>기타 회사가 인정하는 방법에 의한 결제</li>
                        </ul>
                    </Fade>
                </div>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제13조 (포인트제도의 운영)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>포인트 제도의 운영에 관한 구체적인 사항은 나이키클럽 이용약관 제7조(멤버십 포인트 및 쿠폰의 이용 및 제한)에서 정한 바에 따릅니다.</li>
                        </ul>
                    </Fade>
                </div>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제14조 (쿠폰의 정의 및 사용)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>쿠폰 제도의 운영에 관한 구체적인 사항은 나이키클럽 이용약관 제7조(멤버십 포인트 및 쿠폰의 이용 및 제한)에서 정한 바에 따릅니다.</li>
                        </ul>
                    </Fade>
                </div>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'> 제15조 (연체)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>상품 또는 용역의 구매에 대한 신용카드, 통신사 등을 통한 결제가 연체되는 경우, 이용자가 지정하는 신용카드, 통신사 등 결제업자의 약관이 적용되며, 결제업자로부터 회사가 결제의 무효 또는 판매부인의 통지가 있는 경우 회사는 즉시 이용자의 사이트 이용을 일단 정지하고 (회원 아이디 및 비밀번호 사용정지) 지체없이 이용자에 대해 결제대금 연체에 따른 지급 방식 안내와 익월부터 대금결제방법의 변경 여부에 대한 확인 유무선 수단을 통한 연락을 합니다.</li>
                            <li className='text-sm dark:text-gray-300'>이용자가 사이트에 제공한 연락처로 연락이 되지 않을 경우 또는 이용자가 약속한 날, 기타 회사가 지정 날까지 결제대금 지급이 확인이 되지 않는 경우 회사는 당해 이용자의 사이트 이용을 제한할 수 있습니다.</li>
                        </ul>
                    </Fade>
                </div>

                <Fade><h2 className='text-xl font-bold'>제6장 배송, 취소, 환불</h2></Fade>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제16조(재화 등의 공급 등)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>회사는 이용자와 상품 등 공급시기에 관하여 따로 약정하거나 상품 판매페이지에 고지하지 않는 한, 이용자가 청약을 한 날로부터 7일 이내에 상품 등의 공급에 필요한 조치(예를 들어, 배송사업자에게 배송 의뢰, 출고지시 또는 제품 인계, 이하 같음)를 합니다. 단, 이용자가 상품 등을 공급받기 전에 미리 재화등의 대금을 전부 또는 일부 지급한 경우에는 이용자가 그 대금을 전부 또는 일부 지급한 날부터 3영업일 이내에 재화등의 공급을 위하여 필요한 조치를 합니다.</li>
                        </ul>
                    </Fade>
                    <div className='space-y-3 ml-5'>
                        <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>2배송소요기간은 주문일 익일을 기산일로 하며 비수기를 기준으로 다음 각호와 같습니다.</h3></Fade>
                        <Fade>
                            <ul className='list-disc ml-5'>
                                <li className='text-sm dark:text-gray-300'>일반택배(주문일, 공휴일제외), 서울/경기 지역 : 3-6일, 그 외 지역 : 3-9일(제주도 및 도서산간지역의 경우 개별계약에 따름)</li>
                                <li className='text-sm dark:text-gray-300'>공휴일 기타 휴무일에는 배송 되지 않습니다.</li>
                                <li className='text-sm dark:text-gray-300'>천재지변 등 불가항력적인 사유 발생시 그 해당기간 동안은 배송소요기간에서 제외됩니다.</li>
                                <li className='text-sm dark:text-gray-300'>상품 수령지가 대한민국 이외의 지역으로 되어 있는 배송 주문은 원칙적으로 금지되며 회사는 이용자의 구매 신청일로부터 3일 이내에 배송지의 변경을 요구할 수 있고, 이러한 요구에도 불구하고 이용자가 3일 이내에 국내 배송지로의 변경이 이루어지지 않는 경우 회사는 그 배송을 유보할 수 있습니다. (또는, 구매신청에 대한 승낙을 거절할 수 있습니다)</li>
                                <li className='text-sm dark:text-gray-300'>배송의 완료는 이용자가 지정한 장소(이용자가 택배사에 별도로 지정한 장소를 포함)로 구매 신청한 상품이 도달한 시점을 말합니다. 단, 이용자가 지정한 배송지가 택배사로 하여금 오인하거나 달리 해석될 수 있는 장소(예를 들어, 슈퍼마켓, 마을회관, 공공건물 및 공공시설 등) 인 경우 또는 제3자를 통한 상품 수령의 요청, 배송정보 오기재 등으로 인해 이용자에게 발생한 손해에 대해서는 회사가 일체 책임을 부담하지 않습니다.</li>
                                <li className='text-sm dark:text-gray-300'>회사는 청약을 받은 상품 등을 공급하기 곤란(예: 재고부족, 가격표기 오류)하다는 것을 알았을 때에는 지체 없이 그 사유를 회원에게 알려야 하고, 회원이 그 대금의 전부 또는 일부를 지급한 날부터 3영업일 이내에 환급하거나 환급에 필요한 조치를 합니다.</li>
                            </ul>
                        </Fade>
                    </div>
                </div>


                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제17조 (환불, 반품 및 대행)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>이용자는 제11조 제1항의 수신확인의 통지를 받은 날 또는 상품을 배송 받은 날부터 7일 이내에 청약 철회(이하 환불)를 할 수 있습니다. 단, 매장 구매인 경우 상품을 구매한 날로부터 15일 이내에 환불을 할 수 있습니다.</li>
                            <li className='text-sm dark:text-gray-300'>이용자는 상품을 배송 받은 경우 다음 각호의 어느 하나에 해당하는 경우에는 환불을 할 수 없습니다.</li>
                            <li className='text-sm dark:text-gray-300'>이용자에게 책임 있는 사유로 재화 등이 멸실 또는 훼손된 경우</li>
                            <li className='text-sm dark:text-gray-300'>다만, 재화 등의 내용을 확인하기 위하여 포장 등을 훼손한 경우에는 회사가 사전에 청약철회 제한에 관해 고지하지 않은 한 환불 등을 할 수 있습니다.</li>
                            <li className='text-sm dark:text-gray-300'>이용자의 사용 또는 일부 소비에 의하여 재화 등의 가치가 현저히 감소한 경우</li>
                            <li className='text-sm dark:text-gray-300'>시간의 경과에 의하여 재판매가 곤란할 정도로 재화 등의 가치가 현저히 감소한 경우</li>
                            <li className='text-sm dark:text-gray-300'>같은 성능을 지닌 재화 등으로 복제가 가능한 경우 등의 포장(예를들어, 신발박스 및 기타 제품의 일부로 구성되는 포장)을 훼손한 경우</li>
                            <li className='text-sm dark:text-gray-300'>환불로 인해 회사에게 회복할 수 없는 중대한 피해가 예상되어 사이트에서 사전에 당해 상품 또는 용역의 개별 계약에 대해 환불 제한에 관한 고지 후 이용자의 동의를 득한 경우</li>
                            <li className='text-sm dark:text-gray-300'>이용자는 본 조 제1항 및 제2항의 규정에 불구하고 사이트 내에서 재화 등의 내용이 표시 및 광고 내용과 다르거나 계약내용과 다르게 이행된 때에는 당해 재화 등을 공급 받은 날부터 3개월 이내, 그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 환불을 할 수 있습니다.</li>
                            <li className='text-sm dark:text-gray-300'>이용자는 본 조 제1항에 따라 환불을 하는 경우 이용자는 이미 제공 받은 상품을 반환하여야 하며, 회사는 이미 지급받은 상품의 대가를 이용자로부터 상품을 반환 받은 날부터 3영업일 이내에 이용자 또는 결제업자에게 환불하거나 결제업자에게 결제 대금의 청구를 정지하거나 취소할 것을 요청합니다. 단, 결제업자에게 환불하는 경우 이용자에게 별도 통지합니다. 단, 이용자가 환불을 요청한 후 30일 이내에 상품을 반환하지 않는 경우 사이트를 통한 반품 절차는 중단되나, 이후 이용자는 회사가 운영하는 고객센터를 통해 반품 절차를 재개할 수 있습니다.</li>
                            <li className='text-sm dark:text-gray-300'>이용자는 본 조 제4항에 따라 이미 제공 받은 상품의 반환(이하 반품)을 위해 회사에게 배송사업자의 지정을 요청(이하 반품대행 서비스) 할 수 있습니다. 단, 이용자의 귀책(예를 들어, 배송사업자가 2~3회 이상 이용자가 지정한 반품 대상 상품의 인계장소에 방문했음에도 상품을 반환하지 않음) 또는 회사 및/또는 배송사업자의 사정으로 인해 반환요청일로부터 15일 이내에 지정된 배송사업자에게 반품되지 않은 경우, 이용자는 회사에게 배송사업자의 재지정을 요청해야 하며 이용자가 재지정을 요청하지 않는 한 회사는 상품 수거를 위한 별도 추가 안내를 하지 않습니다.</li>
                            <li className='text-sm dark:text-gray-300'>이용자는 반환요청일로부터 15일 이후에도 배송사업자 재지정을 요청하거나 상품의 반환을 할 수 있습니다. 단, 회사는 이용자의 귀책으로 인해 이용자에게 발생가능한 보관료 등 추가비용을 부담하지 않으며, 회사 또는 배송사업자에게 손해가 발생한 경우 이용자에게 반품 대행 서비스와 관련된 제반비용을 청구할 수도 있습니다.</li>
                            <li className='text-sm dark:text-gray-300'>본 조 제5항 및 제6항에 따른 회사의 반품 대행 서비스 제공에도 불구하고, 이용자는 본 조 제1항, 제3항에 따른 청약철회 권리 및 본 조 제4항에 따른 대금반환청구권을 자유롭게 행사할 수 있습니다.</li>
                            <li className='text-sm dark:text-gray-300'>본 조 제1항에 따라 상품의 환불이 된 경우 그 반환에 필요한 일체의 비용은 이용자가 부담합니다. 단, 본 조 제3항에 따라 회사가 공급한 재화 등의 내용이 표시•광고 내용과 다르거나 회사의 귀책으로 계약내용과 다르게 이행되어 청약철회 등을 하는 경우 또는 회사의 귀책에 따른 제품의 하자로 인한 경우에 있어서 재화 등의 반환에 필요한 비용은 회사가 부담합니다. 단, 이용자의 편의 증진 및 서비스 만족도 극대화를 위해 회사는 사전에 별도 안내한 바에 따라 이용자가 부담해야할 상품 반환에 따른 부대비용의 전부 또는 일부를 스스로 부담할 수 있습니다.</li>
                            <li className='text-sm dark:text-gray-300'>구매 신청한 상품 또는 용역의 품절 등의 사유로 상품 또는 용역의 제공이 불가한 때에는 회사는 지체 없이 그 사유를 이용자에게 통지하고, 환불 절차는 본 조 제4항에서 정한 절차에 따릅니다.</li>
                        </ul>
                    </Fade>
                </div>

                <Fade><h2 className='text-xl font-bold'>제7장 회사와 이용자의 의무사항</h2></Fade>
                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제18조 (개인정보보호 )</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>회사는 이용자의 개인정보를 보호하기 위하여 최선을 다하고 있으며 이와 관련하여서는 개인정보 처리방침에 따릅니다.</li>
                        </ul>
                    </Fade>
                </div>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제19조 (회사의 의무)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>회사는 법령과 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 재화 또는 용역을 제공하는데 최선을 다합니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사는 이용자가 안전하게 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한보안 시스템을 갖추어야 합니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사는 이용고객으로부터 제기되는 의견이나 불만이 정당하다고 객관적으로 인정될 경우에는 적절한 절차를 거쳐 즉시 처리하여야 합니다.</li>
                            <li className='text-sm dark:text-gray-300'>다만, 즉시 처리가 곤란한 경우는 이용자에게 그 사유와 처리일정을 통보하여야 합니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사는 소비자보호단체의 소비자보호 업무의 추진에 필요한 자료 등의 제공요구에 적극 협력합니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사가 상품이나 용역에 대하여「표시•광고의공정화에관한법률」제3조 소정의 부당한 표시•광고행위를 함으로써 이용자가 손해를 입은 때에는 이를 배상할 책임을 집니다.</li>
                        </ul>
                    </Fade>
                </div>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제20조(이용자의 의)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>이용자는 다음 행위를 하여서는 안됩니다.</li>
                            <li className='text-sm dark:text-gray-300'>회원가입, 구매, 결제의 신청 또는 변경 시 허위내용의 등록</li>
                            <li className='text-sm dark:text-gray-300'>사이트 게시된 정보의 무결성, 최신성 훼손 등 부적절한 변경</li>
                            <li className='text-sm dark:text-gray-300'>서비스 이용을 위해 필요한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시(예: 로봇, 스파이더, 스크래퍼  등 자동화된 프로그램을 사용하여 회사 서버 등에 부하를 야기, 사이트 운영을 방해하거나 방해 시도, 사이트 및 정보 보호 수단을 우회)</li>
                            <li className='text-sm dark:text-gray-300'>회사, 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                            <li className='text-sm dark:text-gray-300'>회사, 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                            <li className='text-sm dark:text-gray-300'>외설 또는 폭력적인 메시지•화상•음성 기타 공서 양속에 반하는 정보를 사이트에 공개 또는 게시하는 행위</li>
                            <li className='text-sm dark:text-gray-300'>다른  이용자의 아이디(이메일주소), 비밀번호, 이메일주소, 휴대전화번호 등의 개인정보, 기타 정보를 도용 , 탈취, 거래하는 행위</li>
                            <li className='text-sm dark:text-gray-300'>기타 관계 법령에 위반하거나 회사의 업무를 방해하는 등 기타 회사가 부적절하다고 판단하는 행위</li>
                            <li className='text-sm dark:text-gray-300'>사는 본 조 제1항의 사항 등 사이트의 운영상 부적절 하다고 판단한 정보가 사이트에 게시되거나 사이트와 링크된 곳에 게시된 경우, 회사는 이용자 기타 정보의 게시를 행한 자의 승낙 및 사전 통지 없이 사이트에 게재된 당해 정보를 삭제하거나 사이트에 확장된 링크를 차단할 수 있습니다. 단, 회사는 이러한 정보의 삭제•링크의 차단 등을 할 의무를 지지 않습니다.</li>
                        </ul>
                    </Fade>
                </div>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제21조 (회원의 아이디 및 비밀번호 등 계정관리)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>아이디(이메일 주소)와 비밀번호 등 개인정보, 기타 회원 계정에 대한 관리책임은 회원 본인에게 있으며, 이를 제3자가 이용하도록 허락하거나 양도, 이전 해서는 안됩니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사는 이용자 관리업무를 수행 하므로, 회원의 계정으로 인해 개인정보유출의 우려가 있거나, 반사회적 또는 미풍양속에 어긋나거나 회사의 정책에 반하는 경우 회원 계정의 사용을 제한할 수 있습니다. 회원 아이디(이메일주소) 등 정보 및 계정정보를 변경하고자 하는 경우에도 같습니다.</li>
                            <li className='text-sm dark:text-gray-300'>회원 아이디(이메일주소), 비밀번호 등 정보 공유, 회원 계정의 부정사용에 의하여 발생되는 사용상 부주의 또는 제3자에 의한 부정사용 등에 대한 모든 책임은 해당 회원에게 있습니다.</li>
                            <li className='text-sm dark:text-gray-300'>회원이 자신의 아이디(이메일주소) 및 비밀번호를 도난당하거나 자신의 계정이 제3자가 사용하고 있는 등 이상 징후를 인지한 경우에는 즉시 회사에 통지하고 회사의 안내에 따라야 합니다. 단, 회원이 이를 회사에 통지하지 않거나 회사의 안내에 따르지 않아 발생한 손해에 대해서는 회사가 책임을 지지 않습니다.</li>
                            <li className='text-sm dark:text-gray-300'>회원은 원칙적으로 하나의 아이디(이메일주소)를 사용하여 하나의 회원 계정 만을 개설할 수 있습니다.</li>
                        </ul>
                    </Fade>
                </div>

                <Fade><h2 className='text-xl font-bold'>제8장 기타</h2></Fade>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제22조 (지적재산권의 보호)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>회사가 작성한 저작물에 대한 저작권, 상표권, 특허권, 실용신안권, 디자인권, 기타 지적재산권(2차적 저작물 작성권 등 포함) 및 사이트의 디자인, 특징 및 구동방식, 상호, 브랜드 명칭, 아이디어 등(이하 지적재산권)은 모두 회사에 귀속합니다.</li>
                            <li className='text-sm dark:text-gray-300'>용자는 회사의 서비스를 이용함으로써 취득한 정보를 회사의 명시적인 사전 서면 승낙 없이 이용, 권리출원/등록, 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사는 이용자가 등록한 게시글 또는 상품평을 검색에 노출하거나, 판촉, 홍보 및 기타의 자료를 무상으로 사용할 수 있습니다. 다만, 회사는 해당 게시물을 등록한 이용자가 게시물 의 삭제와 함께 사용 중지를 요구 시 이용자의 권리가 확인되는 경우에는 즉시 사용을 중지합니다.</li>
                        </ul>
                    </Fade>
                </div>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제23조 (게시물, 상품평 등의 관리)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>타인의 권리나 명예, 신용 기타 정당한 이익을 침해하거나 심한 모욕을 주는 경우</li>
                            <li className='text-sm dark:text-gray-300'>공공질서 및 미풍양속에 위반되는 내용인 경우</li>
                            <li className='text-sm dark:text-gray-300'>범죄행위와 관련된 내용을 포함하는 경우</li>
                            <li className='text-sm dark:text-gray-300'>회사의 저작권, 제3자의 저작권 등 기타 권리를 침해하는 내용인 경우</li>
                            <li className='text-sm dark:text-gray-300'>외설 또는 폭력적인 메시지•화상•음성 기타 공서 양속에 반하는 정보를 포함하는 경우</li>
                            <li className='text-sm dark:text-gray-300'>회사의 사전 승인 없이 상업광고, 판촉 내용을 게시하거나 타 사이트의 링크를 게시하는 경우</li>
                            <li className='text-sm dark:text-gray-300'>상품 및 용역 기타 서비스 이행과 관련 없는 내용인 경우</li>
                            <li className='text-sm dark:text-gray-300'>허위의 사실을 진실인 것처럼 호도하여 회사의 업무를 방해하거나 회사의 정당한 요청에 불구하고 3회 이상 사실관계 확인을 거부한 경우</li>
                            <li className='text-sm dark:text-gray-300'>기타 이 약관 또는 관련 법령에 위반된다고 회사가 판단한 경우</li>
                            <li className='text-sm dark:text-gray-300'>본 조 제1항에 해당하는 게시글 또는 상품평으로 인하여 법률상 이익이 침해된 자는 관련 법령이 정한 절차에 따라 회사에 해당 게시글 또는 상품평의 게시중단 및 삭제 등을 요청할 수 있으며, 회사는 관련 법령 및 회사의 정책에 따라 조치를 취할 수 있습니다</li>
                            <li className='text-sm dark:text-gray-300'>본 조 제1항에 해당하는 게시글 또는 상품평으로 인하여 회사가 제3자에 대하여 손해배상금을 지급하게 되는 경우(조정, 판결, 민사, 형사 불문) 해당 회원은 회사가 제3자에게 배상금을 지급하는 즉시 동일 금액 상당을 회사에게 지급할 의무를 부담 합니다.</li>
                            <li className='text-sm dark:text-gray-300'>회원 탈퇴 이후에는 해당 회원이 탈퇴 이전에 작성한 게시글 또는 상품평의 일부 또는 전부의 편집이나 삭제를 요청할 수 없고, 회원은 회원 탈퇴 이전에 자신이 작성한 게시글 또는 상품평에 대해 수정, 삭제 등 필요한 조치를 완료해야 합니다.</li>
                        </ul>
                    </Fade>
                </div>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제24조 (면책조항)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>회사는 천재지변, 전쟁 및 기타 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 대한 책임이 면제됩니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사는 기간통신 사업자가 전기통신 서비스를 중지하거나 정상적으로 제공하지 아니하여 손해가 발생한 경우 책임이 면제됩니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사는 이용자의 귀책사유로 인한 서비스 이용의 장애 또는 손해에 대하여 책임을 지지 않습니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사는 이용자가 서비스를 이용함으로써 기대되는 수익을 얻지 못하거나 서비스를 통해 얻은 자료를 이용하여 발생한 손해에 대해서는 책임을 부담하지 않습니다.</li>
                            <li className='text-sm dark:text-gray-300'>이용자 또는 제3자가 사이트 및 서비스 화면에 게재한 각종 정보, 자료, 사실 등의 내용에 관한 신뢰도 또는 정확성 등에 대하여 해당 이용자와 제3자가 책임을 지며, 회사는 이를 보증 하거나 그와 관련하여 어떠한 책임도 부담하지 아니 합니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사는 서비스이용과 관련하여 이용자의 고의 또는 과실로 인하여 이용자 또는 제3자에게 발생한 손해에 대하여는 아무런 책임을 부담하지 않습니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사의 사이트 및 서비스 화면에서 링크, 배너 등을 통하여 연결된 회사(이하 피연결회사)와 이용자 간에 해당 피연결회사가 독자적으로 제공하는 재화 등에 대하여 이루어진 거래의 경우, 회사는 이에 대해서 책임을 지지 않습니다.</li>
                        </ul>
                    </Fade>
                </div>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제25조 (분쟁해결)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>사이트는 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보합니다.</li>
                            <li className='text-sm dark:text-gray-300'>사이트와 이용자간에 발생한 분쟁은 전자문서및전자거래기본법 제 32조 및 동 시행령 제20조에 의하여 설치된 전자거래분쟁 조정위원회의 조정에 따를 수 있습니다.</li>
                        </ul>
                    </Fade>
                </div>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제26조 (손해배상 등)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>서비스 이용과 관련하여 이용자의 귀책 사유로 회사 및/또는 제3자에게 손해가 발생한 경우, 회사는 당해 이용자에게 손해 배상을 청구할 수 있습니다.</li>
                        </ul>
                    </Fade>
                </div>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제27조 (재판권 및 준거법)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>서비스 이용으로 발생한 분쟁에 대해 소송이 제기되는 경우 서울중앙지방법원을 그 관할법원으로 합니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사와 이용자 간에 제기된 전자상거래 소송에는 대한민국법을 적용합니다.</li>
                        </ul>
                    </Fade>
                </div>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제28조 (약관 외 준칙)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래등에서의소비자보호에관한법률, 약관의규제등에관한법률, 공정거래위원회가 정하는 전자상거래등에서의소비자보호지침 및 관계법령 또는 상관례에 따릅니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사는 필요한 경우 특정 서비스에 관하여 적용될 사항(이하 개별약관)을 정하여 이를 사이트 서비스 화면 게시 등을 통하여 공지할 수 있습니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사는 필요한 경우 서비스 이용과 관련 된  세부적인 내용(이하 이용정책)을 정하여 이를 사이트 서비스 화면 게시 등을 통하여 공지할 수 있습니다.</li>
                            <li className='text-sm dark:text-gray-300'>회원은 항상 개별약관이나 이용정책의 내용에 변경이 있는지 여부를 주시하여야 하며, 변경사항의 공지가 있을 시에는 이를 확인하여야 합니다.</li>
                        </ul>
                    </Fade>
                </div>

                <div className='space-y-3'>
                    <Fade><h3 className='text-base text-gray-900 font-semibold dark:text-white'>제29조 (기타 조항)</h3></Fade>
                    <Fade>
                        <ul className='list-disc ml-5'>
                            <li className='text-sm dark:text-gray-300'>회사는 필요한 경우 특정 서비스나 기능의 전부 또는 일부를 사이트를 통해 미리 공지한 후 일시적 또는 영구적으로 수정하거나 중단할 수 있습니다.</li>
                            <li className='text-sm dark:text-gray-300'>이용자는 회사의 서면동의 없이 이 약관상의 권리와 의무를 제3자에게 양도하거나 처분, 담보로 제공할 수 없습니다.</li>
                            <li className='text-sm dark:text-gray-300'>이 약관과 관련하여 당사자간의 합의에 의하여 추가로 작성된 계약서, 협정서, 통보서 등과 회사의 정책변경, 법령의 제•개정 또는 공공기관의 고시나 지침 등에 의하여 회사가 사이트를 통해 공지하는 내용도 이용약관의 일부를 구성합니다.</li>
                            <li className='text-sm dark:text-gray-300'>회사는 사이트 등을 통해 회사의 본사 또는 그 계열회사, 기타 제3자가 운영하는 웹사이트 또는 모바일 앱 등에 접속하거나 이용할 수 있는 링크를 제공할 수 있습니다. 그러나, 회사가 제공하는 관련 링크는 편의 제공의 목적일 뿐이며, 관련 링크를 통해 외부 서비스에 접속하거나 이용할지 여부에 대한 판단 등은 회원 본인의 선택에 따릅니다. 외부 서비스 이용으로 인해 분쟁 발생 시, 해당 외부 서비스를 제공하는 제3자와 회원이 관련 분쟁을 해결합니다.</li>
                        </ul>
                    </Fade>
                </div>
            </div>
        </React.Fragment>
    )
}

export default information