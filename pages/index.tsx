/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Banner from '../components/Banner'
import HeadInfo from '../components/HeadInfo'
import styles from '../styles/Home.module.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";

const Home: NextPage = () => {

  return (
    <>
      <HeadInfo title="나이키. Just Do It. Nike.com" contents="Nike next js"></HeadInfo>

      <Banner></Banner>

      <Stuff></Stuff>

      {/* <Shoe></Shoe> */}

      <div className="flex py-16">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
          <div className="max-w-lg m-auto">
            <img className="h-10" src="https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE" alt="Workcation" />
            <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden" src="https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE" alt="Woman workcationing on the beach" />
            <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              You can work from anywhere.
              <br className="hidden lg:inline" /><span className="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation.
            </p>
            <div className="mt-4 sm:mt-6">
              <a href="#" className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-sm text-white uppercase tracking-wider font-semibold sm:text-base">Book your escape</a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img className="absolute inset-0 h-full w-full object-cover object-center" src="https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE" alt="Woman workcationing on the beach" />
        </div>
      </div>

      <Stuff></Stuff>

      <Minimal></Minimal>

      <Stuff></Stuff>
    </>
  )
}

function Shoe() {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <h2 className='ml-8'>Today's Hot</h2>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {
          [1, 2].map(function (a, i: number) {
            return (
              <>
                <section className="flex flex-col md:flex-row gap-11 py-10 px-5 bg-white dark:bg-slate-900 rounded-md shadow-lg w-11/12 md:max-w-2xl m-8">
                  <div className="text-indigo-500 flex flex-col justify-between md:mt-10">
                    <img src="https://images.stockx.com/Nike-Epic-React-Flyknit-2-White-Pink-Foam-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1603481985" alt="" />
                  </div>
                  <div className="text-indigo-500">
                    <small className="uppercase">Women running shoe</small>
                    <h3 className="uppercase text-black dark:text-white text-2xl font-medium">nike epic react flyknit</h3>
                    <h3 className="text-2xl font-semibold mb-7">$150</h3>
                    <small className="text-black dark:text-white">The Nike Epic React Flyknit 1 provides crazy comfort that lasts as long as you can run. Its Nike React foam cushioning is responsive yet lightweight, durable yet soft. This attraction of opposites creates a sensation that not only enhances the feeling of moving forwards, but makes running feel fun, too.</small>
                    <div className="flex gap-0.5 mt-4">
                      <button id="addToCartButton" className="bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase px-8 py-3 rounded">add to cart</button>
                      <button id="likeButton" className="bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase px-5 py-3 ml-0.5 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                          <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </section>
              </>
            )
          })
        }

      </div>
    </div >
  )
}

function Minimal() {
  return (
    <>
      <section className="section--showcase min-h-full py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-serif text-4xl text-black mb-4">Curated getaways, tailored to you.</h2>
          <p className="font-sans font-light text-lg text-center">Whether you are building a welcome mat for your SaaS or a clean, corporate portfolio, Stack <br /> has you design needs covered.</p>
          <div className="showcase--grid my-20">
            <div className="showcase--item__big relative bg-cover bg-center bg-no-repeat rounded-lg hover:shadow-xl">
              <div className="showcase--item__overlay absolute  flex h-full w-full items-end p-8">
                <h1 className="text-white font-serif font-regular text-4xl text-center">Minimal</h1>
              </div>
            </div>
            <div className="showcase--item__small_top relative bg-cover bg-center bg-no-repeat rounded-lg hover:shadow-xl">
              <div className="showcase--item__overlay absolute  flex h-full w-full items-end p-8">
                <h1 className="text-white font-serif font-regular text-4xl text-center">Minimal</h1>
              </div>
            </div>
            <div className="showcase--item__small_bottom relative bg-cover bg-center bg-no-repeat rounded-lg hover:shadow-xl">
              <div className="showcase--item__overlay absolute flex h-full w-full items-end p-8">
                <h1 className="text-white font-serif font-regular text-4xl text-center">Minimal</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

function Stuff() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      breakpoints={{
        540: {
          slidesPerView: 1,  //브라우저가 768보다 클 때
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,  //브라우저가 768보다 클 때
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,  //브라우저가 1024보다 클 때
          spaceBetween: 50,
        },
      }}
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
      className="mySwiper my-24 max-w-screen-2xl"
    >
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (a, i: number) {
          return (
            <>
              <SwiperSlide className="">
                <img alt="ecommerce" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.7/w_599,c_limit/445f83ed-9c01-4af8-bd2c-9127001afc47/air-max-270-womens-shoes-Pgb94t.png" />
              </SwiperSlide>
            </>
          )
        })
      }
    </Swiper>
  )
}

export default Home;