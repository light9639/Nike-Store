/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Banner from '../components/Banner'
import HeadInfo from '../components/HeadInfo'
import styles from '../styles/Home.module.css'
import Slide from "../components/Slide";
import css from 'styled-jsx/css';

const Home: NextPage = () => {

  return (
    <>
      <HeadInfo title="나이키. Just Do It. Nike.com" contents="Nike next js"></HeadInfo>

      {/* <div className="relative overflow-hidden bg-white max-w-full w-full">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Summer styles are finally here</h1>
              <p className="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
            </div>
            <div>
              <div className="mt-10">
                <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="#" className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">Shop Collection</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Banner></Banner>

      <Slide></Slide>

      {/* <Shoe></Shoe> */}

      <Photos></Photos>

      <Slide></Slide>

      <Minimal></Minimal>

      <Slide></Slide>
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

function Photos() {
  return (
    <>
      <div className="flex py-16">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
          <div className="max-w-lg m-auto">
            <img className="h-16" src="https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE" alt="Workcation" />
            <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden" src="https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE" alt="Woman workcationing on the beach" />
            <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl dark:text-white">
              You can work from anywhere.
              <br className="hidden lg:inline" /><span className="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl dark:text-white">
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

function Minimal() {
  return (
    <>
      <section className="section--showcase min-h-full py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-serif text-4xl text-black mb-4 dark:text-white">Curated getaways, tailored to you.</h2>
          <p className="font-sans font-light text-lg text-center">Whether you are building a welcome mat for your SaaS or a clean, corporate portfolio, Stack <br /> has you design needs covered.</p>
          <div className="showcase--grid my-20">
            <div className="showcase--item__big relative bg-cover bg-center bg-no-repeat rounded-lg transition hover:shadow-2xl hover:opacity-95">
              <div className="showcase--item__overlay absolute  flex h-full w-full items-end p-8">
                <h1 className="text-white font-serif font-regular text-4xl text-center">Minimal</h1>
              </div>
            </div>
            <div className="showcase--item__small_top relative bg-cover bg-center bg-no-repeat rounded-lg transition hover:shadow-2xl hover:opacity-95">
              <div className="showcase--item__overlay absolute  flex h-full w-full items-end p-8">
                <h1 className="text-white font-serif font-regular text-4xl text-center">Minimal</h1>
              </div>
            </div>
            <div className="showcase--item__small_bottom relative bg-cover bg-center bg-no-repeat rounded-lg transition hover:shadow-2xl hover:opacity-90">
              <div className="showcase--item__overlay absolute flex h-full w-full items-end p-8">
                <h1 className="text-white font-serif font-regular text-4xl text-center">Minimal</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{Minimal_style}</style>
    </>
  )
}

export default Home;