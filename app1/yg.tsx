import React, { use } from 'react'

export default function yg() {
    const a = use(getData1())
    return (
        <div>메인 페이지 {a.todo}</div>
    )
}

export async function getData1() {
    const res = await fetch('https://dummyjson.com/todos/1', {cache: "no-store",})
    const data = await res.json();
    return data;
}