/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Banner from '../components/Banner'
import HeadInfo from '../components/HeadInfo'
import Slide_men from "../components/Slide_men";
import Slide_women from "../components/Slide_women";
import Slide_kids from "../components/Slide_kids";
import css from 'styled-jsx/css';
import { useState } from 'react';
import Shoes from './data/Shoes.json';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header2 from '../components/Header2'

const Home: NextPage = () => {
  return (
    <>
      <HeadInfo title="Shoe-Store. Just Do It." contents="Shoe-Store Next.js"></HeadInfo>

      <Banner></Banner>

      <Slide_men></Slide_men>

      <Photos></Photos>

      <Photos2></Photos2>

      <Trending></Trending>

      <Slide_women></Slide_women>

      <Slide_kids></Slide_kids>

      <div className="container mx-auto px-4 -mt-20" style={{ "maxWidth": "98%" }}>
        <img className='mx-auto max-w-full p-2 md:p-0 sm:max-w-md mb-10' src="/Kids.png" alt="Nike" />
        {/* <img className='mx-auto max-w-md mb-10' src="https://static-breeze.nike.co.kr/kr/ko_kr/https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/65250/220121_kids_p12_bg.jpg" alt="Nike" /> */}
        <p className="font-sans font-light text-lg text-center">더 많은 키즈 신발을 만나보세요. <br />간단한 설문을 통해 아이에게 꼭 맞는 신발을 추천해 드립니다.</p>
        <div className="mt-4 sm:mt-6 text-center ">
          <a href="#" className="inline-block px-5 py-3 rounded-lg shadow-lg bg-black dark:bg-white text-sm text-white dark:text-black uppercase tracking-wider font-semibold sm:text-base">제품 추천받기</a>
        </div>
      </div>

      <Minimal></Minimal>

      <Shop></Shop>
    </>
  )
}

