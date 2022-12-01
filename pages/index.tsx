/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Banner from '../components/Banner'
import HeadInfo from '../components/HeadInfo'
import { useRouter } from 'next/router';
import Photos from './index_components/Photos';
import Photos2 from './index_components/Photos2';
import Trending from './index_components/Trending';
import Minimal from './index_components/Minimal';
import Shop from './index_components/Shop';
import Slide from '../components/Slide';

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <HeadInfo title="Shoe-Store. Just Do It." contents="Shoe-Store Next.js"></HeadInfo>

      <Banner></Banner>

      <Slide name="Men"></Slide >

      <Photos router={router}></Photos>

      <Photos2 router={router}></Photos2>

      <Trending router={router}></Trending>

      <Slide name="Women"></Slide>

      <Slide name="Kids"></Slide>

      <div className="container mx-auto px-4 -mt-20" style={{ "maxWidth": "98%" }}>
        <img className='mx-auto max-w-full p-2 md:p-0 sm:max-w-md mb-10' src="/Kids.png" alt="Nike" />
        {/* <img className='mx-auto max-w-md mb-10' src="https://static-breeze.nike.co.kr/kr/ko_kr/https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/65250/220121_kids_p12_bg.jpg" alt="Nike" /> */}
        <p className="font-sans font-light text-lg text-center">더 많은 키즈 신발을 만나보세요. <br />간단한 설문을 통해 아이에게 꼭 맞는 신발을 추천해 드립니다.</p>
        <div className="mt-4 sm:mt-6 text-center ">
          <a
            href="#"
            className="inline-block px-5 py-3 rounded-lg shadow-lg bg-black dark:bg-white text-sm text-white dark:text-black uppercase tracking-wider font-semibold sm:text-base"
            onClick={() => router.push(`/Detail/${7}`)}
          >제품 추천받기</a>
        </div>
      </div>

      <Minimal router={router}></Minimal>

      <Shop></Shop>
    </>
  )
}

export default Home;