import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HeadInfo from '../../components/HeadInfo'
import { useRouter } from 'next/router'
import Loading from '../loading';
import DetailSide from '../../components/DetailSide'
import Link from 'next/link';
import { DetailType } from "../Type/TypeBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';

export default function Detail(): JSX.Element {
    <HeadInfo title="Detail Page" contents="Detail Page" />

    const [list, setList] = useState<DetailType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const DETAIL_API_URL = 'https://raw.githubusercontent.com/light9639/Shoe-Store/main/data/Detail.json';
    const router = useRouter()
    const ID: any = router.query.id

    function ScrollTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function Before() {
        if (ID == 0) {
            return (
                <Link href="#void">
                    <a className="w-1/2 bg-white dark:bg-slate-900 shadow text-left p-6 cursor-auto">
                        <p className="text-lg text-blue-800 font-bold flex items-center"><FontAwesomeIcon icon={faArrowLeft} className="pr-2" /> 이전 기사</p>
                        <p className="pt-2">더 이상의 기사가 없습니다.</p>
                    </a>
                </Link>
            )
        } else {
            return (
                <Link href={"/Detail/" + (parseInt(ID) - 1)} onClick={() => {scrollTo()}}>
                    <a className="w-1/2 bg-white dark:bg-slate-900 shadow hover:shadow-md text-left p-6">
                        <p className="text-lg text-blue-800 font-bold flex items-center"><FontAwesomeIcon icon={faArrowLeft} className="pr-2" /> 이전 기사</p>
                        <p className="pt-2">{list[parseInt(ID) - 1]?.h2}</p>
                    </a>
                </Link>
            )
        }
    }

    function Next() {
        if ((parseInt(ID) + 1) == list.length) {
            return (
                <Link href="#void">
                    <a className="w-1/2 bg-white dark:bg-slate-900 shadow text-right p-6 cursor-auto">
                        <p className="text-lg text-blue-800 font-bold flex items-center justify-end">다음 기사 <FontAwesomeIcon icon={faArrowRight} className="pl-2" /></p>
                        <p className="pt-2">더 이상의 기사가 없습니다.</p>
                    </a>
                </Link>
            )
        } else {
            return (
                <Link href={"/Detail/" + (parseInt(ID) + 1)} onClick={() => {scrollTo()}}>
                    <a className="w-1/2 bg-white dark:bg-slate-900 shadow hover:shadow-md text-right p-6">
                        <p className="text-lg text-blue-800 font-bold flex items-center justify-end">다음 기사 <FontAwesomeIcon icon={faArrowRight} className="pl-2" /></p>
                        <p className="pt-2">{list[parseInt(ID) + 1]?.h2}</p>
                    </a>
                </Link>
            )
        }
    }

    useEffect(() => {
        axios.get(DETAIL_API_URL).then((res: any) => {
            console.log(res);
            setList(res.data.Post)
        });
        axios.get("").then((res) => {
            setLoading(false);
        });
    }, []);

    return (
        <React.Fragment>
            {loading ? <Loading></Loading>
                : <>
                    <div className="container mx-auto flex flex-wrap py-6">

                        <section className="w-full md:w-2/3 flex flex-col items-center px-3">

                            <article className="flex flex-col shadow my-4">
                                <Fade><img src={list[ID]?.src} alt={list[ID]?.alt} /></Fade>
                                <div className="bg-white dark:bg-slate-900 flex flex-col justify-start p-6">
                                    <Fade bottom>
                                        <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Sports</a>
                                        <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">{list[ID]?.h2}</a>
                                        <p className="text-sm pb-8">
                                            이 글은 <span className="font-semibold hover:text-gray-800">Lee dong ho</span>에 의해 {list[ID]?.date} 작성되었습니다.
                                        </p>
                                        <h1 className="text-2xl font-bold pb-3">Introduction</h1>
                                        <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel neque non libero suscipit suscipit eu eu urna. Proin bibendum urna mattis ante malesuada ultrices. Etiam in turpis vitae elit dictum aliquet. Donec mattis risus in turpis dapibus, eget tempus sem tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In est enim, imperdiet sed ornare quis, pellentesque vel risus. Nunc vitae vestibulum turpis. Quisque eget eleifend urna. Etiam et vulputate purus, ut egestas sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis quis neque non urna venenatis mollis et at massa. Pellentesque sem lacus, malesuada vel hendrerit molestie, mollis vel elit.</p>
                                        <h1 className="text-2xl font-bold pb-3">Heading</h1>
                                        <p className="pb-3">Vivamus nec facilisis elit, quis congue justo. In non augue ex. Aenean pretium facilisis hendrerit. Sed sed imperdiet dui. Etiam faucibus a diam sed vehicula. Nullam commodo lacus tincidunt, tincidunt orci sed, dapibus leo. Vivamus vulputate quis risus a ultricies. Aliquam luctus id tellus non condimentum. Aenean maximus viverra ipsum eget vestibulum. Morbi ut tincidunt sem, efficitur volutpat tortor. Donec scelerisque, ipsum eu efficitur semper, neque turpis sodales quam, in aliquam elit lacus varius lorem. Ut ut diam id leo efficitur malesuada eget in velit. Pellentesque tristique orci nunc, vitae fermentum nibh luctus eu. Mauris condimentum justo sed ipsum egestas varius.</p>
                                        <p className="pb-3">Sed sagittis odio a volutpat feugiat. Cras aliquam varius justo, a rhoncus ante bibendum id. Nulla maximus nisl sed enim maximus, ut dictum lectus hendrerit. Fusce venenatis tincidunt eros. Phasellus quis augue vulputate ipsum pellentesque fringilla. Morbi nec tempor felis. Maecenas sollicitudin pellentesque dui, sit amet scelerisque mauris elementum nec. Cras ante metus, mattis in malesuada in, fermentum a nunc. Suspendisse potenti. Sed tempor lacus sed commodo dignissim. Quisque dictum, dolor auctor iaculis cursus, ipsum urna porttitor ex, sed consequat nisi tellus eget ante. Duis molestie mollis eros, eu sollicitudin mauris lobortis quis.</p>
                                        <p className="pb-3">Vivamus sed neque nec massa scelerisque imperdiet eget id sapien. Fusce elementum mi id malesuada luctus. Proin quis lorem id leo porta interdum non ac nisl. Integer nulla sem, ultrices sed neque eget, blandit condimentum metus. Aliquam eget malesuada sapien. Curabitur aliquet orci sit amet ex tincidunt convallis. Mauris urna mi, consequat mattis mollis a, dignissim eget sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam facilisis sem diam, viverra consequat metus consequat vel. Cras a mi eu ex luctus malesuada quis eu ante. Aliquam erat volutpat.</p>
                                        <h1 className="text-2xl font-bold pb-3">Conclusion</h1>
                                        <p className="pb-3">Donec vulputate auctor leo lobortis congue. Sed elementum pharetra turpis. Nulla at condimentum odio. Vestibulum ullamcorper enim eget porttitor bibendum. Proin eros nibh, maximus vitae nisi a, blandit ultricies lectus. Vivamus eu maximus lacus. Maecenas imperdiet iaculis neque, vitae efficitur felis vestibulum sagittis. Nunc a eros aliquet, egestas tortor hendrerit, posuere diam. Proin laoreet, ligula non eleifend bibendum, orci nulla luctus ipsum, dignissim convallis quam dolor et nulla.</p>
                                    </Fade>
                                </div>
                            </article>

                            <div className="w-full flex pt-6">
                                <Before></Before>
                                <Next></Next>
                            </div>

                            <div className="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white dark:bg-slate-900 mt-10 mb-10 p-6">
                                <div className="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
                                    <Fade><img src="https://avatars.githubusercontent.com/u/95972251?v=4" className="rounded-full shadow h-32 w-32" /></Fade>
                                </div>
                                <div className="flex-1 flex flex-col justify-center md:justify-start">
                                    <Fade bottom>
                                        <p className="font-semibold text-2xl">Lee dong ho</p>
                                        <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel neque non libero suscipit suscipit eu eu urna.</p>
                                    </Fade>
                                    <div className="flex items-center justify-center md:justify-start text-2xl no-underline pt-4">
                                        <Fade bottom>
                                            <a className="pr-4 hover:text-blue-600 transition" href="#">
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </a>
                                            <a className="pr-4 hover:text-blue-600 transition" href="#">
                                                <FontAwesomeIcon icon={faFacebook} />
                                            </a>
                                            <a className="pr-4 hover:text-blue-600 transition" href="#">
                                                <FontAwesomeIcon icon={faGoogle} />
                                            </a>
                                            <a className="pr-4 hover:text-blue-600 transition" href="#">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </Fade>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <DetailSide></DetailSide>

                    </div>
                </>
            }
        </React.Fragment>
    )
}