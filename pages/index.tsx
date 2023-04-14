/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import Banner from '@components/Banner/Banner'
import HeadInfo from '@components/HeadInfo'
import { useRouter } from 'next/router';
import Photos from '@components/index_components/Photos';
import Photos2 from '@components/index_components/Photos2';
import Trending from '@components/index_components/Trending/Trending';
import Minimal from '@components/index_components/Minimal/Minimal';
import NikeKids from '@components/index_components/Nike_Kids';
import Shop from '@components/index_components/Shop/Shop';
import Slide from '@components/Slide/Slide';
import axios from 'axios';

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

      <HeadInfo title="Nike-Store. Just Do It." contents="Nike-Store Next.js"></HeadInfo>

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

export default Home