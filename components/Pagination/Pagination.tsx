import React from 'react';
import { PaginationType } from "@lib/TypeBox";

export default function Pagination(props: PaginationType): JSX.Element {

    // 상위 컴포넌트에서 페이지 수 계산.
    const numPages: number = Math.ceil(props.total / props.limit);
    const Pages: any = Array(numPages)

    // 로컬 스토리지 변환
    const getItem: any = localStorage.getItem(`${props.Name}_pageNum`);
    const NewItem = JSON.parse(getItem);
    const BestItem = parseInt(NewItem);

    // 클릭시 페이지 상단으로
    function ScrollTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // 로컬스토리지에 저장
    function pageParams(children: number | string | null) {
        if ( typeof children != 'number' ) {
            const child = Number(children)
            localStorage.setItem(`${props.Name}_pageNum`, JSON.stringify(child));
        } else {
            localStorage.setItem(`${props.Name}_pageNum`, JSON.stringify(children));
        }
    };

    // 왼쪽 버튼 클릭시 페이지 숫자 감소
    function pageMinusParams() {
        if ( getItem == null)  {
            pageParams(1);
        }
        else if ( getItem >= 1 ) {
            pageParams( BestItem - 1 );
        }
    }

    // 오른쪽 버튼 클릭시 페이지 숫자 증가
    function pagePlusParams() {
        if ( getItem == null)  {
            pageParams( props.page + 1 );
        }
        else if ( getItem <= props.page ) {
            pageParams( BestItem + 1 )
        }
    }

    return (
        <div className='w-fit mx-auto flex items-center py-8'>
            <button
                onClick={() => {pageMinusParams(); props.setPage(props.page - 1); ScrollTop(); }}
                disabled={props.page === 1}
                className="h-12 w-14 font-semibold text-gray-800 hover:bg-gray-800 hover:text-white dark:bg-gray-200 dark:hover:bg-blue-600 text-sm flex items-center justify-center cursor-pointer rounded-lg border border-gray-200 dark:hover:border-blue-600 mr-3 transition"
            >
                Prev
            </button>
            {
                Pages && Pages.fill().map((item: number[], idx: number) => (
                    <button
                        key={idx + 1}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => { pageParams(e.currentTarget.textContent); props.setPage(idx + 1); ScrollTop(); }}
                        aria-current={props.page === idx + 1 && "page"}
                        className={`h-12 w-12 font-semibold hover:bg-gray-800 hover:text-white text-sm flex items-center justify-center cursor-pointer border border-gray-200 dark:hover:border-gray-600 rounded-lg mr-3 transition
                            ${props.page === idx + 1 && "page" ? 'bg-gray-900 dark:bg-blue-600 dark:border-blue-600 text-white' : 'dark:bg-gray-200 text-gray-800 dark:hover:bg-blue-600 dark:hover:border-blue-600 hover:text-white'}`}
                    >
                        {idx + 1}
                    </button>
                ))
            }
            <button
                onClick={() => {pagePlusParams(); props.setPage(props.page + 1); ScrollTop(); }}
                disabled={props.page === numPages}
                className="h-12 w-14 font-semibold text-gray-800 hover:bg-gray-800 hover:text-white text-sm flex items-center justify-center cursor-pointer rounded-lg border border-gray-200 dark:bg-gray-200 dark:hover:border-blue-600 dark:hover:bg-blue-600 transition"
            >
                Next
            </button>
        </div>
    );
};