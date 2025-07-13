import axios from 'axios';
import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import { Star } from 'lucide-react';

const MovieDetail = () => {
    const [currentMovie, setCurrentMovie] = useState([]);

    const { slug } = useParams();

    useEffect(() => {
        axios
            .get(`https://phimapi.com/phim/${slug}`)
            .then((res) => setCurrentMovie(res.data))
            .catch((err) => console.log(err));
    }, [slug]);
    console.log(currentMovie);

    return (
        <>
            <Header />
            <div className="mx-auto mt-6 grid max-w-[1200px] grid-cols-[1fr_3fr] gap-6 pb-10">
                <div className="relative overflow-hidden rounded-lg">
                    <img
                        className="h-full object-cover"
                        src={currentMovie.movie?.poster_url}
                    />
                    <a className="absolute bottom-0 flex h-[40px] w-full items-center justify-center bg-[#DD003F] transition-all duration-400 hover:cursor-pointer hover:bg-[#c9302c]">
                        <span className="text-lg text-white">Xem phim</span>
                    </a>
                </div>
                <div>
                    <div>
                        <h3 className="text-2xl font-medium text-[#ff9658]">
                            {currentMovie.movie?.name}
                        </h3>
                        <span className="text-sm text-[#999]">
                            {`${currentMovie.movie?.origin_name} - ${currentMovie.movie?.year}`}
                        </span>
                    </div>
                    <div className="mt-4 grid grid-rows-5">
                        <div className="mb-2 flex text-[#e0e0e0]">
                            <span className="mr-4">Trạng thái:</span>
                            <p>{`${currentMovie.movie?.episode_current} ${currentMovie.movie?.lang}`}</p>
                        </div>
                        <div className="mb-2 flex text-[#e0e0e0]">
                            <span className="mr-4">Đạo diễn:</span>
                            <p>{` ${currentMovie.movie?.director[0]}`}</p>
                        </div>
                        <div className="mb-2 flex text-[#e0e0e0]">
                            <span className="mr-4">Thời lượng:</span>
                            <p>{` ${currentMovie.movie?.time}`}</p>
                        </div>
                        <div className="mb-2 flex text-[#e0e0e0]">
                            <span className="mr-4">Số tập:</span>
                            <p>{` ${currentMovie.movie?.episode_total}`}</p>
                        </div>
                        <div className="mb-2 flex text-[#e0e0e0]">
                            <span className="mr-4">Tình trạng:</span>
                            <p className="capitalize">{` ${currentMovie.movie?.status}`}</p>
                        </div>
                        <div className="mb-2 flex text-[#e0e0e0]">
                            <span className="mr-4">Ngôn ngữ:</span>
                            <p className="capitalize">{` ${currentMovie.movie?.lang}`}</p>
                        </div>
                        <div className="mb-2 flex text-[#e0e0e0]">
                            <span className="mr-4">Năm sản xuất:</span>
                            <p className="capitalize">{` ${currentMovie.movie?.year}`}</p>
                        </div>
                        <div className="mb-2 flex text-[#e0e0e0]">
                            <span className="mr-4">Quốc gia:</span>
                            <p className="capitalize">{` ${currentMovie.movie?.country[0].name}`}</p>
                        </div>
                        <div className="mb-2 flex text-[#e0e0e0]">
                            <span className="mr-4">Thể loại:</span>
                            {currentMovie?.movie?.category?.map(
                                (cate, index) => {
                                    return (
                                        <p
                                            className="mr-2 capitalize"
                                            key={index}
                                        >
                                            {cate.name}
                                            {index <
                                            currentMovie.movie.category.length -
                                                1
                                                ? ','
                                                : ''}
                                        </p>
                                    );
                                }
                            )}
                        </div>
                        <div className="mb-2 flex text-[#e0e0e0]">
                            <div>
                                <span className="mr-4">Diễn viên:</span>
                            </div>
                            <div>
                                {currentMovie.movie?.actor?.length == 1 ? (
                                    <p>Đang cập nhật</p>
                                ) : (
                                    currentMovie.movie?.actor?.map(
                                        (elem, index) => {
                                            return (
                                                <span
                                                    className="mr-2 capitalize"
                                                    key={index}
                                                >
                                                    {elem}
                                                    {index <
                                                    currentMovie.movie?.actor
                                                        ?.length -
                                                        1
                                                        ? ','
                                                        : ''}
                                                </span>
                                            );
                                        }
                                    )
                                )}
                            </div>
                        </div>
                        <div className="mb-2 flex text-[#e0e0e0]">
                            <span className="mr-4">Đánh giá:</span>
                            <p className="flex items-center capitalize">
                                {currentMovie.movie?.tmdb?.vote_average == 0 ? (
                                    'Chưa có đánh giá'
                                ) : (
                                    <>
                                        {currentMovie.movie?.tmdb?.vote_average}
                                        <Star
                                            className="ml-1"
                                            size={16}
                                            color="#2f80ed"
                                        />
                                    </>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieDetail;
