// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
// Import Swiper styles
import 'swiper/css';

const SwipperSlides = () => {
    const [listMovie, setListMovie] = useState([]);

    useEffect(() => {
        axios
            .get('https://phimapi.com/danh-sach/phim-moi-cap-nhat-v2?page=2')
            .then((res) => setListMovie(res.data.items))
            .catch((err) => console.log(err));
    }, []);
    // console.log(listMovie);
    return (
        <div className="mt-5 bg-[#131720] pb-8">
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                grabCursor={true}
                slideToClickedSlide={true}
                style={{ paddingLeft: '15%', paddingRight: '15%' }}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    480: {
                        slidesPerView: 1.5,
                    },
                }}
            >
                {listMovie.map((movie, index) => {
                    return (
                        <SwiperSlide
                            key={index}
                            className="overflow-hidden rounded-2xl"
                        >
                            <div className="group relative aspect-[410/330] w-full overflow-hidden rounded-2xl">
                                <img
                                    src={movie.thumb_url}
                                    alt="Movie Poster"
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/80 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100"></div>
                                <div className="absolute right-8 bottom-5 left-8">
                                    <h3 className="mb-2 text-2xl font-medium text-white transition-colors duration-300 group-hover:text-[#2f80ed]">
                                        {movie.name}
                                    </h3>
                                    <div>
                                        <span className="mr-3 text-[#e0e0e0]">
                                            {movie.origin_name}
                                        </span>
                                        <span className="mr-3 text-[#e0e0e0]">
                                            {movie.episode_current}
                                        </span>
                                        <span className="text-[#e0e0e0]">
                                            {movie.year}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default SwipperSlides;
