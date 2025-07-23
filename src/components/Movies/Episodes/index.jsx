import { useEffect, useState } from 'react';

const Episodes = ({ currentMovie }) => {
    const [currentEpisode1, setcurrentEpisode1] = useState();
    const [currentEpisode2, setcurrentEpisode2] = useState();

    const listEpisode1 = currentMovie.episodes[0]?.server_data || null;
    const listEpisode2 = currentMovie.episodes[1]?.server_data || null;

    return (
        <div className="flex flex-col">
            <div className="mb-6 grid grid-cols-1 gap-3 lg:grid-cols-[1fr_8fr]">
                <div className="mr-3 min-w-[165px]">
                    <span className="text-white">
                        {currentMovie.episodes[0]?.server_name}:
                    </span>
                </div>
                <div className="flex flex-wrap">
                    {listEpisode1?.map((episode, index) => {
                        return (
                            <a
                                href={episode?.link_embed}
                                key={index}
                                onClick={() => setcurrentEpisode1(index)}
                                target="_blank"
                                className={`mr-1 mb-1 flex h-[45px] w-[50px] cursor-pointer items-center justify-center rounded-md bg-[#3a3a3a] font-medium text-white hover:bg-[#c58560] ${currentEpisode1 == index && 'bg-[#c58560]'} `}
                            >
                                {index + 1}
                            </a>
                        );
                    })}
                </div>
            </div>

            {listEpisode2 && (
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_8fr]">
                    <div className="mr-3 min-w-[165px]">
                        <span className="text-white">
                            {currentMovie.episodes[1]?.server_name}:
                        </span>
                    </div>
                    <div className="flex flex-wrap">
                        {listEpisode2?.map((episode, index) => {
                            return (
                                <a
                                    href={episode?.link_embed}
                                    key={index}
                                    onClick={() => setcurrentEpisode2(index)}
                                    target="_blank"
                                    className={`mr-1 mb-1 flex h-[45px] w-[50px] cursor-pointer items-center justify-center rounded-md bg-[#3a3a3a] font-medium text-white hover:bg-[#c58560] ${currentEpisode2 == index && 'bg-[#c58560]'} `}
                                >
                                    {index + 1}
                                </a>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Episodes;
