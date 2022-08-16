import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Banner from '../components/Banner'
import styles from '../styles/Home.module.css'
import Layout from '../components/LayOut'

const Home: NextPage = () => {

  return (
    <>
      <Layout>
        <Head>
          <title>나이키. Just Do It. Nike.com</title>
          <meta id="f_title" name="f_title" property="og:title" content="나이키" />
          <meta name="description" content="나이키의 모든 것, 나이키 공식 온라인스토어" />
          <meta id="f_description" name="f_description" property="og:description" content="나이키의 모든 것, 나이키 공식 온라인스토어" />
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <Banner></Banner>

        <Icon></Icon>

        <Card></Card>

        <Stuff></Stuff>

        <SNS></SNS>

      </Layout>
    </>
  )
}

function Icon() {
  return (
    <div className="container px-5 py-10 lg:pt-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (a, i: number) {
            return (
              <div className="w-1/5 p-1 w-full">
                <a href='#void' className="block relative rounded overflow-hidden">
                  <img src="https://raw.githubusercontent.com/light9639/Shoe-Store/main/pages/img/Sub_01.jpg" alt="" />
                </a>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

function Card() {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">

        {
          [1, 2, 3, 4, 5, 6].map(function (a, i: number) {
            return (
              <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

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
            )
          })
        }

      </div>
    </div>
  )
}

function Stuff() {
  return (
    <div className="text-gray-600 body-font text-left">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">

          {
            [1, 2, 3, 4, 5, 6, 7, 8].map(function (a, i: number) {
              return (
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
          )
        })
      }
    </div>
  )
}

export default Home;