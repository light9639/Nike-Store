import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document(): JSX.Element {
  const KaKaoMap = process.env.NEXT_PUBLIC_KaKao_Map;

  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src={`https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${KaKaoMap}&libraries=services,clusterer`} 
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  )
}
