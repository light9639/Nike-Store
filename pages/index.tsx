/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Banner from '../components/Banner'
import HeadInfo from '../components/HeadInfo'
import { useRouter } from 'next/router';
import Photos from './index_components/Photos';
import Photos2 from './index_components/Photos2';
import Trending from './index_components/Trending';
import Minimal from './index_components/Minimal';
import NikeKids from './index_components/Nike_Kids';
import Shop from './index_components/Shop';
import Slide from '../components/Slide';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter()

  useEffect(() => {
    axios.get("").then((res) => {
      setLoading(false);
  });
  }, []);

  return (
    <React.Fragment>

      <HeadInfo title="Shoe-Store. Just Do It." contents="Shoe-Store Next.js"></HeadInfo>

      <Banner></Banner>

      <Slide name="Men"></Slide >

      <Photos router={router}></Photos>

      <Photos2 router={router}></Photos2>

      <Trending router={router}></Trending>

      <Slide name="Women"></Slide>

      <Slide name="Kids"></Slide>

      <NikeKids router={router}></NikeKids>

      <Minimal router={router}></Minimal>

      <Shop></Shop>

    </React.Fragment>
  )
}

export default Home;