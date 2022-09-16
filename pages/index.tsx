/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Banner from '../components/Banner'
import HeadInfo from '../components/HeadInfo'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <>
      <HeadInfo title="나이키. Just Do It. Nike.com" contents="Nike next js"></HeadInfo>

      <Banner></Banner>

      <Icon></Icon>

      <Shoe></Shoe>

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

      {/* <Minimal></Minimal> */}

      {/* <Card></Card> */}

      {/* <Stuff></Stuff> */}

      {/* <SNS></SNS> */}

    </>
  )
}

function Icon() {
  return (
    <div>
      <div className="container px-5 py-10 lg:pt-24 mx-auto">
        <div className="flex justify-between">
          {
            [1, 2, 3, 4, 5].map(function (a, i: number) {
              return (
                <>
                  <div className="w-1/5 p-1">
                    <a href='#void' className="block relative rounded overflow-hidden">
                      <img src="/img/Sub_01.jpg" alt="Sub_Img" />
                    </a>
                    <p className='text-center leading-5 pt-2'>
                      <a href='#void' className="block relative rounded overflow-hidden">
                        안녕하세요
                      </a>
                    </p>
                  </div>
                </>
              )
            })
          }
        </div>
        <div className="flex justify-between">
          {
            [1, 2, 3, 4, 5].map(function (a, i: number) {
              return (
                <>
                  <div className="w-1/5 p-1">
                    <a href='#void' className="block relative rounded overflow-hidden">
                      <img src="/img/Sub_01.jpg" alt="Sub_Img" />
                    </a>
                    <p className='text-center leading-5 pt-2'>
                      <a href='#void' className="block relative rounded overflow-hidden">
                        안녕하세요
                      </a>
                    </p>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

function Shoe() {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {
          [1, 2, 3, 4].map(function (a, i: number) {
            return (
              <>
                <section className="flex flex-col md:flex-row gap-11 py-10 px-5 bg-white rounded-md shadow-lg w-11/12 md:max-w-2xl m-8">
                  <div className="text-indigo-500 flex flex-col justify-between md:mt-10">
                    <img src="https://images.stockx.com/Nike-Epic-React-Flyknit-2-White-Pink-Foam-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1603481985" alt="" />
                    {/* <div>
                      <small className="uppercase">choose size</small>
                      <div className="flex flex-wrap md:flex-nowrap gap-1">
                        <a href="javascript:void(0);" className="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition">
                          <small>5</small>
                        </a>
                        <a href="javascript:void(0);" className="grid place-items-center border px-3 py-2 cursor-not-allowed text-gray-300 transition">
                          <small>6</small>
                        </a>
                        <a href="javascript:void(0);" className="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition">
                          <small>7</small>
                        </a>
                        <a href="javascript:void(0);" className="grid place-items-center border px-3 py-2 cursor-not-allowed text-gray-300 transition">
                          <small>8</small>
                        </a>
                        <a href="javascript:void(0);" className="grid place-items-center border px-3 py-2 cursor-not-allowed text-gray-300 transition">
                          <small>9</small>
                        </a>
                        <a href="javascript:void(0);" className="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition">
                          <small>10</small>
                        </a>
                        <a href="javascript:void(0);" className="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition">
                          <small>11</small>
                        </a>
                        <a href="javascript:void(0);" className="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition">
                          <small>12</small>
                        </a>
                      </div>
                    </div> */}
                  </div>
                  <div className="text-indigo-500">
                    <small className="uppercase">Women running shoe</small>
                    <h3 className="uppercase text-black text-2xl font-medium">nike epic react flyknit</h3>
                    <h3 className="text-2xl font-semibold mb-7">$150</h3>
                    <small className="text-black">The Nike Epic React Flyknit 1 provides crazy comfort that lasts as long as you can run. Its Nike React foam cushioning is responsive yet lightweight, durable yet soft. This attraction of opposites creates a sensation that not only enhances the feeling of moving forwards, but makes running feel fun, too.</small>
                    <div className="flex gap-0.5 mt-4">
                      <button id="addToCartButton" className="bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase px-8 py-3">add to cart</button>
                      <button id="likeButton" className="bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
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
      <section className="section--showcase min-h-screen py-20">
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

function Card() {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">

        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (a, i: number) {
            return (
              <>
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">

                  <article className="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                      <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                          Article Title
                        </a>
                      </h1>
                      <p className="text-grey-darker text-sm">
                        11/1/19
                      </p>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                      <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                        <p className="ml-2 text-sm">
                          Author Name
                        </p>
                      </a>
                      <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                      </a>
                    </footer>

                  </article>

                </div>
              </>
            )
          })
        }

      </div>
    </div>
  )
}

// function Social() {
//   return (
//     <div className="container my-12 mx-auto px-4 md:px-12">
//       <div className="flex flex-wrap -mx-1 lg:-mx-4">
//         {/* <div className="container flex space-x-2 mx-auto relative"> */}

//         <div className="w-36 h-52 rounded-xl overflow-hidden flex flex-col group cursor-pointer relative">
//           <img className="w-full h-4/5 object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://raw.githubusercontent.com/shibbirweb/public-asset/master/shibbir.jpg" alt="MD. Shibbir Ahmed" />
//           <div className="bg-gray-800 relative flex-1 flex flex-col">
//             <div className="bg-blue-600 p-0.5 rounded-full border-4 border-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//               </svg>
//             </div>
//             <div className="flex-1 pb-1 text-white text-sm font-semibold capitalize flex justify-center items-end">
//               <p>
//                 Create Story
//               </p>
//             </div>
//           </div>

//           <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
//         </div>

//         <div className="w-36 h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
//           <img className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://picsum.photos/200/300?random=1" alt="MD. Shibbir Ahmed" />

//           <div className="w-8 h-8 border-4 box-content border-gray-800 rounded-full overflow-hidden absolute left-2.5 top-3">
//             <img className="w-full h-full object-cover" src="https://raw.githubusercontent.com/shibbirweb/public-asset/master/shibbir.jpg" alt="MD. Shibbir Ahmed" />
//           </div>

//           <div className="absolute inset-x-3 bottom-1">
//             <p className="text-white font-semibold">Your Story</p>
//           </div>

//           <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>

//         </div>

//         <div className="w-36 h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
//           <img className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://picsum.photos/200/300?random=3" alt="MD. Shibbir Ahmed" />

//           <div className="w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3">
//             <img className="w-full h-full object-cover" src="https://picsum.photos/200/300?random=4" alt="MD. Shibbir Ahmed" />
//           </div>

//           <div className="absolute inset-x-3 bottom-1">
//             <p className="text-white font-semibold">Baky Billah</p>
//           </div>

//           <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>

//         </div>

//         <div className="w-36 h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
//           <img className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://picsum.photos/200/300?random=5" alt="MD. Shibbir Ahmed" />

//           <div className="w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3">
//             <img className="w-full h-full object-cover" src="https://picsum.photos/200/300?random=6" alt="MD. Shibbir Ahmed" />
//           </div>

//           <div className="absolute inset-x-3 bottom-1">
//             <p className="text-white font-semibold">Mobarak Hossain Joy</p>
//           </div>

//           <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>

//         </div>

//         <div className="w-36 h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
//           <img className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://picsum.photos/200/300?random=7" alt="MD. Shibbir Ahmed" />

//           <div className="w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3">
//             <img className="w-full h-full object-cover" src="https://picsum.photos/200/300?random=8" alt="MD. Shibbir Ahmed" />
//           </div>

//           <div className="absolute inset-x-3 bottom-1">
//             <p className="text-white font-semibold">Mahmudul Hasan</p>
//           </div>

//           <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
//         </div>

//         <div className="absolute bg-gray-700 hover:bg-gray-600 transition-colors ease-in-out duration-200 p-2 rounded-full right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 cursor-pointer">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   )
// }




function Stuff() {
  return (
    <div className="text-gray-600 body-font text-left">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">

          {
            [1, 2, 3, 4, 5, 6, 7, 8].map(function (a, i: number) {
              return (
                <>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                      <p className="mt-1">$16.00</p>
                      <button className="mt-2 p-2 bg-blue-500 hover:bg-blue-600 border-2 border-blue-500 hover:border-blue-600 text-white rounded">Add to Order</button>
                      <button className="mt-2 p-2 bg-white border-2 border-blue-500 hover:border-blue-600 text-blue-500 hover:text-blue-600 rounded">Customize</button>
                      <p className="mt-2 text-xs font-sans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit facilis architecto illo dolorem sapiente fuga impedit, nobis officiis aliquam, natus nemo a, praesentium tenetur deleniti. Aut cum nostrum ipsa molestiae!</p>
                    </div>
                  </div>
                </>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

function SNS() {
  return (
    <div className="flex justify-between max-w-screen-2xl mx-auto mb-28 px-4 md:px-12">
      {
        [1, 2, 3, 4, 5].map(function (a, i: number) {
          return (
            <>
              <div className="
                        group
                        inline-block pb-4 bg-gradient-to-tr from-purple-600 to-orange-400 text-white overflow-hidden rounded-2xl shadow
                        hover:shadow-md
                        transition
                    ">
                <figure className="max-h-64 aspect-square overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition group-hover:scale-125"
                    src="https://images.unsplash.com/photo-1649168916853-8bdb50116941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0OTQ0MzY5Nw&ixlib=rb-1.2.1&q=80&w=400"
                    alt=''
                  />
                </figure>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Card Title</h3>
                  <p className="font-serif">Lorem ipsum dolor sit amet</p>
                </div>
                <footer className="flex gap-2 px-4">
                  <button className="text-blue-400 hover:text-red-400">
                    <i className="fa-solid fa-heart"></i>
                  </button>
                  <button className="text-blue-400 hover:text-red-400">
                    <i className="fa-solid fa-comment"></i>
                  </button>
                </footer>
              </div>
            </>
          )
        })
      }
    </div>
  )
}

export default Home;