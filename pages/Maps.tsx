// import './App.css';
import React, { useEffect, useState } from 'react';
import HeadInfo from "@components/HeadInfo";
import { Map, MapMarker, MapTypeControl, ZoomControl } from 'react-kakao-maps-sdk';

export default function Maps() {
    const [info, setInfo] = useState<any>()
    const [markers, setMarkers] = useState<any[]>([])
    const [map, setMap] = useState<any>()
    const [inputText, setInputText] = useState<string>("");
    const [place, setPlace] = useState<string>("서울");
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setPlace(inputText);
        setInputText("");
    };

    useEffect(() => {
        if (!map) return
        const ps = new kakao.maps.services.Places()

        ps.keywordSearch(`${place} 나이키 매장`, (data, status, _pagination) => {
            if (status === kakao.maps.services.Status.OK) {
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                const bounds = new kakao.maps.LatLngBounds()
                let markers = []
                console.log(data)

                for (var i = 0; i < data.length; i++) {
                    // @ts-ignore
                    markers.push({
                        position: {
                            lat: data[i].y,
                            lng: data[i].x,
                        },
                        id: data[i].id,
                        content: data[i].place_name,
                        place_url: data[i].place_url,
                        phone: data[i].phone,
                        category_name: data[i].category_name,
                        address_name: data[i].address_name,
                    })
                    // @ts-ignore
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
                }
                setMarkers(markers)

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                map.setBounds(bounds)
            }
        })
    }, [map, place])

    return (
        <React.Fragment>
            <HeadInfo title="Map Page" contents="Map Page"></HeadInfo>

            <h1 className="text-3xl lg:text-4xl text-gray-700 dark:text-white font-bold text-center mt-20">Nike 매장 찾기</h1>

            <div className='flex flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap justify-between max-w-screen-2xl mx-auto my-10 lg:my-20 p-5 md:p-4 2xl:p-0 border-none md:border'>
                <div className='w-full lg:w-2/5 xl:w-1/3 h-full lg:h-[600px] xl:h-[800px] overflow-hidden lg:overflow-scroll dark:bg-gray-900 rounded-2xl mt-10 lg:mt-0 border dark:border-none'>
                    <form onSubmit={handleSubmit} className="mx-auto p-7 md:p-3">
                        <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input
                                type="search"
                                id="search"
                                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                                placeholder="지역을 검색하십시요. ex) 명동"
                                onChange={onChange}
                                value={inputText}
                            />
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-gray-900 hover:bg-gray-800 dark:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition">Search</button>
                        </div>
                    </form>
                    {markers.map((marker) => (
                        <div
                            className='text-center md:text-left p-5 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-500'
                            data-id={`${marker.id}`}
                            onMouseOver={() => setInfo(marker)}
                        >
                            <p className="text-xl font-semibold leading-none text-gray-900 hover:text-gray-900/75 dark:text-white dark:hover:text-white/75 transition line-clamp-1 mb-4">{marker.content}</p>
                            <p className="font-normal text-gray-900 dark:text-gray-300 text-base line-clamp-1 ">{marker.address_name}</p>
                            <p className="text-sm font-normal line-clamp-1 dark:text-gray-400 lg:ml-0.5">{marker.phone}</p>
                            <a href={marker.place_url} className="hover:opacity-75 transition py-2.5 px-3 text-xs bg-gray-900 dark:bg-blue-600 text-white inline-block rounded-lg mt-3">
                                자세히 보기
                            </a>
                        </div>
                    ))}
                </div>

                <Map // 로드뷰를 표시할 Container
                    center={{
                        lat: 37.564202805956555,
                        lng: 126.98163660566732,
                    }}
                    className="mx-auto block w-full lg:w-2/3 xl:w-9/12 h-[450px] sm:h-[600px] xl:h-[800px] rounded-lg"
                    level={5}
                    onCreate={setMap}
                    onClick={() => setIsOpen(true)}
                    style={{ width: "100%" }}
                >
                    {markers.map((marker) => (
                        <MapMarker
                            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                            position={marker.position}
                            onMouseOver={() => setInfo(marker)}
                            image={{
                                src: "https://raw.githubusercontent.com/light9639/ImgStorage/main/shoestore/index/Black_markerStar.png", // 마커이미지의 주소입니다
                                size: {
                                    width: 24,
                                    height: 35
                                }, // 마커이미지의 크기입니다
                            }}
                        >
                            {info && info.content === marker.content && (
                                <div
                                    className="z-10 w-52 md:w-64 font-light text-gray-500"
                                    onMouseOver={() => setInfo(marker)}
                                    onMouseOut={() => setInfo(!marker)}
                                    data-id={`${marker.id}`}
                                >
                                    <div className="p-3">
                                        <div className="flex items-center justify-between mb-2">
                                            <img className="w-10" src="https://raw.githubusercontent.com/light9639/ImgStorage/main/shoestore/index/Logo.png" alt="Nike" />
                                            <a href={marker.place_url} className="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 rounded-md font-medium text-[0.5rem] px-3 py-2 focus:outline-none">
                                                자세히 보기
                                            </a>
                                        </div>
                                        <div className='space-y-0.5 mt-4'>
                                            <p className="text-xs font-semibold leading-none text-gray-900 line-clamp-1">{marker.content}</p>
                                            <p className="font-normal text-gray-900 text-[0.5rem] line-clamp-1">{marker.address_name}</p>
                                            <p className="text-[0.5rem] font-normal line-clamp-1">{marker.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </MapMarker>
                    ))}
                    <MapTypeControl />
                    <ZoomControl />
                </Map>
            </div>
        </React.Fragment>
    );
}
