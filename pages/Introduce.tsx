import React from 'react'
import HeadInfo from '@components/HeadInfo'
import Fade from 'react-reveal/Fade';
import Link from 'next/link';

export default function Introduce(): JSX.Element {

    return (
        <React.Fragment>
            <HeadInfo title="Introduce Page" contents="Introduce Page"></HeadInfo>

            <div className="text-center mt-28">
                <Fade duration={1000} bottom>
                    <p className="text-sm md:text-base text-blue-500 font-bold">25 January 1964 <span className="text-gray-900">/</span> GETTING STARTED</p>
                </Fade>
                <Fade duration={1000} bottom>
                    <h1 className="font-bold break-normal text-2xl md:text-4xl mt-4">나이키 스토어에 오신 것을 환영합니다.</h1>
                </Fade>
            </div>

            <div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded relative -z-50 h-3/4" >
                <Fade duration={1000}><img src="https://raw.githubusercontent.com/light9639/ImgStorage/main/shoestore/index/mainBanner01.png" alt="Img" /></Fade>
            </div>
            <div className="container max-w-5xl mx-auto mt-10 lg:-mt-32">
                <div className="mx-0 sm:mx-6">
                    <div className="bg-white dark:bg-slate-900 shadow-md rounded-md w-full p-8 mb-28 md:p-24 text-xl md:text-2xl text-gray-800 dark:text-white leading-normal">
                        <Fade bottom duration={1000}>
                            <p className="text-2xl md:text-3xl mb-5 font-semibold">
                                나이키 스토어에 오신 것을 환영합니다.
                            </p>
                        </Fade>
                        <div className='text-xl'>
                            <Fade bottom duration={1200}>
                                <p className="py-6 leading-[2]">스포츠는 건강을 지키며, 내면을 밝혀주고, 우리를 하나로 이어줍니다. 나이키는 스포츠를 통해 세상을 바꿀 수있다고 믿습니다. 세계무대를 빛내는 스포츠 선수에서, 평범한 사람들의 일상에 이르기까지, 우리는 최상의 테크놀로지로 최상의 퍼포먼스를 선사합니다. 러닝에서 바스켓볼, 축구, 피트니스까지. 나이키와 함께 새로운 나의 모습을 만나보세요. 가끔은 도시를 벗어나 아웃도어를 즐기고, 요가를 통해공동체와 하나가 되어보세요. 3-스트라이프의 헤리티지는 문화로까지 이어집니다. 스포츠는 물론, 음악과 일상의 스트릿까지 말이죠. 휘슬이 울리기 직전의 출발선으로부터, 질주의 순간, 마지막 결승선까지. 나이키는 모두를 위한 브랜드입니다. 스포츠와 당신의 삶, 그리고 세상을 바꿉니다.</p>
                            </Fade>
                            <Fade bottom duration={1400}>
                                <p className="py-6 leading-[2]">나이키는 단순히 스포츠웨어와 운동복을 만드는 브랜드가 아닙니다. 우리는 업계를 선도하는 리더들과 파트너십을 맺고 세상에 없던 것들을 함께 창조합니다. 이를 통해 우리는 팬들이 원하는 스포츠 제품과 스타일을 제공하고 동시에 환경의 지속가능성을 지켜 나가고 있습니다. 나이키는 크리에이터의 브랜드입니다. 게임의 판도를 바꾸고, 변화를 이끕니다. 그리고 우리는 우리가 지닌 영향력으로 세상을 어떻게 만들어 나갈지 고민합니다.</p>
                            </Fade>
                            <Fade bottom duration={1600}>
                                <p className="py-3 leading-[2]">나이키는 모두의 스포츠 브랜드입니다. 새로움을 추구하는 크리에이터의 브랜드입니다. 관습에 도전하고, 새로운 룰을 만들며, 창조적인 파격을 거듭합니다. 우리는 단순한 스포츠 제품, 그 이상을 만듭니다. 결승선을 통과하는 그 순간까지 흔들림 없는 몰입과 의지, 승리의 정신을 추구합니다.</p>
                            </Fade>
                            <Fade bottom duration={1800}>
                                <p className="py-3 leading-[2]">운동하는 여성들을 위해 브라와 타이츠를 만들며, 세상의 모든 스포츠와 모든 체형을 포용합니다. 새로움을 디자인하고, 혁신하고, 창조합니다. 그라운드에서 육상 트랙과 코트, 수영장에 이르기까지, 스포츠의 새로운 미래를 위한 실험을 반복합니다. NMD에서 파이어버드 트랙수트까지, 어제의 영감을 바탕으로 내일의 스트릿 트렌드를 생각해냅니다. 영원한 스트릿의 아이콘으로 자리 잡은 스탠 스미스와 슈퍼스타에서 볼 수 있듯이, 나이키는 어제의 클래식에 오늘의 트렌드라는 새 생명을 불어넣는 브랜드입니다.</p>
                            </Fade>
                            <Fade bottom duration={2000}>
                                <p className="py-3 leading-[2]">나이키가 내놓는 컬렉션은 하이 패션과 퍼포먼스의 경계를 자유롭게 넘나듭니다. 나이키 by 스텔라 맥카트니의 애슬레틱 컬렉션이 증명하듯 스튜디오와 스트릿 룩의 구분은 의미가 없습니다. 오리지널스의 라이프스타일 어패럴도 필요할 때면 언제든 운동복이 될 수 있습니다. 우리의 삶은 끊임없이 변화하고 있습니다. 일상의 모습도 하루가 다르게 바뀝니다. 나이키의 디자인 철학은 이 세상의 끝없는 진화를 담고 있습니다.</p>
                            </Fade>
                            <Fade duration={2200}>
                                <blockquote className="border-l-4 border-gray-900 dark:border-gray-300 mt-10 -mb-2 pl-8 md:pl-12">지금 <Link href="/Login" className='font-semibold hover:opacity-75'>로그인 페이지</Link>로 이동 후,<br /> 가입하여 혜택을 누려보세요 </blockquote>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}