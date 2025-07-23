import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import ListMovies from '../ListMovies';
import Container from '../../ElementCustom/Container';

// Import Swiper styles
import 'swiper/css';
const CatalogNav = () => {
    // const movieKind = [
    //     { type: 'Hành Động', slug: 'hanh-dong' },
    //     { type: 'Tình Cảm', slug: 'tinh-cam' },
    //     { type: 'Hài Hước', slug: 'hai-huoc' },
    // ];
    const [typeMovie, setTypeMovie] = useState('hanh-dong');
    const [movieKind, setmovieKind] = useState([]);

    useEffect(() => {
        const storedSlug = localStorage.getItem('slug');
        if (storedSlug) {
            setTypeMovie(storedSlug);
        } else {
            setTypeMovie('hanh-dong');
        }
    }, []);

    useEffect(() => {
        axios
            .get(`https://phimapi.com/the-loai`)
            .then((res) => setmovieKind(res.data))
            .catch((err) => console.log(err));
    }, []);

    console.log(movieKind);
    const handleChangTypeMovie = (el) => {
        setTypeMovie(el.slug);
        localStorage.setItem('slug', el.slug);
    };

    return (
        <>
            <Container>
                <div className="mx-auto mt-5 flex flex-col justify-between rounded-2xl bg-[#151f30] px-8 py-4 lg:flex-row lg:items-center">
                    <nav className="mb-4 flex min-w-[190px] space-x-6 lg:mb-0">
                        <a
                            href="#"
                            className="flex items-center text-sm font-medium text-[#e0e0e0] transition-colors duration-300 ease-in-out hover:text-[#2f80ed]"
                        >
                            Năm
                            <ChevronDown className="ml-1" size={14} />
                        </a>
                        <a
                            onClick={() => setTypeMovie('all')}
                            href="#"
                            className={`${typeMovie === 'all' ? 'font-bold text-[#2f80ed]' : 'font-medium text-[#e0e0e0]'} flex items-center text-sm transition-colors duration-300 ease-in-out hover:text-[#2f80ed]`}
                        >
                            Tất cả
                        </a>
                    </nav>
                    <div className="flex min-w-[300px] items-center justify-between rounded-3xl bg-[#131720] p-5">
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={5}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            loop={false}
                            grabCursor={true}
                            breakpoints={{
                                1400: {
                                    slidesPerView: 9,
                                },
                                768: {
                                    slidesPerView: 6,
                                },
                                576: {
                                    slidesPerView: 4,
                                },
                                380: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="p-2"
                        >
                            {movieKind.map((elem, index) => {
                                return (
                                    <SwiperSlide>
                                        <button
                                            key={index}
                                            onClick={() =>
                                                handleChangTypeMovie(elem)
                                            }
                                            className={`w-full rounded-2xl py-2 ${typeMovie === elem.slug ? 'bg-[#151f30] text-[#2f80ed]' : 'text-[#e0e0e0]'} cursor-pointer text-sm font-medium transition-colors duration-200 ease-in-out`}
                                        >
                                            {elem.name}
                                        </button>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </Container>

            <ListMovies typeMovie={typeMovie} />
        </>
    );
};

export default CatalogNav;
