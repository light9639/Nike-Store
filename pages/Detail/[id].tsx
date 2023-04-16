import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HeadInfo from '@components/HeadInfo';
import { useRouter } from 'next/router';
import Loading from '../Loading';
import DetailSide from '@components/DetailSide';
import Link from 'next/link';
import { DetailType } from "@lib/TypeBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';
import type { NextPage } from "next";

interface PageType {
    postData: DetailType[];
    paramsID: any;
}

const Detail: NextPage<PageType> = ({ postData, paramsID }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const PostID: DetailType = postData[paramsID];

    function ScrollTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function Before() {
        if (paramsID == 0) {
            return (
                <Link href="#void" className="w-1/2 bg-white dark:bg-slate-900 shadow text-left p-6 cursor-auto rounded-lg">
                    <p className="text-lg text-gray-900 dark:text-blue-800 font-bold flex items-center align-middle"><FontAwesomeIcon icon={faArrowLeft} className="w-3.5 mr-2" /> 이전 기사</p>
                    <p className="pt-2 line-clamp-1">더 이상의 기사가 없습니다.</p>
                </Link>
            )
        } else {
            return (
                <Link href={"/Detail/" + (parseInt(paramsID) - 1)} onClick={() => { scrollTo() }} className="w-1/2 bg-white dark:bg-slate-900 shadow hover:shadow-md text-left p-6 rounded-lg">
                    <p className="text-lg text-gray-900 dark:text-blue-800 font-bold flex items-center align-middle"><FontAwesomeIcon icon={faArrowLeft} className="w-3.5 mr-2" /> 이전 기사</p>
                    <p className="pt-2 line-clamp-1">{postData[parseInt(paramsID) - 1]?.h2}</p>
                </Link>
            )
        }
    }

    function Next() {
        if ((parseInt(paramsID) + 1) == postData.length) {
            return (
                <Link href="#void" className="w-1/2 bg-white dark:bg-slate-900 shadow text-right p-6 cursor-auto line-clamp-1 rounded-lg">
                    <p className="text-lg text-gray-900 dark:text-blue-800 font-bold flex items-center justify-end align-middle">다음 기사 <FontAwesomeIcon icon={faArrowRight} className="w-3.5 ml-2" /></p>
                    <p className="pt-2 line-clamp-1">더 이상의 기사가 없습니다.</p>
                </Link>
            )
        } else {
            return (
                <Link href={"/Detail/" + (parseInt(paramsID) + 1)} onClick={() => { scrollTo() }} className="w-1/2 bg-white dark:bg-slate-900 shadow hover:shadow-md text-right p-6 line-clamp-1 rounded-lg">
                    <p className="text-lg text-gray-900 dark:text-blue-800 font-bold flex items-center justify-end align-middle">다음 기사 <FontAwesomeIcon icon={faArrowRight} className="w-3.5 ml-2" /></p>
                    <p className="pt-2 line-clamp-1">{postData[parseInt(paramsID) + 1]?.h2}</p>
                </Link>
            )
        }
    }

    useEffect(() => {
        axios.get("").then((res) => {
            setLoading(false);
        });
    }, []);

    return (
        <React.Fragment>
            <HeadInfo title={PostID.h2} contents={PostID.h2} />

            {loading
                ? <Loading></Loading>
                : <React.Fragment>
                    <div className="container mx-auto flex flex-wrap py-6">

                        <section className="w-full lg:w-2/3 flex flex-col items-center px-3">

                            <article className="flex flex-col shadow my-4">
                                <Fade><img src={PostID.src} alt={PostID.alt} /></Fade>
                                <div className="bg-white dark:bg-slate-900 flex flex-col justify-start p-6">
                                    <Fade duration={1500}>
                                        <a href="#void" className="text-gray-900 dark:text-blue-700 text-sm font-bold uppercase pb-4">Sports</a>
                                        <a href="#void" className="text-3xl font-bold hover:text-gray-700 pb-4">{PostID.h2}</a>
                                        <p className="text-sm pb-8">
                                            이 글은 <span className="font-semibold hover:text-gray-800">Lee dong ho</span>에 의해 {PostID.date} 작성되었습니다.
                                        </p>
                                        <h1 className="text-2xl font-bold pb-3">1963년부터, 스토리와 스타일, 스포츠를 이끌다</h1>
                                        <p className="pb-3">스포츠는 건강을 지키며, 내면을 밝혀주고, 우리를 하나로 이어줍니다. 나이키는 스포츠를 통해 세상을 바꿀 수있다고 믿습니다. 세계무대를 빛내는 스포츠 선수에서, 평범한 사람들의 일상에 이르기까지, 우리는 최상의 테크놀로지로 최상의 퍼포먼스를 선사합니다. 러닝에서 바스켓볼, 축구, 피트니스까지. 나이키와 함께 새로운 나의 모습을 만나보세요. 가끔은 도시를 벗어나 아웃도어를 즐기고, 요가를 통해공동체와 하나가 되어보세요. 3-스트라이프의 헤리티지는 문화로까지 이어집니다. 스포츠는 물론, 음악과 일상의 스트릿까지 말이죠. 휘슬이 울리기 직전의 출발선으로부터, 질주의 순간, 마지막 결승선까지. 나이키는 모두를 위한 브랜드입니다. 스포츠와 당신의 삶, 그리고 세상을 바꿉니다.</p>
                                        <h1 className="text-2xl font-bold pb-3">세상의 모든 스포츠를 포용하는 브랜드</h1>
                                        <p className="pb-3">나이키는 단순히 스포츠웨어와 운동복을 만드는 브랜드가 아닙니다. 우리는 업계를 선도하는 리더들과 파트너십을 맺고 세상에 없던 것들을 함께 창조합니다. 이를 통해 우리는 팬들이 원하는 스포츠 제품과 스타일을 제공하고 동시에 환경의 지속가능성을 지켜 나가고 있습니다. 나이키는 크리에이터의 브랜드입니다. 게임의 판도를 바꾸고, 변화를 이끕니다. 그리고 우리는 우리가 지닌 영향력으로 세상을 어떻게 만들어 나갈지 고민합니다.</p>
                                        <p className="pb-3">나이키는 모두의 스포츠 브랜드입니다. 새로움을 추구하는 크리에이터의 브랜드입니다. 관습에 도전하고, 새로운 룰을 만들며, 창조적인 파격을 거듭합니다. 우리는 단순한 스포츠 제품, 그 이상을 만듭니다. 결승선을 통과하는 그 순간까지 흔들림 없는 몰입과 의지, 승리의 정신을 추구합니다. 운동하는 여성들을 위해 브라와 타이츠를 만들며, 세상의 모든 스포츠와 모든 체형을 포용합니다. 새로움을 디자인하고, 혁신하고, 창조합니다. 그라운드에서 육상 트랙과 코트, 수영장에 이르기까지, 스포츠의 새로운 미래를 위한 실험을 반복합니다. NMD에서 파이어버드 트랙수트까지, 어제의 영감을 바탕으로 내일의 스트릿 트렌드를 생각해냅니다. 영원한 스트릿의 아이콘으로 자리 잡은 스탠 스미스와 슈퍼스타에서 볼 수 있듯이, 나이키는 어제의 클래식에 오늘의 트렌드라는 새 생명을 불어넣는 브랜드입니다.</p>
                                        <p className="pb-3">나이키가 내놓는 컬렉션은 하이 패션과 퍼포먼스의 경계를 자유롭게 넘나듭니다. 나이키 by 스텔라 맥카트니의 애슬레틱 컬렉션이 증명하듯 스튜디오와 스트릿 룩의 구분은 의미가 없습니다. 오리지널스의 라이프스타일 어패럴도 필요할 때면 언제든 운동복이 될 수 있습니다. 우리의 삶은 끊임없이 변화하고 있습니다. 일상의 모습도 하루가 다르게 바뀝니다. 나이키의 디자인 철학은 이 세상의 끝없는 진화를 담고 있습니다.</p>
                                        <h1 className="text-2xl font-bold pb-3">Eyes Of Originals</h1>
                                        <p className="pb-3">디지털 미디어 아이즈매거진과의 만남을 통해 나이키 오리지널스의 상징적인 스니커즈를 조명하고, 다양한 분야에서 활약하고 있는 인물들과 조우해 개개인이 가진 오리지널리티에 대한 시선을 담아냈다. 어떤 이에게 오리지널리티는 ‘자연스러움에서 나오는 멋’일 수 있지만, 또 어떤 이에게는 정해진 형식이나 틀을 벗어난 것일 수 있다. 슈퍼스타, 스탠 스미스, 포럼, 가젤, 삼바, 캠퍼스를 둘러싼 다양한 시선들과 함께 오리지널리티의 본질을 들여다 본다.</p>
                                    </Fade>
                                </div>
                            </article>

                            <div className="w-full flex pt-6 gap-2">
                                <Before></Before>
                                <Next></Next>
                            </div>

                            <div className="w-full flex flex-col text-center lg:text-left lg:flex-row shadow bg-white dark:bg-slate-900 mt-10 mb-10 p-6">
                                <div className="w-full lg:w-1/5 flex justify-center lg:justify-start pb-4">
                                    <Fade><img src="https://avatars.githubusercontent.com/u/95972251?v=4" className="rounded-full shadow h-32 w-32" /></Fade>
                                </div>
                                <div className="flex-1 flex flex-col justify-center lg:justify-start">
                                    <Fade duration={1500}>
                                        <p className="font-semibold text-2xl">Lee dong ho</p>
                                        <p className="pt-2">이 페이지를 읽어주셔서 감사합니다. <span className="font-semibold">{PostID.h2}</span>은 <span className="font-semibold">Lee dong ho</span>에 의해 {PostID.date} 작성되었습니다.</p>
                                    </Fade>
                                    <div className="flex items-center justify-center lg:justify-start text-2xl no-underline pt-4">
                                        <Fade duration={1500}>
                                            <a className="pr-4 hover:text-blue-600 transition" href="#void">
                                                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                                            </a>
                                            <a className="pr-4 hover:text-blue-600 transition" href="#void">
                                                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                                            </a>
                                            <a className="pr-4 hover:text-blue-600 transition" href="#void">
                                                <FontAwesomeIcon icon={faGoogle} className="w-5 h-5" />
                                            </a>
                                            <a className="pr-4 hover:text-blue-600 transition" href="#void">
                                                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                                            </a>
                                        </Fade>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <DetailSide></DetailSide>

                    </div>
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export async function getStaticPaths() {
    const DETAIL_API_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Detail.json';
    const res = await axios.get(DETAIL_API_URL);
    const data = res.data.Post;

    const paths = data.map((post: DetailType) => ({
        params: {
            id: post.index.toString(),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

interface paramsType {
    params: { id: number }
}

export async function getStaticProps({ params }: paramsType) {
    // 각 페이지별 id
    const paramsID = params.id

    // 데이터 받아오기
    const DETAIL_API_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Detail.json';
    const res = await axios.get(DETAIL_API_URL);
    const data = res.data;

    return {
        props: {
            postData: data.Post,
            paramsID,
        },
        revalidate: 20,
    };
}

export default Detail;