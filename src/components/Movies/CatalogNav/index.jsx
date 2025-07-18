import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import ListMovies from '../ListMovies';

const ListMovies1 = () => {
    const movieKind = [
        { type: 'Hành Động', slug: 'hanh-dong' },
        { type: 'Tình Cảm', slug: 'tinh-cam' },
        { type: 'Hài Hước', slug: 'hai-huoc' },
    ];
    const [currentBtnIndex, setCurrenBtnIndex] = useState(0);
    const [typeMovie, setTypeMovie] = useState('');

    const handleChangTypeMovie = (el, idx) => {
        setCurrenBtnIndex(idx);
        setTypeMovie(el.slug);
    };

    return (
        <>
            <div className="mx-auto mt-5 flex max-w-[1200px] items-center justify-between rounded-2xl bg-[#151f30] px-8 py-4">
                <nav className="flex space-x-6">
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
                </nav>

                <div className="flex min-w-[251px] items-center justify-between rounded-3xl bg-[#131720] p-[6px]">
                    {movieKind.map((elem, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() =>
                                    handleChangTypeMovie(elem, index)
                                }
                                className={`rounded-2xl ${currentBtnIndex === index ? 'bg-[#151f30] text-[#2f80ed]' : 'text-[#e0e0e0]'} cursor-pointer p-2 text-sm font-medium transition-colors duration-200 ease-in-out`}
                            >
                                {elem.type}
                            </button>
                        );
                    })}
                </div>
            </div>

            <ListMovies typeMovie={typeMovie} />
        </>
    );
};

export default ListMovies1;
