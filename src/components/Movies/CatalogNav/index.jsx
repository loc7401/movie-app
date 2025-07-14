import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import ListMovies from '../ListMovies';

// Import Swiper styles
import 'swiper/css';
const CatalogNav = () => {
    // const movieKind = [
    //     { type: 'Hành Động', slug: 'hanh-dong' },
    //     { type: 'Tình Cảm', slug: 'tinh-cam' },
    //     { type: 'Hài Hước', slug: 'hai-huoc' },
    // ];
    const [typeMovie, setTypeMovie] = useState('');
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
            .then((res) =>
                setmovieKind(res.data).catch((err) => console.log(err))
            );
    }, []);

    console.log(movieKind);
    const handleChangTypeMovie = (el) => {
        setTypeMovie(el.slug);
        localStorage.setItem('slug', el.slug);
    };

    return (
        <>
            <div className="mr-auto ml-auto px-3 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
                <div className="mx-auto mt-5 flex items-center justify-between rounded-2xl bg-[#151f30] px-8 py-4">
                    {/* <nav className="flex space-x-6">
                        <a
                            href="#"
                            className="flex items-center text-sm font-medium text-[#e0e0e0] transition-colors duration-300 ease-in-out hover:text-[#2f80ed]"
                        >
                            Thể Loại
                            <ChevronDown className="ml-1" size={14} />
                        </a>
                        <a
                            href="#"
                            className="flex items-center text-sm font-medium text-[#e0e0e0] transition-colors duration-300 ease-in-out hover:text-[#2f80ed]"
                        >
                            Năm
                            <ChevronDown className="ml-1" size={14} />
                        </a>
                    </nav> */}
                    <div className="flex min-w-[300px] items-center justify-between rounded-3xl bg-[#131720] p-[6px]">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={6}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            loop={true}
                            grabCursor={true}
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
                                            className={`rounded-2xl ${typeMovie === elem.slug ? 'bg-[#151f30] text-[#2f80ed]' : 'text-[#e0e0e0]'} cursor-pointer p-3 text-sm font-medium transition-colors duration-200 ease-in-out`}
                                        >
                                            {elem.name}
                                        </button>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>

            <ListMovies typeMovie={typeMovie} />
        </>
    );
};

export default CatalogNav;
