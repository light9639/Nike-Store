import { RouteType } from '../api/TypeBox'
import css from 'styled-jsx/css';

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

export default function Minimal(props: RouteType): JSX.Element {
    return (
        <>
            <section className="section--showcase min-h-full py-20">
                <div className="container mx-auto px-4">
                    <div className="showcase--grid my-20">
                        <div
                            className="showcase--item__big relative bg-cover bg-center bg-no-repeat rounded-lg transition hover:shadow-2xl hover:opacity-95"
                            onClick={() => props.router.push(`/Detail/${8}`)}
                        >
                            <div className="showcase--item__overlay absolute flex h-full w-full items-end p-8 rounded-lg cursor-pointer">
                                <h1 className="text-white font-serif font-regular text-4xl text-center">Nike Soccer Shoes</h1>
                            </div>
                        </div>
                        <div
                            className="showcase--item__small_top relative bg-cover bg-center bg-no-repeat rounded-lg transition hover:shadow-2xl hover:opacity-95"
                            onClick={() => props.router.push(`/Detail/${9}`)}
                        >
                            <div className="showcase--item__overlay absolute  flex h-full w-full items-end p-8 rounded-lg cursor-pointer">
                                <h1 className="text-white font-serif font-regular text-4xl text-center">Nike Running Shoes</h1>
                            </div>
                        </div>
                        <div
                            className="showcase--item__small_bottom relative bg-cover bg-center bg-no-repeat rounded-lg transition hover:shadow-2xl hover:opacity-90"
                            onClick={() => props.router.push(`/Detail/${10}`)}
                        >
                            <div className="showcase--item__overlay absolute flex h-full w-full items-end p-8 rounded-lg cursor-pointer">
                                <h1 className="text-white font-serif font-regular text-4xl text-center">Nike Minimal Shoes</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{Minimal_style}</style>
        </>
    )
}