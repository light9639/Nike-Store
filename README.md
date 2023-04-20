# :zap: Shoe Store 프로젝트 소개
:octocat: 바로가기 https://shoe-store-lemon.vercel.app/

![localhost_3000_](https://user-images.githubusercontent.com/95972251/193599963-a78bac7c-87c1-46bd-b030-4854e636826d.png)

:sparkles: Shoe Store 사이트입니다. :sparkles:

## :rocket: 시작하는 법
미리보기를 원하신다면 다운로드 후 yarn을 설치하고
```bash
yarn vite
# or
yarn dev
```
를 누르고 http://localhost:3000/ 로 접속하면 미리보기 화면을 띄울 수 있습니다.
## :calendar: 개발인원 및 기간
- 1인 개발 `2022.09.01 ~ 2022.09.30`/ `2022.12.15 ~ 2023.01.15`, `2023.04.05 ~ 2023.04.20`(2달 반 소요)
## :dart: 개발 목적
- `Next.js`를 이용하여 Nike 사이트를 만들었고, 각각의 데이터를 이용하여 제품 페이지와 상세 페이지를 구현하였습니다. 
- 또한 결제 버튼을 누르면 배송정보가 전달되고 배송현황을 제공할 수 있도록 제작하였습니다.
## :black_nib: 구현기능
- `Next.js`를 이용하여 사이트를 구축하였고 로그인 기능, 다크모드를 구현하였습니다.
## :hammer_and_wrench: 적용 기술
### :zap: Next.js
- `Next.js`의 자동 라우팅 기능을 이용하여 `React-router-dom` 없이 라우트 페이지를 만들었습니다.
- `getstaticprops`를 사용하여 `json` 파일의 데이터를 가져와 사용하였습니다.
- `Styled-jsx`를 이용하여 특정 페이지를 스타일링 하였습니다.

### :zap: TypeScript
- 타입스크립트를 이용하여 타입을 지정함으로써 오류 발생 가능성을 줄였습니다.

### :zap: Next-Auth
- `Next-Auth`를 이용하여 <b>구글, 페이스북, 깃허브, 네이버, 카카오 로그인</b>을 구현하였고 Cart 페이지로 접속하려면 로그인을 하도록 사이트를 만들었습니다.

### :zap: Emailjs
- `Emailjs`를 이용하여 문의하기 페이지에서 이메일을 자동 전송시키도록 하였습니다.

### :zap: Axios
- `getStaticprops`와 `getStaticPaths`를 사용할 때 `axios`를 이용하여 좀 더 수월하게 `json` 데이터를 가져왔습니다.

### :zap: Redux-Toolkit, Redux-Wrapper
- `Redux-Toolkit`과 `Redux-Wrapper`를 이용하여 주문 버튼 클릭시 자료가 `Cart Page`로 자료가 전송되도록 작성하였습니다.
- `Redux-Toolkit`을 이용하여 `Cart Page`에서 배송정보를 입력후 결제하기 버튼을 누르면 배송 정보를 확인할 수 있도록 작성하였습니다.
- `Redux-Toolkit`을 이용하여 다른 페이지에서도 input을 이용하여 검색이 용이하도록 작성하였습니다.

### :zap: FontAwesome
- `FontAwesome`를 이용하여 아이콘 부분에 `SVG`를 사용하여 디자인 하였습니다.

### :zap: Tailwind CSS
- `Tailwind CSS`를 이용하여 반응형 웹이 가능한 사이트를 디자인하였습니다.

## :tada: Vercel을 이용한 배포
- `Next.js`를 배포하기 위해 [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)를 이용하여 더 쉽게 배포하였습니다.
- 더 많은 내용을 보고 싶으시다면 [Next.js deployment documentation](https://nextjs.org/docs/deployment) 사이트를 참고하세요.