function Photos(): JSX.Element {
  const router = useRouter()
  return (
    <>
      <div className="py-16">

        <div className="block lg:w-full max-w-screen-2xl m-auto lg:relative">
          <img className="inset-0 h-full w-full object-cover object-center" src="https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/65250/220905_mlp_p6_bg.jpg" alt="Woman workcationing on the beach" />
        </div>
        <div className="px-8 py-6 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:px-12" onClick={() => router.push(`/Detail/${1}`)}>
          <div className="max-w-lg m-auto text-center">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl dark:text-white tracking-tighter">
              조던 X 파리 생제르맹 컬렉션
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl dark:text-white tracking-tighter">
              스포츠와 스트리트 룩의 만남. <br />
              새로운 조던 X 파리 생제르맹 컬렉션을 만나보세요.
            </p>
            <div className="mt-4 sm:mt-6">
              <a href="#" className="inline-block px-5 py-3 rounded-lg border border-gray-900 hover:bg-gray-900 dark:border-white dark:hover:bg-white text-gray-900 hover:text-white dark:text-white dark:hover:text-gray-900 text-sm uppercase tracking-wider font-semibold sm:text-base mr-3 transition">더 알아보기</a>
              <a href="#" className="inline-block px-5 py-3 rounded-lg shadow-lg bg-black dark:bg-white text-sm text-white dark:text-black uppercase tracking-wider font-semibold sm:text-base">구매하기</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Photos2(): JSX.Element {
  return (
    <>
      <div className="py-16">
        <div className="block lg:w-full max-w-screen-2xl m-auto lg:relative">
          <video autoPlay={true} muted={true} playsInline={true} loop={true} className='max-w-screen-2xl w-full'>
            <source src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/running-4dfwd-educate-fw22-digital-catlp-masthead-large-d_w5e8xp.mp4" />
          </video>
        </div>
        <div className="px-8 py-6 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:px-12">
          <div className="max-w-lg m-auto text-center">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl dark:text-white tracking-tighter">
              아디다스 4DFWD
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl dark:text-white tracking-tighter">
              스피드 러닝을 위해 태어난 아디다스 4DFWD<br />
              모든 걸음에 탄력을 더하는 탁월한 반응성으로<br />
              템포 러닝, 인터벌 러닝, 베이스 러닝, 프로그레션 러닝 등의 다양한 러닝과 함께 즐겨보세요.
            </p>
            <div className="mt-4 sm:mt-6">
              <a href="#" className="inline-block px-5 py-3 rounded-lg border border-gray-900 hover:bg-gray-900 dark:border-white dark:hover:bg-white text-gray-900 hover:text-white dark:text-white dark:hover:text-gray-900 text-sm uppercase tracking-wider font-semibold sm:text-base mr-3 transition">더 알아보기</a>
              <a href="#" className="inline-block px-5 py-3 rounded-lg shadow-lg bg-black dark:bg-white text-sm text-white dark:text-black uppercase tracking-wider font-semibold sm:text-base">구매하기</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Trending_style = css`
  .showcase--grid {
    height: 850px;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, minmax(250px, 1fr));
    grid-auto-rows: repeat(1, 1fr);
    grid-gap: 2rem;
    grid-template-areas: "a b";
  }

  .showcase--item__big {
    grid-area: a;
    background-image: url("https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVuJTIwbmlrZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=1000&q=60");
  }

  .showcase--item__big2 {
    grid-area: b;
    background-image: url("https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/65250/220913_hp_p4_bg2.jpg");
  }

  .showcase--item__overlay {
    background: rgba(255, 255, 255, 0.7);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 65%, rgba(0, 0, 0, 0.8) 100%);
  }

  .section--feature {
    background-image: url("https://images.unsplash.com/photo-1562184760-a11b3cf7c169?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  }

  .bg-white-transparent {
    background-color: rgba(255, 255, 255, 0.9);
  }

  .section--contact {
    min-height: 400px;
    height: 500px;
  }

  .contact--item-map {
    background-image: url("https://images.unsplash.com/photo-1563558603156-1e0f5d0592a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
  }

  .contact-icon {
    width: 100px;
    height: auto;
  }

  @media (max-width: 1024px) {
    .showcase--grid {
      overflow: hidden;
      height: 100%;
      width: 100%;
      grid-template-rows: auto;
      grid-template-areas: none;

    }

    .showcase--item__big {
      height: 16rem;
      grid-column: 1 / -1;
      grid-row: 1;
    }

    .showcase--item__big2 {
      height: 16rem;
      grid-column: 1 / -1;
      grid-row: 2;
    }

    .section--feature {
      height: 100%;
    }
  }
`

function Trending(): JSX.Element {
  return (
    <>
      <section className="section--showcase min-h-full py-20">
        <div className="container mx-auto px-4">
          <div className="showcase--grid my-20">
            <div className="showcase--item__big relative bg-cover bg-center bg-no-repeat rounded-lg transition hover:shadow-2xl hover:opacity-95">
              <div className="showcase--item__overlay absolute  flex h-full w-full items-end p-8">
                <h1 className="text-white font-serif font-regular text-4xl text-center">Nike Dunk Shoes</h1>
              </div>
            </div>
            <div className="showcase--item__big2 relative bg-cover bg-center bg-no-repeat rounded-lg transition hover:shadow-2xl hover:opacity-95">
              <div className="showcase--item__overlay absolute flex h-full w-full items-end p-8">
                <h1 className="text-white font-serif font-regular text-4xl text-center">ACG Collection</h1>
              </div>
            </div>
          </div>
          <h2 className="text-center font-serif text-4xl text-black mb-4 dark:text-white">NEW ARRIVAL  PLATFORMS</h2>
          <p className="font-sans font-light text-lg text-center">가을에 어울리는 차분한 컬러로 새롭게 출시된 <br /> 플랫폼 제품을 만나보세요.</p>
          <div className="mt-4 sm:mt-6 text-center ">
            <a href="#" className="inline-block px-5 py-3 rounded-lg border border-gray-900 hover:bg-gray-900 dark:border-white dark:hover:bg-white text-gray-900 hover:text-white dark:text-white dark:hover:text-gray-900 text-sm uppercase tracking-wider font-semibold sm:text-base mr-3 transition">더 알아보기</a>
            <a href="#" className="inline-block px-5 py-3 rounded-lg shadow-lg bg-black dark:bg-white text-sm text-white dark:text-black uppercase tracking-wider font-semibold sm:text-base">구매하기</a>
          </div>
        </div>
      </section>
      <style jsx>{Trending_style}</style>
    </>
  )
}

const Minimal_style = css`
  .showcase--grid {
    height: 850px;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, minmax(250px, 1fr));
    grid-auto-rows: repeat(2, 1fr);
    grid-gap: 2rem;
    grid-template-areas: "a b"
      "a c";
  }

  .showcase--item__big {
    grid-area: a;
    background-image: url("https://static.nike.com/a/images/f_auto/dpr_1.7,cs_srgb/w_1824,c_limit/1ac1ef70-731b-41fe-9537-decd9f1584d7/nike-just-do-it.jpg");
  }

  .showcase--item__small_top {
    grid-area: b;
    background-image: url("https://static.nike.com/a/images/f_auto/dpr_1.7,cs_srgb/w_906,c_limit/b61e8381-4ea0-4ae4-a6eb-4df5889a0be9/nike-just-do-it.jpg");
    background-position: 0% 25%;
  }

  .showcase--item__small_bottom {
    grid-area: c;
    background-image: url("https://static.nike.com/a/images/f_auto/dpr_1.7,cs_srgb/w_906,c_limit/d07a1c1f-2d1c-44a1-9874-c65af6ef593a/nike-just-do-it.jpg");
  }

  .showcase--item__overlay {
    background: rgba(255, 255, 255, 0.7);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 65%, rgba(0, 0, 0, 0.8) 100%);
  }

  .section--feature {
    background-image: url("https://images.unsplash.com/photo-1562184760-a11b3cf7c169?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  }

  .bg-white-transparent {
    background-color: rgba(255, 255, 255, 0.9);
  }

  .section--contact {
    min-height: 400px;
    height: 500px;
  }

  .contact--item-map {
    background-image: url("https://images.unsplash.com/photo-1563558603156-1e0f5d0592a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
  }

  .contact-icon {
    width: 100px;
    height: auto;
  }

  @media (max-width: 1024px) {
    .showcase--grid {
      overflow: hidden;
      height: 100%;
      width: 100%;
      grid-template-rows: auto;
      grid-template-areas: none;

    }

    .showcase--item__big {
      height: 16rem;
      grid-column: 1 / -1;
      grid-row: 1;
    }

    .showcase--item__small_top {
      height: 16rem;
      grid-column: 1 / -1;
      grid-row: 2;
    }

    .showcase--item__small_bottom {
      height: 16rem;
      grid-column: 1 / -1;
      grid-row: 3;
    }

    .section--feature {
      height: 100%;
    }
  }
`

function Minimal(): JSX.Element {
  return (
    <>
      <section className="section--showcase min-h-full py-20">
        <div className="container mx-auto px-4">
          <div className="showcase--grid my-20">
            <div className="showcase--item__big relative bg-cover bg-center bg-no-repeat rounded-lg transition hover:shadow-2xl hover:opacity-95">
              <div className="showcase--item__overlay absolute flex h-full w-full items-end p-8 rounded-lg cursor-pointer">
                <h1 className="text-white font-serif font-regular text-4xl text-center">Nike Soccer Shoes</h1>
              </div>
            </div>
            <div className="showcase--item__small_top relative bg-cover bg-center bg-no-repeat rounded-lg transition hover:shadow-2xl hover:opacity-95">
              <div className="showcase--item__overlay absolute  flex h-full w-full items-end p-8 rounded-lg cursor-pointer">
                <h1 className="text-white font-serif font-regular text-4xl text-center">Nike Running Shoes</h1>
              </div>
            </div>
            <div className="showcase--item__small_bottom relative bg-cover bg-center bg-no-repeat rounded-lg transition hover:shadow-2xl hover:opacity-90">
              <div className="showcase--item__overlay absolute flex h-full w-full items-end p-8 rounded-lg cursor-pointer">
                <h1 className="text-white font-serif font-regular text-4xl text-center">Nike Minimal Shoes</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{Minimal_style}</style>
    </>
  )
}

function Shop(): JSX.Element {
  const [Shop, setShop] = useState(Shoes.ShopAll);

  return (
    <>
      <div className="container mt-12 mb-20 mx-auto px-4 md:px-12">
        <h2 className='font-semibold text-3xl text-center md:text-left'>ShopAll</h2>
        <div className="md:flex flex-wrap -mx-1 lg:-mx-4">
          {
            Shop.map(function (a, i: number) {
              return (
                <div className="md:w-1/3 rounded overflow-hidden mx-auto my-8 p-3 text-center" key={i}>
                  <Link href={a.href}>
                    <img className="w-full cursor-pointer hover:opacity-75 transition" src={a.img} alt="Sunset in the mountains" />
                  </Link>
                  <div className="pr-6 py-2">
                    <Link href={a.href}>
                      <div className="font-semibold text-2xl mb-2 cursor-pointer hover:opacity-75 transition underline underline-offset-8">{a.name}</div>
                    </Link>
                    <Link href={a.href}>
                      <span className="hover:opacity-75 cursor-pointer">{a.text}</span>
                    </Link>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home;