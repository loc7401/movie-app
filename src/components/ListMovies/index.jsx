import axios from 'axios';
import { useEffect, useState } from 'react';
import { CirclePlay, Star, Bookmark } from 'lucide-react';

const ListMovie = () => {
    const [listMovie, setListMovie] = useState([]);

    useEffect(() => {
        axios
            .get(' https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3?page=1')
            .then((res) => setListMovie(res.data.items))
            .catch((err) => console.log(err));
    }, []);

    console.log(listMovie);

    return (
        <div className="mx-auto mt-6 grid max-w-[1200px] grid-cols-6 gap-8 pb-10">
            {listMovie.map((elem, index) => {
                return (
                    <div className="group cursor-pointer" key={index}>
                        <div className="relative aspect-[190/270] overflow-hidden rounded-2xl">
                            <img
                                className="hover:po h-full w-full object-cover transition-all duration-400 group-hover:blur-[3px]"
                                src={elem.thumb_url}
                            />
                            <CirclePlay
                                size={40}
                                color="white"
                                className="absolute top-1/2 left-1/2 z-[9] -translate-1/2 opacity-0 transition-all duration-400 group-hover:scale-[1.4] group-hover:opacity-100"
                            />
                            <div className="absolute top-8 left-1/2 z-[9] flex w-full -translate-1/2 justify-between px-4">
                                <span className="rounded-[10px] bg-[#151f30] p-2 opacity-0 transition-all duration-400 group-hover:scale-[1.1] group-hover:opacity-70">
                                    <Bookmark size={16} color="#2f80ed" />
                                </span>
                                <span className="flex items-center rounded-[10px] bg-[#151f30] px-3 py-[2px] text-white opacity-0 transition-all duration-400 group-hover:scale-[1.1] group-hover:opacity-70">
                                    <Star
                                        className="mr-1"
                                        size={14}
                                        color="#2f80ed"
                                    />
                                    {elem.tmdb.vote_average}
                                </span>
                            </div>
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100"></div>
                        </div>

                        <div className="mt-2">
                            <h3 className="truncate font-medium text-[#e0e0e0] transition-colors duration-300 group-hover:text-[#2f80ed]">
                                {elem.name}
                            </h3>
                            <div>
                                <span className="mr-4 text-sm text-[#e0e0e0]">
                                    {elem.quality}
                                </span>
                                <span className="mr-4 text-sm text-[#e0e0e0]">
                                    {elem.episode_current}
                                </span>
                                <span className="text-sm text-[#e0e0e0]">
                                    {elem.year}
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ListMovie;
